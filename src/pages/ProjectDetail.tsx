import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import { ArrowLeft, CheckCircle2, MapPin } from "lucide-react";

import project2bhk from "@/assets/project-2bhk.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import project3bhk from "@/assets/project-3bhk.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import livingroomImg from "@/assets/livingroom.jpg";

const projectData: Record<string, {
  title: string;
  location: string;
  budget: string;
  duration: string;
  heroImage: string;
  description: string;
  highlights: string[];
  scope: string[];
}> = {
  "2bhk-apartment": {
    title: "2BHK Apartment",
    location: "Gachibowli, Hyderabad",
    budget: "₹12-18 Lakhs",
    duration: "45 Days",
    heroImage: project2bhk,
    description: "A complete transformation of a 2BHK apartment in Gachibowli, designed with modern luxury aesthetics. Every room was reimagined with premium materials, smart storage, and ambient lighting to maximize the compact space.",
    highlights: ["Space-optimized design", "Premium laminate finishes", "Smart storage solutions", "Ambient cove lighting"],
    scope: ["Living Room", "Master Bedroom", "Guest Bedroom", "Modular Kitchen", "2 Bathrooms", "Balcony"],
  },
  "luxury-villa": {
    title: "Luxury Villa",
    location: "Jubilee Hills, Hyderabad",
    budget: "₹45-60 Lakhs",
    duration: "90 Days",
    heroImage: projectVilla,
    description: "A grand luxury villa transformation in the heart of Jubilee Hills. Italian marble flooring, custom chandeliers, and bespoke furniture pieces create an atmosphere of unparalleled opulence. This is Zikhra's flagship project in Hyderabad.",
    highlights: ["Italian marble throughout", "Custom designer furniture", "Home automation integrated", "Landscape design included"],
    scope: ["Grand Living Room", "4 Bedrooms", "Gourmet Kitchen", "Home Theatre", "5 Bathrooms", "Garden & Patio"],
  },
  "3bhk-penthouse": {
    title: "3BHK Penthouse",
    location: "Banjara Hills, Hyderabad",
    budget: "₹25-35 Lakhs",
    duration: "60 Days",
    heroImage: project3bhk,
    description: "A stunning penthouse project in Banjara Hills featuring panoramic city views complemented by interior design that brings the outdoors in. Floor-to-ceiling windows, natural materials, and warm tones define this luxurious retreat.",
    highlights: ["Panoramic view optimization", "Natural stone accents", "Floor-to-ceiling glazing", "Terrace lounge design"],
    scope: ["Open Living & Dining", "3 Bedrooms", "Island Kitchen", "Study Room", "3 Bathrooms", "Terrace"],
  },
  "modular-kitchen-project": {
    title: "Modular Kitchen",
    location: "Kondapur, Hyderabad",
    budget: "₹8-12 Lakhs",
    duration: "30 Days",
    heroImage: kitchenImg,
    description: "A premium modular kitchen transformation in Kondapur featuring Italian marble countertops, gold hardware accents, and state-of-the-art German fittings. Designed for both aesthetics and the demanding Indian cooking style.",
    highlights: ["Quartz countertops", "German Hettich hardware", "Integrated chimney & hob", "Pull-out pantry system"],
    scope: ["L-shaped Kitchen Layout", "Breakfast Counter", "Tall Unit", "Pantry Pull-outs", "Under-cabinet Lighting"],
  },
  "master-bedroom": {
    title: "Master Bedroom Suite",
    location: "HITEC City, Hyderabad",
    budget: "₹6-10 Lakhs",
    duration: "25 Days",
    heroImage: bedroomImg,
    description: "A luxurious master bedroom suite in HITEC City designed as a personal sanctuary. Custom upholstered headboard, ambient lighting, walk-in wardrobe, and a cozy reading nook create the ultimate retreat.",
    highlights: ["Custom king-size bed", "Walk-in wardrobe", "Ambient mood lighting", "Premium wall paneling"],
    scope: ["Bedroom Design", "Walk-in Closet", "Dressing Area", "Reading Corner", "En-suite Bathroom"],
  },
  "living-room-makeover": {
    title: "Living Room Makeover",
    location: "Madhapur, Hyderabad",
    budget: "₹10-15 Lakhs",
    duration: "35 Days",
    heroImage: livingroomImg,
    description: "A dramatic living room transformation in Madhapur that turned a plain space into a designer showpiece. Statement furniture, a curated art wall, and layered lighting create an atmosphere perfect for both relaxation and entertaining.",
    highlights: ["Statement accent wall", "Designer furniture", "Layered lighting design", "Smart home ready"],
    scope: ["Living Area", "Dining Space", "TV Unit", "Accent Wall", "Foyer Design"],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? projectData[slug] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground mb-4">Project not found</p>
          <Link to="/projects" className="text-gold font-sans text-sm">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img src={data.heroImage} alt={`${data.title} interior design ${data.location}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 text-center">
          <Link to="/projects" className="absolute top-20 left-5 flex items-center gap-2 text-gold text-sm font-sans">
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Project Showcase</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3 leading-tight">{data.title}</h1>
          <div className="flex items-center gap-1.5 text-foreground/70 text-sm font-sans">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            {data.location}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: "Budget", value: data.budget },
              { label: "Duration", value: data.duration },
              { label: "Location", value: data.location.split(",")[0] },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
                <p className="font-sans text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="font-serif text-sm text-gold">{item.value}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-foreground/80 text-sm leading-relaxed mb-10">{data.description}</p>

          {/* Highlights */}
          <div className="mb-10">
            <h2 className="font-serif text-xl gold-text mb-4">Project Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="font-sans text-sm text-foreground/80">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scope */}
          <div>
            <h2 className="font-serif text-xl gold-text mb-4">Scope of Work</h2>
            <div className="flex flex-wrap gap-2">
              {data.scope.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full bg-card border border-gold/20 font-sans text-xs text-gold-light">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-luxury-dark text-center">
        <h2 className="font-serif text-2xl gold-text mb-4">Want a Similar Transformation?</h2>
        <a
          href={`https://wa.me/919886285028?text=Hi%20Zikhra,%20I%20saw%20your%20${encodeURIComponent(data.title)}%20project%20and%20I'm%20interested`}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow inline-block"
        >
          Get Free Consultation
        </a>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default ProjectDetail;
