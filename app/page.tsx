import type { Metadata } from "next";
import Index from "@/legacy-pages/Index";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  localBusinessSchema,
  organizationSchema,
  pageOpenGraph,
  toJsonLd,
  twitterSummaryLarge,
  websiteSchema,
  DEFAULT_OG_IMAGE_PATH,
} from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

const homeTitle = "Luxury Interior Designers Hyderabad & Bangalore | Zikhra";
const homeDescription =
  "Award-winning luxury interior designers in Hyderabad and Bangalore — turnkey home interiors, modular kitchens, bespoke villas & apartments. Jubilee Hills, Gachibowli, Koramangala, Whitefield, Indiranagar, HSR Layout & more.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "luxury interior designers Hyderabad",
    "luxury interior designers Bangalore",
    "modular kitchen Hyderabad",
    "modular kitchen Bangalore",
    "turnkey home interiors",
    "villa interior design",
    "Jubilee Hills interior designers",
    "Banjara Hills interiors",
    "Gachibowli home interiors",
    "Koramangala interior designers",
    "Whitefield luxury interiors",
    "Indiranagar interiors",
    "HSR Layout interior design",
    "Sarjapur Road interiors",
    "premium home interiors",
  ],
  alternates: { canonical: "/" },
  openGraph: pageOpenGraph({
    title: homeTitle,
    description: homeDescription,
    path: "/",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra — luxury interior design Hyderabad and Bangalore",
  }),
  twitter: twitterSummaryLarge(homeTitle, homeDescription, DEFAULT_OG_IMAGE_PATH),
};

export default function HomePage() {
  return (
    <>
      <SeoJsonLd id="home-org-schema" json={toJsonLd(organizationSchema())} />
      <SeoJsonLd id="home-local-schema" json={toJsonLd(localBusinessSchema())} />
      <SeoJsonLd id="home-website-schema" json={toJsonLd(websiteSchema())} />
      <Index />
    </>
  );
}

