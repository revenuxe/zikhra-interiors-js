import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import EditorialPageHero from "@/components/EditorialPageHero";
import { COMPANY, OFFICE_MAP_URL } from "@/lib/company";

export type LegalSection = { id: string; title: string; content: ReactNode };

export default function LegalDocument({ title, description, sections }: { title: string; description: string; sections: LegalSection[] }) {
  return <div className="min-h-screen bg-background">
    <Header />
    <EditorialPageHero title={title} description={description} showCta={false} />
    <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
      <p className="mb-6 text-xs text-muted-foreground">Last updated: 8 October 2026</p>
      <div className="grid items-start gap-8 lg:grid-cols-[220px_1fr]">
        <nav aria-label={`${title} contents`} className="rounded-2xl border border-black/10 bg-white p-4 lg:sticky lg:top-28">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">On this page</p>
          <ol className="space-y-2 text-sm">{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="block leading-relaxed hover:underline">{index + 1}. {section.title}</a></li>)}</ol>
        </nav>
        <div className="min-w-0 space-y-7">{sections.map((section, index) => <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-black/10 pb-7">
          <h2 className="mb-3 font-sans text-lg font-medium">{index + 1}. {section.title}</h2>
          <div className="space-y-3 text-sm leading-7 text-[#5b5b5b] [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_a]:underline [&_a]:underline-offset-2">{section.content}</div>
        </section>)}
          <section id="legal-contact" className="scroll-mt-28 rounded-2xl border border-black/10 bg-white p-5">
            <h2 className="text-base font-medium">Questions or requests?</h2>
            <p className="mt-2 text-sm">{COMPANY.name}</p>
            <address className="mt-2 text-xs not-italic leading-relaxed text-muted-foreground">{COMPANY.address}</address>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm"><a href={`mailto:${COMPANY.email}`} className="break-all underline">{COMPANY.email}</a><a href={`tel:${COMPANY.phone}`} className="underline">{COMPANY.phoneLabel}</a><a href={OFFICE_MAP_URL} target="_blank" rel="noopener noreferrer" className="underline">Get directions</a></div>
          </section>
        </div>
      </div>
    </main>
    <Footer /><BottomNav />
  </div>;
}
