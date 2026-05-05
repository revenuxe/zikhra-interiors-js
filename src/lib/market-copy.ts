import type { MarketId } from "@/lib/market-types";

export type WhyPointCopy = { title: string; desc: string };

export type TestimonialCopy = { name: string; location: string; quote: string; rating: number };

export type MarketCopy = {
  heroSubline: string;
  /** Optional second line under hero subline (e.g. dual-city SEO on main homepage). */
  heroSecondaryLine?: string;
  heroImageAlt: string;
  portfolioSub: string;
  featuredTitle: string;
  /** Optional line under featured title (e.g. clarify reference projects). */
  featuredSubtitle?: string;
  projectTypesSub: string;
  servicesSub: string;
  whyTitle: string;
  whyPoints: WhyPointCopy[];
  testimonialsTitle: string;
  testimonials: TestimonialCopy[];
  ctaSubline: string;
  ctaWhatsappAlt: string;
  areasSectionSub: string;
};

export const MARKET_COPY: Record<MarketId, MarketCopy> = {
  hyderabad: {
    heroSubline: "Premium home interiors in Hyderabad & Bangalore with clear scope planning.",
    heroSecondaryLine: "2 BHK, 3 BHK, villa, modular kitchen, and turnkey interior design by Zikhra.",
    heroImageAlt: "Zikhra - best interior designer in Hyderabad and Bangalore",
    portfolioSub:
      "Premium interior design portfolio - kitchens, bedrooms, and living spaces crafted for homeowners in Hyderabad and Bangalore",
    featuredTitle: "Premium interior projects - Hyderabad & Bangalore",
    featuredSubtitle:
      "Explore reference layouts and finishes from our studio. The same premium interior approach scales to apartments, villas, and penthouses in Hyderabad; discover neighbourhood-specific home design on our Bangalore hub.",
    projectTypesSub:
      "Tailored interior solutions for 2 BHK, 3 BHK, villas, and penthouses - Hyderabad flagship studio, Bangalore interiors hub",
    servicesSub:
      "Home interior packages for 2 BHK, 3 BHK, villas, modular kitchens, and renovations - Hyderabad to Bangalore",
    whyTitle: "Why Hyderabad & Bangalore homeowners choose Zikhra",
    whyPoints: [
      { title: "End-to-End Solutions", desc: "From concept to completion, we handle everything for your home" },
      { title: "Clear Estimates", desc: "Room-wise planning for practical, premium, and signature scopes" },
      { title: "Premium Materials", desc: "Quality hardware, finishes, and materials selected for Indian homes" },
      { title: "Transparent Process", desc: "Clear milestones, supervised execution, and no vague cost surprises" },
    ],
    testimonialsTitle: "What Hyderabad Says",
    testimonials: [
      {
        name: "Priya Reddy",
        location: "Jubilee Hills, Hyderabad",
        quote: "Zikhra transformed our villa into a masterpiece. Every detail was perfect, beyond our expectations.",
        rating: 5,
      },
      {
        name: "Rajesh Kumar",
        location: "Gachibowli, Hyderabad",
        quote: "The attention to detail and premium quality is unmatched. Our apartment looks straight out of a magazine.",
        rating: 5,
      },
      {
        name: "Ananya Sharma",
        location: "Banjara Hills, Hyderabad",
        quote: "Professional, timely, and stunning results. Best interior designers in Hyderabad, hands down.",
        rating: 5,
      },
    ],
    ctaSubline:
      "Get a clear estimate for your 2 BHK, 3 BHK, villa, or modular kitchen - premium design with transparent milestones",
    ctaWhatsappAlt: "WhatsApp icon - message Zikhra for interior design planning in Hyderabad or Bangalore",
    areasSectionSub:
      "Premium interiors across Hyderabad neighbourhoods - explore Bangalore areas on our city hub",
  },
  bangalore: {
    heroSubline: "Premium home interiors across Bangalore with clear scope planning.",
    heroSecondaryLine: "2 BHK, 3 BHK, villa, modular kitchen, and turnkey interiors by Zikhra.",
    heroImageAlt: "Zikhra - best interior designer in Bangalore",
    portfolioSub: "Premium interior design categories - for apartments, villas, and penthouses in Bangalore",
    featuredTitle: "Recent projects - Bangalore style",
    featuredSubtitle:
      "Explore the craftsmanship and layouts we deliver - from compact city homes to villas and penthouses across Bangalore.",
    projectTypesSub: "Tailored interior solutions for every home type - now in Bangalore",
    servicesSub: "2 BHK, 3 BHK, villa, modular kitchen, and renovation packages across Bangalore",
    whyTitle: "Why Bangalore Chooses Zikhra",
    whyPoints: [
      { title: "End-to-End Solutions", desc: "From concept to completion, we handle everything for your Bangalore home" },
      { title: "Clear Estimates", desc: "Room-wise planning for practical, premium, and signature scopes" },
      { title: "Premium Materials", desc: "Quality hardware, finishes, and materials selected for Indian homes" },
      { title: "Transparent Process", desc: "Clear milestones, supervised execution, and no vague cost surprises" },
    ],
    testimonialsTitle: "What Bangalore Homeowners Say",
    testimonials: [
      {
        name: "Kavya N.",
        location: "Koramangala, Bangalore",
        quote:
          "Our apartment fit-out felt effortless. The kitchen and wardrobes are stunning - exactly the calm, premium look we wanted.",
        rating: 5,
      },
      {
        name: "Arjun M.",
        location: "Whitefield, Bangalore",
        quote:
          "Clear communication and beautiful execution. Zikhra understood how we use our home and delivered on every promise.",
        rating: 5,
      },
      {
        name: "Sneha R.",
        location: "Indiranagar, Bangalore",
        quote:
          "Premium materials and detailing without the chaos. We would recommend Zikhra to anyone serious about interiors.",
        rating: 5,
      },
    ],
    ctaSubline: "Get a clear estimate for premium home interiors and modular kitchens in Bangalore",
    ctaWhatsappAlt: "WhatsApp icon - message Zikhra for interior design planning in Bangalore",
    areasSectionSub: "Premium interior design across Bangalore neighbourhoods",
  },
};

export function getMarketCopy(market: MarketId): MarketCopy {
  return MARKET_COPY[market];
}
