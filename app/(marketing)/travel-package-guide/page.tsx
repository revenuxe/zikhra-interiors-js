import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getCostGuideConfig } from "@/lib/interior-cost-data";
import { breadcrumbSchema, faqPageSchema, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";
import { BANGALORE_COST_KEYWORDS, BANGALORE_CORE_KEYWORDS, uniqueKeywords } from "@/lib/seo-keywords";
import InteriorCostGuideView from "@/views/marketing/InteriorCostGuideView";

export const dynamic = "force-static";
export const revalidate = 86400;

const config = getCostGuideConfig("all", "all", "/travel-package-guide");

export const metadata: Metadata = {
  title: seoTitle(config.title),
  description: config.description,
  keywords: uniqueKeywords(BANGALORE_COST_KEYWORDS, BANGALORE_CORE_KEYWORDS),
  alternates: { canonical: config.canonicalPath },
  openGraph: pageOpenGraph({
    title: config.title,
    description: config.description,
    path: config.canonicalPath,
    imageAlt: "Umrah package planning by Zikhra",
  }),
  twitter: twitterSummaryLarge(config.title, config.description),
};

export default function InteriorDesignCostPage() {
  return (
    <>
      <SeoJsonLd
        id="interior-cost-breadcrumb"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Travel Package Guide", path: config.canonicalPath }]))}
      />
      <SeoJsonLd id="interior-cost-faq" json={toJsonLd(faqPageSchema(config.faqs))} />
      <InteriorCostGuideView config={config} />
    </>
  );
}
