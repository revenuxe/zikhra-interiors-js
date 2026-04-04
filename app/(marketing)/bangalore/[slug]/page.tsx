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
  const title = `Luxury Interior Designers in ${area.name}, Bangalore | Zikhra`;
  const description = `Premium turnkey home interiors in ${area.name}, Bangalore. ${area.tagline} Modular kitchens, wardrobes, and full-home luxury design — book a free consultation.`;
  const path = `/bangalore/${area.slug}`;
  const keywords = [
    `interior designers ${area.name}`,
    `${area.name} home interiors`,
    `luxury interiors ${area.name} Bangalore`,
    `modular kitchen ${area.name}`,
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
      imageAlt: `Luxury interior designers in ${area.name}, Bangalore — Zikhra`,
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
