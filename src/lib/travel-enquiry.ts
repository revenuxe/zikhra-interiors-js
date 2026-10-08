import type { TravelLeadFormData } from "@/components/TravelLeadFields";

export function validDeparture(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(`${date}T12:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
}

/** Also accepts old package links so existing shared enquiries continue to work. */
export function enquiryFromSearch(search: string): Partial<TravelLeadFormData> {
  const params = new URLSearchParams(search);
  const packageLabel = params.get("package");
  if (!packageLabel) return {};
  const count = Number(params.get("travellers"));
  const rate = Number(params.get("rate"));
  const departure = params.get("departure") || "";
  const id = params.get("packageId") || "";
  const packageId = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) ? id : undefined;
  return {
    projectType: (params.get("journey") || packageLabel).slice(0, 120),
    packageId,
    packageName: packageId ? (params.get("packageName") || packageLabel.split(" · ")[0]).slice(0, 120) : undefined,
    flightId: params.get("flightId")?.slice(0, 120),
    airline: params.get("airline")?.slice(0, 120),
    sharing: params.get("sharing")?.slice(0, 120),
    pricePerAdult: Number.isFinite(rate) && rate > 0 ? rate : undefined,
    message: (params.get("message") || "").slice(0, 4000),
    travelDate: validDeparture(departure) ? departure : "",
    travellers: Number.isInteger(count) && count >= 1 && count <= 200 ? String(count) : "",
    area: (params.get("city") || "").slice(0, 120),
  };
}
