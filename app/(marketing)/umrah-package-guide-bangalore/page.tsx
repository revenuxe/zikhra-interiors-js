import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getCostGuideConfig } from "@/lib/interior-cost-data";
import { breadcrumbSchema, faqPageSchema, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";
import { BANGALORE_COST_KEYWORDS, uniqueKeywords } from "@/lib/seo-keywords";
import InteriorCostGuideView from "@/views/marketing/InteriorCostGuideView";

export const dynamic = "force-static";
export const revalidate = 86400;

const config = getCostGuideConfig("bangalore", "2bhk", "/umrah-package-guide-bangalore");

export const metadata: Metadata = {
  title: seoTitle(config.title),
  description: config.description,
  keywords: uniqueKeywords(BANGALORE_COST_KEYWORDS, ["Umrah journeys Bangalore", "Umrah package Bangalore"]),
  alternates: { canonical: config.canonicalPath },
  openGraph: pageOpenGraph({
    title: config.title,
    description: config.description,
    path: config.canonicalPath,
    imageAlt: "Umrah travel package costs in Bangalore by Zikhra Tours & Travels",
  }),
  twitter: twitterSummaryLarge(config.title, config.description),
};

export default function TwoBhkBangaloreCostPage() {
  return (
    <>
      <SeoJsonLd
        id="2bhk-bangalore-cost-breadcrumb"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Umrah Package Guide", path: config.canonicalPath }]))}
      />
      <SeoJsonLd id="2bhk-bangalore-cost-faq" json={toJsonLd(faqPageSchema(config.faqs))} />
      <InteriorCostGuideView config={config} />
    </>
  );
}
