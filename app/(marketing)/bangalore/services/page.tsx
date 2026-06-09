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
  "Premium home interiors, modular kitchens, wardrobes, and renovation in Bangalore and Bengaluru — Koramangala, Whitefield, Indiranagar, HSR, and across the city.";

export const metadata: Metadata = {
  title,
  description,
  keywords: uniqueKeywords(BANGALORE_CORE_KEYWORDS, BANGALORE_SERVICE_KEYWORDS),
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
      <SeoJsonLd
        id="bangalore-services-webpage"
        json={toJsonLd(
          webPageSchema({
            name: title,
            description,
            path: "/bangalore/services",
            keywords: uniqueKeywords(BANGALORE_CORE_KEYWORDS, BANGALORE_SERVICE_KEYWORDS),
          }),
        )}
      />
      <SeoJsonLd
        id="bangalore-services-catalog"
        json={toJsonLd(
          serviceCatalogSchema(
            services.map((service) => ({
              name: `${service.title} in Bangalore`,
              description: service.description,
              path: `/bangalore/services/${service.id}`,
            })),
          ),
        )}
      />
      <ServicesView market="bangalore" />
    </>
  );
}
