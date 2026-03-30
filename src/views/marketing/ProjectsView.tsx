import Link from "next/link";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/lib/projects-data";

export default function ProjectsView() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-24 pb-10 px-5 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Our Work</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">Featured Luxury Interior Projects</h1>
        <p className="font-sans text-sm text-muted-foreground max-w-lg mx-auto">
          Explore premium interior transformations across villas and apartments, delivered with turnkey precision in Hyderabad.
        </p>
      </section>
      <section className="px-5 pb-16">
        <div className="flex flex-col gap-5 max-w-lg mx-auto">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-2xl overflow-hidden bg-card border border-border/50 group block">
              <div className="relative h-56 overflow-hidden">
                <img src={project.heroImage} alt={`${project.title} ${project.location}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-foreground mb-1">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-sans mb-2">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  {project.location}
                </div>
                <p className="text-xs font-sans text-gold/80 tracking-wide">{project.budget}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="px-5 pb-10">
        <div className="max-w-lg mx-auto rounded-2xl border border-border/50 bg-card p-5">
          <h2 className="font-serif text-xl gold-text mb-2">Need Similar Premium Interiors?</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Discover the services behind these projects and connect with our design team for your home.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            <Link href="/services" className="text-gold hover:underline">
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
