import type { MarketId } from "@/lib/market-types";

/** Localise body copy when rendering Bangalore funnel pages (shared CMS/data still mentions Hyderabad). */
export function applyMarketToCopy(text: string, market: MarketId): string {
  if (market !== "bangalore") return text;
  return text
    .replace(/\bHyderabad\b/g, "Bangalore")
    .replace(/\bhyderabad\b/g, "Bangalore")
    .replace(/\bTelangana\b/g, "Karnataka")
    .replace(/\btelangana\b/g, "Karnataka");
}

export function servicesIndexPath(market: MarketId): string {
  return market === "bangalore" ? "/bangalore/services" : "/services";
}

export function serviceDetailPath(market: MarketId, slug: string): string {
  return `${servicesIndexPath(market)}/${slug}`;
}

export function projectTypeDetailPath(market: MarketId, slug: string): string {
  return market === "bangalore" ? `/bangalore/project-type/${slug}` : `/project-type/${slug}`;
}

export function portfolioDetailPath(market: MarketId, slug: string): string {
  return market === "bangalore" ? `/bangalore/portfolio/${slug}` : `/portfolio/${slug}`;
}

export function projectDetailPath(market: MarketId, slug: string): string {
  return market === "bangalore" ? `/bangalore/projects/${slug}` : `/projects/${slug}`;
}

export function cityLabel(market: MarketId): string {
  return market === "bangalore" ? "Bangalore" : "Hyderabad";
}

export function cityLabelSeo(market: MarketId): string {
  return market === "bangalore" ? "Bangalore & Bengaluru" : "Hyderabad";
}

export function backHubPath(market: MarketId): string {
  return market === "bangalore" ? "/bangalore" : "/";
}
