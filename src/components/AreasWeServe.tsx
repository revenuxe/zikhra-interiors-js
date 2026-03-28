import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

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
];

export { areas };

const AreasWeServe = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div className="text-center mb-8">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Locations</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text mb-3">Areas We Serve</h2>
        <p className="font-sans text-muted-foreground text-sm">Premium interior design across Hyderabad</p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-4 py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {areas.map((area) => (
            <Link
              key={area.slug}
              to={`/area/${area.slug}`}
              className="flex-shrink-0 flex flex-col items-center gap-2 group"
            >
              <div className="w-20 h-20 rounded-full bg-card border-2 border-border/50 group-hover:border-gold/60 transition-all duration-300 flex items-center justify-center gold-glow group-hover:scale-105">
                <MapPin className="w-6 h-6 text-gold" />
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
