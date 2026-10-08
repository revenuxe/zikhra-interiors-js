import HeroBackdrop from "@/components/HeroBackdrop";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import type { CostGuideConfig } from "@/lib/interior-cost-data";

type Props = {
  config: CostGuideConfig;
};

export default function InteriorCostGuideView({ config }: Props) {
  const servicesPath = "/bangalore/services";
  const projectTypeBase = "/bangalore/packages";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#f8f8f7] pb-12 pt-28 sm:pb-16 sm:pt-32">
      <HeroBackdrop />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <h1 className="max-w-[11ch] font-sans text-[3.35rem] font-light leading-[0.97] tracking-[-0.07em] text-[#171717] sm:text-6xl md:max-w-[13ch] md:text-7xl lg:text-[5.8rem]">{config.h1}</h1>
        <p className="mt-8 max-w-xl font-sans text-[1.03rem] font-light leading-[1.72] tracking-[-0.02em] text-[#525252] md:text-[1.15rem]">{config.intro}</p>
        <div className="mt-10 flex flex-row items-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-[#171717] px-5 py-3.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black"
          >
            Plan Your Journey
          </Link>
          <Link
            href={servicesPath}
            className="px-1 py-3.5 font-sans text-sm font-medium text-[#171717] transition-colors duration-300 hover:text-black"
          >
            View Services
          </Link>
        </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid gap-4 md:grid-cols-3">
            {config.packages.map((pkg) => (
              <article key={pkg.name} className="rounded-2xl border border-border/50 bg-card/70 p-5">
                <p className="text-xs font-sans tracking-[0.24em] uppercase text-gold/80 mb-3">{pkg.name}</p>
                <h2 className="font-serif text-2xl text-foreground mb-3">{pkg.price}</h2>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-5">{pkg.desc}</p>
                <ul className="space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-5 max-w-2xl mx-auto">{config.heroNote}</p>
        </div>
      </section>

      <section className="section-padding bg-[#f5f5f3]">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
          <div>
            <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#626262]">Understanding the starting price</p>
            <h2 className="font-sans text-3xl font-light tracking-[-0.045em] text-[#171717] md:text-4xl">Why every travel quote needs clear inclusions</h2>
            <p className="mt-6 font-sans text-[1rem] leading-[1.75] text-[#585858]">Compare like-for-like travel arrangements before booking. A quotation should identify your travel dates, named hotels, room occupancy, flights or ground transport, meal plan, and any optional services.</p>
            <p className="mt-4 font-sans text-[1rem] leading-[1.75] text-[#585858]">The total can change with season, availability, length of stay, airline choice, hotel location, and private or shared arrangements. Confirm the final price, taxes, exclusions, payment schedule, and cancellation terms in writing.</p>
          </div>
          <aside className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.045)] sm:p-7">
            <h3 className="font-sans text-lg font-medium tracking-[-0.035em] text-[#171717]">What your travel quotation should clarify</h3>
            <ul className="mt-5 space-y-4">{["Which flights, hotels, meals, and transfers are included", "How hotel choice and room sharing affect the budget", "Which activities are included and which are optional", "What payment, change, and cancellation terms apply"].map((point) => <li key={point} className="flex gap-3 font-sans text-sm leading-relaxed text-[#555]"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-black/70" />{point}</li>)}</ul>
            <Link href="/contact" className="mt-7 inline-flex rounded-lg bg-[#171717] px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-black">Request a travel quotation</Link>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-8">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Package Comparison</p>
            <h2 className="font-serif text-3xl md:text-4xl gold-text">Compare Travel Arrangements</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border/40">
            <table className="w-full min-w-[620px] border-collapse bg-card/40 text-left">
              <thead>
                <tr className="border-b border-border/40 text-xs uppercase tracking-[0.2em] text-gold/80">
                  <th className="p-4 font-sans font-medium">Arrangement</th>
                  <th className="p-4 font-sans font-medium">Shared</th>
                  <th className="p-4 font-sans font-medium">Premium</th>
                  <th className="p-4 font-sans font-medium">Private</th>
                </tr>
              </thead>
              <tbody>
                {config.roomCosts.map((item) => (
                  <tr key={item.room} className="border-b border-border/20 last:border-b-0">
                    <td className="p-4 font-sans text-sm text-foreground">{item.room}</td>
                    <td className="p-4 font-sans text-sm text-muted-foreground">{item.essential}</td>
                    <td className="p-4 font-sans text-sm text-muted-foreground">{item.premium}</td>
                    <td className="p-4 font-sans text-sm text-muted-foreground">{item.signature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-5 grid gap-5 md:grid-cols-2">
          <div>
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Cost Factors</p>
            <h2 className="font-serif text-2xl md:text-3xl gold-text mb-4">What Changes the Final Quote?</h2>
            <div className="space-y-3">
              {[
                "Travel dates, season, and length of stay",
                "Departure city, airline, and baggage allowance",
                "Hotel location, room type, and sharing preference",
                "Private or shared transfers and ziyarat options",
                "Meal plans, service fees, and applicable taxes",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 font-sans text-sm text-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border/40 bg-card/50 p-5">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Plan Next</p>
            <h3 className="font-serif text-2xl text-foreground mb-3">Compare Journey Types</h3>
            <div className="flex flex-col gap-3">
              <Link href={`${projectTypeBase}/umrah`} className="text-sm text-gold hover:underline">
                Umrah travel planning
              </Link>
              <Link href={`${projectTypeBase}/family-umrah`} className="text-sm text-gold hover:underline">
                Family Umrah travel planning
              </Link>
              <Link href={`${projectTypeBase}/group-umrah`} className="text-sm text-gold hover:underline">
                Group and private Umrah
              </Link>
              <Link href={servicesPath} className="text-sm text-gold hover:underline">
                Umrah, family travel, and Ramadan enquiries
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark/50 border-y border-border/20">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-serif text-2xl md:text-3xl gold-text text-center mb-8">Pricing FAQs</h2>
          <div className="space-y-3">
            {config.faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-border/40 bg-card/40 p-4">
                <summary className="cursor-pointer font-sans text-sm text-foreground">{faq.q}</summary>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-3 pt-3 border-t border-border/20">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}
