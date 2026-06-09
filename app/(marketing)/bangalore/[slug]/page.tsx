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
  const title = `Best Interior Designer in ${area.name}, Bangalore | Zikhra`;
  const description = `Looking for the best interior designer in ${area.name}, Bangalore? Zikhra designs premium 2 BHK, 3 BHK, villa, modular kitchen, wardrobes, and turnkey home interiors with clear scope planning.`;
  const path = `/bangalore/${area.slug}`;
  const keywords = areaSeoKeywords(area.name);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: pageOpenGraph({
      title,
      description,
      path,
      imageUrl: DEFAULT_OG_IMAGE_PATH,
      imageAlt: `Best interior designer in ${area.name}, Bangalore - Zikhra`,
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
            name: `Interior designers in ${area.name}, Bangalore`,
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
            name: `Premium interior design in ${area.name}, Bangalore`,
            description: area.description.split(/\n\n+/)[0],
            path: `/bangalore/${area.slug}`,
            areaServed: [area.name, "Bangalore", "Bengaluru"],
            serviceType: "Residential interior design",
          }),
        )}
      />
      <AreaDetailView area={area} />
    </>
  );
}
