import HeroBackdrop from "@/components/HeroBackdrop";
import { services } from "@/lib/services-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import TrustedPartners from "@/components/TrustedPartners";
import FeaturedProjects from "@/components/FeaturedProjects";
import { ArrowUpRight, Plane, Hotel, FileCheck, MapPin } from "lucide-react";
import Link from "next/link";
import type { MarketId } from "@/lib/market-types";
import { serviceDetailPath } from "@/lib/marketing-paths";

export { services };
const support = [
  { id: "visa-assistance", title: "Visa Assistance", description: "Documents & application guidance", icon: FileCheck },
  { id: "makkah-madinah-stays", title: "Hotel Stays", description: "Locations & accommodation options", icon: Hotel },
  { id: "flights-transfers", title: "Flights & Transfers", description: "Flights and ground transport", icon: Plane },
  { id: "ziyarat", title: "Ziyarat", description: "Local visits & guide enquiries", icon: MapPin },
];

export default function Services({ market = "bangalore" }: { market?: MarketId }) {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="relative isolate overflow-hidden bg-[#f8f8f7] pb-8 pt-24 sm:pb-10 sm:pt-28">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <h1 className="font-sans text-4xl font-light leading-tight tracking-[-0.055em] text-[#171717] sm:text-6xl">Travel Services</h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#525252] sm:text-base">Umrah packages and thoughtful support for your journey.</p>
      </div>
    </section>
    <TrustedPartners />
    <FeaturedProjects market={market} featuredOnly={false} title="Available Packages" subtitle="Compare flights, prices and departure dates." />
    <section className="mx-auto max-w-5xl px-5 pb-10 sm:px-8" aria-label="Travel support">
      <h2 className="mb-4 font-serif text-2xl text-[#171717]">Travel support</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{support.map(item => <Link key={item.id} href={serviceDetailPath(market,item.id)} className="group rounded-2xl border border-black/10 bg-white p-4 transition-colors hover:border-black/30"><item.icon size={20} strokeWidth={1.5} className="mb-3 text-[#65512b]"/><h3 className="text-sm font-medium text-[#171717]">{item.title}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.description}</p><ArrowUpRight size={15} className="mt-3 text-black/50"/></Link>)}</div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#f3efe6] p-4"><p className="text-sm text-[#525252]">Planning Hajj or a tailored journey?</p><Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#171717] px-4 py-2.5 text-xs font-medium text-white">Talk to our travel team<ArrowUpRight size={14}/></Link></div>
    </section>
    <Footer /><BottomNav />
  </div>;
}
