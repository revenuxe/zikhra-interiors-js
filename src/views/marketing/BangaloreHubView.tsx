import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";

export default function BangaloreHubView() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-24 pb-14 px-5 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Bangalore</p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-4">Luxury Interior Designers in Bangalore</h1>
        <p className="font-sans text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
          Zikhra brings Hyderabad-grade luxury interiors to Bangalore — bespoke modular kitchens, full-home turnkey execution, and designer-led project management. Explore premium neighbourhoods we serve across the city.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
        >
          Book a Bangalore Consultation
        </Link>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl gold-text text-center mb-2">Areas we serve in Bangalore</h2>
          <p className="font-sans text-xs text-muted-foreground text-center max-w-lg mx-auto mb-10">
            Local landing pages with neighbourhood-specific guidance — ideal if you are finalising interiors for a new home or renovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bangaloreAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/bangalore/${area.slug}`}
                className="group flex flex-col p-5 rounded-2xl bg-card border border-border/40 hover:border-gold/35 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h3 className="font-serif text-base text-foreground group-hover:text-gold transition-colors">{area.name}</h3>
                    <p className="font-sans text-xs text-muted-foreground mt-1 line-clamp-2">{area.tagline}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 mt-1" />
                </div>
                <p className="font-sans text-xs text-muted-foreground/90 leading-relaxed text-left line-clamp-3 pl-[52px]">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="max-w-xl mx-auto text-center px-2">
          <h2 className="font-serif text-xl gold-text mb-3">Why Bangalore homeowners choose Zikhra</h2>
          <ul className="text-left space-y-3 font-sans text-sm text-foreground/85">
            <li className="flex gap-2">
              <span className="text-gold">✦</span>
              <span>Turnkey luxury interiors with clear milestones — design, materials, execution, and handover in one workflow.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold">✦</span>
              <span>Premium modular kitchens, wardrobes, false ceilings, and full-home packages tailored to your floor plan.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold">✦</span>
              <span>Transparent communication and documentation so you always know scope, timelines, and next steps.</span>
            </li>
          </ul>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}
