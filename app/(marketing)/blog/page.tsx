import type { Metadata } from "next";
import { sanityClient, sanityConfigured } from "@/lib/sanity/client";
import { blogListQuery } from "@/lib/sanity/queries";
import BlogListView, { type BlogListItem } from "@/views/marketing/BlogListView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, toJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Luxury Interior Design Blog",
  description:
    "Read premium interior design insights, trends, and practical guides for luxury homes, modular kitchens, and elegant living spaces.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Luxury Interior Design Blog | Zikhra",
    description: "Expert insights on premium interiors, materials, layouts, and design trends.",
    url: "/blog",
  },
};

export default async function BlogPage() {
  const posts: BlogListItem[] =
    sanityConfigured && sanityClient
      ? await sanityClient.fetch(blogListQuery, {}, { cache: "no-store" })
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
          url: "https://zikhra.com/blog",
        })}
      />
      <BlogListView posts={posts} />
    </>
  );
}

