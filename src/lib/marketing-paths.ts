import type { MarketId } from "@/lib/market-types";

/** Keep shared marketing copy normalised for the Bangalore-only site. */
export function applyMarketToCopy(text: string, market: MarketId): string {
  void market;
  return text
    .replace(/\bBangalore\b/g, "Bangalore")
    .replace(/\bbangalore\b/g, "Bangalore")
    .replace(/\bKarnataka\b/g, "Karnataka")
    .replace(/\bkarnataka\b/g, "Karnataka");
}

export function servicesIndexPath(market: MarketId): string {
  void market;
  return "/bangalore/services";
}

export function serviceDetailPath(market: MarketId, slug: string): string {
  return `${servicesIndexPath(market)}/${slug}`;
}

export function projectTypeDetailPath(market: MarketId, slug: string): string {
  void market;
  return `/bangalore/project-type/${slug}`;
}

export function portfolioDetailPath(market: MarketId, slug: string): string {
  void market;
  return `/bangalore/portfolio/${slug}`;
}

export function projectsIndexPath(market: MarketId): string {
  void market;
  return "/bangalore/projects";
}

export function projectDetailPath(market: MarketId, slug: string): string {
  void market;
  return `/bangalore/projects/${slug}`;
}

export function cityLabel(market: MarketId): string {
  void market;
  return "Bangalore";
}

export function cityLabelSeo(market: MarketId): string {
  void market;
  return "Bangalore & Bengaluru";
}

export function backHubPath(market: MarketId): string {
  void market;
  return "/bangalore";
}
