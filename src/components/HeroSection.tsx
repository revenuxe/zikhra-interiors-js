import heroImage from "@/assets/hero-interior.webp";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { MarketId } from "@/lib/market-types";
import { getMarketCopy } from "@/lib/market-copy";
import { servicesIndexPath } from "@/lib/marketing-paths";

type Props = { market?: MarketId };

const HeroSection = ({ market = "bangalore" }: Props) => {
  const copy = getMarketCopy(market);
  const heroTitle =
    market === "bangalore"
      ? "Best Interior Designer in Bangalore"
      : "Best Interior Designer, 2 BHK Starts from Rs. 3.5 Lakhs";

  return (
    <section className="relative isolate overflow-hidden bg-[#f8f8f7] pb-12 pt-28 sm:pb-16 sm:pt-32">
      <img src={heroImage.src} alt={copy.heroImageAlt} width={1920} height={1080} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.3] sm:opacity-[0.25]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(248,248,247,0.96)_0%,rgba(248,248,247,0.9)_45%,rgba(248,248,247,0.72)_100%)]" />
      <div className="absolute -right-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl text-left">
          <h1 className="mb-8 max-w-[11ch] font-sans text-[3.35rem] font-light leading-[0.97] tracking-[-0.07em] text-[#171717] animate-fade-in-up sm:text-6xl md:max-w-[13ch] md:text-7xl lg:text-[5.8rem]">
            {heroTitle}
          </h1>
          <div
            className="mb-10 max-w-xl font-sans text-[1.03rem] font-light leading-[1.72] tracking-[-0.02em] text-[#525252] animate-fade-in-up md:text-[1.15rem]"
            style={{ animationDelay: "0.2s" }}
          >
            <p>10-year warranty, transparent pricing, and premium turnkey execution for beautiful homes.</p>
          </div>

          <div className="flex flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#171717] px-5 py-3.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_12px_24px_rgba(0,0,0,0.16)] active:translate-y-0"
          >
            Get Free Estimate
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href={servicesIndexPath(market)}
            className="inline-flex items-center gap-2 px-1 py-3.5 font-sans text-sm font-medium text-[#171717] transition-colors duration-300 hover:text-gold"
          >
            View Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
