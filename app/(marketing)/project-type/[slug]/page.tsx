import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectTypeBySlug } from "@/lib/project-types-data";
import ProjectTypeDetailView from "@/views/marketing/ProjectTypeDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, toJsonLd } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function generateMetadata({ params }: Props): Metadata {
  const item = getProjectTypeBySlug(params.slug);
  if (!item) return { title: "Project Type Not Found" };
  const title = `${item.metaTitle} | Premium Interior Design`;
  const description = item.metaDesc;
  return {
    title,
    description,
    alternates: { canonical: `/project-type/${item.slug}` },
    openGraph: {
      title,
      description,
      url: `/project-type/${item.slug}`,
      type: "article",
    },
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

