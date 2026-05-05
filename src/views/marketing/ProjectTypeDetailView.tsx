import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import type { ProjectTypeItem } from "@/lib/project-types-data";
import type { MarketId } from "@/lib/market-types";
import { applyMarketToCopy, backHubPath } from "@/lib/marketing-paths";

type Props = { item: ProjectTypeItem; market?: MarketId };

export default function ProjectTypeDetailView({ item, market = "hyderabad" }: Props) {
  const intro = applyMarketToCopy(item.intro, market);
  const tagline = applyMarketToCopy(item.tagline, market);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative min-h-[680px] w-full overflow-hidden md:h-[70vh] md:min-h-[560px]">
        <img src={item.heroImage} alt={item.metaTitle} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex min-h-[680px] flex-col px-6 pb-14 pt-32 text-center md:h-full md:min-h-[560px] md:items-center md:justify-end md:px-8 md:pb-16 md:pt-0">
          <Link href={backHubPath(market)} className="mb-10 inline-flex w-fit items-center gap-2 text-sm font-sans font-medium text-gold md:absolute md:left-5 md:top-28 md:mb-0">
            <ArrowLeft className="w-4 h-4" /> {market === "bangalore" ? "Bangalore" : "Home"}
          </Link>
          <div className="mx-auto flex w-full max-w-md flex-col items-center">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4">Project Type</p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-4 leading-tight">{tagline}</h1>
            <p className="font-sans text-foreground/85 text-[15px] leading-relaxed max-w-md">{intro}</p>
          </div>
          <Link
            href="/contact"
            className="mx-auto mt-8 inline-flex gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">What's Included</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Features & Inclusions</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
          {item.features.map((feat) => (
            <div key={feat} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="font-sans text-sm text-foreground/90">{applyMarketToCopy(feat, market)}</span>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}

