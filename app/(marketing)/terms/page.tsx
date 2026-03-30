import type { Metadata } from "next";
import Terms from "@/legacy-pages/Terms";
import { DEFAULT_OG_IMAGE_PATH, pageOpenGraph, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the terms and conditions for using Zikhra's website and luxury interior design services.",
  alternates: { canonical: "/terms" },
  openGraph: pageOpenGraph({
    title: "Terms and Conditions | Zikhra",
    description: "Legal terms for using Zikhra’s website and interior design services in Hyderabad.",
    path: "/terms",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra terms and conditions",
  }),
  twitter: twitterSummaryLarge(
    "Terms and Conditions | Zikhra",
    "Legal terms for using Zikhra’s website and interior design services in Hyderabad.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default function TermsPage() {
  return <Terms />;
}

