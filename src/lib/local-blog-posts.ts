import type { BlogListItem } from "@/views/marketing/BlogListView";
import type { BlogPost } from "@/views/marketing/BlogPostView";

type LocalPostInput = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  sections: { title?: string; body: string }[];
  body?: BlogPost["body"];
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


function linkedBlock(
  key: string,
  text: string,
  links: Array<{ text: string; href: string }>,
  style = "normal",
) {
  const markDefs = links.map((link, index) => ({
    _key: `${key}-link-${index}`,
    _type: "link",
    href: link.href,
  }));
  const children: Array<{ _type: "span"; _key: string; text: string; marks: string[] }> = [];
  let cursor = 0;

  links.forEach((link, index) => {
    const nextIndex = text.indexOf(link.text, cursor);
    if (nextIndex < 0) return;
    if (nextIndex > cursor) {
      children.push({ _type: "span", _key: `${key}-span-${index}-before`, text: text.slice(cursor, nextIndex), marks: [] });
    }
    children.push({ _type: "span", _key: `${key}-span-${index}-link`, text: link.text, marks: [markDefs[index]._key] });
    cursor = nextIndex + link.text.length;
  });

  if (cursor < text.length) {
    children.push({ _type: "span", _key: `${key}-span-tail`, text: text.slice(cursor), marks: [] });
  }

  return {
    _type: "block",
    _key: key,
    style,
    markDefs,
    children: children.length ? children : [{ _type: "span", _key: "span", text, marks: [] }],
  };
}

function heading(key: string, text: string, style = "h2") {
  return { _type: "block", _key: key, style, markDefs: [], children: [{ _type: "span", _key: "span", text, marks: [] }] };
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
    body: input.body ?? input.sections.flatMap((section) => [
      ...(section.title ? [block(section.title, "h2")] : []),
      block(section.body),
    ]),
  };
}

