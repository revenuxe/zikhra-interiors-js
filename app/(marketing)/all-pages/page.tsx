import type { Metadata } from "next";
import AllPagesView from "@/views/marketing/AllPagesView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getStaticSiteIndexSections, type SiteIndexSection } from "@/lib/site-index-data";
import { sanityClient, sanityConfigured, sanityLiveFetchOptions } from "@/lib/sanity/client";
import { blogListQuery } from "@/lib/sanity/queries";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-dynamic";

const title = "All pages | Zikhra Luxury Interiors";
const description =
  "Full list of Zikhra website pages: interior design services, project types, portfolio, Hyderabad and Bangalore area pages, and blog posts.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/all-pages" },
  robots: { index: true, follow: true },
  openGraph: pageOpenGraph({
    title,
    description,
    path: "/all-pages",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra — all pages and sitemap",
  }),
  twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
};

type BlogListRow = { slug: string; title?: string };

export default async function AllPagesRoute() {
  const sections = getStaticSiteIndexSections();

  let blogSection: SiteIndexSection | null = null;
  if (sanityConfigured && sanityClient) {
    try {
      const posts: BlogListRow[] = await sanityClient.fetch(blogListQuery, {}, sanityLiveFetchOptions);
      if (posts.length > 0) {
        blogSection = {
          title: "Blog posts",
          description: "Articles and guides from the Zikhra blog.",
          links: posts.map((p) => ({
            label: p.title?.trim() ? p.title : p.slug,
            href: `/blog/${p.slug}`,
          })),
        };
      }
    } catch {
      // omit blog block if fetch fails
    }
  }

  const allSections: SiteIndexSection[] = blogSection ? [...sections, blogSection] : sections;

  return (
    <>
      <SeoJsonLd
        id="all-pages-breadcrumb"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "All pages", path: "/all-pages" }]))}
      />
      <AllPagesView sections={allSections} />
    </>
  );
}
