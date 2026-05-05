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
  const isBangalore = config.city === "bangalore";
  const servicesPath = isBangalore ? "/bangalore/services" : "/services";
  const projectTypeBase = isBangalore ? "/bangalore/project-type" : "/project-type";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 md:pt-28 pb-12 px-5 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Interior Pricing Guide</p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-4">{config.h1}</h1>
        <p className="font-sans text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">{config.intro}</p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            Get Free Estimate
          </Link>
          <Link
            href={servicesPath}
            className="px-8 py-3.5 rounded-full font-sans text-sm font-medium border border-gold/40 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            View Services
          </Link>
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

      <section className="section-padding bg-luxury-dark">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-8">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Room-Wise Cost</p>
            <h2 className="font-serif text-3xl md:text-4xl gold-text">What Each Room Can Cost</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border/40">
            <table className="w-full min-w-[620px] border-collapse bg-card/40 text-left">
              <thead>
                <tr className="border-b border-border/40 text-xs uppercase tracking-[0.2em] text-gold/80">
                  <th className="p-4 font-sans font-medium">Room</th>
                  <th className="p-4 font-sans font-medium">Practical</th>
                  <th className="p-4 font-sans font-medium">Premium</th>
                  <th className="p-4 font-sans font-medium">Signature</th>
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
                "Carpet area and room count",
                "Kitchen layout, wardrobes, and storage volume",
                "Laminate, acrylic, PU, veneer, stone, and hardware choices",
                "False ceiling, lighting, electrical, and civil work",
                "Appliances, loose furniture, curtains, and styling",
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
            <h3 className="font-serif text-2xl text-foreground mb-3">Compare by Home Type</h3>
            <div className="flex flex-col gap-3">
              <Link href={`${projectTypeBase}/2bhk`} className="text-sm text-gold hover:underline">
                2 BHK interior design
              </Link>
              <Link href={`${projectTypeBase}/3bhk`} className="text-sm text-gold hover:underline">
                3 BHK interior design
              </Link>
              <Link href={`${projectTypeBase}/4bhk`} className="text-sm text-gold hover:underline">
                4 BHK and villa interiors
              </Link>
              <Link href={servicesPath} className="text-sm text-gold hover:underline">
                Modular kitchen, wardrobe, and renovation services
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
