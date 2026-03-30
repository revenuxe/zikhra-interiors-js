import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import { ArrowLeft, CheckCircle2, Star } from "lucide-react";
import { services } from "@/pages/Services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground mb-4">Service not found</p>
          <Link to="/services" className="text-gold font-sans text-sm">← Back to Services</Link>
        </div>
      </div>
    );
  }

  const seoContent: Record<string, { benefits: string[]; process: { step: string; desc: string }[]; whyUs: string[] }> = {
    "full-home": {
      benefits: ["End-to-end design & execution under one roof", "No coordination hassles — single point of contact", "Consistent luxury aesthetic throughout your home", "Factory-finished modular elements for faster delivery", "10-year warranty on all installations"],
      process: [{ step: "Free Consultation", desc: "We visit your home, understand your vision, lifestyle, and budget" }, { step: "3D Design & Approval", desc: "Photorealistic renders for every room — approve before we start" }, { step: "Material Selection", desc: "Visit our experience center to touch, feel, and select premium materials" }, { step: "Production", desc: "Factory-grade manufacturing with quality checks at every stage" }, { step: "Installation & Handover", desc: "Expert craftsmen install everything — quality inspected and handed over" }],
      whyUs: ["500+ homes designed across Hyderabad", "In-house design team with 8+ years experience", "Direct factory partnerships for premium materials", "Transparent pricing with no hidden costs", "Post-installation support and warranty"],
    },
    "modular-kitchen": {
      benefits: ["Maximized storage with smart pull-out systems", "Waterproof & termite-proof construction", "Easy maintenance with premium laminate finishes", "Ergonomic design for Indian cooking style", "Quick installation — minimal disruption"],
      process: [{ step: "Kitchen Survey", desc: "Detailed measurements and plumbing/electrical mapping" }, { step: "Layout Design", desc: "L-shape, U-shape, parallel, or island — optimized for your space" }, { step: "Material Finalize", desc: "Countertop, hardware, backsplash, and finish selection" }, { step: "Factory Production", desc: "CNC-cut precision manufacturing in our facility" }, { step: "Installation", desc: "Professional fitting with plumbing and electrical integration" }],
      whyUs: ["Hettich & Blum soft-close hardware standard", "Italian quartz and granite countertop options", "Marine-grade BWR plywood construction", "Integrated chimney and appliance planning", "Lifetime design support"],
    },
  };

  const details = seoContent[service.id] || {
    benefits: ["Premium quality materials and finishes", "Expert craftsmanship by trained professionals", "3D visualization before execution", "On-time delivery guaranteed", "Post-installation warranty and support"],
    process: [{ step: "Consultation", desc: "Understanding your requirements and space" }, { step: "Design", desc: "Creating stunning 3D visualizations" }, { step: "Material Selection", desc: "Choosing premium materials together" }, { step: "Execution", desc: "Expert installation by skilled craftsmen" }, { step: "Handover", desc: "Quality inspection and project completion" }],
    whyUs: ["Experienced design team", "Premium materials only", "Transparent pricing", "On-time delivery", "Post-project support"],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img src={service.image} alt={`${service.title} in Hyderabad`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 text-center">
          <Link to="/services" className="absolute top-20 left-5 flex items-center gap-2 text-gold text-sm font-sans">
            <ArrowLeft className="w-4 h-4" /> Services
          </Link>
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">{service.subtitle}</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-3 leading-tight">{service.title}</h1>
          <p className="font-sans text-foreground/80 text-sm max-w-md">{service.description.substring(0, 150)}...</p>
          <span className="font-serif text-lg text-gold mt-4">{service.price}</span>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-luxury-dark">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Features</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">What's Included</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
          {service.features.map((feat) => (
            <div key={feat} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="font-sans text-sm text-foreground/90">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Benefits</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Why This Service?</h2>
        </div>
        <div className="flex flex-col gap-3 max-w-lg mx-auto">
          {details.benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
              <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="font-sans text-sm text-foreground/90">{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-luxury-dark">
        <div className="text-center mb-10">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Process</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">How It Works</h2>
        </div>
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          {details.process.map((step, i) => (
            <div key={step.step} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-sm font-bold text-primary-foreground">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">{step.step}</h3>
                <p className="font-sans text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Why Zikhra</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Why Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
          {details.whyUs.map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="font-sans text-sm text-foreground/90">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-luxury-dark text-center">
        <h2 className="font-serif text-2xl md:text-3xl gold-text mb-4">Get a Free {service.title} Quote</h2>
        <p className="font-sans text-sm text-muted-foreground mb-6">Talk to our design experts today</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/919886285028?text=Hi%20Zikhra,%20I'm%20interested%20in%20${encodeURIComponent(service.title)}%20in%20Hyderabad`}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow inline-block"
          >
            WhatsApp Us
          </a>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full font-sans text-sm font-medium border border-gold/40 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/10 inline-block"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default ServiceDetail;
