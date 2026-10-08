import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects-data";
import ProjectDetailView from "@/views/marketing/ProjectDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
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
  const title = `${project.title} - Pilgrimage Journeys in ${project.location}`;
  const description = project.description.slice(0, 160);
  const path = `/bangalore/journeys/${project.slug}`;
  return {
    title: seoTitle(title),
    description,
    alternates: { canonical: path },
    openGraph: pageOpenGraph({
      title,
      description,
      path,
      type: "article",
      imageUrl: project.heroImage ?? DEFAULT_OG_IMAGE_PATH,
      imageAlt: `${project.title} — illustrative travel itinerary ${project.location}`,
    }),
    twitter: twitterSummaryLarge(title, description, project.heroImage ?? DEFAULT_OG_IMAGE_PATH),
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <>
      <SeoJsonLd
        id={`project-breadcrumb-${project.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/bangalore/journeys" },
            { name: project.title, path: `/bangalore/journeys/${project.slug}` },
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
          about: "Premium travel planning project",
          url: absoluteUrl(`/bangalore/journeys/${project.slug}`),
        })}
      />
      <ProjectDetailView project={project} />
    </>
  );
}
