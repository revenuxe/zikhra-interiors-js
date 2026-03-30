import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import type { ProjectItem } from "@/lib/projects-data";

type Props = { project: ProjectItem };

export default function ProjectDetailView({ project }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img src={project.heroImage} alt={`${project.title} ${project.location}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 text-center">
          <Link href="/projects" className="absolute top-28 md:top-24 left-5 flex items-center gap-2 text-gold text-sm font-sans">
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">{project.title}</h1>
          <div className="flex items-center gap-1.5 text-foreground/70 text-sm font-sans">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            {project.location}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-foreground/80 text-sm leading-relaxed mb-10">{project.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-sans text-sm text-foreground/80">{h}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-border/50 bg-card p-5">
            <h2 className="font-serif text-xl gold-text mb-2">Plan Your Luxury Interior</h2>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Like this premium interior project? Explore related design services and get a personalized proposal for your home.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-sans">
              <Link href="/services" className="text-gold hover:underline">
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
      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}
