import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getCostGuideConfig } from "@/lib/interior-cost-data";
import { breadcrumbSchema, faqPageSchema, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";
import InteriorCostGuideView from "@/views/marketing/InteriorCostGuideView";

export const dynamic = "force-static";
export const revalidate = 86400;

const config = getCostGuideConfig("hyderabad", "all", "/hyderabad/interior-design-cost");

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: config.canonicalPath },
  openGraph: pageOpenGraph({
    title: config.title,
    description: config.description,
    path: config.canonicalPath,
    imageAlt: "Interior design cost in Hyderabad by Zikhra Interiors",
  }),
  twitter: twitterSummaryLarge(config.title, config.description),
};

export default function HyderabadInteriorDesignCostPage() {
  return (
    <>
      <SeoJsonLd
        id="hyderabad-interior-cost-breadcrumb"
        json={toJsonLd(
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Interior Design Cost Hyderabad", path: config.canonicalPath }]),
        )}
      />
      <SeoJsonLd id="hyderabad-interior-cost-faq" json={toJsonLd(faqPageSchema(config.faqs))} />
      <InteriorCostGuideView config={config} />
    </>
  );
}
