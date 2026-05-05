import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, getAreaBySlug } from "@/lib/areas-data";
import AreaDetailView from "@/views/marketing/AreaDetailView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = getAreaBySlug(params.slug);
  if (!area) return { title: "Area Not Found" };
  const title = `Best Interior Designer in ${area.name}, Hyderabad | Zikhra`;
  const description = `Looking for the best interior designer in ${area.name}, Hyderabad? Zikhra designs premium 2 BHK, 3 BHK, villa, modular kitchen, and turnkey home interiors with clear scope planning.`;
  const path = `/area/${area.slug}`;
  const keywords = [
    `interior designers ${area.name}`,
    `best interior designer ${area.name}`,
    `best interior designers in ${area.name} Hyderabad`,
    `${area.name} home interiors Hyderabad`,
    `2 BHK interiors ${area.name}`,
    `3 BHK interiors ${area.name}`,
    `modular kitchen ${area.name}`,
    `interior design cost ${area.name}`,
    "Hyderabad interior design company",
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
      imageAlt: `Best interior designer in ${area.name}, Hyderabad - Zikhra`,
    }),
    twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
  };
}

export default function AreaDetailPage({ params }: Props) {
  const area = getAreaBySlug(params.slug);
  if (!area) notFound();
  return (
    <>
      <SeoJsonLd
        id={`area-breadcrumb-${area.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas", path: "/services" },
            { name: area.name, path: `/area/${area.slug}` },
          ]),
        )}
      />
      <AreaDetailView area={area} />
    </>
  );
}
