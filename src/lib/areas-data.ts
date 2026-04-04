import { hyderabadAreasExtended } from "@/lib/hyderabad-areas-extended";

export type AreaBasePath = "/area" | "/bangalore";

export type AreaItem = {
  name: string;
  slug: string;
  tagline: string;
  city: string;
  basePath: AreaBasePath;
  /** Primary on-page copy for local SEO (unique per neighbourhood). */
  description: string;
  /** Optional FAQs rendered on-page and in FAQPage JSON-LD. */
  faqs?: { q: string; a: string }[];
};

export const areas: AreaItem[] = [
  {
    name: "Jubilee Hills",
    slug: "jubilee-hills",
    tagline: "Where Luxury Meets Legacy",
    city: "Hyderabad",
    basePath: "/area",
    description:
      "Jubilee Hills is Hyderabad’s signature luxury address — and Zikhra designs homes here with the same level of refinement. From statement living rooms to bespoke modular kitchens and walk-in wardrobes, we deliver turnkey interiors with transparent pricing and designer-led execution.",
    faqs: [
      {
        q: "Do you design full villas in Jubilee Hills?",
        a: "Yes. Zikhra handles end-to-end luxury interiors for villas and large apartments in Jubilee Hills, including civil coordination, custom furniture, and lighting design.",
      },
      {
        q: "How long does a typical Jubilee Hills home interior take?",
        a: "Timelines depend on scope; most full-home projects are planned in clearly defined milestones so you always know what happens next.",
      },
    ],
  },
  {
    name: "Banjara Hills",
    slug: "banjara-hills",
    tagline: "Elegant Living Redefined",
    city: "Hyderabad",
    basePath: "/area",
    description:
      "Banjara Hills clients expect timeless elegance and flawless finishing. Zikhra brings premium materials, meticulous detailing, and a calm project process — ideal for high-end apartments and family homes that need both beauty and everyday practicality.",
    faqs: [
      {
        q: "Can you work with my architect or builder in Banjara Hills?",
        a: "Absolutely. We regularly collaborate with architects and site teams to align interior design with structure, services, and handover schedules.",
      },
    ],
  },
  {
    name: "Gachibowli",
    slug: "gachibowli",
    tagline: "Modern Homes, Smart Design",
    city: "Hyderabad",
    basePath: "/area",
    description:
      "Gachibowli’s fast-paced lifestyle calls for smart space planning and modern luxury. Zikhra specialises in optimising apartments and premium residences with modular kitchens, efficient storage, and lighting that makes compact layouts feel expansive.",
  },
  {
    name: "Kondapur",
    slug: "kondapur",
    tagline: "Contemporary Comfort",
    city: "Hyderabad",
    basePath: "/area",
    description:
      "In Kondapur, we design contemporary homes that feel warm and lived-in — not generic. Expect cohesive palettes, custom wardrobes, and turnkey execution tailored to gated communities and new launches across the micro-market.",
  },
  {
    name: "HITEC City",
    slug: "hitec-city",
    tagline: "Tech-Forward Interiors",
    city: "Hyderabad",
    basePath: "/area",
    description:
      "HITEC City homes often need efficiency without compromising luxury. Zikhra blends clean modern lines, premium finishes, and practical layouts for busy professionals who want a polished home that is easy to maintain.",
  },
  {
    name: "Madhapur",
    slug: "madhapur",
    tagline: "Stylish Urban Living",
    city: "Hyderabad",
    basePath: "/area",
    description:
      "Madhapur’s urban energy inspires bold yet refined interiors. We focus on statement living zones, optimised bedrooms, and modular kitchens that elevate everyday city living — delivered with clear milestones and transparent costing.",
  },
  {
    name: "Narsingi",
    slug: "narsingi",
    tagline: "Villa & Apartment Interiors",
    city: "Hyderabad",
    basePath: "/area",
    description:
      "Narsingi’s mix of villas and premium apartments needs scalable luxury. Zikhra supports both compact homes and larger formats with customised design, 3D visualisation, and end-to-end execution aligned to possession timelines.",
  },
  {
    name: "Kokapet",
    slug: "kokapet",
    tagline: "Luxury Villa Interiors",
    city: "Hyderabad",
    basePath: "/area",
    description:
      "Kokapet is synonymous with expansive villas and high-end specifications. Zikhra delivers grand living experiences — from double-height spaces and premium staircases to bespoke furniture and layered lighting for statement homes.",
  },
  {
    name: "Financial District",
    slug: "financial-district",
    tagline: "High-End Modern Homes",
    city: "Hyderabad",
    basePath: "/area",
    description:
      "The Financial District attracts buyers who value sleek, modern luxury. Our interiors emphasise clean geometry, rich textures, and intelligent storage — perfect for premium towers and large-format apartments in the corridor.",
  },
  {
    name: "Tellapur",
    slug: "tellapur",
    tagline: "Premium Gated Community",
    city: "Hyderabad",
    basePath: "/area",
    description:
      "Tellapur’s gated communities deserve interiors that match the lifestyle promise. Zikhra designs cohesive full-home packages — living, kitchen, bedrooms, and wardrobes — with a process built for new homeowners who want clarity and quality.",
  },
  ...hyderabadAreasExtended,
];

export function getAreaBySlug(slug: string) {
  return areas.find((a) => a.slug === slug) ?? null;
}
