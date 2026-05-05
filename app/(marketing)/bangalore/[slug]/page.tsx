import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bangaloreAreas, getBangaloreAreaBySlug } from "@/lib/bangalore-areas-data";
import AreaDetailView from "@/views/marketing/AreaDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return bangaloreAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = getBangaloreAreaBySlug(params.slug);
  if (!area) return { title: "Area Not Found" };
  const title = `Best Interior Designer in ${area.name}, Bangalore | Zikhra`;
  const description = `Looking for the best interior designer in ${area.name}, Bangalore? Zikhra designs premium 2 BHK, 3 BHK, villa, modular kitchen, and turnkey home interiors with clear scope planning.`;
  const path = `/bangalore/${area.slug}`;
  const keywords = [
    `interior designers ${area.name}`,
    `best interior designer ${area.name}`,
    `best interior designers in ${area.name} Bangalore`,
    `${area.name} home interiors`,
    `2 BHK interiors ${area.name}`,
    `3 BHK interiors ${area.name}`,
    `modular kitchen ${area.name}`,
    `interior design cost ${area.name}`,
    "Bangalore interior design company",
  ];
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

export default function BangaloreAreaPage({ params }: Props) {
  const area = getBangaloreAreaBySlug(params.slug);
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
      <AreaDetailView area={area} />
    </>
  );
}
