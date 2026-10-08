import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";
import { portfolioItems } from "@/lib/portfolio-data";
import { projectTypes } from "@/lib/project-types-data";
import { absoluteUrl } from "@/lib/seo";
import { getPublicTravelCatalogue } from "@/lib/travel-cms-server";
import { localBlogPosts } from "@/lib/local-blog-posts";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/bangalore/travel-package-guide",
    "/umrah-package-guide-bangalore",
    "/family-umrah-package-guide-bangalore",
    "/blog",
    "/terms",
    "/privacy",
    "/bangalore/locations",
    "/bangalore/journeys",
    "/bangalore/packages",
  ];

  const catalogue = await getPublicTravelCatalogue();
  const contentUpdated = new Date("2026-10-08T00:00:00Z");
  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route || "/"),
      lastModified: contentUpdated,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : route === "/bangalore" ? 0.9 : 0.8,
    })),
    ...bangaloreAreas.map((a) => ({
      url: absoluteUrl(`/bangalore/${a.slug}`),
      lastModified: contentUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    })),
    {
      url: absoluteUrl("/bangalore/services"),
      lastModified: contentUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    ...services.filter(s => !["umrah-packages", "family-umrah", "group-umrah", "private-umrah"].includes(s.id)).map((s) => ({
      url: absoluteUrl(`/bangalore/services/${s.id}`),
      lastModified: contentUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.87,
    })),
    ...(catalogue?.packages || []).map(pkg => ({ url: absoluteUrl(`/bangalore/packages/${pkg.slug}`), lastModified: new Date(pkg.updated_at), changeFrequency: "weekly" as const, priority: 0.85 })),
    ...projectTypes.filter(p => p.slug !== "group-umrah").map((p) => ({
      url: absoluteUrl(`/bangalore/packages/${p.slug}`),
      lastModified: contentUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...portfolioItems.map((p) => ({
      url: absoluteUrl(`/bangalore/destinations/${p.slug}`),
      lastModified: contentUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.84,
    })),
    ...projects.map((p) => ({
      url: absoluteUrl(`/bangalore/journeys/${p.slug}`),
      lastModified: contentUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.84,
    })),
    ...localBlogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.publishedAt ? new Date(post.publishedAt) : contentUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
  ];
}

