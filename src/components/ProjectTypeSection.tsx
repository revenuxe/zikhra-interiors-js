import Link from "next/link";
import type { MarketId } from "@/lib/market-types";
import { getMarketCopy } from "@/lib/market-copy";
import { projectTypeDetailPath } from "@/lib/marketing-paths";
import project2bhk from "@/assets/project-2bhk.webp";
import project3bhk from "@/assets/project-3bhk.webp";
import project4bhk from "@/assets/project-4bhk.webp";
import projectPenthouse from "@/assets/project-penthouse.webp";

const projectTypes = [
  { name: "2 BHK", image: project2bhk.src, slug: "2bhk", desc: "Smart planning for compact spaces" },
  { name: "3 BHK", image: project3bhk.src, slug: "3bhk", desc: "Spacious elegance for families" },
  { name: "4 BHK", image: project4bhk.src, slug: "4bhk", desc: "Grand living redefined" },
  { name: "Penthouse", image: projectPenthouse.src, slug: "penthouse", desc: "Elevated sky living" },
];

type Props = { market?: MarketId };

const ProjectTypeSection = ({ market = "bangalore" }: Props) => {
  const copy = getMarketCopy(market);
  const city = "Bangalore";
  return (
    <section className="px-5 py-14 md:px-8 md:py-16">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">By Property</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Project Types</h2>
        <p className="font-sans text-muted-foreground text-sm mt-3 max-w-sm mx-auto">{copy.projectTypesSub}</p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {projectTypes.map((pt) => (
          <Link
            key={pt.slug}
            href={projectTypeDetailPath(market, pt.slug)}
            className="group flex flex-col overflow-hidden rounded-[1.2rem] border border-black/10 bg-white text-left shadow-[0_10px_24px_rgba(0,0,0,0.055)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)]"
          >
            <div className="relative w-full aspect-[4/3] max-h-32 overflow-hidden md:max-h-none">
              <img
                src={pt.image}
                alt={`${pt.name} interior design ${city}`}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            </div>
            <div className="relative z-10 -mt-3 w-full rounded-t-[1rem] bg-white p-4 md:p-6">
              <h3 className="mb-1 font-sans text-sm font-medium text-[#171717] md:text-lg">{pt.name}</h3>
              <p className="font-sans text-xs leading-relaxed text-muted-foreground md:text-sm">{pt.desc}</p>
              <div className="mt-3 h-px w-7 bg-black/45 transition-all duration-300 group-hover:w-11" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectTypeSection;
