import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MarketId } from "@/lib/market-types";
import { getMarketCopy } from "@/lib/market-copy";
import { portfolioDetailPath } from "@/lib/marketing-paths";
import kitchenImg from "@/assets/kitchen.webp";
import bedroomImg from "@/assets/bedroom.webp";
import livingroomImg from "@/assets/livingroom.webp";
import wardrobeImg from "@/assets/wardrobe.webp";
import bathroomImg from "@/assets/portfolio-bathroom.webp";
import studyImg from "@/assets/portfolio-study.webp";

const categories = [
  { name: "Kitchen", image: kitchenImg.src, slug: "kitchen" },
  { name: "Bedroom", image: bedroomImg.src, slug: "bedroom" },
  { name: "Living Room", image: livingroomImg.src, slug: "living-room" },
  { name: "Wardrobe", image: wardrobeImg.src, slug: "wardrobe" },
  { name: "Bathroom", image: bathroomImg.src, slug: "bathroom" },
  { name: "Study Room", image: studyImg.src, slug: "study-room" },
];

type Props = { market?: MarketId };

const PortfolioPreview = ({ market = "bangalore" }: Props) => {
  const copy = getMarketCopy(market);
  const city = "Bangalore";
  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Portfolio</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Explore Our Craft</h2>
        <p className="font-sans text-muted-foreground text-sm mt-3 max-w-sm mx-auto">{copy.portfolioSub}</p>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-5 px-5 snap-x snap-mandatory md:mx-auto md:grid md:max-w-7xl md:grid-cols-6 md:gap-4 md:overflow-visible md:px-0">
        {categories.map((cat) => (
          <Link
            key={cat.name}
              href={portfolioDetailPath(market, cat.slug)}
            className="relative block w-[72vw] max-w-56 flex-shrink-0 aspect-[4/5] cursor-pointer snap-center overflow-hidden rounded-[1.2rem] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.1)] group md:w-auto md:max-w-none"
          >
            <img
              src={cat.image}
              alt={`${cat.name} interior design ${city}`}
              loading="lazy"
              width={800}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 rounded-[1rem] bg-white/95 px-3 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 sm:bottom-4 sm:left-4 sm:right-4 sm:px-4">
              <div className="flex items-center justify-between gap-5">
                <h3 className="truncate whitespace-nowrap font-serif text-[15px] text-[#171717] sm:text-base">{cat.name}</h3>
                <ArrowUpRight className="h-4 w-4 text-black/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="mt-1.5 h-px w-7 bg-black/45 transition-all duration-300 group-hover:w-10" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPreview;
