export const SITE_URL = "https://zikhra.com";
export const SITE_NAME = "Zikhra Luxury Interiors";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
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
