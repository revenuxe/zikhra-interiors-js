import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import Terms from "@/legacy-pages/Terms";
import { DEFAULT_OG_IMAGE_PATH, pageOpenGraph, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: seoTitle("Terms and Conditions"),
  description: "Review Zikhra travel booking terms, indicative package prices, payments, cancellations, visas, and traveller responsibilities.",
  alternates: { canonical: "/terms" },
  openGraph: pageOpenGraph({
    title: "Terms and Conditions | Zikhra",
    description: "Legal terms for using Zikhra’s website and travel planning services in Bangalore.",
    path: "/terms",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra terms and conditions",
  }),
  twitter: twitterSummaryLarge(
    "Terms and Conditions | Zikhra",
    "Legal terms for using Zikhra’s website and travel planning services in Bangalore.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default function TermsPage() {
  return <Terms />;
}

