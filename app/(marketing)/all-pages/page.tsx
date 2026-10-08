import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import AllPagesView from "@/views/marketing/AllPagesView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getStaticSiteIndexSections, type SiteIndexSection } from "@/lib/site-index-data";
import { localBlogListItems } from "@/lib/local-blog-posts";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";
import { getPublicTravelCatalogue } from "@/lib/travel-cms-server";

export const revalidate = 60;

const title = "All pages | Zikhra Tours & Travels";
const description =
  "Browse Zikhra travel packages, destinations, services, Bangalore areas, and travel articles.";

export const metadata: Metadata = {
  title: seoTitle(title),
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
  const catalogue = await getPublicTravelCatalogue();
  if (catalogue?.packages.length) sections.splice(1, 0, { title: "Published packages", links: catalogue.packages.map(pkg => ({ label: pkg.name, href: `/bangalore/packages/${pkg.slug}` })) });

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
