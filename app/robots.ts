import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    host: absoluteUrl("/"),
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // These pages use noindex; allow crawling so search engines can read it.
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}

