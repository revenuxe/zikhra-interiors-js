import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getCostGuideConfig } from "@/lib/interior-cost-data";
import { breadcrumbSchema, faqPageSchema, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";
import InteriorCostGuideView from "@/views/marketing/InteriorCostGuideView";

export const dynamic = "force-static";
export const revalidate = 86400;

const config = getCostGuideConfig("hyderabad", "3bhk", "/3bhk-interior-design-cost-hyderabad");

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: config.canonicalPath },
  openGraph: pageOpenGraph({
    title: config.title,
    description: config.description,
    path: config.canonicalPath,
    imageAlt: "3 BHK interior design cost in Hyderabad by Zikhra Interiors",
  }),
  twitter: twitterSummaryLarge(config.title, config.description),
};

export default function ThreeBhkHyderabadCostPage() {
  return (
    <>
      <SeoJsonLd
        id="3bhk-hyderabad-cost-breadcrumb"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "3 BHK Cost Hyderabad", path: config.canonicalPath }]))}
      />
      <SeoJsonLd id="3bhk-hyderabad-cost-faq" json={toJsonLd(faqPageSchema(config.faqs))} />
      <InteriorCostGuideView config={config} />
    </>
  );
}
