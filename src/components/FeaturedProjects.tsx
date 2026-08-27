"use client";

import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useMemo } from "react";
import type { MarketId } from "@/lib/market-types";
import { getMarketCopy } from "@/lib/market-copy";
import { projectDetailPath } from "@/lib/marketing-paths";
import { getProjectBySlug } from "@/lib/projects-data";
import { getProjectDisplayFields } from "@/lib/project-display";

const featuredSlugs = ["2bhk-apartment", "luxury-villa", "3bhk-penthouse"] as const;

type Props = { market?: MarketId };

const FeaturedProjects = ({ market = "bangalore" }: Props) => {
  const copy = getMarketCopy(market);
  const projects = useMemo(() => {
    return featuredSlugs.map((slug) => {
      const p = getProjectBySlug(slug);
      if (!p) return null;
      const { location } = getProjectDisplayFields(p, market);
      return {
        image: p.heroImage,
        type: p.title,
        location,
        budget: p.budget,
        slug: p.slug,
      };
    }).filter(Boolean) as { image: string; type: string; location: string; budget: string; slug: string }[];
  }, [market]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.82;
    const newIndex = dir === "left" ? Math.max(0, activeIndex - 1) : Math.min(projects.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollRef.current.scrollTo({ left: newIndex * cardWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.82;
    const idx = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIndex(idx);
  };

  return (
    <section className="px-5 py-14 md:px-8 md:py-16">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Featured</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">{copy.featuredTitle}</h2>
        {copy.featuredSubtitle ? (
          <p className="font-sans text-muted-foreground text-sm mt-3 max-w-md mx-auto leading-relaxed">{copy.featuredSubtitle}</p>
        ) : null}
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto px-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={projectDetailPath(market, project.slug)}
              className="block min-w-[78%] max-w-sm flex-shrink-0 snap-center overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-gold/30 group cursor-pointer sm:min-w-[60%] md:min-w-0 md:max-w-none"
            >
              <div className="relative aspect-[4/3] max-h-52 overflow-hidden md:max-h-none">
                <img
                  src={project.image}
                  alt={`${project.type} interior design ${project.location}`}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-foreground mb-1">{project.type}</h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-sans mb-2">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  {project.location}
                </div>
                <p className="text-xs font-sans text-gold/80 tracking-wide">{project.budget}</p>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-9 h-9 rounded-full bg-card/90 border border-border/50 flex items-center justify-center transition-opacity md:hidden ${activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <ChevronLeft className="w-4 h-4 text-gold" />
        </button>
        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-9 h-9 rounded-full bg-card/90 border border-border/50 flex items-center justify-center transition-opacity md:hidden ${activeIndex === projects.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <ChevronRight className="w-4 h-4 text-gold" />
        </button>

        <div className="mt-5 flex justify-center gap-2 md:hidden">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-gold" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
