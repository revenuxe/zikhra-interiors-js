import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";
import { portfolioItems } from "@/lib/portfolio-data";
import { projectTypes } from "@/lib/project-types-data";
import { absoluteUrl } from "@/lib/seo";
import { localBlogPosts } from "@/lib/local-blog-posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/bangalore/interior-design-cost",
    "/2bhk-interior-design-cost-bangalore",
    "/3bhk-interior-design-cost-bangalore",
    "/blog",
    "/terms",
    "/privacy",
    "/bangalore",
    "/bangalore/projects",
  ];

  const now = new Date();
  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : route === "/bangalore" ? 0.9 : 0.8,
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
    ...localBlogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
  ];
}

