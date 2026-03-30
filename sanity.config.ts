import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from "@sanity/vision";
import {schemaTypes} from "./sanity/schemas";

const env = typeof import.meta !== "undefined" ? import.meta.env : {};
const projectId =
  env.SANITY_STUDIO_PROJECT_ID ||
  env.SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  env.SANITY_STUDIO_DATASET ||
  env.SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  process.env.SANITY_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

if (!projectId) {
  throw new Error(
    "Missing SANITY_STUDIO_PROJECT_ID (or SANITY_PROJECT_ID/NEXT_PUBLIC_SANITY_PROJECT_ID) for Sanity Studio.",
  );
}

export default defineConfig({
  name: "default",
  title: "Zikhra Interiors Studio",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
