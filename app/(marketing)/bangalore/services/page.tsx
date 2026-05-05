import type { Metadata } from "next";
import ServicesView from "@/views/marketing/ServicesView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

const title = "Premium Interior Design Services in Bangalore & Bengaluru | Zikhra";
const description =
  "Premium home interiors, modular kitchens, wardrobes, and renovation in Bangalore and Bengaluru — Koramangala, Whitefield, Indiranagar, HSR, and across the city.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/bangalore/services" },
  openGraph: pageOpenGraph({
    title,
    description,
    path: "/bangalore/services",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra premium interior design services — Bangalore & Bengaluru",
  }),
  twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
};

export default function BangaloreServicesPage() {
  return (
    <>
      <SeoJsonLd
        id="bangalore-services-breadcrumb"
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bangalore", path: "/bangalore" },
            { name: "Services", path: "/bangalore/services" },
          ]),
        )}
      />
      <ServicesView market="bangalore" />
    </>
  );
}
