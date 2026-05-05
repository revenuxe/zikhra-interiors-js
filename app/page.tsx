import type { Metadata } from "next";
import Index from "@/legacy-pages/Index";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  DEFAULT_OG_IMAGE_PATH,
  faqPageSchema,
  localBusinessSchema,
  organizationSchema,
  pageOpenGraph,
  toJsonLd,
  twitterSummaryLarge,
  websiteSchema,
} from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

const homeTitle = "Best Interior Designer in Hyderabad & Bangalore | Zikhra";
const homeDescription =
  "Zikhra Interiors designs premium 2 BHK, 3 BHK, villa, and apartment interiors in Hyderabad and Bangalore with clear scope planning and turnkey execution.";

const homeFaqs = [
  {
    q: "How does Zikhra estimate 2 BHK interiors?",
    a: "Zikhra reviews your floor plan, storage needs, finishes, and site conditions before preparing a room-wise estimate. This keeps the scope clear before production begins.",
  },
  {
    q: "Does Zikhra provide turnkey interior design in Hyderabad and Bangalore?",
    a: "Yes. Zikhra provides turnkey interior design for apartments, villas, modular kitchens, wardrobes, living rooms, bedrooms, and renovation projects across Hyderabad and Bangalore.",
  },
  {
    q: "Does Zikhra offer premium interior design packages?",
    a: "Yes. Zikhra offers practical, premium, and signature interior scopes for homeowners who want transparent planning, premium materials, and supervised execution.",
  },
];

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "best interior designer Hyderabad",
    "best interior designer Bangalore",
    "interior designers Hyderabad",
    "interior designers Bangalore",
    "2 BHK interior design cost Hyderabad",
    "2 BHK interior design estimate",
    "home interior packages Hyderabad",
    "home interior packages Bangalore",
    "modular kitchen Hyderabad",
    "modular kitchen Bangalore",
    "turnkey home interiors",
    "villa interior design",
    "Jubilee Hills interior designers",
    "Banjara Hills interiors",
    "Gachibowli home interiors",
    "Koramangala interior designers",
    "Whitefield home interiors",
    "premium home interiors",
    "premium interior designers Hyderabad",
    "premium interior designers Bangalore",
  ],
  alternates: { canonical: "/" },
  openGraph: pageOpenGraph({
    title: homeTitle,
    description: homeDescription,
    path: "/",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra - best interior designer in Hyderabad and Bangalore",
  }),
  twitter: twitterSummaryLarge(homeTitle, homeDescription, DEFAULT_OG_IMAGE_PATH),
};

export default function HomePage() {
  return (
    <>
      <SeoJsonLd id="home-org-schema" json={toJsonLd(organizationSchema())} />
      <SeoJsonLd id="home-local-schema" json={toJsonLd(localBusinessSchema())} />
      <SeoJsonLd id="home-website-schema" json={toJsonLd(websiteSchema())} />
      <SeoJsonLd id="home-faq-schema" json={toJsonLd(faqPageSchema(homeFaqs))} />
      <Index />
    </>
  );
}
