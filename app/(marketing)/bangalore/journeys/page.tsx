import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import ProjectsView from "@/views/marketing/ProjectsView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";
import { BANGALORE_CORE_KEYWORDS, BANGALORE_SERVICE_KEYWORDS, uniqueKeywords } from "@/lib/seo-keywords";

export const dynamic = "force-static";
export const revalidate = 86400;

const title = "Umrah & Travel Itineraries in Bangalore | Zikhra Tours & Travels";
const description =
  "Explore illustrative Umrah and family travel itineraries from Bangalore. Request current dates, availability, and a personalised quotation.";

export const metadata: Metadata = {
  title: seoTitle(title),
  description,
  keywords: uniqueKeywords(
    [
      "travel planning projects Bangalore",
      "Umrah travel portfolio Bangalore",
      "illustrative itineraries Bangalore",
      "private Umrah itineraries Bangalore",
      "family Umrah itineraries Bangalore",
    ],
    BANGALORE_CORE_KEYWORDS,
    BANGALORE_SERVICE_KEYWORDS,
  ),
  alternates: { canonical: "/bangalore/journeys" },
  openGraph: pageOpenGraph({
    title,
    description,
    path: "/bangalore/journeys",
    imageUrl: DEFAULT_OG_IMAGE_PATH,
    imageAlt: "Illustrative Umrah and travel itineraries from Bangalore",
  }),
  twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH),
};

export default function BangaloreProjectsPage() {
  return (
    <>
      <SeoJsonLd
        id="bangalore-projects-breadcrumb-schema"
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bangalore", path: "/bangalore" },
            { name: "Projects", path: "/bangalore/journeys" },
          ]),
        )}
      />
      <ProjectsView market="bangalore" />
    </>
  );
}
