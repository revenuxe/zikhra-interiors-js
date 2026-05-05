import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getCostGuideConfig } from "@/lib/interior-cost-data";
import { breadcrumbSchema, faqPageSchema, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";
import InteriorCostGuideView from "@/views/marketing/InteriorCostGuideView";

export const dynamic = "force-static";
export const revalidate = 86400;

const config = getCostGuideConfig("bangalore", "2bhk", "/2bhk-interior-design-cost-bangalore");

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: config.canonicalPath },
  openGraph: pageOpenGraph({
    title: config.title,
    description: config.description,
    path: config.canonicalPath,
    imageAlt: "2 BHK interior design cost in Bangalore by Zikhra Interiors",
  }),
  twitter: twitterSummaryLarge(config.title, config.description),
};

export default function TwoBhkBangaloreCostPage() {
  return (
    <>
      <SeoJsonLd
        id="2bhk-bangalore-cost-breadcrumb"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "2 BHK Cost Bangalore", path: config.canonicalPath }]))}
      />
      <SeoJsonLd id="2bhk-bangalore-cost-faq" json={toJsonLd(faqPageSchema(config.faqs))} />
      <InteriorCostGuideView config={config} />
    </>
  );
}
