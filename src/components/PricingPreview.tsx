import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

export default function PricingPreview({ market = "bangalore" }: Props) {
  void market;
  const city = "Bangalore";

  return (
    <section className="section-padding bg-[#f3f3f1]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl md:mb-14">
          <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.27em] text-[#5e5e5e]">Pricing</p>
          <h2 className="font-sans text-4xl font-light leading-[1.03] tracking-[-0.055em] text-[#171717] md:text-6xl">Home Interior Pricing in {city}</h2>
          <p className="mt-5 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
            Clear starting budgets for practical home interiors. Final pricing is refined after we review your floor
            plan, materials, site condition, and room-wise scope.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {packages.map((item, index) => (
            <article key={item.name} className={`group flex min-h-[17rem] flex-col rounded-[1.35rem] border p-6 transition-transform duration-300 hover:-translate-y-1 ${index === 1 ? "border-[#171717] bg-[#171717] text-white shadow-[0_18px_40px_rgba(0,0,0,0.16)]" : "border-black/10 bg-white shadow-[0_10px_26px_rgba(0,0,0,0.055)]"}`}>
              <div className="flex items-start justify-between gap-4">
                <p className={`font-sans text-[10px] font-medium uppercase tracking-[0.25em] ${index === 1 ? "text-white/55" : "text-[#666]"}`}>0{index + 1} · {item.name}</p>
                <ArrowUpRight className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${index === 1 ? "text-white/80" : "text-black/60"}`} />
              </div>
              <h3 className={`mt-9 font-sans text-[1.7rem] font-light leading-[1.05] tracking-[-0.045em] ${index === 1 ? "text-white" : "text-[#171717]"}`}>{item.price}</h3>
              <p className={`mt-auto pt-8 font-sans text-sm leading-relaxed ${index === 1 ? "text-white/65" : "text-muted-foreground"}`}>{item.desc}</p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center font-sans text-xs leading-relaxed text-muted-foreground">
          Final estimates depend on carpet area, site condition, materials, civil work, appliances, and selected finishes.
        </p>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
          <Link
            href="/bangalore/interior-design-cost"
            className="inline-flex items-center gap-2 rounded-lg border border-black/15 bg-white px-5 py-3.5 font-sans text-sm font-medium text-[#171717] transition-colors hover:border-black/40"
          >
            View Full Cost Guide <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#171717] px-5 py-3.5 font-sans text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
          >
            Get Room-Wise Estimate <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
