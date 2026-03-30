import type { Metadata } from "next";

export const SITE_URL = "https://zikhra.com";
export const SITE_NAME = "Zikhra Luxury Interiors";
/** Served from `/public` for reliable social previews. */
export const DEFAULT_OG_IMAGE_PATH = "/og-image.webp";

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export const DEFAULT_OG_IMAGE = absoluteUrl(DEFAULT_OG_IMAGE_PATH);

export function resolveShareImageUrl(pathOrUrl: string | null | undefined): string {
  if (!pathOrUrl) return DEFAULT_OG_IMAGE;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  return absoluteUrl(pathOrUrl);
}

export function pageOpenGraph(input: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  imageUrl?: string | null;
  imageAlt?: string;
}): NonNullable<Metadata["openGraph"]> {
  const image = resolveShareImageUrl(input.imageUrl ?? DEFAULT_OG_IMAGE_PATH);
  const alt = input.imageAlt ?? input.title;
  return {
    type: input.type ?? "website",
    title: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    images: [{ url: image, width: 1200, height: 630, alt }],
  };
}

export function twitterSummaryLarge(
  title: string,
  description: string,
  imageUrl?: string | null,
): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [resolveShareImageUrl(imageUrl ?? DEFAULT_OG_IMAGE_PATH)],
  };
}

export function toJsonLd<T>(data: T): string {
  return JSON.stringify(data);
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: ["https://www.instagram.com/zikhra.interiors/"],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "InteriorDesignBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    email: "zikhraofficial@gmail.com",
    telephone: "+91 98862 85028",
    image: DEFAULT_OG_IMAGE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500033",
      addressCountry: "IN",
    },
    areaServed: ["Hyderabad", "Jubilee Hills", "Banjara Hills", "Gachibowli", "Kondapur", "HITEC City"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
