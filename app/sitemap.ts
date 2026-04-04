import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";
import { areas } from "@/lib/areas-data";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";
import { portfolioItems } from "@/lib/portfolio-data";
import { projectTypes } from "@/lib/project-types-data";
import { absoluteUrl } from "@/lib/seo";
import { sanityClient, sanityConfigured } from "@/lib/sanity/client";
import { blogSitemapQuery } from "@/lib/sanity/queries";

type BlogSitemapItem = { slug: string; _updatedAt?: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/projects",
    "/blog",
    "/terms",
    "/privacy",
    "/thank-you",
    "/bangalore",
    "/bangalore/projects",
    "/all-pages",
  ];

  const now = new Date();
  let blogItems: BlogSitemapItem[] = [];
  if (sanityConfigured && sanityClient) {
    try {
      blogItems = await sanityClient.fetch(blogSitemapQuery);
    } catch (error) {
      // Keep sitemap available even if Sanity is temporarily unreachable.
      console.error("Sitemap blog fetch failed:", error);
    }
  }

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : route === "/bangalore" ? 0.9 : 0.8,
    })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.id}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...projects.map((p) => ({
      url: absoluteUrl(`/projects/${p.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...areas.map((a) => ({
      url: absoluteUrl(`/area/${a.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...bangaloreAreas.map((a) => ({
      url: absoluteUrl(`/bangalore/${a.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    })),
    {
      url: absoluteUrl("/bangalore/services"),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    ...services.map((s) => ({
      url: absoluteUrl(`/bangalore/services/${s.id}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.87,
    })),
    ...projectTypes.map((p) => ({
      url: absoluteUrl(`/bangalore/project-type/${p.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...portfolioItems.map((p) => ({
      url: absoluteUrl(`/bangalore/portfolio/${p.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.84,
    })),
    ...projects.map((p) => ({
      url: absoluteUrl(`/bangalore/projects/${p.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.84,
    })),
    ...portfolioItems.map((p) => ({
      url: absoluteUrl(`/portfolio/${p.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projectTypes.map((p) => ({
      url: absoluteUrl(`/project-type/${p.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogItems.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post._updatedAt ? new Date(post._updatedAt) : now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
  ];
}

