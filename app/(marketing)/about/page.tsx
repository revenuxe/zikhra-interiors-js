import type { Metadata } from "next";
import About from "@/legacy-pages/About";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  breadcrumbSchema,
  DEFAULT_OG_IMAGE_PATH,
  localBusinessSchema,
  pageOpenGraph,
  toJsonLd,
  twitterSummaryLarge,
} from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "About Zikhra Luxury Interiors",
  description:
    "Learn about Zikhra, a premium interior design studio in Hyderabad known for luxury, craftsmanship, transparent execution, and timeless spaces.",
  alternates: { canonical: "/about" },
  openGraph: pageOpenGraph({
    title: "About Zikhra Luxury Interiors",
    description:
      "Meet the design team behind premium and luxury interior spaces across Hyderabad homes and villas.",
    path: "/about",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "About Zikhra — luxury interior designers and bespoke homes Hyderabad",
  }),
  twitter: twitterSummaryLarge(
    "About Zikhra Luxury Interiors",
    "Meet the design team behind premium and luxury interior spaces across Hyderabad homes and villas.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default function AboutRoute() {
  return (
    <>
      <SeoJsonLd
        id="about-breadcrumb-schema"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]))}
      />
      <SeoJsonLd id="about-business-schema" json={toJsonLd(localBusinessSchema())} />
      <About />
    </>
  );
}

