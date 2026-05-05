import Link from "next/link";
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

const PortfolioPreview = ({ market = "hyderabad" }: Props) => {
  const copy = getMarketCopy(market);
  const city = market === "bangalore" ? "Bangalore" : "Hyderabad";
  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Portfolio</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Explore Our Craft</h2>
        <p className="font-sans text-muted-foreground text-sm mt-3 max-w-sm mx-auto">{copy.portfolioSub}</p>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-5 px-5 snap-x snap-mandatory md:justify-center md:mx-auto md:max-w-5xl">
        {categories.map((cat) => (
          <Link
            key={cat.name}
              href={portfolioDetailPath(market, cat.slug)}
            className="relative flex-shrink-0 w-[72vw] max-w-56 aspect-[4/5] rounded-xl overflow-hidden group snap-center cursor-pointer block md:w-40 lg:w-44"
          >
            <img
              src={cat.image}
              alt={`${cat.name} interior design ${city}`}
              loading="lazy"
              width={800}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-serif text-base text-foreground">{cat.name}</h3>
              <div className="w-8 h-0.5 gold-gradient mt-2 transition-all duration-300 group-hover:w-14" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPreview;
