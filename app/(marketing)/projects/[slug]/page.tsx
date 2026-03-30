import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects-data";
import ProjectDetailView from "@/views/marketing/ProjectDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, toJsonLd } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  const title = `${project.title} - Premium Interiors in ${project.location}`;
  const description = project.description.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return (
    <>
      <SeoJsonLd
        id={`project-breadcrumb-${project.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        )}
      />
      <SeoJsonLd
        id={`project-schema-${project.slug}`}
        json={toJsonLd({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          locationCreated: project.location,
          about: "Luxury interior design project",
          url: `https://zikhra.com/projects/${project.slug}`,
        })}
      />
      <ProjectDetailView project={project} />
    </>
  );
}
