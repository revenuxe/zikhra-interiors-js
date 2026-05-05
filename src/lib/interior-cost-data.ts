export type CostCity = "hyderabad" | "bangalore" | "all";
export type CostHomeType = "all" | "2bhk" | "3bhk";

export type CostPackage = {
  name: string;
  price: string;
  desc: string;
  includes: string[];
};

export type RoomCost = {
  room: string;
  essential: string;
  premium: string;
  signature: string;
};

export type CostGuideConfig = {
  city: CostCity;
  homeType: CostHomeType;
  canonicalPath: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  locationLabel: string;
  heroNote: string;
  packages: CostPackage[];
  roomCosts: RoomCost[];
  faqs: { q: string; a: string }[];
};

const standardPackages: CostPackage[] = [
  {
    name: "2 BHK",
    price: "Starts from Rs. 3.5 Lakhs",
    desc: "A practical package for homeowners who need clean, functional interiors with a controlled 2 BHK scope.",
    includes: ["Modular kitchen", "Bedroom wardrobes", "TV unit", "Basic storage", "Standard laminate finishes"],
  },
  {
    name: "3 BHK",
    price: "Starts from Rs. 5.5 Lakhs",
    desc: "The recommended package for families who want better finishes, more storage, and a cohesive 3 BHK design story.",
    includes: ["Better hardware", "More wardrobe storage", "Wall treatments", "Lighting plan", "Detailed room coordination"],
  },
  {
    name: "4 BHK / Villa",
    price: "Starts from Rs. 8.5 Lakhs",
    desc: "A high-detail package for homeowners who want premium materials, statement finishes, and elevated turnkey execution.",
    includes: ["PU/acrylic or veneer options", "Feature lighting", "Panelling", "Custom detailing", "Premium styling"],
  },
];

const standardRoomCosts: RoomCost[] = [
  { room: "Modular Kitchen", essential: "Layout estimate", premium: "Finish estimate", signature: "Custom estimate" },
  { room: "Living Room", essential: "Core scope", premium: "Enhanced scope", signature: "Custom scope" },
  { room: "Bedroom", essential: "Core scope", premium: "Enhanced scope", signature: "Custom scope" },
  { room: "Wardrobes", essential: "Storage estimate", premium: "Detailed estimate", signature: "Custom estimate" },
  { room: "False Ceiling & Lighting", essential: "Basic plan", premium: "Layered plan", signature: "Custom plan" },
  { room: "Bathroom Interiors", essential: "Core scope", premium: "Enhanced scope", signature: "Custom scope" },
];

const baseFaqs = [
  {
    q: "What is included in Zikhra's 2 BHK interior package?",
    a: "The practical 2 BHK package typically includes modular kitchen, bedroom wardrobes, a TV unit, and basic storage. Premium and signature packages add better finishes, more storage, lighting, wall treatments, and custom detailing.",
  },
  {
    q: "Why does the final interior design cost change?",
    a: "The final cost depends on carpet area, site condition, scope of work, material selection, civil changes, hardware, appliances, lighting, and styling requirements.",
  },
  {
    q: "Does Zikhra provide room-wise estimates?",
    a: "Yes. Zikhra prepares room-wise estimates so homeowners can understand where the budget is going before locking the final scope.",
  },
  {
    q: "Can I upgrade from practical to premium or signature later?",
    a: "Yes. You can start with a practical scope and upgrade finishes, storage, lighting, and styling during the design stage before production begins.",
  },
];

function cityName(city: CostCity) {
  if (city === "bangalore") return "Bangalore";
  if (city === "hyderabad") return "Hyderabad";
  return "Hyderabad & Bangalore";
}

function homeTypeLabel(homeType: CostHomeType) {
  if (homeType === "2bhk") return "2 BHK";
  if (homeType === "3bhk") return "3 BHK";
  return "Home";
}

function packagesFor(homeType: CostHomeType): CostPackage[] {
  if (homeType === "3bhk") {
    return [
      {
        name: "3 BHK Practical",
        price: "Starts from Rs. 5.5 Lakhs",
        desc: "A complete 3 BHK scope for families who need better storage, a finished living-dining area, and coordinated bedrooms.",
        includes: ["Modular kitchen", "Three bedrooms", "Living and dining", "Wardrobes", "Lighting and ceiling scope"],
      },
      {
        name: "3 BHK Premium",
        price: "Starts from Rs. 7.5 Lakhs",
        desc: "A richer 3 BHK scope with premium finishes, wall treatments, larger storage, and more custom detailing.",
        includes: ["Premium finishes", "Custom panelling", "Advanced lighting", "High-storage wardrobes", "Styling support"],
      },
      {
        name: "Villa-Ready",
        price: "Starts from Rs. 10 Lakhs",
        desc: "For larger apartments, duplexes, and villas where the scope extends beyond standard modular interiors.",
        includes: ["Turnkey coordination", "Civil planning", "Custom furniture", "Premium materials", "Site supervision"],
      },
    ];
  }

  return standardPackages;
}

function roomCostsFor(homeType: CostHomeType): RoomCost[] {
  if (homeType !== "3bhk") return standardRoomCosts;
  return [
    { room: "Modular Kitchen", essential: "Layout estimate", premium: "Finish estimate", signature: "Custom estimate" },
    { room: "Living + Dining", essential: "Core scope", premium: "Enhanced scope", signature: "Custom scope" },
    { room: "Master Bedroom", essential: "Core scope", premium: "Enhanced scope", signature: "Custom scope" },
    { room: "Bedroom 2", essential: "Core scope", premium: "Enhanced scope", signature: "Custom scope" },
    { room: "Bedroom 3", essential: "Core scope", premium: "Enhanced scope", signature: "Custom scope" },
    { room: "False Ceiling & Lighting", essential: "Basic plan", premium: "Layered plan", signature: "Custom plan" },
  ];
}

export function getCostGuideConfig(city: CostCity, homeType: CostHomeType, canonicalPath: string): CostGuideConfig {
  const cityLabel = cityName(city);
  const homeLabel = homeTypeLabel(homeType);
  const isSpecificHome = homeType !== "all";
  const suffix = city === "all" ? "Hyderabad & Bangalore" : cityLabel;
  const h1 = isSpecificHome
    ? `${homeLabel} Interior Design Cost in ${suffix}`
    : `Interior Design Cost in ${suffix}`;

  return {
    city,
    homeType,
    canonicalPath,
    title: `${h1} | Zikhra Interiors`,
    description: isSpecificHome
      ? `${homeLabel} interior design cost in ${suffix}: Zikhra packages, room-wise planning, materials, timelines, and turnkey interiors.`
      : `Interior design cost in ${suffix}: compare practical, premium, and signature home interior packages by Zikhra with clear scope planning.`,
    h1,
    intro: isSpecificHome
      ? `${homeLabel} interiors ${
          homeType === "2bhk" ? "start from Rs. 3.5 Lakhs" : "start from Rs. 5.5 Lakhs"
        }. Plan with clear package bands, room-wise costs, and upgrade options before you begin design.`
      : "2 BHK interiors start from Rs. 3.5 Lakhs and 3 BHK interiors start from Rs. 5.5 Lakhs. Plan your home interiors with clear package bands, room-wise costs, and upgrade options before you begin design.",
    locationLabel: suffix,
    heroNote:
      "A final estimate is prepared after floor plan review, site condition check, material selection, and scope finalisation.",
    packages: packagesFor(homeType),
    roomCosts: roomCostsFor(homeType),
    faqs: baseFaqs,
  };
}
