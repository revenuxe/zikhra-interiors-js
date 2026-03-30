export const sanityProjectId =
  process.env.SANITY_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

export const sanityDataset =
  process.env.SANITY_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";

export const sanityApiVersion = process.env.SANITY_API_VERSION ?? "2025-01-01";

export const sanityReadToken =
  process.env.SANITY_API_READ_TOKEN ?? process.env.SANITY_READ_TOKEN ?? "";

export const sanityWriteToken =
  process.env.SANITY_API_WRITE_TOKEN ?? process.env.SANITY_WRITE_TOKEN ?? "";

export const sanityInternalApiKey = process.env.SANITY_INTERNAL_API_KEY ?? "";

export const sanityReadConfigured = Boolean(sanityProjectId && sanityDataset);
export const sanityWriteConfigured = Boolean(
  sanityProjectId && sanityDataset && sanityWriteToken,
);

