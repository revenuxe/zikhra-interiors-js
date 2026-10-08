import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import Contact from "@/legacy-pages/Contact";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, localBusinessSchema, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: seoTitle("Contact Zikhra Tours & Travels"),
  description:
    "Contact Zikhra in RT Nagar, Bangalore for Umrah packages and travel planning. Choose a package, batch departure, and traveller count for a personalised quote.",
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph({
    title: "Contact Zikhra Tours & Travels",
    description: "Speak with our Bangalore travel team about Umrah, Hajj enquiries, and family journeys.",
    path: "/contact",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra Tours & Travels, RT Nagar, Bangalore",
  }),
  twitter: twitterSummaryLarge(
    "Contact Zikhra Tours & Travels",
    "Speak with our Bangalore travel team about Umrah, Hajj enquiries, and family journeys.",
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

