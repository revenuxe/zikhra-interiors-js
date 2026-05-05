import kitchenImg from "@/assets/kitchen.webp";
import kitchenImg2 from "@/assets/kitchen-2.webp";
import bedroomImg from "@/assets/bedroom.webp";
import bedroomImg2 from "@/assets/bedroom-2.webp";
import livingroomImg from "@/assets/livingroom.webp";
import livingroomImg2 from "@/assets/livingroom-2.webp";
import wardrobeImg from "@/assets/wardrobe.webp";
import wardrobeImg2 from "@/assets/wardrobe-2.webp";
import bathroomImg from "@/assets/portfolio-bathroom.webp";
import studyImg from "@/assets/portfolio-study.webp";

export type PortfolioItem = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  process: { step: string; desc: string }[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "kitchen",
    title: "Kitchen Design",
    tagline: "Premium Modular Kitchens in Hyderabad",
    description:
      "Our modular kitchens blend European functionality with Indian cooking needs. Every surface, handle, and fixture is placed with intent — creating premium kitchen experiences across Jubilee Hills, Gachibowli, and HITEC City.",
    heroImage: kitchenImg.src,
    galleryImages: [kitchenImg.src, kitchenImg2.src],
    features: [
      "Premium Italian marble countertops",
      "Soft-close German hardware",
      "Integrated LED ambient lighting",
      "Custom brass & gold fixtures",
      "Space-optimized modular layouts",
      "Waterproof & termite-proof materials",
    ],
    process: [
      { step: "Consultation", desc: "Understanding your cooking habits, family size, and style preferences" },
      { step: "3D Design", desc: "Photorealistic 3D renders so you see it before it's built" },
      { step: "Material Selection", desc: "Handpicked premium materials from our curated catalog" },
      { step: "Installation", desc: "Expert craftsmen deliver flawless execution" },
    ],
  },
  {
    slug: "bedroom",
    title: "Bedroom Design",
    tagline: "Premium Bedroom Interiors in Hyderabad",
    description:
      "We design bedrooms that are personal retreats. Plush textures, moody lighting, and bespoke furniture come together to create your perfect sanctuary in Hyderabad.",
    heroImage: bedroomImg.src,
    galleryImages: [bedroomImg.src, bedroomImg2.src],
    features: [
      "Custom upholstered headboards",
      "Cove & ambient ceiling lighting",
      "Built-in vanity & dressing areas",
      "Premium veneer wall paneling",
      "Motorized curtain systems",
      "Acoustic-optimized layouts",
    ],
    process: [
      { step: "Vision", desc: "We listen to your dreams — colors, moods, and lifestyle" },
      { step: "Concept", desc: "Mood boards and material palettes for your approval" },
      { step: "Crafting", desc: "Each element custom-built by master artisans" },
      { step: "Reveal", desc: "A space that exceeds every expectation" },
    ],
  },
  {
    slug: "living-room",
    title: "Living Room Design",
    tagline: "Elegant Living Rooms Across Hyderabad",
    description:
      "Grand yet inviting, our living rooms are designed to impress and comfort. Statement furniture and curated art walls reflect refined taste for Hyderabad homes.",
    heroImage: livingroomImg.src,
    galleryImages: [livingroomImg.src, livingroomImg2.src],
    features: [
      "Statement designer furniture",
      "Curated art & accent walls",
      "Smart home integration ready",
      "Premium marble & stone finishes",
      "Layered lighting design",
      "Custom entertainment units",
    ],
    process: [
      { step: "Discovery", desc: "Understanding how you live and entertain" },
      { step: "Design", desc: "Space planning, furniture selection, and lighting design" },
      { step: "Source", desc: "Procuring the finest pieces from trusted partners" },
      { step: "Transform", desc: "Bringing it all together with precision and care" },
    ],
  },
  {
    slug: "wardrobe",
    title: "Wardrobe Design",
    tagline: "Custom Wardrobes & Walk-in Closets in Hyderabad",
    description:
      "Walk-in closets and built-in wardrobes that turn your everyday routine into a boutique experience. Designed for premium Hyderabad homes.",
    heroImage: wardrobeImg.src,
    galleryImages: [wardrobeImg.src, wardrobeImg2.src],
    features: [
      "Glass-front display sections",
      "Built-in LED strip lighting",
      "Soft-close drawer systems",
      "Custom shoe & accessory racks",
      "Pull-out trouser hangers",
      "Anti-dust sealed compartments",
    ],
    process: [
      { step: "Audit", desc: "We assess your wardrobe needs and collection size" },
      { step: "Layout", desc: "Maximizing every inch with smart modular design" },
      { step: "Material", desc: "High-grade laminates, veneers, and hardware" },
      { step: "Install", desc: "Precision-fitted with factory-perfect finishing" },
    ],
  },
  {
    slug: "bathroom",
    title: "Bathroom Design",
    tagline: "Premium Bathroom Interiors in Hyderabad",
    description:
      "Transform your bathroom into a spa-like retreat with premium marble, rain showers, gold fixtures, and ambient lighting. Designed for premium homes across Hyderabad.",
    heroImage: bathroomImg.src,
    galleryImages: [bathroomImg.src],
    features: [
      "Premium marble walls & flooring",
      "Rain shower with premium fixtures",
      "LED-lit vanity mirrors",
      "Custom vanity & storage solutions",
      "Heated towel rails",
      "Complete waterproofing solutions",
    ],
    process: [
      { step: "Assessment", desc: "Evaluating plumbing, space, and your finish preferences" },
      { step: "Design", desc: "3D renders with material and fixture selection" },
      { step: "Sourcing", desc: "Premium fixtures from top brands" },
      { step: "Installation", desc: "Expert waterproofing and flawless finishing" },
    ],
  },
  {
    slug: "study-room",
    title: "Study Room Design",
    tagline: "Premium Home Office & Study Rooms in Hyderabad",
    description:
      "Create the perfect workspace at home. Our study room designs combine functionality with refinement — custom desks, built-in bookshelves, and ambient lighting for focused productivity.",
    heroImage: studyImg.src,
    galleryImages: [studyImg.src],
    features: [
      "Custom solid wood study desk",
      "Floor-to-ceiling bookshelves",
      "Ergonomic seating selection",
      "Task & ambient lighting design",
      "Cable management solutions",
      "Acoustic paneling for focus",
    ],
    process: [
      { step: "Understand", desc: "Your work style, storage needs, and aesthetic preferences" },
      { step: "Design", desc: "Ergonomic layout with 3D visualization" },
      { step: "Craft", desc: "Custom furniture built by master craftsmen" },
      { step: "Setup", desc: "Complete installation with tech integration" },
    ],
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((p) => p.slug === slug) ?? null;
}

