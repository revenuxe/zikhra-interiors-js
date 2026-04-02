import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectTypeBySlug, projectTypes } from "@/lib/project-types-data";
import ProjectTypeDetailView from "@/views/marketing/ProjectTypeDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
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
  const title = `${item.metaTitle} | Premium Interior Design`;
  const description = item.metaDesc;
  const path = `/project-type/${item.slug}`;
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
      imageAlt: `${item.title} — premium ${item.slug} interior design Hyderabad`,
    }),
    twitter: twitterSummaryLarge(title, description, item.heroImage ?? DEFAULT_OG_IMAGE_PATH),
  };
}

export default function ProjectTypePage({ params }: Props) {
  const item = getProjectTypeBySlug(params.slug);
  if (!item) notFound();
  return (
    <>
      <SeoJsonLd
        id={`project-type-breadcrumb-${item.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Project Types", path: "/projects" },
            { name: item.title, path: `/project-type/${item.slug}` },
          ]),
        )}
      />
      <ProjectTypeDetailView item={item} />
    </>
  );
}

