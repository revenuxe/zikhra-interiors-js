import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import type { SiteIndexSection } from "@/lib/site-index-data";

type Props = {
  sections: SiteIndexSection[];
};

export default function AllPagesView({ sections }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-5 max-w-4xl mx-auto">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3 text-center">Sitemap</p>
        <h1 className="font-serif text-3xl md:text-4xl gold-text text-center mb-2">All pages</h1>
        <p className="font-sans text-sm text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Every major URL on Zikhra — services, project types, portfolio, Hyderabad and Bangalore locations, and more.
        </p>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title} className="border border-border/40 rounded-2xl bg-card/30 p-6 md:p-8">
              <h2 className="font-serif text-xl text-gold mb-1">{section.title}</h2>
              {section.description ? (
                <p className="font-sans text-xs text-muted-foreground mb-5">{section.description}</p>
              ) : null}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-foreground/90 hover:text-gold transition-colors underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
