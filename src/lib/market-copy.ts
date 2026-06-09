import type { MarketId } from "@/lib/market-types";

export type WhyPointCopy = { title: string; desc: string };

export type TestimonialCopy = { name: string; location: string; quote: string; rating: number };

export type MarketCopy = {
  heroSubline: string;
  /** Optional second line under hero subline. */
  heroSecondaryLine?: string;
  heroImageAlt: string;
  portfolioSub: string;
  featuredTitle: string;
  /** Optional line under featured title. */
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
  bangalore: {
    heroSubline: "Premium home interiors across Bangalore and Bengaluru with clear scope planning.",
    heroSecondaryLine: "2 BHK, 3 BHK, villa, modular kitchen, and turnkey interiors by Zikhra.",
    heroImageAlt: "Zikhra - best interior designer in Bangalore",
    portfolioSub: "Premium interior design categories for apartments, villas, and penthouses in Bangalore",
    featuredTitle: "Recent interior projects in Bangalore",
    featuredSubtitle:
      "Explore the craftsmanship and layouts we deliver, from compact city homes to villas and penthouses across Bangalore.",
    projectTypesSub: "Tailored interior solutions for every Bangalore home type",
    servicesSub: "2 BHK, 3 BHK, villa, modular kitchen, and renovation packages across Bangalore",
    whyTitle: "Why Bangalore homeowners choose Zikhra",
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
