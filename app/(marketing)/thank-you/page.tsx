import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import ThankYou from "@/legacy-pages/ThankYou";
import { DEFAULT_OG_IMAGE_PATH, pageOpenGraph, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: seoTitle("Thank You"),
  description: "Thank you for contacting Zikhra. Our premium travel planning team will get back to you shortly.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
  openGraph: pageOpenGraph({
    title: "Thank You | Zikhra Tours & Travels",
    description: "Your enquiry was received — our Bangalore travel planning team will respond soon.",
    path: "/thank-you",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Thank you — Zikhra pilgrimage journeys Bangalore",
  }),
  twitter: twitterSummaryLarge(
    "Thank You | Zikhra Tours & Travels",
    "Your enquiry was received — our Bangalore travel planning team will respond soon.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default function ThankYouPage() {
  return <ThankYou />;
}

