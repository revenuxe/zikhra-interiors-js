import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import type { TravelLeadFormData } from "@/components/TravelLeadFields";
import { validDeparture } from "@/lib/travel-enquiry";

export type LeadFormInput = {
  name: string;
  phone: string;
  /** Locality / city — from Area select or custom */
  area: string;
  projectType?: string;
  message?: string;
  source: string;
  travel?: TravelLeadFormData;
};

function trimOrNull(s: string | undefined): string | null {
  const t = s?.trim();
  return t ? t : null;
}

/**
 * Inserts a website lead into `public.leads`. Requires `area` column on the table (see supabase migration).
 */
export async function insertLead(client: SupabaseClient<Database>, input: LeadFormInput) {
  const row: Database["public"]["Tables"]["leads"]["Insert"] = {
    name: input.name.trim(),
    phone: input.phone.trim(),
    area: trimOrNull(input.area),
    project_type: trimOrNull(input.projectType),
    message: trimOrNull(input.message),
    source: input.source.trim(),
    package_id: input.travel?.packageId || null,
    package_name: trimOrNull(input.travel?.packageName),
    flight_option_id: trimOrNull(input.travel?.flightId),
    airline: trimOrNull(input.travel?.airline),
    sharing: trimOrNull(input.travel?.sharing),
    price_per_adult: input.travel?.pricePerAdult || null,
    preferred_departure: input.travel?.travelDate && validDeparture(input.travel.travelDate) ? input.travel.travelDate : null,
    travellers: input.travel?.travellers && Number.isInteger(Number(input.travel.travellers)) && Number(input.travel.travellers) >= 1 && Number(input.travel.travellers) <= 200 ? Number(input.travel.travellers) : null,
  };
  return client.from("leads").insert(row);
}
