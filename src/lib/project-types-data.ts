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
    tagline: "Smart Premium 2 BHK Interiors in Hyderabad",
    heroImage: project2bhk.src,
    metaTitle: "Best 2 BHK Interior Design in Hyderabad | Zikhra Interiors",
    metaDesc:
      "Transform your 2 BHK apartment with premium interior design in Hyderabad. Modular kitchens, wardrobes, smart storage, false ceilings & more with clear scope planning.",
    intro:
      "A 2 BHK apartment demands smart design that maximizes every square foot without compromising on finish quality. At Zikhra Interiors, we create practical, premium, and signature 2 BHK interiors across Hyderabad.",
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
    pricing: "Starts from Rs. 3.5 Lakhs",
    timeline: "30 - 45 Days",
    faqs: [
      {
        q: "What is the cost of 2 BHK interior design in Hyderabad?",
        a: "Zikhra prepares a room-wise estimate after reviewing your floor plan, storage needs, finishes, and site conditions.",
      },
    ],
  },
  {
    slug: "3bhk",
    title: "3 BHK Interior Design",
    tagline: "Spacious Premium 3 BHK Interiors in Hyderabad",
    heroImage: project3bhk.src,
    metaTitle: "Premium 3 BHK Interior Design Hyderabad | Zikhra Interiors",
    metaDesc:
      "Premium 3 BHK interior design in Hyderabad. Complete home interiors with modular kitchen, wardrobes, living room & more with clear scope planning.",
    intro:
      "A 3 BHK home is the perfect canvas for creating distinct zones - entertainment, relaxation, productivity, and family storage.",
    features: ["Separate living and family room design", "Premium modular kitchen with island option"],
    rooms: [{ name: "Grand Living Room", desc: "Statement sofa, accent wall, chandelier, and entertainment unit" }],
    pricing: "Starts from Rs. 5.5 Lakhs",
    timeline: "45 - 60 Days",
    faqs: [{ q: "What does a 3 BHK interior package include?", a: "Modular kitchen, wardrobes, false ceiling, TV unit and more." }],
  },
  {
    slug: "4bhk",
    title: "4 BHK Interior Design",
    tagline: "Grand 4 BHK Villa & Apartment Interiors in Hyderabad",
    heroImage: project4bhk.src,
    metaTitle: "Premium 4 BHK Interior Design Hyderabad | Zikhra Interiors",
    metaDesc:
      "Grand 4 BHK villa & apartment interior design in Hyderabad. Complete premium interiors with quality materials and supervised execution.",
    intro:
      "A 4 BHK home demands grandeur. Every space is crafted to feel refined, functional, and premium with strong material and lighting discipline.",
    features: ["Double-height living room design", "Premium marble flooring"],
    rooms: [{ name: "Grand Foyer", desc: "Impressive entrance with statement lighting" }],
    pricing: "Starts from Rs. 8.5 Lakhs",
    timeline: "60 - 90 Days",
    faqs: [{ q: "Do you design 4 BHK villas too?", a: "Yes - we handle apartments and villas across Hyderabad." }],
  },
  {
    slug: "penthouse",
    title: "Penthouse Interior Design",
    tagline: "Elevated Penthouse Interiors in Hyderabad",
    heroImage: projectPenthouse.src,
    metaTitle: "Premium Penthouse Interior Design Hyderabad | Zikhra Interiors",
    metaDesc:
      "Premium penthouse interior design in Hyderabad. Bespoke designs with panoramic views, premium materials & smart automation. Custom scope planning.",
    intro:
      "A penthouse is not just a home - it is a statement. We create elevated penthouse interiors with refined materials, spatial drama, and turnkey execution.",
    features: ["Panoramic living room with floor-to-ceiling glass", "Private terrace design"],
    rooms: [{ name: "Sky Lounge", desc: "Panoramic living space with designer furniture and city views" }],
    pricing: "Custom estimate after site review",
    timeline: "90 - 120 Days",
    faqs: [{ q: "Do you offer turnkey penthouse projects?", a: "Yes - end-to-end turnkey solutions." }],
  },
];

export function getProjectTypeBySlug(slug: string) {
  return projectTypes.find((p) => p.slug === slug) ?? null;
}
