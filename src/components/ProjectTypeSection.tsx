import Link from "next/link";
import type { MarketId } from "@/lib/market-types";
import { getMarketCopy } from "@/lib/market-copy";
import project2bhk from "@/assets/project-2bhk.webp";
import project3bhk from "@/assets/project-3bhk.webp";
import project4bhk from "@/assets/project-4bhk.webp";
import projectPenthouse from "@/assets/project-penthouse.webp";

const projectTypes = [
  { name: "2 BHK", image: project2bhk.src, slug: "2bhk", desc: "Smart luxury for compact spaces" },
  { name: "3 BHK", image: project3bhk.src, slug: "3bhk", desc: "Spacious elegance for families" },
  { name: "4 BHK", image: project4bhk.src, slug: "4bhk", desc: "Grand living redefined" },
  { name: "Penthouse", image: projectPenthouse.src, slug: "penthouse", desc: "Ultra-luxury sky living" },
];

type Props = { market?: MarketId };

const ProjectTypeSection = ({ market = "hyderabad" }: Props) => {
  const copy = getMarketCopy(market);
  const city = market === "bangalore" ? "Bangalore" : "Hyderabad";
  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">By Property</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Project Types</h2>
        <p className="font-sans text-muted-foreground text-sm mt-3 max-w-sm mx-auto">{copy.projectTypesSub}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
        {projectTypes.map((pt) => (
          <Link
            key={pt.slug}
            href={`/project-type/${pt.slug}`}
            className="flex flex-col items-center text-center rounded-2xl overflow-hidden bg-card border border-border/50 transition-all duration-300 hover:border-gold/30 hover:gold-glow group cursor-pointer"
          >
            <div className="relative w-full h-32 overflow-hidden">
              <img
                src={pt.image}
                alt={`${pt.name} interior design ${city}`}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </div>
            <div className="p-4 -mt-4 relative z-10 w-full">
              <h3 className="font-serif text-sm text-foreground mb-1">{pt.name}</h3>
              <p className="text-xs font-sans text-muted-foreground">{pt.desc}</p>
              <div className="w-8 h-0.5 gold-gradient mt-2 mx-auto transition-all duration-300 group-hover:w-14" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectTypeSection;
