import type { Metadata } from "next";
import ServicesView from "@/views/marketing/ServicesView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, toJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Luxury Interior Design Services in Hyderabad",
  description:
    "Explore Zikhra's premium interior design services in Hyderabad including full home interiors, modular kitchen design, wardrobes, and renovation.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Luxury Interior Design Services in Hyderabad",
    description:
      "Premium and high-end home interior services by Zikhra for villas, apartments, and modern residences.",
    url: "/services",
  },
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

