import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectTypeBySlug, projectTypes } from "@/lib/project-types-data";
import ProjectTypeDetailView from "@/views/marketing/ProjectTypeDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { applyMarketToCopy, projectTypeDetailPath } from "@/lib/marketing-paths";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return projectTypes.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getProjectTypeBySlug(params.slug);
  if (!item) return { title: "Project Type Not Found" };
  const title = `${applyMarketToCopy(item.metaTitle, "bangalore")} | Bangalore & Bengaluru`;
  const description = applyMarketToCopy(item.metaDesc, "bangalore");
  const path = `/bangalore/project-type/${item.slug}`;
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
      imageAlt: `${item.title} — premium interior design Bangalore Bengaluru`,
    }),
    twitter: twitterSummaryLarge(title, description, item.heroImage ?? DEFAULT_OG_IMAGE_PATH),
  };
}

export default function BangaloreProjectTypePage({ params }: Props) {
  const item = getProjectTypeBySlug(params.slug);
  if (!item) notFound();
  return (
    <>
      <SeoJsonLd
        id={`bangalore-project-type-breadcrumb-${item.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bangalore", path: "/bangalore" },
            { name: item.title, path: projectTypeDetailPath("bangalore", item.slug) },
          ]),
        )}
      />
      <ProjectTypeDetailView item={item} market="bangalore" />
    </>
  );
}
