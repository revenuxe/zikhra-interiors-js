import type { Metadata } from "next";
import Contact from "@/legacy-pages/Contact";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, localBusinessSchema, toJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Contact Luxury Interior Designers",
  description:
    "Book a free consultation with Zikhra for premium and luxury interior design in Hyderabad, including turnkey home interiors and modular kitchens.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Zikhra Luxury Interiors",
    description: "Speak with Hyderabad's premium interior design team for your villa or apartment interiors.",
    url: "/contact",
  },
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

