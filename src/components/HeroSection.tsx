import heroImage from "@/assets/hero-interior.webp";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { MarketId } from "@/lib/market-types";
import { getMarketCopy } from "@/lib/market-copy";
import { servicesIndexPath } from "@/lib/marketing-paths";

type Props = { market?: MarketId };

const HeroSection = ({ market = "hyderabad" }: Props) => {
  const copy = getMarketCopy(market);
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage.src}
        alt={copy.heroImageAlt}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/85 via-luxury-black/70 to-luxury-black/95" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-[1.1] max-w-5xl text-balance">
          <span className="gold-text">Best Interior Designer, 2 BHK Starts from Rs. 3.5 Lakhs</span>
        </h1>
        <div
          className="font-sans text-foreground/75 text-base md:text-lg max-w-xl mb-9 font-light animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <p>10-year warranty, transparent pricing, and premium turnkey execution for beautiful homes.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Link
            href="/contact"
            className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            Get Free Estimate
          </Link>
          <Link
            href={servicesIndexPath(market)}
            className="px-8 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide border border-gold/40 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/10 text-center"
          >
            View Packages
          </Link>
        </div>

        <div className="absolute bottom-24 md:bottom-12 animate-scroll-bounce">
          <ChevronDown className="w-6 h-6 text-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
