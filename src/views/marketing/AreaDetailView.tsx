import HeroBackdrop from "@/components/HeroBackdrop";
import Link from "next/link";
import { CheckCircle, ChevronDown, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import HomeStorySection from "@/components/HomeStorySection";
import ConsultationPopup from "@/components/ConsultationPopup";
import TrustedPartners from "@/components/TrustedPartners";
import SeoJsonLd from "@/components/SeoJsonLd";
import type { AreaItem } from "@/lib/areas-data";
import { HomepageMarketingSections } from "@/views/marketing/CityLandingPage";
import { faqPageSchema, toJsonLd } from "@/lib/seo";
import { projectsIndexPath, servicesIndexPath } from "@/lib/marketing-paths";

type Props = {
  area: AreaItem;
};

const services = ["Umrah Packages", "Hajj Enquiries", "Family Umrah", "Group Umrah"];

export default function AreaDetailView({ area }: Props) {
  const market = "bangalore";
  const servicesBase = servicesIndexPath(market);
  const projectsBase = projectsIndexPath(market);
  const costGuidePath = "/bangalore/travel-package-guide";

  return (
    <div className="min-h-screen bg-background">
      {area.faqs && area.faqs.length > 0 ? (
        <SeoJsonLd id={`area-faq-${area.slug}`} json={toJsonLd(faqPageSchema(area.faqs))} />
      ) : null}
      <Header />
      <section className="relative isolate overflow-hidden bg-[#f8f8f7] pb-12 pt-28 sm:pb-16 sm:pt-32">
      <HeroBackdrop />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <h1 className="max-w-[11ch] font-sans text-[3.35rem] font-light leading-[0.97] tracking-[-0.07em] text-[#171717] sm:text-6xl md:max-w-[13ch] md:text-7xl lg:text-[5.8rem]">
          Umrah & Hajj Tours from {area.name}
        </h1>
        <p className="mt-8 max-w-xl font-sans text-[1.03rem] font-light leading-[1.72] tracking-[-0.02em] text-[#525252] md:text-[1.15rem]">Umrah packages, Hajj guidance and family travel from {area.name}, {area.city}.</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-[#171717] px-4 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-black">Plan Your Journey</Link>
          <Link href="/bangalore/packages" className="inline-flex items-center gap-2 rounded-lg border border-black/20 bg-white/60 px-4 py-3.5 font-sans text-sm font-medium text-[#171717] transition-colors hover:bg-white">Explore Packages<ArrowUpRight size={16}/></Link>
        </div>
        <p className="mt-4 max-w-xl font-sans text-xs text-muted-foreground">
          Also explore our{" "}
          <Link href={projectsBase} className="text-gold hover:underline">
            illustrative itineraries
          </Link>{" "}
          and{" "}
          <Link href={servicesBase} className="text-gold hover:underline">
            travel services
          </Link>
          , and{" "}
          <Link href={costGuidePath} className="text-gold hover:underline">
            travel package costs
          </Link>{" "}
          in {area.city}.
        </p>
        </div>
      </section>

      <TrustedPartners />

      <section className="section-padding pt-0">
        <div className="max-w-2xl mx-auto px-1">
          <h2 className="font-serif text-xl md:text-2xl gold-text text-center mb-6">
            Umrah travel from {area.name}, {area.city}
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
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {[{ title: "Start with the plan", text: "Travel dates, group size, and budget help shape your itinerary." }, { title: "Plan for your family", text: `Families from ${area.name} can discuss room sharing, children, older relatives, and accessibility needs.` }, { title: "Clarify the scope", text: "A written quotation confirms the travel services, exclusions, costs, and next steps." }].map((item) => <div key={item.title} className="rounded-[1.25rem] border border-black/10 bg-white p-5 shadow-[0_8px_20px_rgba(0,0,0,0.04)]"><h3 className="font-sans text-base font-medium text-[#171717]">{item.title}</h3><p className="mt-2 font-sans text-sm leading-relaxed text-[#5b5b5b]">{item.text}</p></div>)}
        </div>
      </section>

      {area.faqs && area.faqs.length > 0 ? (
        <section className="section-padding bg-luxury-dark/50 border-y border-border/20">
          <div className="max-w-xl mx-auto px-1">
            <h2 className="font-serif text-xl md:text-2xl gold-text text-center mb-2">Questions about {area.name}</h2>
            <p className="font-sans text-xs text-muted-foreground text-center mb-8">
              Straight answers for travellers planning journeys in {area.city}.
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
          <p className="font-sans text-sm text-foreground/90">Planning travel from {area.name}, {area.city}? Start with your dates, group size, and preferences, then review the written itinerary before booking.</p>
        </div>
      </section>

      <>
        <HomepageMarketingSections market="bangalore" />
        <ContactForm />
        <HomeStorySection market="bangalore" areaName={area.name} />
      </>
      <Footer />
      <BottomNav />
      <ConsultationPopup />
    </div>
  );
}

