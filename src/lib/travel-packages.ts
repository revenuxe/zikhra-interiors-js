export type PackageCategory = "classic" | "ramadan" | "family" | "private" | "hajj" | "holiday";
export type Travellers = { adults: number; children: number; infants: number; seniors: number };
export function travellerSummary(t: Travellers): string {
  return `${t.adults} adult${t.adults === 1 ? "" : "s"}${t.children ? ` · ${t.children} ${t.children === 1 ? "child" : "children"}` : ""}${t.infants ? ` · ${t.infants} infant${t.infants === 1 ? "" : "s"}` : ""}`;
}
