export const BANGALORE_NEIGHBOURHOODS = [
  "Koramangala",
  "Indiranagar",
  "Whitefield",
  "HSR Layout",
  "Jayanagar",
  "Sarjapur Road",
  "Electronic City",
  "Hebbal",
  "JP Nagar",
  "Bellandur",
];

export const BANGALORE_CORE_KEYWORDS = [
  "best interior designer in Bangalore",
  "best interior designer in Bengaluru",
  "interior designers Bangalore",
  "interior designers Bengaluru",
  "premium interior designers Bangalore",
  "luxury interior designers Bangalore",
  "home interiors Bangalore",
  "turnkey interiors Bangalore",
  "residential interior designers Bangalore",
  "interior design company Bangalore",
];

export const BANGALORE_SERVICE_KEYWORDS = [
  "2 BHK interior design Bangalore",
  "3 BHK interior design Bangalore",
  "villa interior design Bangalore",
  "apartment interiors Bangalore",
  "modular kitchen Bangalore",
  "wardrobe design Bangalore",
  "full home interiors Bangalore",
  "home renovation Bangalore",
  "false ceiling Bangalore",
  "living room interior design Bangalore",
];

export const BANGALORE_COST_KEYWORDS = [
  "interior design cost Bangalore",
  "home interior cost Bangalore",
  "2 BHK interior design cost Bangalore",
  "3 BHK interior design cost Bangalore",
  "modular kitchen cost Bangalore",
  "interior design packages Bangalore",
  "turnkey interior cost Bangalore",
  "villa interior design cost Bangalore",
];

export function uniqueKeywords(...groups: Array<Array<string | false | null | undefined>>): string[] {
  return Array.from(new Set(groups.flat().filter(Boolean) as string[]));
}

export function areaSeoKeywords(areaName: string): string[] {
  return uniqueKeywords(
    [
      `best interior designer in ${areaName}`,
      `interior designers in ${areaName}`,
      `home interiors ${areaName}`,
      `premium interiors ${areaName}`,
      `luxury interior designers ${areaName}`,
      `modular kitchen ${areaName}`,
      `wardrobe design ${areaName}`,
      `2 BHK interiors ${areaName}`,
      `3 BHK interiors ${areaName}`,
      `villa interiors ${areaName}`,
      `interior design cost ${areaName}`,
    ],
    BANGALORE_CORE_KEYWORDS,
  );
}

export function serviceSeoKeywords(serviceTitle: string): string[] {
  return uniqueKeywords(
    [
      `${serviceTitle} Bangalore`,
      `${serviceTitle} Bengaluru`,
      `premium ${serviceTitle.toLowerCase()} Bangalore`,
      `luxury ${serviceTitle.toLowerCase()} Bangalore`,
      `turnkey ${serviceTitle.toLowerCase()} Bangalore`,
    ],
    BANGALORE_CORE_KEYWORDS,
    BANGALORE_SERVICE_KEYWORDS,
  );
}

