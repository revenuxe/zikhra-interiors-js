import Link from "next/link";
import type { MarketId } from "@/lib/market-types";

const packages = [
  {
    name: "Practical",
    price: "Core home scope",
    desc: "Modular kitchen, wardrobes, TV unit, and practical storage for move-in-ready homes.",
  },
  {
    name: "Premium",
    price: "Enhanced room scope",
    desc: "Better finishes, detailed storage, lighting, wall treatments, and coordinated room design.",
  },
  {
    name: "Signature",
    price: "Full custom scope",
    desc: "Premium materials, custom detailing, feature lighting, panelling, and elevated turnkey execution.",
  },
];

type Props = { market?: MarketId };

export default function PricingPreview({ market = "hyderabad" }: Props) {
  const city = market === "bangalore" ? "Bangalore" : "Hyderabad";

  return (
    <section className="section-padding bg-luxury-dark/40 border-y border-border/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Scope Planning</p>
          <h2 className="font-serif text-3xl md:text-4xl gold-text">Home Interior Packages in {city}</h2>
          <p className="font-sans text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
            Start with a clear scope, then upgrade finishes, storage, lighting, and styling based on how complete you
            want the final home to feel.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className="rounded-2xl border border-border/50 bg-card/70 p-5">
              <p className="text-xs font-sans tracking-[0.24em] uppercase text-gold/80 mb-3">{item.name}</p>
              <h3 className="font-serif text-2xl text-foreground mb-3">{item.price}</h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-5">
          Final estimates depend on carpet area, site condition, materials, civil work, appliances, and selected finishes.
        </p>

        <div className="text-center mt-8">
          <Link
            href="/interior-design-cost"
            className="inline-block px-8 py-3.5 rounded-full font-sans text-sm font-medium border border-gold/40 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            View Full Cost Guide
          </Link>
          <Link
            href="/contact"
            className="ml-0 mt-3 sm:ml-3 sm:mt-0 inline-block gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            Get Room-Wise Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
