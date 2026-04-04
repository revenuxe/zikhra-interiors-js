import project2bhk from "@/assets/project-2bhk.webp";
import projectVilla from "@/assets/project-villa.webp";
import project3bhk from "@/assets/project-3bhk.webp";
import kitchenImg from "@/assets/kitchen.webp";
import bedroomImg from "@/assets/bedroom.webp";
import livingroomImg from "@/assets/livingroom.webp";

/** Bangalore funnel copy — real neighbourhoods; avoids Hyderabad micro-areas showing on /bangalore/projects. */
export type ProjectBangaloreCopy = {
  location: string;
  description: string;
  highlights: string[];
};

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
  bangalore?: ProjectBangaloreCopy;
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
    bangalore: {
      location: "Whitefield, Bangalore",
      description:
        "A complete transformation of a 2BHK apartment in Whitefield, designed with modern luxury aesthetics. Every room was reimagined with premium materials, smart storage, and ambient lighting to maximise the compact footprint typical of East Bangalore towers.",
      highlights: [
        "Space-optimised layouts for IT corridor homes",
        "Premium laminate and veneer finishes",
        "Integrated storage and study corners",
        "Layered cove and accent lighting",
      ],
    },
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
    bangalore: {
      location: "Koramangala, Bangalore",
      description:
        "A grand luxury villa fit-out in Koramangala — Italian marble flooring, custom chandeliers, and bespoke furniture tailored to South Bangalore’s design-conscious homeowners. Indoor–outdoor flow and landscape touches complete the experience.",
      highlights: [
        "Italian marble and large-format stone",
        "Bespoke furniture and joinery",
        "Home automation and lighting scenes",
        "Garden, patio, and pool-deck coordination",
      ],
    },
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
    bangalore: {
      location: "Indiranagar, Bangalore",
      description:
        "A stunning penthouse-style residence in Indiranagar with skyline views, natural stone accents, and interiors that frame glazing and terrace living — designed for Bangalore’s elevated urban homes.",
      highlights: [
        "View-oriented furniture and lighting",
        "Natural stone and warm metal accents",
        "Terrace lounge and outdoor connectivity",
        "Open kitchen and island entertaining",
      ],
    },
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
    bangalore: {
      location: "HSR Layout, Bangalore",
      description:
        "A premium modular kitchen in HSR Layout — quartz counters, soft-close hardware, integrated chimney and hob, and pull-out pantry systems tuned for compact city apartments and busy weeknight cooking.",
      highlights: ["Quartz worktops", "Premium soft-close hardware", "Integrated chimney & hob", "Tall units and pantry pull-outs"],
    },
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
    bangalore: {
      location: "Hebbal, Bangalore",
      description:
        "A luxurious master suite in a Hebbal high-rise — custom headboard, walk-in wardrobe with integrated lighting, and quiet wall panelling that suits North Bangalore’s contemporary towers.",
      highlights: ["Custom bed wall and headboard", "Walk-in wardrobe with lighting", "Mood lighting layers", "Premium veneer and fabric panels"],
    },
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
    bangalore: {
      location: "Bellandur, Bangalore",
      description:
        "A dramatic living–dining transformation in Bellandur — statement TV wall, layered lighting, and furniture planned for ORR-side apartments and family entertaining in Outer Ring Road communities.",
      highlights: ["Feature TV and display wall", "Designer sofa and dining layout", "Cove, accent, and task lighting", "Smart-home–ready cabling"],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
