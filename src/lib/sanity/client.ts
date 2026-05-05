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

const isNextBuild =
  process.env.NEXT_PHASE === "phase-production-build" ||
  process.env.npm_lifecycle_event === "build" ||
  process.env.npm_lifecycle_script?.includes("next build") === true;

export const sanityConfigured = sanityReadConfigured;
export const skipSanityDuringBuild =
  isNextBuild && process.env.SANITY_FETCH_DURING_BUILD !== "true";

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

