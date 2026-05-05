import Link from "next/link";
import { CheckCircle, ChevronDown, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import HomeStorySection from "@/components/HomeStorySection";
import ConsultationPopup from "@/components/ConsultationPopup";
import SeoJsonLd from "@/components/SeoJsonLd";
import type { AreaItem } from "@/lib/areas-data";
import { HomepageMarketingSections } from "@/views/marketing/CityLandingPage";
import { faqPageSchema, toJsonLd } from "@/lib/seo";
import { projectsIndexPath, servicesIndexPath } from "@/lib/marketing-paths";

type Props = {
  area: AreaItem;
};

const services = ["Full Home Interiors", "Modular Kitchen Design", "Wardrobe Solutions", "Living Room Design"];

export default function AreaDetailView({ area }: Props) {
  const isBangalore = area.basePath === "/bangalore";
  const market = isBangalore ? "bangalore" : "hyderabad";
  const servicesBase = servicesIndexPath(market);
  const projectsBase = projectsIndexPath(market);
  const costGuidePath = isBangalore ? "/bangalore/interior-design-cost" : "/hyderabad/interior-design-cost";

  return (
    <div className="min-h-screen bg-background">
      {area.faqs && area.faqs.length > 0 ? (
        <SeoJsonLd id={`area-faq-${area.slug}`} json={toJsonLd(faqPageSchema(area.faqs))} />
      ) : null}
      <Header />
      <section className="pt-32 md:pt-28 pb-12 px-5 text-center">
        <p className="text-xs font-sans tracking-[0.25em] uppercase text-gold mb-3">{area.city}</p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-4">
          Best Interior Designer in {area.name}, {area.city}
        </h1>
        <p className="font-sans text-muted-foreground text-sm max-w-md mx-auto">
          {area.tagline} 2 BHK pricing starts from Rs. 3.5 Lakhs and 3 BHK pricing starts from Rs. 5.5 Lakhs.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
        >
          Get Free Estimate
        </Link>
        <p className="font-sans text-xs text-muted-foreground mt-4 max-w-md mx-auto">
          Also explore our{" "}
          <Link href={projectsBase} className="text-gold hover:underline">
            premium interior projects
          </Link>{" "}
          and{" "}
          <Link href={servicesBase} className="text-gold hover:underline">
            premium service packages
          </Link>
          , and{" "}
          <Link href={costGuidePath} className="text-gold hover:underline">
            interior design costs
          </Link>{" "}
          in {area.city}.
        </p>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-2xl mx-auto px-1">
          <h2 className="font-serif text-xl md:text-2xl gold-text text-center mb-6">
            Premium home interiors in {area.name}, {area.city}
          </h2>
          <div className="space-y-4 text-left">
            {area.description
              .split(/\n\n+/)
              .map((para) => para.trim())
              .filter(Boolean)
              .map((para, i) => (
                <p key={i} className="font-sans text-sm text-foreground/85 leading-relaxed">
                  {para}
                </p>
              ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="max-w-lg mx-auto grid grid-cols-2 gap-3">
          {services.map((svc) => (
            <Link key={svc} href={servicesBase} className="p-4 rounded-2xl bg-card border border-border/30 text-center">
              <CheckCircle className="w-5 h-5 text-gold mx-auto mb-2" />
              <p className="font-sans text-xs text-foreground">{svc}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-lg mx-auto space-y-3">
          {["500+ Homes Transformed", "10-Year Warranty", "Transparent Planning"].map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/30">
              <Star className="w-4 h-4 text-gold" />
              <p className="font-sans text-sm text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {area.faqs && area.faqs.length > 0 ? (
        <section className="section-padding bg-luxury-dark/50 border-y border-border/20">
          <div className="max-w-xl mx-auto px-1">
            <h2 className="font-serif text-xl md:text-2xl gold-text text-center mb-2">Questions about {area.name}</h2>
            <p className="font-sans text-xs text-muted-foreground text-center mb-8">
              Straight answers for homeowners planning interiors in {area.city}.
            </p>
            <ul className="space-y-3">
              {area.faqs.map((f) => (
                <li key={f.q} className="rounded-2xl border border-border/40 bg-card/40 overflow-hidden">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 font-sans text-sm text-foreground">
                      {f.q}
                      <ChevronDown className="w-4 h-4 text-gold shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="px-4 pb-4 font-sans text-xs text-muted-foreground leading-relaxed border-t border-border/20 pt-3">{f.a}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section-padding pt-0">
        <div className="max-w-xl mx-auto rounded-2xl border border-border/30 bg-card/20 px-5 py-6 text-center">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-2">Local service</p>
          <p className="font-sans text-sm text-foreground/90">
            Zikhra serves {area.name} and surrounding neighbourhoods in {area.city} with the same premium standards as our Hyderabad studio — book a consultation to discuss your floor plan and style direction.
          </p>
        </div>
      </section>

      {isBangalore ? (
        <>
          <HomepageMarketingSections market="bangalore" />
          <ContactForm />
          <HomeStorySection market="bangalore" areaName={area.name} />
        </>
      ) : (
        <ContactForm />
      )}
      <Footer />
      <BottomNav />
      {isBangalore ? <ConsultationPopup /> : null}
    </div>
  );
}
