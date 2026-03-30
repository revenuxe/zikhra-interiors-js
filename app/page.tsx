import type { Metadata } from "next";
import Index from "@/legacy-pages/Index";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  localBusinessSchema,
  organizationSchema,
  pageOpenGraph,
  toJsonLd,
  twitterSummaryLarge,
  websiteSchema,
  DEFAULT_OG_IMAGE_PATH,
} from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Luxury Interior Designers in Hyderabad",
  description:
    "Zikhra creates luxury and premium home interiors in Hyderabad with turnkey execution for villas, apartments, and modern residences.",
  alternates: { canonical: "/" },
  openGraph: pageOpenGraph({
    title: "Luxury Interior Designers in Hyderabad | Zikhra",
    description:
      "Premium interior design studio for bespoke luxury homes, modular kitchens, and complete interiors in Hyderabad.",
    path: "/",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Designing timeless luxury — Zikhra bespoke premium interiors Hyderabad",
  }),
  twitter: twitterSummaryLarge(
    "Luxury Interior Designers in Hyderabad | Zikhra",
    "Premium interior design studio for bespoke luxury homes, modular kitchens, and complete interiors in Hyderabad.",
    DEFAULT_OG_IMAGE_PATH,
  ),
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

