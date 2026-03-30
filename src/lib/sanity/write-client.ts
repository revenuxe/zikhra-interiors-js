import { createClient } from "@sanity/client";
import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityWriteConfigured,
  sanityWriteToken,
} from "./config";

export const sanityWriteClient = sanityWriteConfigured
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: false,
      token: sanityWriteToken,
    })
  : null;

