import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
export type CmsCategory = Database['public']['Tables']['travel_categories']['Row'];
export type CmsPackage = Database['public']['Tables']['travel_packages']['Row'];
export const flightSchema = z.array(z.object({ id: z.string().min(1), airline: z.string().trim().min(1), rate: z.number().positive().finite(), dates: z.array(z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(d => { const date=new Date(`${d}T12:00:00Z`);return !isNaN(date.getTime())&&date.toISOString().slice(0,10)===d; }, 'Use valid departure dates')).min(1).refine(dates=>new Set(dates).size===dates.length,'Departure dates must be unique') })).min(1).refine(options=>new Set(options.map(o=>o.id)).size===options.length,'Flight IDs must be unique');
export type FlightOption = z.infer<typeof flightSchema>[number];
export type TravelCatalogueData = { categories: CmsCategory[]; packages: CmsPackage[] };
