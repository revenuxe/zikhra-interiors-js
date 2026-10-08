import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectTypeBySlug, projectTypes } from "@/lib/project-types-data";
import PackageExplorer from "@/views/marketing/PackageExplorer";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getPublicTravelCatalogue } from "@/lib/travel-cms-server";
import { breadcrumbSchema, localServiceSchema, pageOpenGraph, seoTitle, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = true;
export const revalidate = 60;
const categoryMap: Record<string, string> = { umrah: "classic", "family-umrah": "family", "group-umrah": "family", "private-umrah": "private" };

export async function generateStaticParams() {
  const catalogue = await getPublicTravelCatalogue();
  return [...new Set([...projectTypes.map(item => item.slug), ...(catalogue?.packages.map(pkg => pkg.slug) || [])])].map(slug => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getProjectTypeBySlug(slug);
  const catalogue = await getPublicTravelCatalogue();
  const pkg = catalogue?.packages.find(pkg => pkg.slug === slug);
  if (!item && !pkg && catalogue) return { title: "Package not found", robots: { index: false } };
  const title = pkg ? `${pkg.name} from ${pkg.departure_city}` : item?.metaTitle || "Travel Packages from Bangalore";
  const description = pkg ? `${pkg.description}. ${pkg.destinations}. ${pkg.sharing}. Compare airline prices and departure batches; final availability confirmed by Zikhra.`.slice(0, 160) : item?.metaDesc || "Compare Zikhra travel packages, flights and departure batches. Contact our RT Nagar team for availability.";
  const path = `/bangalore/packages/${slug === "group-umrah" ? "family-umrah" : slug}`;
  return { title: seoTitle(title), description, alternates: { canonical: path }, openGraph: pageOpenGraph({ title, description, path, imageUrl: pkg?.image_url || item?.heroImage, imageAlt: pkg?.image_alt || item?.title }), twitter: twitterSummaryLarge(title, description, pkg?.image_url || item?.heroImage) };
}
export default async function PackageRoute({ params }: Props) {
  const { slug } = await params;
  const item = getProjectTypeBySlug(slug);
  const catalogue = await getPublicTravelCatalogue();
  const pkg = catalogue?.packages.find(pkg => pkg.slug === slug);
  if (!item && !pkg && catalogue) notFound();
  if (!item && !pkg) return <PackageExplorer initialPackageSlug={slug} />;
  const category = pkg ? catalogue!.categories.find(category => category.id === pkg.category_id)?.slug || "all" : categoryMap[slug] || "all";
  const title = pkg?.name || item!.title;
  const description = pkg?.description || item!.metaDesc;
  const path = `/bangalore/packages/${slug}`;
  return <>
    <SeoJsonLd id="package-breadcrumb" json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Packages", path: "/bangalore/packages" }, { name: title, path }]))} />
    <SeoJsonLd id="package-service" json={toJsonLd(localServiceSchema({ name: title, description, path, serviceType: "Travel package planning" }))} />
    <PackageExplorer initialCategory={category} initialPackageId={pkg?.id} initialCatalogue={catalogue} />
  </>;
}
