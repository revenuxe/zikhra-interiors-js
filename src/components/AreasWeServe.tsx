"use client";

import { useRef, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MarketId } from "@/lib/market-types";
import { getMarketCopy } from "@/lib/market-copy";
import { areas as hyderabadAreas } from "@/lib/areas-data";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";
import areaKitchen from "@/assets/area-kitchen.webp";
import areaBedroom from "@/assets/area-bedroom.webp";
import areaLiving from "@/assets/area-living.webp";
import areaVilla from "@/assets/area-villa.webp";
import areaBathroom from "@/assets/area-bathroom.webp";

const areaImages = [areaKitchen, areaBedroom, areaLiving, areaVilla, areaBathroom].map((img) =>
  typeof img === "string" ? img : img.src,
);

type Props = { market?: MarketId };

const AreasWeServe = ({ market = "hyderabad" }: Props) => {
  const copy = getMarketCopy(market);
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayAreas = useMemo(
    () =>
      market === "bangalore"
        ? bangaloreAreas.map((a) => ({ name: a.name, slug: a.slug, hrefBase: "/bangalore" as const }))
        : hyderabadAreas.map((a) => ({ name: a.name, slug: a.slug, hrefBase: "/area" as const })),
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
            Compare{" "}
            <Link href="/hyderabad/interior-design-cost" className="text-gold hover:underline">
              Hyderabad interior design costs
            </Link>{" "}
            or explore{" "}
            <Link href="/bangalore" className="text-gold hover:underline">
              interior design in Bangalore
            </Link>
            , including Koramangala, Whitefield, Indiranagar, and more.
          </p>
        ) : (
          <p className="font-sans text-muted-foreground text-xs mt-3 max-w-md mx-auto leading-relaxed">
            Compare{" "}
            <Link href="/bangalore/interior-design-cost" className="text-gold hover:underline">
              Bangalore interior design costs
            </Link>{" "}
            before shortlisting your neighbourhood package.
          </p>
        )}
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
