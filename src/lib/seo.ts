import type { Metadata } from "next";

/**
 * Must match the final URL after hosting redirects. Apex zikhra.com 301s to www on Vercel — canonicals must use www
 * or Ahrefs/Google flag "canonical points to redirect".
 */
function resolveSiteUrl(): string {
  const raw = typeof process.env.NEXT_PUBLIC_SITE_URL === "string" ? process.env.NEXT_PUBLIC_SITE_URL.trim() : "";
  const fallback = "https://www.zikhra.com";
  if (!raw || !/^https?:\/\//i.test(raw)) return fallback;

  try {
    const url = new URL(raw);
    const host = url.hostname.toLowerCase();
    // Keep one canonical host for SEO consistency.
    if (host === "zikhra.com" || host === "www.zikhra.com") {
      return `https://www.zikhra.com${url.pathname === "/" ? "" : url.pathname}`.replace(/\/$/, "");
    }
    if (url.protocol === "http:") url.protocol = "https:";
    return url.toString().replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = resolveSiteUrl();
export const SITE_NAME = "Zikhra Interiors";
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
    telephone: "9886579923",
    image: DEFAULT_OG_IMAGE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560034",
      addressCountry: "IN",
    },
    areaServed: [
      "Bangalore",
      "Koramangala",
      "Indiranagar",
      "Whitefield",
      "HSR Layout",
      "Electronic City",
      "Sarjapur Road",
      "Hebbal",
      "Bellandur",
      "JP Nagar",
    ],
  };
}

export function webPageSchema(input: { name: string; description: string; path: string; keywords?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    keywords: input.keywords?.join(", "),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function localServiceSchema(input: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType ?? "Interior design",
    description: input.description,
    url: absoluteUrl(input.path),
    areaServed: (input.areaServed ?? ["Bangalore", "Bengaluru"]).map((name) => ({
      "@type": "Place",
      name,
    })),
    provider: {
      "@type": "InteriorDesignBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: "9886579923",
      email: "zikhraofficial@gmail.com",
    },
  };
}

export function serviceCatalogSchema(items: Array<{ name: string; path: string; description?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Zikhra Bangalore Interior Design Services",
    itemListElement: items.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item.name,
        description: item.description,
        url: absoluteUrl(item.path),
        provider: {
          "@type": "InteriorDesignBusiness",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
    })),
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

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
