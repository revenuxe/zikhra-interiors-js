import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailView from "@/views/marketing/ServiceDetailView";
import { getServiceBySlug, services } from "@/lib/services-data";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  breadcrumbSchema,
  DEFAULT_OG_IMAGE_PATH,
  pageOpenGraph,
  SITE_URL,
  toJsonLd,
  twitterSummaryLarge,
} from "@/lib/seo";

type Props = {
  params: {
    slug: string;
  };
};

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  const canonicalPath = `/services/${params.slug}`;
  const title = `Luxury ${service.title} in Hyderabad`;
  const description = service.description.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: pageOpenGraph({
      title,
      description,
      path: canonicalPath,
      type: "article",
      imageUrl: service.image ?? DEFAULT_OG_IMAGE_PATH,
      imageAlt: `${service.title} — luxury interior design and turnkey services Hyderabad`,
    }),
    twitter: twitterSummaryLarge(title, description, service.image ?? DEFAULT_OG_IMAGE_PATH),
  };
}

export default function ServiceDetailRoute({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return (
    <>
      <SeoJsonLd
        id={`service-breadcrumb-${params.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${params.slug}` },
          ]),
        )}
      />
      <SeoJsonLd
        id={`service-schema-${params.slug}`}
        json={toJsonLd({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: "Hyderabad",
          provider: {
            "@type": "Organization",
            name: "Zikhra Luxury Interiors",
            url: SITE_URL,
          },
        })}
      />
      <ServiceDetailView service={service} />
    </>
  );
}

