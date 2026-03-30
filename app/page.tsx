import type { Metadata } from "next";
import Index from "@/legacy-pages/Index";
import SeoJsonLd from "@/components/SeoJsonLd";
import { localBusinessSchema, organizationSchema, toJsonLd, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Luxury Interior Designers in Hyderabad",
  description:
    "Zikhra creates luxury and premium home interiors in Hyderabad with turnkey execution for villas, apartments, and modern residences.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Luxury Interior Designers in Hyderabad | Zikhra",
    description:
      "Premium interior design studio for bespoke luxury homes, modular kitchens, and complete interiors in Hyderabad.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Designers in Hyderabad | Zikhra",
    description:
      "Premium interior design studio for bespoke luxury homes, modular kitchens, and complete interiors in Hyderabad.",
  },
};

export default function HomePage() {
  return (
    <>
      <SeoJsonLd id="home-org-schema" json={toJsonLd(organizationSchema())} />
      <SeoJsonLd id="home-local-schema" json={toJsonLd(localBusinessSchema())} />
      <SeoJsonLd id="home-website-schema" json={toJsonLd(websiteSchema())} />
      <Index />
    </>
  );
}

