import { seoTitle } from "@/lib/seo";
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

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: seoTitle("About Zikhra Tours & Travels"),
  description:
    "Learn about Zikhra Tours & Travels and our approach to Umrah planning, Hajj enquiries, and family journeys from Bangalore.",
  alternates: { canonical: "/about" },
  openGraph: pageOpenGraph({
    title: "About Zikhra Tours & Travels",
    description:
      "Explore thoughtful pilgrimage and family travel planning from Bangalore.",
    path: "/about",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra Tours & Travels in RT Nagar, Bangalore",
  }),
  twitter: twitterSummaryLarge(
    "About Zikhra Tours & Travels",
    "Explore thoughtful pilgrimage and family travel planning from Bangalore.",
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

