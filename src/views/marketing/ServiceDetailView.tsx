import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
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
import EditorialPageHero from "@/components/EditorialPageHero";

type Props = {
  service: ServiceItem;
  market?: MarketId;
};

export default function ServiceDetailView({ service, market = "bangalore" }: Props) {
  const city = cityLabel(market);
  const subtitle = applyMarketToCopy(service.subtitle, market);
  const description = applyMarketToCopy(service.description, market);
  const servicesList = servicesIndexPath(market);
  const serviceTitle = `Best Interior Designer in ${city} for ${service.title}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <EditorialPageHero title={serviceTitle} description={description} />

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

