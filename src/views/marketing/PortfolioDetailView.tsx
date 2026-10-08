import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import type { PortfolioItem } from "@/lib/portfolio-data";
import type { MarketId } from "@/lib/market-types";
import { applyMarketToCopy, backHubPath, cityLabel } from "@/lib/marketing-paths";
import EditorialPageHero from "@/components/EditorialPageHero";

type Props = { item: PortfolioItem; market?: MarketId };

export default function PortfolioDetailView({ item, market = "bangalore" }: Props) {
  const city = cityLabel(market);
  const description = applyMarketToCopy(item.description, market);
  const tagline = applyMarketToCopy(item.tagline, market);
  const heroTitle = `${item.title} — Travel Guide`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <EditorialPageHero title={heroTitle} description={description} />

      <section className="section-padding">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Gallery</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Journey Inspiration</h2>
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
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Options to Discuss</h2>
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

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div>
            <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#626262]">Travel perspective</p>
            <h2 className="font-sans text-3xl font-light tracking-[-0.045em] text-[#171717] md:text-4xl">A more considered {item.title.toLowerCase()}</h2>
            <p className="mt-6 font-sans text-[1rem] leading-[1.75] text-[#585858]">{description}</p>
            <p className="mt-4 font-sans text-[1rem] leading-[1.75] text-[#585858]">A well-planned journey starts with your dates, departure city, group size, and preferences. Review your accommodation and transport choices together so each stage of the itinerary is clear.</p>
            <p className="mt-4 font-sans text-[1rem] leading-[1.75] text-[#585858]">Planning {item.title.toLowerCase()} from {city}? Discuss location, accessibility, room sharing, and your preferred pace before choosing your arrangements.</p>
          </div>
          <aside className="rounded-[1.5rem] border border-black/10 bg-[#f5f5f3] p-6 sm:p-7">
            <h3 className="font-sans text-lg font-medium tracking-[-0.035em] text-[#171717]">Key planning conversations</h3>
            <ul className="mt-5 space-y-4">{item.features.slice(0, 4).map((feature) => <li key={feature} className="flex gap-3 font-sans text-sm leading-relaxed text-[#555]"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-black/70" />{applyMarketToCopy(feature, market)}</li>)}</ul>
            <Link href="/contact" className="mt-7 inline-flex rounded-lg bg-[#171717] px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-black">Plan your journey</Link>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-[#f5f5f3]">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#626262]">The planning process</p>
            <h2 className="font-sans text-3xl font-light tracking-[-0.045em] text-[#171717] md:text-4xl">From an initial enquiry to a clear itinerary</h2>
            <p className="mt-5 font-sans text-[1rem] leading-[1.75] text-[#585858]">{tagline}. We begin with your preferences, compare available options, and confirm the details in writing before you prepare to travel.</p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {item.process.map((step, index) => (
              <div key={step.step} className="rounded-[1.25rem] border border-black/10 bg-white p-5 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                <span className="font-sans text-xs font-medium tracking-[0.16em] text-[#6a6a6a]">0{index + 1}</span>
                <h3 className="mt-4 font-sans text-base font-medium text-[#171717]">{step.step}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#5b5b5b]">{applyMarketToCopy(step.desc, market)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f5f5f3]">
        <div className="mx-auto max-w-4xl rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.045)] sm:p-8">
          <h2 className="font-sans text-2xl font-light tracking-[-0.04em] text-[#171717]">Ready to plan your journey?</h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-[#5b5b5b]">Share your preferred travel dates, departure city, number of travellers, and budget. We can help you compare options and identify the next steps.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-[#171717] px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-black">Book a consultation</Link>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}

