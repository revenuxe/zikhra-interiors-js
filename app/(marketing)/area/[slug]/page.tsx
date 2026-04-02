import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, getAreaBySlug } from "@/lib/areas-data";
import AreaDetailView from "@/views/marketing/AreaDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = getAreaBySlug(params.slug);
  if (!area) return { title: "Area Not Found" };
  const title = `Luxury Interior Designers in ${area.name} | Zikhra`;
  const description = `Premium interior design services in ${area.name}, Hyderabad. Book a free consultation for high-end home interiors with Zikhra.`;
  const path = `/area/${area.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: pageOpenGraph({
      title,
      description,
      path,
      imageUrl: DEFAULT_OG_IMAGE_PATH,
      imageAlt: `Luxury interior designers in ${area.name}, Hyderabad — Zikhra`,
    }),
    twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
  };
}

export default function AreaDetailPage({ params }: Props) {
  const area = getAreaBySlug(params.slug);
  if (!area) notFound();
  return (
    <>
      <SeoJsonLd
        id={`area-breadcrumb-${area.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas", path: "/services" },
            { name: area.name, path: `/area/${area.slug}` },
          ]),
        )}
      />
      <AreaDetailView area={area} />
    </>
  );
}
