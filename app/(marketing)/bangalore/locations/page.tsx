import type { Metadata } from "next";
import LocationsView from "@/views/marketing/LocationsView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

const title = "Interior Design Locations in Bangalore | Zikhra Interiors";
const description = "Explore Zikhra interior design services across Koramangala, Indiranagar, Whitefield, HSR Layout, Jayanagar, Sarjapur Road, Electronic City, Hebbal, JP Nagar, and Bellandur.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/bangalore/locations" }, openGraph: pageOpenGraph({ title, description, path: "/bangalore/locations", imageUrl: DEFAULT_OG_IMAGE_PATH, imageAlt: "Interior design locations across Bangalore" }), twitter: twitterSummaryLarge(title, description, DEFAULT_OG_IMAGE_PATH) };

export default function LocationsPage() { return <><SeoJsonLd id="locations-breadcrumb" json={toJsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bangalore", path: "/bangalore" }, { name: "Locations", path: "/bangalore/locations" }]))} /><LocationsView /></>; }
