import { bangaloreAreas } from "@/lib/bangalore-areas-data";

export type AreaBasePath = "/area" | "/bangalore";

export type AreaItem = {
  name: string;
  slug: string;
  tagline: string;
  city: string;
  basePath: AreaBasePath;
  /** Primary on-page copy for local SEO (unique per neighbourhood). */
  description: string;
  /** Optional FAQs rendered on-page and in FAQPage JSON-LD. */
  faqs?: { q: string; a: string }[];
};

export const areas: AreaItem[] = bangaloreAreas.map((area) => ({
  ...area,
  basePath: "/area",
}));

export function getAreaBySlug(slug: string) {
  return areas.find((a) => a.slug === slug) ?? null;
}
