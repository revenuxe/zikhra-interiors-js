import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: seoTitle("Travel Package Guide & Planning Blog"),
  description:
    "Read Zikhra's travel package costs guides, Umrah and Family Umrah pricing advice, Hajj enquiry planning tips, and premium Umrah travel insights.",
  alternates: { canonical: "/blog" },
  openGraph: pageOpenGraph({
    title: "Travel Package Guide & Planning Blog | Zikhra",
    description: "Travel checklists, itinerary planning, and practical preparation for Umrah and family journeys.",
    path: "/blog",
    type: "website",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Umrah and travel planning notes from Zikhra",
  }),
  twitter: twitterSummaryLarge(
    "Travel Package Guide & Planning Blog | Zikhra",
    "Travel checklists, itinerary planning, and practical preparation for Umrah and family journeys.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default async function BlogPage() {
  const posts: BlogListItem[] = localBlogListItems;

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
          name: "Travel Package Guide & Planning Blog",
          description: "Umrah checklists, family travel notes, and Hajj enquiry preparation from Zikhra.",
          url: absoluteUrl("/blog"),
        })}
      />
      <BlogListView posts={posts} />
    </>
  );
}

