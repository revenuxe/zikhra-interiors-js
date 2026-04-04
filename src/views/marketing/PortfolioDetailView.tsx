import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import type { PortfolioItem } from "@/lib/portfolio-data";
import type { MarketId } from "@/lib/market-types";
import { applyMarketToCopy, backHubPath, cityLabel } from "@/lib/marketing-paths";

type Props = { item: PortfolioItem; market?: MarketId };

export default function PortfolioDetailView({ item, market = "hyderabad" }: Props) {
  const city = cityLabel(market);
  const description = applyMarketToCopy(item.description, market);
  const tagline = applyMarketToCopy(item.tagline, market);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[70vh] w-full overflow-hidden">
        <img src={item.heroImage} alt={`${item.title} ${city}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 text-center">
          <Link href={backHubPath(market)} className="absolute top-28 md:top-24 left-5 flex items-center gap-2 text-gold text-sm font-sans">
            <ArrowLeft className="w-4 h-4" /> {market === "bangalore" ? "Bangalore" : "Home"}
          </Link>
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">{item.title}</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-3 leading-tight">{tagline}</h1>
          <p className="font-sans text-foreground/80 text-sm max-w-sm">{description}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Gallery</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Our Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {item.galleryImages.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden group">
              <img src={img} alt={`${item.title} ${i + 1}`} loading="lazy" className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Features</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">What's Included</h2>
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

