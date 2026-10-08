import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import Privacy from "@/legacy-pages/Privacy";
import { DEFAULT_OG_IMAGE_PATH, pageOpenGraph, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: seoTitle("Privacy Policy"),
  description: "How Zikhra handles package enquiries, traveller details, browser storage, and privacy requests. Contact our RT Nagar, Bangalore office.",
  alternates: { canonical: "/privacy" },
  openGraph: pageOpenGraph({
    title: "Privacy Policy | Zikhra",
    description: "How Zikhra handles personal data for travel planning enquiries and website visitors.",
    path: "/privacy",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra privacy policy",
  }),
  twitter: twitterSummaryLarge(
    "Privacy Policy | Zikhra",
    "How Zikhra handles personal data for travel planning enquiries and website visitors.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default function PrivacyPage() {
  return <Privacy />;
}

