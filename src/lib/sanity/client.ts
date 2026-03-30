import { createClient } from "@sanity/client";
import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityReadConfigured,
  sanityReadToken,
} from "./config";

const useCdn = process.env.NODE_ENV === "production";

export const sanityConfigured = sanityReadConfigured;

export const sanityClient = sanityConfigured
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn,
      token: sanityReadToken || undefined,
    })
  : null;

