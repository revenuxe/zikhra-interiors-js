import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects-data";
import ProjectDetailView from "@/views/marketing/ProjectDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { applyMarketToCopy, projectDetailPath } from "@/lib/marketing-paths";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  const location = applyMarketToCopy(project.location, "bangalore");
  const title = `${project.title} — Premium Interiors | Bangalore & Bengaluru`;
  const description = applyMarketToCopy(project.description, "bangalore").slice(0, 160);
  const path = `/bangalore/projects/${project.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: pageOpenGraph({
      title,
      description,
      path,
      type: "article",
      imageUrl: project.heroImage ?? DEFAULT_OG_IMAGE_PATH,
      imageAlt: `${project.title} — luxury interior project ${location}`,
    }),
    twitter: twitterSummaryLarge(title, description, project.heroImage ?? DEFAULT_OG_IMAGE_PATH),
  };
}

export default function BangaloreProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return (
    <>
      <SeoJsonLd
        id={`bangalore-project-breadcrumb-${project.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bangalore", path: "/bangalore" },
            { name: "Projects", path: "/bangalore/projects" },
            { name: project.title, path: projectDetailPath("bangalore", project.slug) },
          ]),
        )}
      />
      <SeoJsonLd
        id={`bangalore-project-schema-${project.slug}`}
        json={toJsonLd({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: applyMarketToCopy(project.description, "bangalore"),
          locationCreated: applyMarketToCopy(project.location, "bangalore"),
          about: "Luxury interior design project — Bangalore funnel",
          url: `https://zikhra.com/bangalore/projects/${project.slug}`,
        })}
      />
      <ProjectDetailView project={project} market="bangalore" />
    </>
  );
}
