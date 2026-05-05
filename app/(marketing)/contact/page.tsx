import type { Metadata } from "next";
import Contact from "@/legacy-pages/Contact";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, localBusinessSchema, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Contact Zikhra Interior Designers",
  description:
    "Book a free estimate with Zikhra for premium interior design in Hyderabad, including 2 BHK interiors, turnkey home interiors, and modular kitchens.",
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph({
    title: "Contact Zikhra Interiors",
    description: "Speak with Hyderabad's premium interior design team for your villa or apartment interiors.",
    path: "/contact",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Contact Zikhra for bespoke premium home interiors in Hyderabad",
  }),
  twitter: twitterSummaryLarge(
    "Contact Zikhra Interiors",
    "Speak with Hyderabad's premium interior design team for your villa or apartment interiors.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default function ContactRoute() {
  return (
    <>
      <SeoJsonLd
        id="contact-breadcrumb-schema"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]))}
      />
      <SeoJsonLd id="contact-business-schema" json={toJsonLd(localBusinessSchema())} />
      <Contact />
    </>
  );
}

