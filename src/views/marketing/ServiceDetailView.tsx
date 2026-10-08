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
  portfolioDetailPath,
  projectsIndexPath,
  servicesIndexPath,
} from "@/lib/marketing-paths";
import EditorialPageHero from "@/components/EditorialPageHero";
import TrustedPartners from "@/components/TrustedPartners";
import { serviceDetailContent } from "@/lib/service-detail-content";
import PackageExplorer from "@/views/marketing/PackageExplorer";
import type { PackageCategory } from "@/lib/travel-packages";
import type { TravelCatalogueData } from "@/lib/travel-cms-model";

type Props = {
  service: ServiceItem;
  market?: MarketId;
  initialCatalogue?: TravelCatalogueData;
};

export default function ServiceDetailView({ service, market = "bangalore", initialCatalogue }: Props) {
  const subtitle = applyMarketToCopy(service.subtitle, market);
  const description = applyMarketToCopy(service.description, market);
  const servicesList = servicesIndexPath(market);
  const serviceTitle = service.title;
  const detail = serviceDetailContent[service.id];
  const packageCategory: Record<string, PackageCategory> = {
    "umrah-packages": "classic", "hajj-enquiries": "hajj", "family-umrah": "family",
    "group-umrah": "family", "private-umrah": "private", "ramadan-umrah": "ramadan",
  };
  if (packageCategory[service.id]) return <PackageExplorer initialCategory={packageCategory[service.id]} initialCatalogue={initialCatalogue} />;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <EditorialPageHero title={serviceTitle} description={description} />

      <TrustedPartners />

      {detail ? (
        <section className="section-padding">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <div>
              <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#626262]">Planned around your needs</p>
              <h2 className="font-sans text-3xl font-light tracking-[-0.045em] text-[#171717] md:text-4xl">A considered approach to {service.title.toLowerCase()}</h2>
              <div className="mt-6 space-y-4 font-sans text-[1rem] leading-[1.75] text-[#585858]">
                {detail.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <aside className="rounded-[1.5rem] border border-black/10 bg-[#f5f5f3] p-6 sm:p-7">
              <h3 className="font-sans text-lg font-medium tracking-[-0.035em] text-[#171717]">What we plan with you</h3>
              <ul className="mt-5 space-y-4">
                {detail.planningPoints.map((point) => <li key={point} className="flex gap-3 font-sans text-sm leading-relaxed text-[#555]"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-black/70" />{point}</li>)}
              </ul>
              <Link href="/contact" className="mt-7 inline-flex rounded-lg bg-[#171717] px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-black">Discuss your journey</Link>
            </aside>
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-luxury-dark">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Features</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Options to Discuss</h2>
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
          <h2 className="font-serif text-xl gold-text mb-2">Explore Related Journeys</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">Explore illustrative itineraries and destination guides, then discuss a plan that suits your travel needs.</p>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            <Link href={projectsIndexPath(market)} className="text-gold hover:underline">
              View Premium Journeys
            </Link>
            <Link href={portfolioDetailPath(market, "umrah-journeys")} className="text-gold hover:underline">
              Explore Umrah Journeys
            </Link>
            <Link href="/contact" className="text-gold hover:underline">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#626262]">From idea to a clear brief</p>
            <h2 className="font-sans text-3xl font-light tracking-[-0.045em] text-[#171717] md:text-4xl">How we plan your journey</h2>
            <p className="mt-5 font-sans text-[1rem] leading-[1.75] text-[#585858]">Good travel decisions start with a clear discussion of dates, budget, and preferences. Review your itinerary and quotation together so the arrangements and next steps are easy to understand.</p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Understand your plans", text: "We begin with your dates, departure city, group size, budget, and travel preferences." },
              { step: "02", title: "Set the direction", text: "Travel dates, hotels, room sharing, meals, and transport are considered together." },
              { step: "03", title: "Refine the details", text: "Hotel names, transport details, costs, and exclusions are clarified before booking." },
              { step: "04", title: "Prepare to travel", text: "Review your documents, confirmed itinerary, payment terms, and provider contact details." },
            ].map((item) => (
              <div key={item.step} className="rounded-[1.25rem] border border-black/10 bg-white p-5 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                <span className="font-sans text-xs font-medium tracking-[0.16em] text-[#6a6a6a]">{item.step}</span>
                <h3 className="mt-4 font-sans text-base font-medium text-[#171717]">{item.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#5b5b5b]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {detail ? (
        <section className="section-padding bg-[#f5f5f3]">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#626262]">Service FAQs</p>
            <h2 className="font-sans text-3xl font-light tracking-[-0.045em] text-[#171717] md:text-4xl">Questions about {service.title.toLowerCase()}</h2>
            <div className="mt-8 divide-y divide-black/10 rounded-[1.25rem] border border-black/10 bg-white px-5 sm:px-7">
              {detail.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 font-sans text-base font-medium text-[#171717] marker:hidden">{faq.question}<span className="float-right text-xl font-light text-[#666] transition-transform group-open:rotate-45">+</span></summary>
                  <p className="pt-3 font-sans text-sm leading-relaxed text-[#5b5b5b]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-padding">
        <div className="mx-auto max-w-4xl rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.05)] sm:p-8">
          <h2 className="font-sans text-2xl font-light tracking-[-0.04em] text-[#171717]">Helpful to have before your consultation</h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-[#5b5b5b]">You do not need a finished brief. A few simple details help make the first conversation more productive and let us understand the right scope for {service.title.toLowerCase()}.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Preferred dates and departure city", "Number of adults, children, and infants travelling", "Budget, room-sharing preference, and mobility needs", "Hotel preferences and any specific travel requirements"].map((item) => <li key={item} className="flex gap-3 font-sans text-sm leading-relaxed text-[#555]"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-black/70" />{item}</li>)}
          </ul>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}