export const localBlogPosts: BlogPost[] = [
  toPost({
    slug: "2bhk-interior-design-cost-in-bangalore-2026",
    title: "2 BHK Interior Design Cost in Bangalore 2026",
    excerpt:
      "A practical 2026 guide to 2 BHK interior design cost in Bangalore, including practical, premium, and signature scope planning.",
    publishedAt: "2026-05-05",
    sections: [
      {
        title: "Quick Cost Range",
        body:
          "For Bangalore homeowners, Zikhra prepares a room-wise estimate after reviewing the floor plan, storage volume, finishes, lighting, and civil scope.",
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
    slug: "3bhk-interior-design-cost-in-bangalore",
    title: "3 BHK Interior Design Cost in Bangalore",
    excerpt:
      "A homeowner-friendly guide to 3 BHK interior design cost in Bangalore, with premium and signature scope planning.",
    publishedAt: "2026-05-05",
    sections: [
      {
        title: "Expected Starting Cost",
        body:
          "For a 3 BHK in Bangalore, Zikhra prepares a detailed estimate after reviewing floor plan, premium finishes, wardrobe details, lighting, wall treatments, and larger living-dining execution.",
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
          "Zikhra positions itself between catalogue efficiency and high-touch custom design: clear package bands, room-wise estimates, premium material options, and a designer-led process for Bangalore and Bengaluru homeowners.",
      },
    ],
  }),
  toPost({
    slug: "top-home-interior-designer-near-me-yelahanka",
    title: "Top Home Interior Designer Near Me in Yelahanka | Zikhra",
    excerpt:
      "A simple, human guide to choosing a top home interior designer near you in Yelahanka, with room-wise ideas, costs, process, and Zikhra links.",
    publishedAt: "2026-07-01",
    sections: [],
    body: [
      linkedBlock(
        "yelahanka-intro",
        "If you searched for top home interior designer near me in Yelahanka, you are probably not looking for fancy words. You are looking for someone who can understand your home, your budget, your family, and the way you live every day. This guide explains how to choose the right designer in simple language, and how Zikhra plans premium home interiors across Bangalore with a calm, clear process.",
        [
          { text: "Zikhra plans premium home interiors across Bangalore", href: "/bangalore" },
        ],
      ),
      linkedBlock(
        "yelahanka-intro-two",
        "Yelahanka is not one kind of place. It has older homes, new apartments, gated communities, villa pockets, airport-road connectivity, and families who want comfort without daily maintenance headaches. A good interior designer near Yelahanka should know how to plan storage, kitchens, lighting, wardrobes, and finishes that work for real homes, not just showroom photos.",
        [],
      ),
      heading("yelahanka-meaning", "What does 'home interior designer near me in Yelahanka' really mean?"),
      linkedBlock(
        "yelahanka-meaning-body",
        "When people type near me, they usually want three things: quick access, local understanding, and dependable execution. Quick access means the design team can discuss your floor plan and visit the site when needed. Local understanding means they know North Bangalore homes, society rules, lift timings, material movement, and practical site constraints. Dependable execution means the same design promise should survive until handover.",
        [],
      ),
      linkedBlock(
        "yelahanka-nearby-context",
        "Yelahanka also connects naturally with Hebbal, Airport Road, Jakkur, Sahakar Nagar, Thanisandra, and new North Bangalore developments. If you are comparing studios around this belt, also look at Zikhra's Hebbal interior design page to understand how we think about North Bangalore high-rise and premium apartment homes.",
        [
          { text: "Zikhra's Hebbal interior design page", href: "/bangalore/hebbal" },
        ],
      ),
      heading("yelahanka-why", "Why Yelahanka homes need thoughtful interior planning"),
      linkedBlock(
        "yelahanka-why-body",
        "A home in Yelahanka often has to do many jobs. It may need a quiet bedroom for sleep, a kitchen that handles regular Indian cooking, a study corner for work or school, storage for seasonal items, and a living room that feels welcoming when guests arrive. The best interior design is not only about making things look rich. It is about making daily life easier.",
        [],
      ),
      linkedBlock(
        "yelahanka-why-list",
        "Think of your home like a school bag. If everything has a place, mornings become easier. If everything is thrown in randomly, even a beautiful bag becomes stressful. Interior design works the same way. Wardrobes, kitchen drawers, shoe storage, TV units, pooja spaces, and utility corners should all have a clear purpose.",
        [],
      ),
      heading("yelahanka-services", "Room-wise interior design services for Yelahanka homes"),
      linkedBlock(
        "yelahanka-services-body",
        "A full-home plan usually starts with the rooms that work hardest: kitchen, wardrobes, living room, bedrooms, and storage. Zikhra's Bangalore interior design services cover full home interiors, modular kitchens, wardrobes, renovation, false ceilings, lighting, TV units, pooja rooms, bathroom interiors, and premium upgrades.",
        [
          { text: "Zikhra's Bangalore interior design services", href: "/bangalore/services" },
        ],
      ),
      linkedBlock(
        "yelahanka-kitchen",
        "For the modular kitchen, the important questions are simple: Where will you chop? Where will hot vessels go? Where will groceries sit? Can two people work without bumping into each other? A good kitchen design answers these questions before choosing colours. You can explore Zikhra's kitchen portfolio for layout and finish ideas.",
        [
          { text: "Zikhra's kitchen portfolio", href: "/bangalore/portfolio/kitchen" },
        ],
      ),
      linkedBlock(
        "yelahanka-bedroom",
        "For bedrooms, the goal is calm. Wardrobes should open easily, side tables should be reachable, charging points should make sense, and lighting should help you relax. A premium bedroom is not always the one with the most decoration. It is the one that feels peaceful at night and useful in the morning. See Zikhra's bedroom interior ideas for inspiration.",
        [
          { text: "Zikhra's bedroom interior ideas", href: "/bangalore/portfolio/bedroom" },
        ],
      ),
      linkedBlock(
        "yelahanka-living",
        "For the living room, the TV wall, seating, lighting, and storage should work together. Many homes need space for guests, children, prayer, display, and hidden clutter. The design should look premium, but it should also forgive real life. Zikhra's living room portfolio shows how comfort and polish can stay together.",
        [
          { text: "Zikhra's living room portfolio", href: "/bangalore/portfolio/living-room" },
        ],
      ),
      heading("yelahanka-cost", "How much does interior design cost in Yelahanka?"),
      linkedBlock(
        "yelahanka-cost-body",
        "There is no honest single price for every home. Cost depends on carpet area, kitchen size, wardrobe running feet, plywood and finish choices, hardware, false ceiling, lighting, civil work, appliances, and how much custom detailing you want. A practical home may focus on must-have storage and durable finishes. A premium home may add better hardware, richer surfaces, layered lighting, wall panels, and custom furniture.",
        [],
      ),
      linkedBlock(
        "yelahanka-cost-link",
        "Before speaking to any designer, read Zikhra's interior design cost guide. It will help you understand package bands, room-wise budgeting, and what changes the estimate. If you have a 2 BHK, the 2 BHK interior cost guide is a useful starting point. If you have a larger family home, the 3 BHK interior cost guide will be closer to your planning needs.",
        [
          { text: "Zikhra's interior design cost guide", href: "/bangalore/interior-design-cost" },
          { text: "2 BHK interior cost guide", href: "/2bhk-interior-design-cost-bangalore" },
          { text: "3 BHK interior cost guide", href: "/3bhk-interior-design-cost-bangalore" },
        ],
      ),
      heading("yelahanka-how-to-choose", "How to choose the best interior designer near you"),
      linkedBlock(
        "yelahanka-choose-one",
        "First, check if the designer listens before suggesting. A good designer asks about your routines, cooking style, storage problems, family size, budget comfort, building rules, and timeline. If someone starts with finishes before understanding your life, the design may look good but fail in daily use.",
        [],
      ),
      linkedBlock(
        "yelahanka-choose-two",
        "Second, ask for scope clarity. What is included? What is excluded? Are electrical points included? What about lights, false ceiling, civil changes, painting, appliances, loose furniture, and styling? Many budget shocks happen because the first quote looks small but leaves out important work.",
        [],
      ),
      linkedBlock(
        "yelahanka-choose-three",
        "Third, compare process. A mature studio will explain design, estimate, material selection, production, site preparation, installation, quality checks, and handover. The process should feel boring in a good way: clear, documented, and predictable.",
        [],
      ),
      heading("yelahanka-zikhra-process", "Zikhra's simple process for Yelahanka homeowners"),
      linkedBlock(
        "yelahanka-process-body",
        "Zikhra keeps the journey simple. We begin with a conversation about your home and how you live. Then we review the floor plan, define room-wise scope, discuss material direction, prepare an estimate, and move into design development. Once details are locked, production and site execution are coordinated with supervision and quality checks.",
        [],
      ),
      linkedBlock(
        "yelahanka-process-steps",
        "The process can be understood like this: first we listen, then we plan, then we design, then we build, then we check. A 12-year-old can understand it, and that is the point. A homeowner should never feel lost inside their own project.",
        [],
      ),
      heading("yelahanka-2bhk-3bhk", "2 BHK, 3 BHK, villa, or apartment: what changes?"),
      linkedBlock(
        "yelahanka-2bhk",
        "A 2 BHK in Yelahanka usually needs smart storage and careful space planning. Every wall matters. The design should make the home feel open without wasting storage. If this sounds like your home, start with Zikhra's 2 BHK interior design page.",
        [
          { text: "Zikhra's 2 BHK interior design page", href: "/bangalore/project-type/2bhk" },
        ],
      ),
      linkedBlock(
        "yelahanka-3bhk",
        "A 3 BHK needs more coordination. The living room, kitchen, master bedroom, children's room, guest room, and storage zones should feel connected but not identical. Explore Zikhra's 3 BHK interior design page if you want a complete family-home plan.",
        [
          { text: "Zikhra's 3 BHK interior design page", href: "/bangalore/project-type/3bhk" },
        ],
      ),
      linkedBlock(
        "yelahanka-villa",
        "A villa or larger home needs proportion, lighting, and material discipline. Bigger spaces can look empty if they are under-designed, and crowded if they are over-designed. The right designer balances scale, comfort, and long-term maintenance.",
        [],
      ),
      heading("yelahanka-mistakes", "Common mistakes homeowners should avoid"),
      linkedBlock(
        "yelahanka-mistakes-body",
        "Do not choose only by the lowest quote. Do not approve designs without checking storage. Do not ignore hardware quality. Do not add too many colours in every room. Do not leave lighting for the end. Do not forget society rules, lift access, and site working hours. Most importantly, do not build a home only for photos. Build a home you can enjoy every day.",
        [],
      ),
      heading("yelahanka-faq", "FAQs: interior designer near me in Yelahanka"),
      heading("yelahanka-faq-one", "Who is the best home interior designer near me in Yelahanka?", "h3"),
      linkedBlock(
        "yelahanka-faq-one-body",
        "The best designer for you is the one who understands your lifestyle, explains cost clearly, manages execution, and designs for daily comfort. If you want a premium, structured process in Bangalore, you can book a free estimate with Zikhra.",
        [
          { text: "book a free estimate with Zikhra", href: "/contact" },
        ],
      ),
      heading("yelahanka-faq-two", "Can Zikhra design modular kitchens and wardrobes in Yelahanka?", "h3"),
      linkedBlock(
        "yelahanka-faq-two-body",
        "Yes. Zikhra plans modular kitchens, wardrobes, TV units, pooja spaces, bedrooms, living rooms, bathrooms, lighting, false ceilings, renovation scopes, and full-home interiors for Bangalore homeowners.",
        [],
      ),
      heading("yelahanka-faq-three", "Is a premium interior designer always expensive?", "h3"),
      linkedBlock(
        "yelahanka-faq-three-body",
        "Not always. Premium design means better planning, cleaner details, stronger materials, and a smoother experience. You can phase decorative upgrades while protecting the important parts: kitchen, wardrobes, hardware, storage, lighting, and site quality.",
        [],
      ),
      heading("yelahanka-faq-four", "How do I start my Yelahanka interior project?", "h3"),
      linkedBlock(
        "yelahanka-faq-four-body",
        "Start with your floor plan, a rough budget range, possession date, must-have rooms, and a few reference images. Then speak to Zikhra so the team can map your scope and suggest the right next step.",
        [
          { text: "speak to Zikhra", href: "/contact" },
        ],
      ),
      heading("yelahanka-final", "Final word: choose a designer who makes home feel easier"),
      linkedBlock(
        "yelahanka-final-body",
        "A good interior designer near Yelahanka should not confuse you. They should help you see your home clearly: what to build first, where to spend, where to save, and how every room will support your life. Zikhra designs premium interiors with that belief. Beautiful, yes. But also practical, calm, and made for the way your family actually lives.",
        [],
      ),
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
