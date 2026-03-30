import project2bhk from "@/assets/project-2bhk.webp";
import projectVilla from "@/assets/project-villa.webp";
import project3bhk from "@/assets/project-3bhk.webp";
import kitchenImg from "@/assets/kitchen.webp";
import bedroomImg from "@/assets/bedroom.webp";
import livingroomImg from "@/assets/livingroom.webp";

export type ProjectItem = {
  slug: string;
  title: string;
  location: string;
  budget: string;
  duration: string;
  heroImage: string;
  description: string;
  highlights: string[];
  scope: string[];
};

export const projects: ProjectItem[] = [
  {
    slug: "2bhk-apartment",
    title: "2BHK Apartment",
    location: "Gachibowli, Hyderabad",
    budget: "₹12-18 Lakhs",
    duration: "45 Days",
    heroImage: project2bhk.src,
    description:
      "A complete transformation of a 2BHK apartment in Gachibowli, designed with modern luxury aesthetics. Every room was reimagined with premium materials, smart storage, and ambient lighting to maximize the compact space.",
    highlights: ["Space-optimized design", "Premium laminate finishes", "Smart storage solutions", "Ambient cove lighting"],
    scope: ["Living Room", "Master Bedroom", "Guest Bedroom", "Modular Kitchen", "2 Bathrooms", "Balcony"],
  },
  {
    slug: "luxury-villa",
    title: "Luxury Villa",
    location: "Jubilee Hills, Hyderabad",
    budget: "₹45-60 Lakhs",
    duration: "90 Days",
    heroImage: projectVilla.src,
    description:
      "A grand luxury villa transformation in the heart of Jubilee Hills. Italian marble flooring, custom chandeliers, and bespoke furniture pieces create an atmosphere of unparalleled opulence.",
    highlights: ["Italian marble throughout", "Custom designer furniture", "Home automation integrated", "Landscape design included"],
    scope: ["Grand Living Room", "4 Bedrooms", "Gourmet Kitchen", "Home Theatre", "5 Bathrooms", "Garden & Patio"],
  },
  {
    slug: "3bhk-penthouse",
    title: "3BHK Penthouse",
    location: "Banjara Hills, Hyderabad",
    budget: "₹25-35 Lakhs",
    duration: "60 Days",
    heroImage: project3bhk.src,
    description:
      "A stunning penthouse project in Banjara Hills featuring panoramic city views complemented by interior design that brings the outdoors in.",
    highlights: ["Panoramic view optimization", "Natural stone accents", "Floor-to-ceiling glazing", "Terrace lounge design"],
    scope: ["Open Living & Dining", "3 Bedrooms", "Island Kitchen", "Study Room", "3 Bathrooms", "Terrace"],
  },
  {
    slug: "modular-kitchen-project",
    title: "Modular Kitchen",
    location: "Kondapur, Hyderabad",
    budget: "₹8-12 Lakhs",
    duration: "30 Days",
    heroImage: kitchenImg.src,
    description:
      "A premium modular kitchen transformation in Kondapur featuring marble countertops, gold hardware accents, and state-of-the-art fittings.",
    highlights: ["Quartz countertops", "German Hettich hardware", "Integrated chimney & hob", "Pull-out pantry system"],
    scope: ["L-shaped Kitchen Layout", "Breakfast Counter", "Tall Unit", "Pantry Pull-outs", "Under-cabinet Lighting"],
  },
  {
    slug: "master-bedroom",
    title: "Master Bedroom Suite",
    location: "HITEC City, Hyderabad",
    budget: "₹6-10 Lakhs",
    duration: "25 Days",
    heroImage: bedroomImg.src,
    description:
      "A luxurious master bedroom suite designed as a personal sanctuary with custom headboard, ambient lighting, and walk-in wardrobe.",
    highlights: ["Custom king-size bed", "Walk-in wardrobe", "Ambient mood lighting", "Premium wall paneling"],
    scope: ["Bedroom Design", "Walk-in Closet", "Dressing Area", "Reading Corner", "En-suite Bathroom"],
  },
  {
    slug: "living-room-makeover",
    title: "Living Room Makeover",
    location: "Madhapur, Hyderabad",
    budget: "₹10-15 Lakhs",
    duration: "35 Days",
    heroImage: livingroomImg.src,
    description:
      "A dramatic living room transformation that turned a plain space into a designer showpiece with statement furniture and layered lighting.",
    highlights: ["Statement accent wall", "Designer furniture", "Layered lighting design", "Smart home ready"],
    scope: ["Living Area", "Dining Space", "TV Unit", "Accent Wall", "Foyer Design"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
