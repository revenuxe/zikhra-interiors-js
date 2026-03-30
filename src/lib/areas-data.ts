export type AreaItem = {
  name: string;
  slug: string;
  tagline: string;
};

export const areas: AreaItem[] = [
  { name: "Jubilee Hills", slug: "jubilee-hills", tagline: "Where Luxury Meets Legacy" },
  { name: "Banjara Hills", slug: "banjara-hills", tagline: "Elegant Living Redefined" },
  { name: "Gachibowli", slug: "gachibowli", tagline: "Modern Homes, Smart Design" },
  { name: "Kondapur", slug: "kondapur", tagline: "Contemporary Comfort" },
  { name: "HITEC City", slug: "hitec-city", tagline: "Tech-Forward Interiors" },
  { name: "Madhapur", slug: "madhapur", tagline: "Stylish Urban Living" },
  { name: "Narsingi", slug: "narsingi", tagline: "Villa & Apartment Interiors" },
  { name: "Kokapet", slug: "kokapet", tagline: "Luxury Villa Interiors" },
  { name: "Financial District", slug: "financial-district", tagline: "High-End Modern Homes" },
  { name: "Tellapur", slug: "tellapur", tagline: "Premium Gated Community" },
];

export function getAreaBySlug(slug: string) {
  return areas.find((a) => a.slug === slug) ?? null;
}
