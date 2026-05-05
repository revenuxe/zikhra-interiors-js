import serviceHome from "@/assets/service-home.webp";
import serviceKitchen from "@/assets/service-kitchen.webp";
import serviceWardrobe from "@/assets/service-wardrobe.webp";
import serviceRenovation from "@/assets/service-renovation.webp";
import serviceTvunit from "@/assets/service-tvunit.webp";
import servicePooja from "@/assets/service-pooja.webp";
import serviceCeiling from "@/assets/service-ceiling.webp";
import serviceBathroom from "@/assets/service-bathroom.webp";
import serviceLivingroom from "@/assets/service-livingroom.webp";
import serviceBedroom from "@/assets/service-bedroom.webp";
import serviceCommercial from "@/assets/service-commercial.webp";

export type ServiceItem = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: string;
};

export const services: ServiceItem[] = [
  {
    id: "full-home",
    image: serviceHome.src,
    title: "Full Home Interiors",
    subtitle: "Complete Premium Home Design in Hyderabad",
    description:
      "From conceptualization to execution, we design every corner of your home with precision and elegance. Our full home interior service covers living rooms, bedrooms, kitchens, bathrooms, and all transitional spaces — creating a cohesive premium experience throughout your Hyderabad home.",
    features: [
      "Complete space planning & 3D visualization",
      "Custom furniture design & procurement",
      "Premium flooring — marble, hardwood, vitrified",
      "False ceiling with ambient cove lighting",
      "Wall paneling, textures & accent walls",
      "Smart home integration ready",
    ],
    price: "2 BHK starts from Rs. 3.5 Lakhs",
  },
  {
    id: "modular-kitchen",
    image: serviceKitchen.src,
    title: "Modular Kitchen",
    subtitle: "Premium Kitchen Design Across Hyderabad",
    description:
      "Our modular kitchens combine European aesthetics with Indian functionality. Every surface, handle, and fixture is selected with intent — creating spaces where cooking feels polished, efficient, and personal.",
    features: [
      "Premium Italian marble & quartz countertops",
      "Soft-close German Hettich/Blum hardware",
      "Integrated LED ambient & task lighting",
      "Custom brass & gold accent fixtures",
      "Space-optimized modular island layouts",
      "Waterproof & termite-proof BWR plywood",
    ],
    price: "Starts from Rs. 1.5 Lakhs",
  },
  {
    id: "wardrobes",
    image: serviceWardrobe.src,
    title: "Wardrobes & Walk-in Closets",
    subtitle: "Custom Storage Solutions in Hyderabad",
    description:
      "Walk-in closets and built-in wardrobes that turn your everyday routine into a boutique experience. Every shelf, drawer, and hanger is designed with purpose.",
    features: [
      "Glass-front display sections with LED strips",
      "Soft-close drawer & sliding systems",
      "Custom shoe racks & accessory organizers",
      "Pull-out trouser & saree hangers",
      "Anti-dust sealed compartments",
      "Premium lacquer & veneer finishes",
    ],
    price: "Starts from Rs. 90,000",
  },
  {
    id: "living-room",
    image: serviceLivingroom.src,
    title: "Living Room Design",
    subtitle: "Elegant Living Spaces in Hyderabad",
    description:
      "Create a stunning first impression with our bespoke living room designs. From statement walls to premium seating arrangements, we craft spaces that reflect your personality and lifestyle.",
    features: [
      "Custom sofa & seating design",
      "Statement accent walls & textures",
      "Premium coffee tables & consoles",
      "Ambient & decorative lighting design",
      "Curtain & blind coordination",
      "Art curation & styling",
    ],
    price: "Starts from Rs. 1.2 Lakhs",
  },
  {
    id: "bedroom",
    image: serviceBedroom.src,
    title: "Bedroom Interiors",
    subtitle: "Premium Bedroom Design in Hyderabad",
    description:
      "Your bedroom should be a sanctuary. We design bedrooms that promote relaxation and reflect your personal style — from custom headboards to ambient lighting that sets the perfect mood.",
    features: [
      "Custom upholstered headboard designs",
      "Walk-in wardrobe integration",
      "Ambient cove & bedside lighting",
      "Premium bedside tables & dressers",
      "Blackout curtain solutions",
      "En-suite bathroom coordination",
    ],
    price: "Starts from Rs. 1.5 Lakhs",
  },
  {
    id: "bathroom",
    image: serviceBathroom.src,
    title: "Bathroom Interiors",
    subtitle: "Premium Bathroom Design in Hyderabad",
    description:
      "Transform your bathroom into a spa-like retreat. From premium fixtures to marble finishes, we create bathrooms that are both functional and refined.",
    features: [
      "Premium marble & tile selection",
      "Rain shower & premium fixtures",
      "LED mirror & vanity lighting",
      "Custom vanity & storage solutions",
      "Heated towel rails & accessories",
      "Waterproofing & drainage solutions",
    ],
    price: "Starts from Rs. 1.25 Lakhs",
  },
  {
    id: "false-ceiling",
    image: serviceCeiling.src,
    title: "False Ceiling & Lighting",
    subtitle: "Designer Ceilings Across Hyderabad",
    description:
      "Elevate your interiors with stunning false ceiling designs that add depth, dimension, and drama. Combined with expert lighting design, we create atmospheres that transform spaces.",
    features: [
      "Multi-layered gypsum ceiling designs",
      "Cove lighting with LED strips",
      "Chandelier & pendant integration",
      "Recessed downlight planning",
      "POP & wooden ceiling options",
      "Smart lighting automation",
    ],
    price: "Starts from Rs. 75,000",
  },
  {
    id: "tv-unit",
    image: serviceTvunit.src,
    title: "TV Unit & Entertainment",
    subtitle: "Custom Entertainment Units in Hyderabad",
    description:
      "Statement TV units that serve as the focal point of your living room. From floating designs to full wall units with integrated storage and lighting.",
    features: [
      "Wall-mounted & floating designs",
      "Integrated LED backlighting",
      "Hidden cable management",
      "Display shelves & storage",
      "Premium wood & lacquer finishes",
      "Sound system integration",
    ],
    price: "Starts from Rs. 80,000",
  },
  {
    id: "pooja-room",
    image: servicePooja.src,
    title: "Pooja Room Design",
    subtitle: "Sacred Space Design in Hyderabad",
    description:
      "Create a serene and beautiful pooja room that blends tradition with modern aesthetics. From marble temples to intricately carved wooden mandirs, we design spaces that inspire devotion.",
    features: [
      "Custom marble & wooden temple designs",
      "Brass & gold-finish embellishments",
      "LED backlit deity panels",
      "Storage for pooja essentials",
      "Bell & diya holder integration",
      "Vastu-compliant layouts",
    ],
    price: "Starts from Rs. 75,000",
  },
  {
    id: "renovation",
    image: serviceRenovation.src,
    title: "Home Renovation",
    subtitle: "Transform Your Existing Hyderabad Home",
    description:
      "Breathe new life into your existing space. Our renovation service covers everything from structural changes to cosmetic upgrades — transforming outdated interiors into modern, polished living spaces.",
    features: [
      "Complete demolition & reconstruction",
      "Electrical & plumbing rework",
      "Flooring replacement & upgrades",
      "Bathroom & kitchen remodeling",
      "Painting, textures & wall treatments",
      "Project managed end-to-end",
    ],
    price: "Custom estimate after site review",
  },
  {
    id: "commercial",
    image: serviceCommercial.src,
    title: "Commercial & Office Interiors",
    subtitle: "Professional Workspace Design in Hyderabad",
    description:
      "From startups to corporate offices, retail stores to restaurants — we design commercial spaces that impress clients and boost productivity.",
    features: [
      "Office layout & partition planning",
      "Reception & lobby design",
      "Conference room & cabin interiors",
      "Retail store & showroom design",
      "Restaurant & café interiors",
      "Brand-aligned design language",
    ],
    price: "Custom estimate after site review",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.id === slug) ?? null;
}
