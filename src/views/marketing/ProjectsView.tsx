import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/lib/projects-data";
import type { MarketId } from "@/lib/market-types";
import { getProjectDisplayFields } from "@/lib/project-display";
import { projectDetailPath, servicesIndexPath } from "@/lib/marketing-paths";

type Props = { market?: MarketId };

export default function ProjectsView({ market = "bangalore" }: Props) {
  const cityLine =
    "Explore premium interior transformations across villas and apartments, delivered with turnkey precision in Bangalore.";
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative isolate overflow-hidden bg-[#f8f8f7] pb-12 pt-28 sm:pb-16 sm:pt-32">
        <img src={projects[0]?.heroImage} alt="Featured premium interior project in Bangalore" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.22] sm:opacity-[0.16]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(248,248,247,0.97)_0%,rgba(248,248,247,0.91)_48%,rgba(248,248,247,0.74)_100%)]" />
        <div className="absolute -right-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <h1 className="max-w-[11ch] font-sans text-[3.35rem] font-light leading-[0.97] tracking-[-0.07em] text-[#171717] sm:text-6xl md:max-w-[13ch] md:text-7xl lg:text-[5.8rem]">
            Featured Interior Projects in Bangalore
          </h1>
          <p className="mt-8 max-w-xl font-sans text-[1.03rem] font-light leading-[1.72] tracking-[-0.02em] text-[#525252] md:text-[1.15rem]">{cityLine}</p>
        </div>
      </section>
      <section className="px-5 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => {
            const { location } = getProjectDisplayFields(project, market);
            return (
              <Link
                key={project.slug}
                href={projectDetailPath(market, project.slug)}
                className="group block overflow-hidden rounded-[1.35rem] border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-60 overflow-hidden lg:h-64">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} ${location}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </div>
                <div className="flex items-start justify-between gap-5 p-5">
                  <div>
                    <h3 className="mb-2 font-sans text-xl font-light leading-tight tracking-[-0.035em] text-[#171717]">{project.title}</h3>
                    <div className="mb-2 flex items-center gap-1.5 font-sans text-sm text-[#666]">
                    <MapPin className="h-3.5 w-3.5 text-black/55" />
                    {location}
                    </div>
                    <p className="font-sans text-xs font-medium tracking-wide text-black/65">{project.budget}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/70 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="px-5 pb-10">
        <div className="max-w-lg mx-auto rounded-2xl border border-border/50 bg-card p-5">
          <h2 className="font-serif text-xl gold-text mb-2">Need Similar Premium Interiors?</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Discover the services behind these projects and connect with our design team for your home.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            <Link href={servicesIndexPath(market)} className="text-gold hover:underline">
              Explore Interior Services
            </Link>
            <Link href="/contact" className="text-gold hover:underline">
              Book a Design Consultation
            </Link>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}
