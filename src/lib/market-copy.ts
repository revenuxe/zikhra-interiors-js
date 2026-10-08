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
  "bangalore": {
    "heroSubline": "Umrah, Hajj enquiries, and Muslim-friendly travel from Bangalore.",
    "heroSecondaryLine": "Thoughtful planning for your journey to Makkah, Madinah, and beyond.",
    "heroImageAlt": "The Kaaba at Masjid al-Haram in Makkah",
    "portfolioSub": "Explore Umrah, Hajj, and pilgrimage packages for families, groups, and private journeys",
    "featuredTitle": "Find your journey",
    "featuredSubtitle": "Illustrative itineraries for individuals, families, and groups. Every departure is confirmed through a written quotation.",
    "projectTypesSub": "Plan the details of your journey, from visa assistance and hotel stays to transfers and ziyarat",
    "servicesSub": "Umrah planning, Hajj enquiries, accommodation, transfers, and travel assistance",
    "whyTitle": "Thoughtful support for your journey",
    "whyPoints": [
      {
        "title": "Personal planning",
        "desc": "Your dates, budget, and family needs guide the itinerary."
      },
      {
        "title": "Clear quotations",
        "desc": "Review hotels, flights, meals, transfers, and exclusions before booking."
      },
      {
        "title": "Practical preparation",
        "desc": "Discuss documents, baggage, and travel arrangements before departure."
      },
      {
        "title": "Considered choices",
        "desc": "Compare room sharing, travel pace, and accessibility requirements."
      }
    ],
    "testimonialsTitle": "Before you travel",
    "testimonials": [
      {
        "name": "Plan your dates",
        "location": "Travel planning",
        "quote": "Share your departure city and preferred travel window so suitable options can be checked.",
        "rating": 0
      },
      {
        "name": "Review your package",
        "location": "Booking preparation",
        "quote": "Confirm hotel names, room sharing, flight details, meals, transfers, and exclusions in writing.",
        "rating": 0
      },
      {
        "name": "Prepare your documents",
        "location": "Departure checklist",
        "quote": "Review the requirements for your journey and keep your confirmed itinerary and provider contacts accessible.",
        "rating": 0
      }
    ],
    "ctaSubline": "Tell us about your Umrah plans, Hajj enquiry, or next family journey",
    "ctaWhatsappAlt": "WhatsApp Zikhra Tours & Travels for a travel enquiry",
    "areasSectionSub": "Travel enquiries from Bangalore neighbourhoods and surrounding areas"
  }
};

export function getMarketCopy(market: MarketId): MarketCopy {
  return MARKET_COPY[market];
}
