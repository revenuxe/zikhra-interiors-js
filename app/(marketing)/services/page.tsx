import type { Metadata } from "next";
import ServicesView from "@/views/marketing/ServicesView";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  breadcrumbSchema,
  DEFAULT_OG_IMAGE_PATH,
  pageOpenGraph,
  serviceCatalogSchema,
  toJsonLd,
  twitterSummaryLarge,
  webPageSchema,
} from "@/lib/seo";
import { services } from "@/lib/services-data";
import { BANGALORE_CORE_KEYWORDS, BANGALORE_SERVICE_KEYWORDS, uniqueKeywords } from "@/lib/seo-keywords";

export const dynamic = "force-static";
export const revalidate = 86400;

const title = "Best Interior Designer in Bangalore for Interior Design Services | Zikhra";
const description =
  "Explore Zikhra's home interior services in Bangalore including 2 BHK interiors, full home interiors, modular kitchens, wardrobes, renovation, and premium upgrades.";

export const metadata: Metadata = {
  title,
  description,
  keywords: uniqueKeywords(BANGALORE_CORE_KEYWORDS, BANGALORE_SERVICE_KEYWORDS),
  alternates: { canonical: "/services" },
  openGraph: pageOpenGraph({
    title,
    description,
    path: "/services",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra interior design services and home interior packages in Bangalore",
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
      <SeoJsonLd
        id="services-webpage-schema"
        json={toJsonLd(webPageSchema({ name: title, description, path: "/services", keywords: uniqueKeywords(BANGALORE_CORE_KEYWORDS, BANGALORE_SERVICE_KEYWORDS) }))}
      />
      <SeoJsonLd
        id="services-catalog-schema"
        json={toJsonLd(serviceCatalogSchema(services.map((service) => ({
          name: service.title,
          description: service.description,
          path: `/services/${service.id}`,
        }))))}
      />
      <ServicesView />
    </>
  );
}
