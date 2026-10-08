import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import ProjectsView from "@/views/marketing/ProjectsView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: seoTitle("Umrah & Travel Itineraries in Bangalore"),
  description:
    "Explore illustrative Umrah and family travel itineraries from Bangalore. Request current dates, availability, and a personalised quotation.",
  alternates: { canonical: "/bangalore/journeys" },
  openGraph: pageOpenGraph({
    title: "Umrah & Travel Itineraries in Bangalore",
    description: "Explore itinerary options for individuals, families, and private groups with Zikhra Tours & Travels.",
    path: "/bangalore/journeys",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Illustrative Umrah and travel itineraries from Bangalore",
  }),
  twitter: twitterSummaryLarge(
    "Umrah & Travel Itineraries in Bangalore",
    "Explore itinerary options for individuals, families, and private groups with Zikhra Tours & Travels.",
    DEFAULT_OG_IMAGE_PATH,
  ),
};

export default function ProjectsPage() {
  return (
    <>
      <SeoJsonLd
        id="projects-breadcrumb-schema"
        json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/journeys" }]))}
      />
      <ProjectsView />
    </>
  );
}
