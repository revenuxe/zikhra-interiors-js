import type { Metadata } from "next";
import ProjectsView from "@/views/marketing/ProjectsView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Premium Interior Projects in Hyderabad",
  description:
    "Browse premium interior design projects by Zikhra across villas, apartments, and modern homes in Hyderabad.",
  alternates: { canonical: "/projects" },
  openGraph: pageOpenGraph({
    title: "Premium Interior Projects in Hyderabad",
    description: "Discover Zikhra's high-end interior portfolio and turnkey project execution quality.",
    path: "/projects",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Premium interior design portfolio — Hyderabad residential projects",
  }),
  twitter: twitterSummaryLarge(
    "Premium Interior Projects in Hyderabad",
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
