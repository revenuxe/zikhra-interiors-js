// Public browser connection for Zikhra Tours. Database access is controlled by RLS.
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://plfpezgkkrmwknaqffux.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_iz7GcucAgm5DPvw8pu458w_12zeNQ4W";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

let browserSupabase: ReturnType<typeof createClient<Database>> | null = null;

// Important: avoid initializing Supabase during SSR/prerender to prevent build-time crashes.
export function getSupabaseClient() {
  if (typeof window === "undefined") return null;
  if (browserSupabase) return browserSupabase;

  try {
    browserSupabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        // localStorage can throw in some browser/privacy contexts; if it does, we fall back.
        storage: window.localStorage,
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  } catch {
    // Fallback: initialize without custom storage to avoid crashing the app.
    browserSupabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  }

  return browserSupabase;
}

// Deprecated: prefer `getSupabaseClient()` (safe + lazy).
// Kept only so older imports don't crash at import-time.
export const supabase = null;
