import type { Metadata } from "next";
import BangaloreHubView from "@/views/marketing/BangaloreHubView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";
import { absoluteUrl, breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

const title = "Luxury Interior Designers in Bangalore | Zikhra";
const description =
  "Premium home interiors and modular kitchens in Bangalore — Koramangala, Indiranagar, Whitefield, HSR Layout, and more. Book a free consultation with Zikhra for turnkey luxury execution.";

const keywords = [
  "interior designers Bangalore",
  "luxury home interiors Bangalore",
  "modular kitchen Bangalore",
  "Koramangala interior designers",
  "Whitefield home interiors",
  "HSR layout interior design",
  "Indiranagar interior designers",
  "Sarjapur road interiors",
  "turnkey interiors Bangalore",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: { canonical: "/bangalore" },
  openGraph: pageOpenGraph({
    title,
    description,
    path: "/bangalore",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Luxury interior designers in Bangalore — Zikhra",
  }),
  twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
};

export default function BangaloreHubPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bangalore neighbourhoods — Zikhra luxury interiors",
    itemListElement: bangaloreAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Interior designers in ${area.name}, Bangalore`,
      item: absoluteUrl(`/bangalore/${area.slug}`),
    })),
  };

  return (
    <>
      <SeoJsonLd
        id="bangalore-breadcrumb"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bangalore", path: "/bangalore" }]))}
      />
      <SeoJsonLd id="bangalore-area-itemlist" json={toJsonLd(itemList)} />
      <BangaloreHubView />
    </>
  );
}
