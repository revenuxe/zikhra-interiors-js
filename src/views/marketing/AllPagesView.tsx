import Link from "next/link";
import EditorialPageHero from "@/components/EditorialPageHero";
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
      <EditorialPageHero title="All Travel Planning Pages in Bangalore" description="Explore our services, packages, destinations and travel planning pages." showCta={false} />
      <main className="pb-16 pt-12 px-5 max-w-4xl mx-auto">
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
