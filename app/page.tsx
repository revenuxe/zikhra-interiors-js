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
import { BANGALORE_CORE_KEYWORDS, BANGALORE_COST_KEYWORDS, BANGALORE_SERVICE_KEYWORDS, uniqueKeywords } from "@/lib/seo-keywords";

export const dynamic = "force-static";
export const revalidate = 86400;

const homeTitle = "Best Interior Designer in Bangalore & Bengaluru | Zikhra";
const homeDescription =
  "Zikhra Interiors designs premium 2 BHK, 3 BHK, villa, and apartment interiors in Bangalore and Bengaluru with clear scope planning and turnkey execution.";

const homeFaqs = [
  {
    q: "How does Zikhra estimate 2 BHK interiors?",
    a: "Zikhra reviews your floor plan, storage needs, finishes, and site conditions before preparing a room-wise estimate. This keeps the scope clear before production begins.",
  },
  {
    q: "Does Zikhra provide turnkey interior design in Bangalore and Bengaluru?",
    a: "Yes. Zikhra provides turnkey interior design for apartments, villas, modular kitchens, wardrobes, living rooms, bedrooms, and renovation projects across Bangalore and Bengaluru.",
  },
  {
    q: "Does Zikhra offer premium interior design packages?",
    a: "Yes. Zikhra offers practical, premium, and signature interior scopes for homeowners who want transparent planning, premium materials, and supervised execution.",
  },
];

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: uniqueKeywords(
    BANGALORE_CORE_KEYWORDS,
    BANGALORE_SERVICE_KEYWORDS,
    BANGALORE_COST_KEYWORDS,
    [
      "Koramangala interior designers",
      "Indiranagar interiors",
      "Whitefield home interiors",
      "HSR Layout interiors",
      "Sarjapur Road interiors",
    ],
  ),
  alternates: { canonical: "/" },
  openGraph: pageOpenGraph({
    title: homeTitle,
    description: homeDescription,
    path: "/",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra - best interior designer in Bangalore and Bengaluru",
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
