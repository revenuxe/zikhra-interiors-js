import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects-data";
import ProjectDetailView from "@/views/marketing/ProjectDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { projectDetailPath } from "@/lib/marketing-paths";
import { getProjectDisplayFields } from "@/lib/project-display";
import {
  absoluteUrl,
  breadcrumbSchema,
  DEFAULT_OG_IMAGE_PATH,
  pageOpenGraph,
  toJsonLd,
  twitterSummaryLarge,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  const { location, description: body } = getProjectDisplayFields(project, "bangalore");
  const title = `${project.title} — Premium Interiors | Bangalore & Bengaluru`;
  const description = body.slice(0, 160);
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
      imageAlt: `${project.title} — premium interior project ${location}`,
    }),
    twitter: twitterSummaryLarge(title, description, project.heroImage ?? DEFAULT_OG_IMAGE_PATH),
  };
}

export default async function BangaloreProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const display = getProjectDisplayFields(project, "bangalore");
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
          description: display.description,
          locationCreated: display.location,
          about: "Premium interior design project — Bangalore funnel",
          url: absoluteUrl(`/bangalore/projects/${project.slug}`),
        })}
      />
      <ProjectDetailView project={project} market="bangalore" />
    </>
  );
}
