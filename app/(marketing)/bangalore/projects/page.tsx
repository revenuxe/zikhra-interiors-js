import type { Metadata } from "next";
import ProjectsView from "@/views/marketing/ProjectsView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

const title = "Luxury Interior Projects in Bangalore & Bengaluru | Zikhra";
const description =
  "Browse premium and luxury interior design projects by Zikhra across villas, apartments, and modern homes in Bangalore — same craftsmanship as our Hyderabad studio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/bangalore/projects" },
  openGraph: pageOpenGraph({
    title,
    description,
    path: "/bangalore/projects",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Premium interior design portfolio — luxury Bangalore residential projects by Zikhra",
  }),
  twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
};

export default function BangaloreProjectsPage() {
  return (
    <>
      <SeoJsonLd
        id="bangalore-projects-breadcrumb-schema"
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bangalore", path: "/bangalore" },
            { name: "Projects", path: "/bangalore/projects" },
          ]),
        )}
      />
      <ProjectsView market="bangalore" />
    </>
  );
}
