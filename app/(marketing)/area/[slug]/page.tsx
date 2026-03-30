import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAreaBySlug } from "@/lib/areas-data";
import AreaDetailView from "@/views/marketing/AreaDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, toJsonLd } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function generateMetadata({ params }: Props): Metadata {
  const area = getAreaBySlug(params.slug);
  if (!area) return { title: "Area Not Found" };
  const title = `Luxury Interior Designers in ${area.name} | Zikhra`;
  const description = `Premium interior design services in ${area.name}, Hyderabad. Book a free consultation for high-end home interiors with Zikhra.`;
  return {
    title,
    description,
    alternates: { canonical: `/area/${area.slug}` },
    openGraph: {
      title,
      description,
      url: `/area/${area.slug}`,
    },
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
