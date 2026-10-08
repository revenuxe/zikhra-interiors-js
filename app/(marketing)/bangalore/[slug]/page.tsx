import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bangaloreAreas, getBangaloreAreaBySlug } from "@/lib/bangalore-areas-data";
import AreaDetailView from "@/views/marketing/AreaDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  breadcrumbSchema,
  DEFAULT_OG_IMAGE_PATH,
  localServiceSchema,
  pageOpenGraph,
  toJsonLd,
  twitterSummaryLarge,
  webPageSchema,
} from "@/lib/seo";
import { areaSeoKeywords } from "@/lib/seo-keywords";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return bangaloreAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getBangaloreAreaBySlug(slug);
  if (!area) return { title: "Area Not Found" };
  const title = `Umrah & Hajj Tours from ${area.name}, Bangalore | Zikhra`;
  const description = `Explore Umrah packages and Hajj guidance from ${area.name}, Bangalore. Compare departures and flights with Zikhra, based in RT Nagar.`;
  const path = `/bangalore/${area.slug}`;
  const keywords = areaSeoKeywords(area.name);
  return {
    title: seoTitle(title),
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: pageOpenGraph({
      title,
      description,
      path,
      imageUrl: DEFAULT_OG_IMAGE_PATH,
      imageAlt: `Umrah & travel enquiries from ${area.name}, Bangalore - Zikhra`,
    }),
    twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
  };
}

export default async function BangaloreAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getBangaloreAreaBySlug(slug);
  if (!area) notFound();
  return (
    <>
      <SeoJsonLd
        id={`bangalore-area-breadcrumb-${area.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bangalore", path: "/bangalore" },
            { name: area.name, path: `/bangalore/${area.slug}` },
          ]),
        )}
      />
      <SeoJsonLd
        id={`bangalore-area-webpage-${area.slug}`}
        json={toJsonLd(
          webPageSchema({
            name: `Umrah & Hajj Tours from ${area.name}, Bangalore`,
            description: area.description.split(/\n\n+/)[0],
            path: `/bangalore/${area.slug}`,
            keywords: areaSeoKeywords(area.name),
          }),
        )}
      />
      <SeoJsonLd
        id={`bangalore-area-service-${area.slug}`}
        json={toJsonLd(
          localServiceSchema({
            name: `Umrah & Hajj travel from ${area.name}, Bangalore`,
            description: area.description.split(/\n\n+/)[0],
            path: `/bangalore/${area.slug}`,
            areaServed: [area.name, "Bangalore", "Bengaluru"],
            serviceType: "Umrah and Hajj travel planning",
          }),
        )}
      />
      <AreaDetailView area={area} />
    </>
  );
}
