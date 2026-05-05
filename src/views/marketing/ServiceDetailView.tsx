import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import type { ServiceItem } from "@/lib/services-data";
import type { MarketId } from "@/lib/market-types";
import {
  applyMarketToCopy,
  cityLabel,
  portfolioDetailPath,
  projectsIndexPath,
  servicesIndexPath,
} from "@/lib/marketing-paths";

type Props = {
  service: ServiceItem;
  market?: MarketId;
};

export default function ServiceDetailView({ service, market = "hyderabad" }: Props) {
  const city = cityLabel(market);
  const subtitle = applyMarketToCopy(service.subtitle, market);
  const description = applyMarketToCopy(service.description, market);
  const servicesList = servicesIndexPath(market);
  const serviceTitle = `Best Interior Designer in ${city} for ${service.title}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative min-h-[720px] w-full overflow-hidden md:h-[70vh] md:min-h-[560px]">
        <img src={service.image} alt={`${service.title} in ${city}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex min-h-[720px] flex-col px-6 pb-14 pt-32 text-center md:h-full md:min-h-[560px] md:items-center md:justify-end md:px-8 md:pb-16 md:pt-0">
          <Link href={servicesList} className="mb-10 inline-flex w-fit items-center gap-2 text-sm font-sans font-medium text-gold md:absolute md:left-5 md:top-28 md:mb-0">
            <ArrowLeft className="w-4 h-4" /> Services
          </Link>
          <div className="mx-auto flex w-full max-w-md flex-col items-center">
            <p className="max-w-sm text-xs font-sans tracking-[0.16em] uppercase leading-relaxed text-gold mb-4">
              {subtitle} | {service.price}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-4 leading-tight">{serviceTitle}</h1>
            <p className="font-sans text-foreground/85 text-[15px] leading-relaxed max-w-md">{description}</p>
            <span className="font-serif text-lg text-gold mt-5">{service.price}</span>
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
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Features</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">What's Included</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
          {service.features.map((feat) => (
            <div key={feat} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="font-sans text-sm text-foreground/90">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-lg mx-auto rounded-2xl border border-border/50 bg-card p-5">
          <h2 className="font-serif text-xl gold-text mb-2">Explore Related Design Inspiration</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            See how this premium service is applied in real homes and discover complete interior packages.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            <Link href={projectsIndexPath(market)} className="text-gold hover:underline">
              View Premium Projects
            </Link>
            <Link href={portfolioDetailPath(market, "living-room")} className="text-gold hover:underline">
              Premium Portfolio Concepts
            </Link>
            <Link href="/contact" className="text-gold hover:underline">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}

