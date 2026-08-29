import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import TrustedPartners from "@/components/TrustedPartners";
import heroImage from "@/assets/hero-interior.webp";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";

export default function LocationsView() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative isolate overflow-hidden bg-[#f8f8f7] pb-12 pt-28 sm:pb-16 sm:pt-32">
        <img src={heroImage.src} alt="Premium home interior design across Bangalore" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.24] sm:opacity-[0.18]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(248,248,247,0.96)_0%,rgba(248,248,247,0.9)_45%,rgba(248,248,247,0.72)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <h1 className="max-w-[12ch] font-sans text-[3.35rem] font-light leading-[0.97] tracking-[-0.07em] text-[#171717] sm:text-6xl md:max-w-[15ch] md:text-7xl lg:text-[5.8rem]">Interior design across Bangalore</h1>
          <p className="mt-8 max-w-xl font-sans text-[1.03rem] font-light leading-[1.72] tracking-[-0.02em] text-[#525252] md:text-[1.15rem]">Explore neighbourhood-specific interior design pages for apartments, villas, renovations, kitchens, wardrobes, and full-home projects across Bangalore.</p>
          <Link href="/contact" className="mt-10 inline-flex items-center rounded-lg bg-[#171717] px-5 py-3.5 font-sans text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black">Get Free Estimate</Link>
        </div>
      </section>
      <TrustedPartners />
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl"><h2 className="font-sans text-3xl font-light tracking-[-0.045em] text-[#171717] md:text-4xl">Find your neighbourhood</h2><p className="mt-4 font-sans text-sm leading-relaxed text-[#5b5b5b]">Every Bangalore locality has a different mix of apartment formats, independent homes, site rules, and lifestyle needs. Choose your area to explore relevant planning considerations and service information.</p></div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bangaloreAreas.map((area) => <Link key={area.slug} href={`/bangalore/${area.slug}`} className="group rounded-[1.25rem] border border-black/10 bg-white p-6 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.09)]"><p className="font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-[#777]">Bangalore</p><h3 className="mt-3 font-sans text-xl font-medium tracking-[-0.035em] text-[#171717]">{area.name}</h3><p className="mt-2 font-sans text-sm leading-relaxed text-[#5b5b5b]">{area.tagline}</p><span className="mt-5 inline-block font-sans text-sm font-medium text-[#171717]">Explore area guide <span className="ml-1">→</span></span></Link>)}
          </div>
        </div>
      </section>
      <section className="section-padding bg-[#f5f5f3]"><div className="mx-auto max-w-4xl rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.045)] sm:p-8"><h2 className="font-sans text-2xl font-light tracking-[-0.04em] text-[#171717]">Not sure where to begin?</h2><p className="mt-3 font-sans text-sm leading-relaxed text-[#5b5b5b]">Share your floor plan, area, and the rooms you want to prioritise. We can help you clarify an interior direction, scope, and the next practical steps for your home.</p><Link href="/contact" className="mt-6 inline-flex rounded-lg bg-[#171717] px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-black">Talk to our team</Link></div></section>
      <ContactForm />
      <Footer /><BottomNav />
    </div>
  );
}
