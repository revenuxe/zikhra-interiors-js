import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailView from "@/views/marketing/ServiceDetailView";
import { getServiceBySlug, services } from "@/lib/services-data";
import SeoJsonLd from "@/components/SeoJsonLd";
import { applyMarketToCopy, serviceDetailPath, servicesIndexPath } from "@/lib/marketing-paths";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  const canonicalPath = `/bangalore/services/${params.slug}`;
  const title = `Luxury ${service.title} in Bangalore & Bengaluru | Zikhra`;
  const description = applyMarketToCopy(service.description, "bangalore").slice(0, 160);

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
      imageAlt: `${service.title} — luxury interior design Bangalore Bengaluru`,
    }),
    twitter: twitterSummaryLarge(title, description, service.image ?? DEFAULT_OG_IMAGE_PATH),
  };
}

export default function BangaloreServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <SeoJsonLd
        id={`bangalore-service-breadcrumb-${params.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bangalore", path: "/bangalore" },
            { name: "Services", path: servicesIndexPath("bangalore") },
            { name: service.title, path: serviceDetailPath("bangalore", params.slug) },
          ]),
        )}
      />
      <SeoJsonLd
        id={`bangalore-service-schema-${params.slug}`}
        json={toJsonLd({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: applyMarketToCopy(service.description, "bangalore"),
          areaServed: ["Bangalore", "Bengaluru"],
          provider: {
            "@type": "Organization",
            name: "Zikhra Luxury Interiors",
            url: "https://zikhra.com",
          },
        })}
      />
      <ServiceDetailView service={service} market="bangalore" />
    </>
  );
}
