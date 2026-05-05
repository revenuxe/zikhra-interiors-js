import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolioBySlug, portfolioItems } from "@/lib/portfolio-data";
import PortfolioDetailView from "@/views/marketing/PortfolioDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) return { title: "Portfolio Not Found" };
  const title = `${item.tagline} | Premium Interior Portfolio`;
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
      imageAlt: `${item.title} — premium interior portfolio Hyderabad`,
    }),
    twitter: twitterSummaryLarge(title, description, item.heroImage ?? DEFAULT_OG_IMAGE_PATH),
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
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

