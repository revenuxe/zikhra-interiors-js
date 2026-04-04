import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import type { ServiceItem } from "@/lib/services-data";
import type { MarketId } from "@/lib/market-types";
import { applyMarketToCopy, cityLabel, portfolioDetailPath, servicesIndexPath } from "@/lib/marketing-paths";

type Props = {
  service: ServiceItem;
  market?: MarketId;
};

export default function ServiceDetailView({ service, market = "hyderabad" }: Props) {
  const city = cityLabel(market);
  const subtitle = applyMarketToCopy(service.subtitle, market);
  const description = applyMarketToCopy(service.description, market);
  const servicesList = servicesIndexPath(market);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[70vh] w-full overflow-hidden">
        <img src={service.image} alt={`${service.title} in ${city}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 text-center">
          <Link href={servicesList} className="absolute top-28 md:top-24 left-5 flex items-center gap-2 text-gold text-sm font-sans">
            <ArrowLeft className="w-4 h-4" /> Services
          </Link>
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">{subtitle}</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-3 leading-tight">{service.title}</h1>
          <p className="font-sans text-foreground/80 text-sm max-w-md">{description}</p>
          <span className="font-serif text-lg text-gold mt-4">{service.price}</span>
          <Link
            href="/contact"
            className="mt-6 inline-flex gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
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
          <h2 className="font-serif text-xl gold-text mb-2">Explore Related Luxury Inspiration</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            See how this premium service is applied in real homes and discover complete interior packages.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            <Link href="/projects" className="text-gold hover:underline">
              View Premium Projects
            </Link>
            <Link href={portfolioDetailPath(market, "living-room")} className="text-gold hover:underline">
              Luxury Portfolio Concepts
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

