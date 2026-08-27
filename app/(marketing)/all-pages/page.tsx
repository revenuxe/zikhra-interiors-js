import type { Metadata } from "next";
import AllPagesView from "@/views/marketing/AllPagesView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getStaticSiteIndexSections, type SiteIndexSection } from "@/lib/site-index-data";
import { localBlogListItems } from "@/lib/local-blog-posts";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

const title = "All pages | Zikhra Interiors";
const description =
  "Full list of Zikhra website pages: interior design services, project types, portfolio, Bangalore area pages, and blog posts.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/all-pages" },
  robots: { index: false, follow: true },
  openGraph: pageOpenGraph({
    title,
    description,
    path: "/all-pages",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Zikhra — all pages and sitemap",
  }),
  twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
};

export default async function AllPagesRoute() {
  const sections = getStaticSiteIndexSections();

  let blogSection: SiteIndexSection | null = {
    title: "Blog posts",
    description: "Articles and pricing guides from the Zikhra blog.",
    links: localBlogListItems.map((p) => ({ label: p.title, href: `/blog/${p.slug}` })),
  };
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
