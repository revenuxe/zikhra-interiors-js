import type { Metadata } from "next";
import CityLandingPage from "@/views/marketing/CityLandingPage";
import SeoJsonLd from "@/components/SeoJsonLd";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";
import {
  absoluteUrl,
  breadcrumbSchema,
  DEFAULT_OG_IMAGE_PATH,
  localBusinessSchema,
  organizationSchema,
  pageOpenGraph,
  toJsonLd,
  twitterSummaryLarge,
  websiteSchema,
  webPageSchema,
} from "@/lib/seo";
import {
  BANGALORE_CORE_KEYWORDS,
  BANGALORE_COST_KEYWORDS,
  BANGALORE_NEIGHBOURHOODS,
  BANGALORE_SERVICE_KEYWORDS,
  uniqueKeywords,
} from "@/lib/seo-keywords";

export const dynamic = "force-static";
export const revalidate = 86400;

const title = "Best Interior Designer in Bangalore | Zikhra";
const description =
  "Zikhra designs premium 2 BHK, 3 BHK, villa, modular kitchen, and turnkey home interiors in Bangalore. Serving Koramangala, Indiranagar, Whitefield, HSR Layout, and more.";

const keywords = uniqueKeywords(
  BANGALORE_CORE_KEYWORDS,
  BANGALORE_SERVICE_KEYWORDS,
  BANGALORE_COST_KEYWORDS,
  BANGALORE_NEIGHBOURHOODS.map((area) => `${area} interior designers`),
);

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
    imageAlt: "Best interior designer in Bangalore - Zikhra",
  }),
  twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
};

export default function BangaloreHubPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bangalore neighbourhoods - Zikhra premium interiors",
    itemListElement: bangaloreAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Interior designers in ${area.name}, Bangalore`,
      item: absoluteUrl(`/bangalore/${area.slug}`),
    })),
  };

  return (
    <>
      <SeoJsonLd id="bangalore-org-schema" json={toJsonLd(organizationSchema())} />
      <SeoJsonLd id="bangalore-local-schema" json={toJsonLd(localBusinessSchema())} />
      <SeoJsonLd id="bangalore-website-schema" json={toJsonLd(websiteSchema())} />
      <SeoJsonLd id="bangalore-webpage-schema" json={toJsonLd(webPageSchema({ name: title, description, path: "/bangalore", keywords }))} />
      <SeoJsonLd
        id="bangalore-breadcrumb"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bangalore", path: "/bangalore" }]))}
      />
      <SeoJsonLd id="bangalore-area-itemlist" json={toJsonLd(itemList)} />
      <CityLandingPage market="bangalore" />
    </>
  );
}
