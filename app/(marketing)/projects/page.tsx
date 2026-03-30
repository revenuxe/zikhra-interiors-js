import type { Metadata } from "next";
import ProjectsView from "@/views/marketing/ProjectsView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Luxury Interior Projects in Hyderabad",
  description:
    "Browse premium and luxury interior design projects by Zikhra across villas, apartments, and modern homes in Hyderabad.",
  alternates: { canonical: "/projects" },
  openGraph: pageOpenGraph({
    title: "Luxury Interior Projects in Hyderabad",
    description: "Discover Zikhra's high-end interior portfolio and turnkey project execution quality.",
    path: "/projects",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Premium interior design portfolio — luxury Hyderabad residential projects",
  }),
  twitter: twitterSummaryLarge(
    "Luxury Interior Projects in Hyderabad",
    "Discover Zikhra's high-end interior portfolio and turnkey project execution quality.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default function ProjectsPage() {
  return (
    <>
      <SeoJsonLd
        id="projects-breadcrumb-schema"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }]))}
      />
      <ProjectsView />
    </>
  );
}
