import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import type { ProjectItem } from "@/lib/projects-data";
import type { MarketId } from "@/lib/market-types";
import { getProjectDisplayFields } from "@/lib/project-display";
import { projectsIndexPath, servicesIndexPath } from "@/lib/marketing-paths";
import EditorialPageHero from "@/components/EditorialPageHero";

type Props = { project: ProjectItem; market?: MarketId };

export default function ProjectDetailView({ project, market = "bangalore" }: Props) {
  const { location, description, highlights } = getProjectDisplayFields(project, market);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EditorialPageHero title={`${project.title} Interior Design in ${location}`} meta={<span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{location}</span>} />
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-foreground/80 text-sm leading-relaxed mb-10">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-sans text-sm text-foreground/80">{h}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-border/50 bg-card p-5">
            <h2 className="font-serif text-xl gold-text mb-2">Plan Your Premium Interior</h2>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Like this premium interior project? Explore related design services and get a personalized proposal for your home.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-sans">
              <Link href={servicesIndexPath(market)} className="text-gold hover:underline">
                Explore Interior Services
              </Link>
              <Link href="/blog" className="text-gold hover:underline">
                Read Design Insights
              </Link>
              <Link href="/contact" className="text-gold hover:underline">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-[#f5f5f3]">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
          <div className="overflow-hidden rounded-[1.5rem] border border-black/10"><img src={project.heroImage} alt={`${project.title} interior design in ${location}`} className="h-72 w-full object-cover md:h-[26rem]" /></div>
          <div>
            <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#626262]">Project perspective</p>
            <h2 className="font-sans text-3xl font-light tracking-[-0.045em] text-[#171717] md:text-4xl">Designed for the way this home is lived in</h2>
            <p className="mt-6 font-sans text-[1rem] leading-[1.75] text-[#585858]">A project is more than a collection of finishes. The strongest interiors begin with practical circulation, natural light, storage requirements, and the character the homeowners want the space to hold.</p>
            <p className="mt-4 font-sans text-[1rem] leading-[1.75] text-[#585858]">For this {project.title.toLowerCase()} in {location}, the design language can be read through its layered decisions: the balance of open and private zones, the relationship between furniture and architecture, and a material palette intended to feel coherent from room to room.</p>
            <Link href="/contact" className="mt-7 inline-flex rounded-lg bg-[#171717] px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-black">Discuss a similar project</Link>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}
