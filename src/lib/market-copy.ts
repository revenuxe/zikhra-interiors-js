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
    heroSubline: "Bespoke luxury home interiors in Hyderabad & Bangalore.",
    heroImageAlt: "Zikhra — luxury interior design, Hyderabad and Bangalore",
    portfolioSub:
      "Luxury interior design portfolio — premium kitchens, bedrooms, and living spaces crafted for discerning homeowners in Hyderabad and Bangalore",
    featuredTitle: "Luxury interior projects — Hyderabad & Bangalore",
    featuredSubtitle:
      "Explore reference layouts and finishes from our studio. The same bespoke luxury interior approach scales to apartments, villas, and penthouses in Hyderabad; discover neighbourhood-specific luxury home design on our Bangalore hub.",
    projectTypesSub:
      "Tailored luxury interior solutions for apartments, villas, and penthouses — Hyderabad flagship studio, Bangalore luxury interiors hub",
    servicesSub:
      "Premium interior design services — Jubilee Hills to HITEC City in Hyderabad; Koramangala, Whitefield, and Indiranagar in Bangalore",
    whyTitle: "Why Hyderabad & Bangalore homeowners choose Zikhra",
    whyPoints: [
      { title: "End-to-End Solutions", desc: "From concept to completion, we handle everything for your Hyderabad home" },
      { title: "Fast Delivery", desc: "On-time project completion guaranteed across Hyderabad" },
      { title: "Premium Materials", desc: "Only the finest imported materials and finishes" },
      { title: "Transparent Pricing", desc: "No hidden costs, complete clarity on every project" },
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
      "Start your luxury home interior journey in Hyderabad or Bangalore — turnkey design, transparent milestones, and premium execution",
    ctaWhatsappAlt:
      "WhatsApp icon — message Zikhra for luxury interior design in Hyderabad or Bangalore",
    areasSectionSub:
      "Premium luxury interiors across Hyderabad neighbourhoods — explore Bangalore areas on our city hub",
  },
  bangalore: {
    heroSubline: "Bespoke luxury interiors for homes across Bangalore.",
    heroImageAlt: "Zikhra — luxury interior design in Bangalore",
    portfolioSub: "Luxury interior design categories — for apartments, villas, and penthouses in Bangalore",
    featuredTitle: "Recent projects — Bangalore style",
    featuredSubtitle:
      "Explore the craftsmanship and layouts we deliver — from compact city homes to villas and penthouses across Bangalore.",
    projectTypesSub: "Tailored interior solutions for every home type — now in Bangalore",
    servicesSub: "Premium interior design in Bangalore — Koramangala, Whitefield, Indiranagar, HSR & across the city",
    whyTitle: "Why Bangalore Chooses Zikhra",
    whyPoints: [
      { title: "End-to-End Solutions", desc: "From concept to completion, we handle everything for your Bangalore home" },
      { title: "Fast Delivery", desc: "Structured timelines and clear milestones for projects across Bangalore" },
      { title: "Premium Materials", desc: "Imported finishes, hardware, and materials curated for luxury Indian homes" },
      { title: "Transparent Pricing", desc: "No hidden costs — clarity on scope, samples, and execution before you commit" },
    ],
    testimonialsTitle: "What Bangalore Homeowners Say",
    testimonials: [
      {
        name: "Kavya N.",
        location: "Koramangala, Bangalore",
        quote:
          "Our apartment fit-out felt effortless. The kitchen and wardrobes are stunning — exactly the calm, luxury look we wanted.",
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
    ctaSubline: "Transform your vision into reality with Zikhra's premium interior solutions in Bangalore",
    ctaWhatsappAlt: "WhatsApp icon — message Zikhra for premium interior design in Bangalore",
    areasSectionSub: "Premium interior design across Bangalore neighbourhoods",
  },
};

export function getMarketCopy(market: MarketId): MarketCopy {
  return MARKET_COPY[market];
}
