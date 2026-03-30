import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolioBySlug } from "@/lib/portfolio-data";
import PortfolioDetailView from "@/views/marketing/PortfolioDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, toJsonLd } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function generateMetadata({ params }: Props): Metadata {
  const item = getPortfolioBySlug(params.slug);
  if (!item) return { title: "Portfolio Not Found" };
  const title = `${item.tagline} | Luxury Interior Portfolio`;
  const description = item.description.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical: `/portfolio/${item.slug}` },
    openGraph: {
      title,
      description,
      url: `/portfolio/${item.slug}`,
      type: "article",
    },
  };
}

export default function PortfolioDetailPage({ params }: Props) {
  const item = getPortfolioBySlug(params.slug);
  if (!item) notFound();
  return (
    <>
      <SeoJsonLd
        id={`portfolio-breadcrumb-${item.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/projects" },
            { name: item.title, path: `/portfolio/${item.slug}` },
          ]),
        )}
      />
      <PortfolioDetailView item={item} />
    </>
  );
}

