import { createClient } from "@sanity/client";
import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityReadConfigured,
  sanityReadToken,
} from "./config";

const useCdn =
  process.env.NODE_ENV === "production" && process.env.SANITY_USE_CDN !== "false";

export const sanityConfigured = sanityReadConfigured;

export const sanityLiveFetchOptions = { cache: "no-store" as const };
export const sanitySitemapFetchOptions = { next: { revalidate: 300 } as const };

export const sanityClient = sanityConfigured
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn,
      token: sanityReadToken || undefined,
    })
  : null;

