import type { Metadata } from "next";
import ThankYou from "@/legacy-pages/ThankYou";
import { DEFAULT_OG_IMAGE_PATH, pageOpenGraph, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Zikhra. Our premium interior design team will get back to you shortly.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
  openGraph: pageOpenGraph({
    title: "Thank You | Zikhra Interiors",
    description: "Your enquiry was received — our Hyderabad interior design team will respond soon.",
    path: "/thank-you",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Thank you — Zikhra premium interiors Hyderabad",
  }),
  twitter: twitterSummaryLarge(
    "Thank You | Zikhra Interiors",
    "Your enquiry was received — our Hyderabad interior design team will respond soon.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default function ThankYouPage() {
  return <ThankYou />;
}

