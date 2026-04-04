import { areas } from "@/lib/areas-data";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";

export type AreaSelectGroup = { label: string; options: { value: string; label: string }[] };

/** Grouped options for lead forms — values are stored in Supabase `leads.area`. */
export function getLeadAreaSelectGroups(): AreaSelectGroup[] {
  return [
    {
      label: "Hyderabad",
      options: areas.map((a) => ({
        value: `${a.name}, Hyderabad`,
        label: a.name,
      })),
    },
    {
      label: "Bangalore & Bengaluru",
      options: bangaloreAreas.map((a) => ({
        value: `${a.name}, Bangalore`,
        label: a.name,
      })),
    },
    {
      label: "Other",
      options: [{ value: "Other — specify in message", label: "Other / not listed" }],
    },
  ];
}
