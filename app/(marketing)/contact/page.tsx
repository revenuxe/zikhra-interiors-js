import type { Metadata } from "next";
import Contact from "@/legacy-pages/Contact";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, localBusinessSchema, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Contact Luxury Interior Designers",
  description:
    "Book a free consultation with Zikhra for premium and luxury interior design in Hyderabad, including turnkey home interiors and modular kitchens.",
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph({
    title: "Contact Zikhra Luxury Interiors",
    description: "Speak with Hyderabad's premium interior design team for your villa or apartment interiors.",
    path: "/contact",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Contact Zikhra for bespoke luxury home interiors in Hyderabad",
  }),
  twitter: twitterSummaryLarge(
    "Contact Zikhra Luxury Interiors",
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

