import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailView from "@/views/marketing/ServiceDetailView";
import { getServiceBySlug, services } from "@/lib/services-data";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  breadcrumbSchema,
  DEFAULT_OG_IMAGE_PATH,
  localServiceSchema,
  pageOpenGraph,
  toJsonLd,
  twitterSummaryLarge,
} from "@/lib/seo";
import { serviceSeoKeywords } from "@/lib/seo-keywords";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  const canonicalPath = `/services/${slug}`;
  const title = `Best Interior Designer in Bangalore for ${service.title} | Zikhra Interiors`;
  const description = service.description.slice(0, 160);
  return {
    title,
    description,
    keywords: serviceSeoKeywords(service.title),
    alternates: { canonical: canonicalPath },
    openGraph: pageOpenGraph({
      title,
      description,
      path: canonicalPath,
      type: "article",
      imageUrl: service.image ?? DEFAULT_OG_IMAGE_PATH,
      imageAlt: `${service.title} interior design and turnkey services in Bangalore`,
    }),
    twitter: twitterSummaryLarge(title, description, service.image ?? DEFAULT_OG_IMAGE_PATH),
  };
}

export default async function ServiceDetailRoute({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <>
      <SeoJsonLd
        id={`service-breadcrumb-${slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${slug}` },
          ]),
        )}
      />
      <SeoJsonLd
        id={`service-schema-${slug}`}
        json={toJsonLd(
          localServiceSchema({
            name: `${service.title} in Bangalore`,
            description: service.description,
            path: `/services/${slug}`,
            serviceType: service.title,
          }),
        )}
      />
      <ServiceDetailView service={service} />
    </>
  );
}

