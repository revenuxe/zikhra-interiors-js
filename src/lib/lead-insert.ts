import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type LeadFormInput = {
  name: string;
  phone: string;
  /** Locality / city — from Area select or custom */
  area: string;
  projectType?: string;
  message?: string;
  source: string;
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
  };
  return client.from("leads").insert(row);
}
