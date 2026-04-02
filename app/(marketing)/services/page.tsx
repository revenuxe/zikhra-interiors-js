import type { Metadata } from "next";
import ServicesView from "@/views/marketing/ServicesView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Luxury Interior Design Services in Hyderabad",
  description:
    "Explore Zikhra's premium interior design services in Hyderabad including full home interiors, modular kitchen design, wardrobes, and renovation.",
  alternates: { canonical: "/services" },
  openGraph: pageOpenGraph({
    title: "Luxury Interior Design Services in Hyderabad",
    description:
      "Premium and high-end home interior services by Zikhra for villas, apartments, and modern residences.",
    path: "/services",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra luxury interior design services — turnkey homes Hyderabad",
  }),
  twitter: twitterSummaryLarge(
    "Luxury Interior Design Services in Hyderabad",
    "Premium and high-end home interior services by Zikhra for villas, apartments, and modern residences.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default function ServicesRoute() {
  return (
    <>
      <SeoJsonLd
        id="services-breadcrumb-schema"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]))}
      />
      <ServicesView />
    </>
  );
}

