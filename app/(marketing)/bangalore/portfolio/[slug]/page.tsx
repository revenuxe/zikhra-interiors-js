import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolioBySlug, portfolioItems } from "@/lib/portfolio-data";
import PortfolioDetailView from "@/views/marketing/PortfolioDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { applyMarketToCopy, portfolioDetailPath } from "@/lib/marketing-paths";
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
  const desc = applyMarketToCopy(item.description, "bangalore").slice(0, 160);
  const title = `${applyMarketToCopy(item.tagline, "bangalore")} | Bangalore & Bengaluru`;
  const path = `/bangalore/portfolio/${item.slug}`;
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: pageOpenGraph({
      title,
      description: desc,
      path,
      type: "article",
      imageUrl: item.heroImage ?? DEFAULT_OG_IMAGE_PATH,
      imageAlt: `${item.title} — premium interior portfolio Bangalore Bengaluru`,
    }),
    twitter: twitterSummaryLarge(title, desc, item.heroImage ?? DEFAULT_OG_IMAGE_PATH),
  };
}

export default async function BangalorePortfolioPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) notFound();
  return (
    <>
      <SeoJsonLd
        id={`bangalore-portfolio-breadcrumb-${item.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bangalore", path: "/bangalore" },
            { name: item.title, path: portfolioDetailPath("bangalore", item.slug) },
          ]),
        )}
      />
      <PortfolioDetailView item={item} market="bangalore" />
    </>
  );
}
