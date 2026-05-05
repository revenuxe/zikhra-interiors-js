import type { Metadata } from "next";
import ServicesView from "@/views/marketing/ServicesView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

const title = "Best Interior Designer in Hyderabad for Interior Design Services | Zikhra";
const description =
  "Explore Zikhra's home interior services in Hyderabad including 2 BHK interiors, full home interiors, modular kitchens, wardrobes, renovation, and premium upgrades.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: pageOpenGraph({
    title,
    description,
    path: "/services",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra interior design services and home interior packages in Hyderabad",
  }),
  twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
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
