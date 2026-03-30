import project2bhk from "@/assets/project-2bhk.webp";
import project3bhk from "@/assets/project-3bhk.webp";
import project4bhk from "@/assets/project-4bhk.webp";
import projectPenthouse from "@/assets/project-penthouse.webp";

export type ProjectTypeItem = {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  features: string[];
  rooms: { name: string; desc: string }[];
  pricing: string;
  timeline: string;
  faqs: { q: string; a: string }[];
};

export const projectTypes: ProjectTypeItem[] = [
  {
    slug: "2bhk",
    title: "2 BHK Interior Design",
    tagline: "Smart Luxury 2 BHK Interiors in Hyderabad",
    heroImage: project2bhk.src,
    metaTitle: "Best 2 BHK Interior Design in Hyderabad | Zikhra Interiors",
    metaDesc:
      "Transform your 2 BHK apartment with luxury interior design in Hyderabad. Modular kitchens, smart storage, false ceilings & more. Starting ₹4 Lakhs.",
    intro:
      "A 2 BHK apartment demands smart design that maximizes every square foot without compromising on luxury. At Zikhra Interiors, we specialize in creating stunning 2 BHK interiors across Hyderabad.",
    features: [
      "Space-optimized modular furniture",
      "Multi-functional living-dining layouts",
      "Compact modular kitchen with full functionality",
      "Built-in wardrobes with smart storage",
    ],
    rooms: [
      { name: "Living + Dining", desc: "Open-plan layout with designer sofa, dining table, and accent wall" },
      { name: "Master Bedroom", desc: "King-size bed, wardrobe, dresser, and ambient ceiling" },
    ],
    pricing: "₹4 — ₹8 Lakhs",
    timeline: "30 — 45 Days",
    faqs: [
      { q: "What is the cost of 2 BHK interior design in Hyderabad?", a: "A complete 2 BHK interior package at Zikhra starts from ₹4 Lakhs." },
    ],
  },
  {
    slug: "3bhk",
    title: "3 BHK Interior Design",
    tagline: "Spacious Luxury 3 BHK Interiors in Hyderabad",
    heroImage: project3bhk.src,
    metaTitle: "Premium 3 BHK Interior Design Hyderabad | Zikhra Interiors",
    metaDesc:
      "Luxury 3 BHK interior design in Hyderabad. Complete home interiors with modular kitchen, wardrobes, living room & more. Starting ₹7 Lakhs.",
    intro:
      "A 3 BHK home is the perfect canvas for creating distinct zones — entertainment, relaxation, and productivity.",
    features: ["Separate living and family room design", "Premium modular kitchen with island option"],
    rooms: [{ name: "Grand Living Room", desc: "Statement sofa, accent wall, chandelier, and entertainment unit" }],
    pricing: "₹7 — ₹15 Lakhs",
    timeline: "45 — 60 Days",
    faqs: [{ q: "What does a 3 BHK interior package include?", a: "Modular kitchen, wardrobes, false ceiling, TV unit and more." }],
  },
  {
    slug: "4bhk",
    title: "4 BHK Interior Design",
    tagline: "Grand 4 BHK Villa & Apartment Interiors in Hyderabad",
    heroImage: project4bhk.src,
    metaTitle: "Luxury 4 BHK Interior Design Hyderabad | Zikhra Interiors",
    metaDesc:
      "Grand 4 BHK villa & apartment interior design in Hyderabad. Complete luxury interiors with premium materials. Starting ₹12 Lakhs.",
    intro:
      "A 4 BHK home demands grandeur. Every space is crafted to exude luxury with premium materials and architectural detailing.",
    features: ["Double-height living room design", "Premium marble flooring"],
    rooms: [{ name: "Grand Foyer", desc: "Impressive entrance with statement lighting" }],
    pricing: "₹12 — ₹30 Lakhs",
    timeline: "60 — 90 Days",
    faqs: [{ q: "Do you design 4 BHK villas too?", a: "Yes — we handle apartments and villas across Hyderabad." }],
  },
  {
    slug: "penthouse",
    title: "Penthouse Interior Design",
    tagline: "Ultra-Luxury Penthouse Interiors in Hyderabad",
    heroImage: projectPenthouse.src,
    metaTitle: "Luxury Penthouse Interior Design Hyderabad | Zikhra Interiors",
    metaDesc:
      "Ultra-luxury penthouse interior design in Hyderabad. Bespoke designs with panoramic views, premium materials & smart automation. Custom pricing.",
    intro:
      "A penthouse is not just a home — it's a statement. We create ultra-luxury penthouse interiors that rival international standards.",
    features: ["Panoramic living room with floor-to-ceiling glass", "Private terrace design"],
    rooms: [{ name: "Sky Lounge", desc: "Panoramic living space with designer furniture and city views" }],
    pricing: "Custom — ₹25 Lakhs+",
    timeline: "90 — 120 Days",
    faqs: [{ q: "Do you offer turnkey penthouse projects?", a: "Yes — end-to-end turnkey solutions." }],
  },
];

export function getProjectTypeBySlug(slug: string) {
  return projectTypes.find((p) => p.slug === slug) ?? null;
}

