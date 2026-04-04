import type { Metadata } from "next";
import { sanityClient, sanityConfigured } from "@/lib/sanity/client";
import { blogListQuery } from "@/lib/sanity/queries";
import BlogListView, { type BlogListItem } from "@/views/marketing/BlogListView";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  absoluteUrl,
  breadcrumbSchema,
  DEFAULT_OG_IMAGE_PATH,
  pageOpenGraph,
  toJsonLd,
  twitterSummaryLarge,
} from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Luxury Interior Design Blog",
  description:
    "Read premium interior design insights, trends, and practical guides for luxury homes, modular kitchens, and elegant living spaces.",
  alternates: { canonical: "/blog" },
  openGraph: pageOpenGraph({
    title: "Luxury Interior Design Blog | Zikhra",
    description: "Expert insights on premium interiors, materials, layouts, and design trends.",
    path: "/blog",
    type: "website",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Interior design insights — luxury and premium home ideas from Zikhra Hyderabad",
  }),
  twitter: twitterSummaryLarge(
    "Luxury Interior Design Blog | Zikhra",
    "Expert insights on premium interiors, materials, layouts, and design trends.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default async function BlogPage() {
  const posts: BlogListItem[] =
    sanityConfigured && sanityClient
      ? await sanityClient.fetch(blogListQuery)
      : [];

  return (
    <>
      <SeoJsonLd
        id="blog-breadcrumb-schema"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]))}
      />
      <SeoJsonLd
        id="blog-collection-schema"
        json={toJsonLd({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Luxury Interior Design Blog",
          description: "Premium interior design tips, trends, and inspiration from Zikhra.",
          url: absoluteUrl("/blog"),
        })}
      />
      <BlogListView posts={posts} />
    </>
  );
}

