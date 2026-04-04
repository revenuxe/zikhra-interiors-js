import type { MarketId } from "@/lib/market-types";
import type { ProjectItem } from "@/lib/projects-data";
import { applyMarketToCopy } from "@/lib/marketing-paths";

export type ProjectDisplayFields = {
  location: string;
  description: string;
  highlights: string[];
};

/** Bangalore funnel uses dedicated copy when present; otherwise falls back to naive city replace. */
export function getProjectDisplayFields(project: ProjectItem, market: MarketId): ProjectDisplayFields {
  if (market === "bangalore" && project.bangalore) {
    return {
      location: project.bangalore.location,
      description: project.bangalore.description,
      highlights: project.bangalore.highlights,
    };
  }
  return {
    location: applyMarketToCopy(project.location, market),
    description: applyMarketToCopy(project.description, market),
    highlights: project.highlights.map((h) => applyMarketToCopy(h, market)),
  };
}
