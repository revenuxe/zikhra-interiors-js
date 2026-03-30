import type { Metadata } from "next";
import About from "@/legacy-pages/About";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, localBusinessSchema, toJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "About Zikhra Luxury Interiors",
  description:
    "Learn about Zikhra, a premium interior design studio in Hyderabad known for luxury, craftsmanship, transparent execution, and timeless spaces.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Zikhra Luxury Interiors",
    description:
      "Meet the design team behind premium and luxury interior spaces across Hyderabad homes and villas.",
    url: "/about",
  },
};

export default function AboutRoute() {
  return (
    <>
      <SeoJsonLd
        id="about-breadcrumb-schema"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]))}
      />
      <SeoJsonLd id="about-business-schema" json={toJsonLd(localBusinessSchema())} />
      <About />
    </>
  );
}

