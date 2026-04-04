"use client";

import { useRef, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MarketId } from "@/lib/market-types";
import { getMarketCopy } from "@/lib/market-copy";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";
import areaKitchen from "@/assets/area-kitchen.webp";
import areaBedroom from "@/assets/area-bedroom.webp";
import areaLiving from "@/assets/area-living.webp";
import areaVilla from "@/assets/area-villa.webp";
import areaBathroom from "@/assets/area-bathroom.webp";

const areaImages = [areaKitchen, areaBedroom, areaLiving, areaVilla, areaBathroom].map((img) =>
  typeof img === "string" ? img : img.src,
);

const areas = [
  { name: "Jubilee Hills", slug: "jubilee-hills", tagline: "Where Luxury Meets Legacy" },
  { name: "Banjara Hills", slug: "banjara-hills", tagline: "Elegant Living Redefined" },
  { name: "Gachibowli", slug: "gachibowli", tagline: "Modern Homes, Smart Design" },
  { name: "Kondapur", slug: "kondapur", tagline: "Contemporary Comfort" },
  { name: "HITEC City", slug: "hitec-city", tagline: "Tech-Forward Interiors" },
  { name: "Madhapur", slug: "madhapur", tagline: "Stylish Urban Living" },
  { name: "Kukatpally", slug: "kukatpally", tagline: "Affordable Elegance" },
  { name: "Manikonda", slug: "manikonda", tagline: "Premium Home Design" },
  { name: "Narsingi", slug: "narsingi", tagline: "Villa & Apartment Interiors" },
  { name: "Kokapet", slug: "kokapet", tagline: "Luxury Villa Interiors" },
  { name: "Miyapur", slug: "miyapur", tagline: "Smart Space Planning" },
  { name: "Bachupally", slug: "bachupally", tagline: "Budget-Friendly Luxury" },
  { name: "Kompally", slug: "kompally", tagline: "Modern Home Makeovers" },
  { name: "Uppal", slug: "uppal", tagline: "Functional & Beautiful" },
  { name: "LB Nagar", slug: "lb-nagar", tagline: "Complete Home Interiors" },
  { name: "Secunderabad", slug: "secunderabad", tagline: "Classic & Contemporary" },
  { name: "Begumpet", slug: "begumpet", tagline: "Sophisticated Interiors" },
  { name: "Ameerpet", slug: "ameerpet", tagline: "Compact Luxury Design" },
  { name: "Attapur", slug: "attapur", tagline: "Cozy & Elegant Homes" },
  { name: "Tolichowki", slug: "tolichowki", tagline: "Heritage Meets Modern" },
  { name: "Shamshabad", slug: "shamshabad", tagline: "Airport Area Interiors" },
  { name: "Mehdipatnam", slug: "mehdipatnam", tagline: "Classic Interiors" },
  { name: "Sainikpuri", slug: "sainikpuri", tagline: "Tranquil Home Design" },
  { name: "Nizampet", slug: "nizampet", tagline: "Thoughtful Interiors" },
  { name: "Chandanagar", slug: "chandanagar", tagline: "Smart Home Solutions" },
  { name: "Nallagandla", slug: "nallagandla", tagline: "Premium Apartment Interiors" },
  { name: "Financial District", slug: "financial-district", tagline: "High-End Modern Homes" },
  { name: "Puppalguda", slug: "puppalguda", tagline: "Elegant Home Interiors" },
  { name: "Dilsukhnagar", slug: "dilsukhnagar", tagline: "Vibrant Living Spaces" },
  { name: "Habsiguda", slug: "habsiguda", tagline: "Modern Apartment Design" },
  { name: "Tarnaka", slug: "tarnaka", tagline: "Smart & Stylish Homes" },
  { name: "Alwal", slug: "alwal", tagline: "Affordable Luxury Design" },
  { name: "Malkajgiri", slug: "malkajgiri", tagline: "Family Home Interiors" },
  { name: "Bowenpally", slug: "bowenpally", tagline: "Contemporary Home Design" },
  { name: "Serilingampally", slug: "serilingampally", tagline: "Premium Living Spaces" },
  { name: "Lingampally", slug: "lingampally", tagline: "Budget Premium Interiors" },
  { name: "Patancheru", slug: "patancheru", tagline: "Villa & Farm House Design" },
  { name: "Bolarum", slug: "bolarum", tagline: "Defense Colony Interiors" },
  { name: "Trimulgherry", slug: "trimulgherry", tagline: "Heritage Home Makeovers" },
  { name: "Adibatla", slug: "adibatla", tagline: "New Township Interiors" },
  { name: "Gandipet", slug: "gandipet", tagline: "Lakeside Villa Design" },
  { name: "Tellapur", slug: "tellapur", tagline: "Premium Gated Community" },
  { name: "Pragathi Nagar", slug: "pragathi-nagar", tagline: "Modern Flat Interiors" },
  { name: "ECIL", slug: "ecil", tagline: "Smart Budget Interiors" },
  { name: "AS Rao Nagar", slug: "as-rao-nagar", tagline: "Compact Home Design" },
  { name: "Chanda Nagar", slug: "chanda-nagar", tagline: "Family Living Spaces" },
];

export { areas };

type Props = { market?: MarketId };

const AreasWeServe = ({ market = "hyderabad" }: Props) => {
  const copy = getMarketCopy(market);
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayAreas = useMemo(
    () =>
      market === "bangalore"
        ? bangaloreAreas.map((a) => ({ name: a.name, slug: a.slug, hrefBase: "/bangalore" as const }))
        : areas.map((a) => ({ name: a.name, slug: a.slug, hrefBase: "/area" as const })),
    [market],
  );

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div className="text-center mb-8">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Locations</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text mb-3">Areas We Serve</h2>
        <p className="font-sans text-muted-foreground text-sm">{copy.areasSectionSub}</p>
        {market === "hyderabad" ? (
          <p className="font-sans text-muted-foreground text-xs mt-3 max-w-md mx-auto leading-relaxed">
            Looking for{" "}
            <Link href="/bangalore" className="text-gold hover:underline">
              luxury interior design in Bangalore
            </Link>
            ? Explore premium home interiors by neighbourhood — Koramangala, Whitefield, Indiranagar, and more.
          </p>
        ) : null}
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayAreas.map((area, i) => (
            <Link
              key={`${area.hrefBase}-${area.slug}`}
              href={`${area.hrefBase}/${area.slug}`}
              className="flex-shrink-0 flex flex-col items-center gap-2 group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-gold/60 transition-all duration-300 gold-glow group-hover:scale-105">
                <img
                  src={areaImages[i % areaImages.length]}
                  alt={`Interior design ${area.name}`}
                  loading="lazy"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-sans text-[11px] text-muted-foreground group-hover:text-gold transition-colors text-center whitespace-nowrap max-w-[80px] truncate">
                {area.name}
              </span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-10 -translate-y-1/2 w-8 h-8 rounded-full bg-card/90 border border-border/50 flex items-center justify-center z-10"
        >
          <ChevronLeft className="w-4 h-4 text-gold" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-10 -translate-y-1/2 w-8 h-8 rounded-full bg-card/90 border border-border/50 flex items-center justify-center z-10"
        >
          <ChevronRight className="w-4 h-4 text-gold" />
        </button>
      </div>
    </section>
  );
};

export default AreasWeServe;
