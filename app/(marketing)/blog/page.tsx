import type { Metadata } from "next";
import { sanityClient, sanityConfigured, sanityLiveFetchOptions, skipSanityDuringBuild } from "@/lib/sanity/client";
import { blogListQuery } from "@/lib/sanity/queries";
import { localBlogListItems } from "@/lib/local-blog-posts";
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

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Interior Design Cost & Planning Blog",
  description:
    "Read Zikhra's interior design cost guides, 2 BHK and 3 BHK pricing advice, modular kitchen planning tips, and premium home interior insights.",
  alternates: { canonical: "/blog" },
  openGraph: pageOpenGraph({
    title: "Interior Design Cost & Planning Blog | Zikhra",
    description: "Pricing guides and expert insights on premium interiors, materials, layouts, and design trends.",
    path: "/blog",
    type: "website",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Interior design cost and planning insights from Zikhra",
  }),
  twitter: twitterSummaryLarge(
    "Interior Design Cost & Planning Blog | Zikhra",
    "Pricing guides and expert insights on premium interiors, materials, layouts, and design trends.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default async function BlogPage() {
  const sanityPosts: BlogListItem[] =
    sanityConfigured && sanityClient && !skipSanityDuringBuild
      ? await sanityClient.fetch(blogListQuery, {}, sanityLiveFetchOptions)
      : [];
  const localSlugs = new Set(localBlogListItems.map((post) => post.slug));
  const posts = [...localBlogListItems, ...sanityPosts.filter((post) => !localSlugs.has(post.slug))];

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
          name: "Interior Design Cost & Planning Blog",
          description: "Interior pricing guides, premium design tips, and planning resources from Zikhra.",
          url: absoluteUrl("/blog"),
        })}
      />
      <BlogListView posts={posts} />
    </>
  );
}

