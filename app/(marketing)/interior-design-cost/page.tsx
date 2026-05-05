import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getCostGuideConfig } from "@/lib/interior-cost-data";
import { breadcrumbSchema, faqPageSchema, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";
import InteriorCostGuideView from "@/views/marketing/InteriorCostGuideView";

export const dynamic = "force-static";
export const revalidate = 86400;

const config = getCostGuideConfig("all", "all", "/interior-design-cost");

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: config.canonicalPath },
  openGraph: pageOpenGraph({
    title: config.title,
    description: config.description,
    path: config.canonicalPath,
    imageAlt: "Interior design cost and home interior packages by Zikhra",
  }),
  twitter: twitterSummaryLarge(config.title, config.description),
};

export default function InteriorDesignCostPage() {
  return (
    <>
      <SeoJsonLd
        id="interior-cost-breadcrumb"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Interior Design Cost", path: config.canonicalPath }]))}
      />
      <SeoJsonLd id="interior-cost-faq" json={toJsonLd(faqPageSchema(config.faqs))} />
      <InteriorCostGuideView config={config} />
    </>
  );
}
