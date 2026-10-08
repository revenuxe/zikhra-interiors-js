import type { Metadata } from "next";
import PackageExplorer from "@/views/marketing/PackageExplorer";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getPublicTravelCatalogue } from "@/lib/travel-cms-server";
import { absoluteUrl, breadcrumbSchema, pageOpenGraph, seoTitle, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const revalidate = 60;
const title = "Umrah & Hajj Packages from Bangalore";
const description = "Compare published Umrah packages, airline options, prices, room sharing, and departure batches. Request a personalised quote from Zikhra in RT Nagar, Bangalore.";
export const metadata: Metadata = {
  title: seoTitle(title), description, alternates: { canonical: "/bangalore/packages" },
  openGraph: pageOpenGraph({ title, description, path: "/bangalore/packages" }),
  twitter: twitterSummaryLarge(title, description),
};
export default async function PackagesPage() {
  const catalogue = await getPublicTravelCatalogue();
  return <>
    <SeoJsonLd id="packages-breadcrumb" json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Packages", path: "/bangalore/packages" }]))} />
    {catalogue && <SeoJsonLd id="published-packages" json={toJsonLd({
      "@context": "https://schema.org", "@type": "ItemList", name: "Zikhra travel packages",
      itemListElement: catalogue.packages.map((pkg, index) => ({ "@type": "ListItem", position: index + 1, name: pkg.name, url: absoluteUrl(`/bangalore/packages/${pkg.slug}`) })),
    })} />}
    <PackageExplorer initialCatalogue={catalogue} />
  </>;
}
