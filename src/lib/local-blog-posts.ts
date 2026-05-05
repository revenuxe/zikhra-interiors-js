import type { BlogListItem } from "@/views/marketing/BlogListView";
import type { BlogPost } from "@/views/marketing/BlogPostView";

type LocalPostInput = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  sections: { title?: string; body: string }[];
};

function block(text: string, style = "normal") {
  return {
    _type: "block",
    _key: text.slice(0, 24).replace(/[^a-z0-9]/gi, "-").toLowerCase(),
    style,
    markDefs: [],
    children: [{ _type: "span", _key: "span", text, marks: [] }],
  };
}

function toPost(input: LocalPostInput): BlogPost {
  return {
    _id: `local-${input.slug}`,
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt,
    publishedAt: input.publishedAt,
    authorName: "Zikhra Interiors",
    category: "Interior Pricing",
    body: input.sections.flatMap((section) => [
      ...(section.title ? [block(section.title, "h2")] : []),
      block(section.body),
    ]),
  };
}

export const localBlogPosts: BlogPost[] = [
  toPost({
    slug: "2bhk-interior-design-cost-in-hyderabad-2026",
    title: "2 BHK Interior Design Cost in Hyderabad 2026",
    excerpt:
      "A practical 2026 guide to 2 BHK interior design cost in Hyderabad, including practical, premium, and signature scope planning.",
    publishedAt: "2026-05-05",
    sections: [
      {
        title: "Quick Cost Range",
        body:
          "For Hyderabad homeowners, Zikhra prepares a room-wise estimate after reviewing the floor plan, storage volume, finishes, lighting, and civil scope.",
      },
      {
        title: "What Changes the Price",
        body:
          "The largest cost drivers are kitchen size, wardrobe running feet, laminate or acrylic selection, false ceiling scope, electrical changes, wall panelling, appliance choices, and whether loose furniture or styling is included.",
      },
      {
        title: "How to Plan Smartly",
        body:
          "Start with the must-have rooms first: kitchen, wardrobes, living TV unit, and bedroom storage. Once the functional scope is clear, upgrade finishes and lighting where they visibly improve the home.",
      },
    ],
  }),
  toPost({
    slug: "2bhk-interior-design-cost-in-bangalore-2026",
    title: "2 BHK Interior Design Cost in Bangalore 2026",
    excerpt:
      "Compare 2 BHK interior design packages in Bangalore with room-wise planning guidance for practical, premium, and signature homes.",
    publishedAt: "2026-05-05",
    sections: [
      {
        title: "Bangalore Package Bands",
        body:
          "A 2 BHK interior in Bangalore can be planned in three scope bands: practical, premium, and signature. The final estimate depends on apartment rules, material choices, storage needs, and execution complexity.",
      },
      {
        title: "Neighbourhood Considerations",
        body:
          "Whitefield, Sarjapur Road, HSR Layout, and Koramangala projects often need society coordination, loading-window planning, and clear vendor scheduling. These do not always change design cost, but they can affect timelines and execution planning.",
      },
      {
        title: "Where to Spend More",
        body:
          "Spend more on hardware, kitchen durability, wardrobe internals, lighting, and moisture-resistant materials. Decorative upgrades can be phased, but core carpentry and hardware are difficult to redo later.",
      },
    ],
  }),
  toPost({
    slug: "3bhk-interior-design-cost-in-hyderabad",
    title: "3 BHK Interior Design Cost in Hyderabad",
    excerpt:
      "A homeowner-friendly guide to 3 BHK interior design cost in Hyderabad, with premium and signature scope planning.",
    publishedAt: "2026-05-05",
    sections: [
      {
        title: "Expected Starting Cost",
        body:
          "For a 3 BHK in Hyderabad, Zikhra prepares a detailed estimate after reviewing floor plan, premium finishes, wardrobe details, lighting, wall treatments, and larger living-dining execution.",
      },
      {
        title: "Why 3 BHK Costs More",
        body:
          "A 3 BHK has more wardrobe volume, more electrical and lighting decisions, a larger living-dining zone, and usually more family-specific storage. The cost rises with every extra running foot of cabinetry and each premium finish upgrade.",
      },
      {
        title: "Budgeting Advice",
        body:
          "Keep a base budget for kitchen, wardrobes, and living room. Then create a separate upgrade budget for false ceiling, decorative lighting, wall panels, curtains, loose furniture, and final styling.",
      },
    ],
  }),
  toPost({
    slug: "homelane-vs-livspace-vs-local-interior-designers",
    title: "HomeLane vs Livspace vs Local Interior Designers: What to Compare",
    excerpt:
      "A neutral comparison guide for homeowners comparing national interior brands with a design-led local studio like Zikhra.",
    publishedAt: "2026-05-05",
    sections: [
      {
        title: "Compare Scope, Not Just Price",
        body:
          "When comparing HomeLane, Livspace, DesignCafe, or a local interior designer, check what is included in the quote: plywood grade, hardware brand, finish type, wardrobe internals, false ceiling, lighting, electrical work, installation, warranty, and site supervision.",
      },
      {
        title: "National Brand vs Local Studio",
        body:
          "Large brands can offer process standardisation and package clarity. A focused local studio can offer more personal design attention, flexible material choices, and closer site coordination. The right choice depends on how custom your home needs to be.",
      },
      {
        title: "The Zikhra View",
        body:
          "Zikhra positions itself between catalogue efficiency and high-touch custom design: clear package bands, room-wise estimates, premium material options, and a designer-led process for Hyderabad and Bangalore homeowners.",
      },
    ],
  }),
];

export const localBlogListItems: BlogListItem[] = localBlogPosts.map((post) => ({
  _id: post._id,
  title: post.title,
  slug: post.slug,
  excerpt: post.excerpt,
  publishedAt: post.publishedAt,
  mainImageUrl: post.mainImageUrl,
  authorName: post.authorName,
}));

export function getLocalBlogPostBySlug(slug: string) {
  return localBlogPosts.find((post) => post.slug === slug) ?? null;
}
