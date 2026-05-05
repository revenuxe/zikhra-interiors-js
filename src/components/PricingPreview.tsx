import Link from "next/link";
import type { MarketId } from "@/lib/market-types";

const packages = [
  {
    name: "2 BHK",
    price: "Starts from Rs. 3.5 Lakhs",
    desc: "Modular kitchen, two wardrobes, TV unit, basic storage, and practical finishes for compact apartments.",
  },
  {
    name: "3 BHK",
    price: "Starts from Rs. 5.5 Lakhs",
    desc: "Kitchen, three bedrooms, living room, wardrobes, lighting, and coordinated finishes for family homes.",
  },
  {
    name: "4 BHK / Villa",
    price: "Starts from Rs. 8.5 Lakhs",
    desc: "Expanded room scope with premium materials, custom storage, feature lighting, panelling, and turnkey execution.",
  },
];

type Props = { market?: MarketId };

export default function PricingPreview({ market = "hyderabad" }: Props) {
  const city = market === "bangalore" ? "Bangalore" : "Hyderabad";

  return (
    <section className="section-padding bg-luxury-dark/40 border-y border-border/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Pricing</p>
          <h2 className="font-serif text-3xl md:text-4xl gold-text">Home Interior Pricing in {city}</h2>
          <p className="font-sans text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
            Clear starting budgets for practical home interiors. Final pricing is refined after we review your floor
            plan, materials, site condition, and room-wise scope.
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
