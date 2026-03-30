import type { Metadata } from "next";
import ProjectsView from "@/views/marketing/ProjectsView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, toJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Luxury Interior Projects in Hyderabad",
  description:
    "Browse premium and luxury interior design projects by Zikhra across villas, apartments, and modern homes in Hyderabad.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Luxury Interior Projects in Hyderabad",
    description: "Discover Zikhra's high-end interior portfolio and turnkey project execution quality.",
    url: "/projects",
  },
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
