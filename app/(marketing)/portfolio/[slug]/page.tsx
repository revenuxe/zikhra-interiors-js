import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolioBySlug, portfolioItems } from "@/lib/portfolio-data";
import PortfolioDetailView from "@/views/marketing/PortfolioDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getPortfolioBySlug(params.slug);
  if (!item) return { title: "Portfolio Not Found" };
  const title = `${item.tagline} | Luxury Interior Portfolio`;
  const description = item.description.slice(0, 160);
  const path = `/portfolio/${item.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: pageOpenGraph({
      title,
      description,
      path,
      type: "article",
      imageUrl: item.heroImage ?? DEFAULT_OG_IMAGE_PATH,
      imageAlt: `${item.title} — luxury interior portfolio Hyderabad`,
    }),
    twitter: twitterSummaryLarge(title, description, item.heroImage ?? DEFAULT_OG_IMAGE_PATH),
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

