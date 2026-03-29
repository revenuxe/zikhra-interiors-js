import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { areas } from "@/components/AreasWeServe";
import whatsappIcon from "@/assets/whatsapp.svg";
import { MapPin, Phone, Star, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  "Full Home Interiors",
  "Modular Kitchen Design",
  "Wardrobe & Storage Solutions",
  "Living Room Design",
  "Bedroom Interiors",
  "Bathroom Renovation",
  "False Ceiling & Lighting",
  "TV Unit & Entertainment",
  "Pooja Room Design",
  "Home Renovation",
  "Commercial Interiors",
];

const whyChoose = [
  "10+ Years of Experience in Hyderabad",
  "500+ Homes Transformed",
  "Free 3D Design Visualization",
  "End-to-End Project Management",
  "10-Year Warranty on Interiors",
  "Transparent Pricing, No Hidden Costs",
];

const AreaLanding = () => {
  const { slug } = useParams();
  const area = areas.find((a) => a.slug === slug);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", projectType: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  if (!area) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl gold-text mb-4">Area Not Found</h1>
          <Link to="/" className="text-gold hover:underline font-sans text-sm">Go Home</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || null,
      project_type: formData.projectType.trim() || null,
      message: formData.message.trim() || null,
      source: `area-${area.slug}`,
    });
    if (error) {
      toast.error("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 px-5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
        </div>
        <div className="relative z-10 text-center max-w-lg mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-5">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-xs text-gold">{area.name}, Hyderabad</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-4 leading-tight">
            Best Interior Designers in {area.name}
          </h1>
          <p className="font-sans text-foreground/80 text-sm mb-3">{area.tagline}</p>
          <p className="font-sans text-muted-foreground text-sm max-w-md mx-auto mb-8">
            Transform your home in {area.name} with Hyderabad's most trusted interior design studio. Premium designs, transparent pricing, and 10-year warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#consultation-form" className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow">
              Get Free Consultation
            </a>
            <a
              href={`https://wa.me/919886285028?text=Hi%20Zikhra,%20I%20need%20interior%20design%20in%20${encodeURIComponent(area.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full gold-gradient text-primary-foreground font-sans text-sm font-medium transition-all hover:scale-105 gold-glow"
            >
              <img src={whatsappIcon} alt="" className="w-4 h-4 brightness-0" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-luxury-dark">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Services</p>
            <h2 className="font-serif text-2xl md:text-3xl gold-text mb-2">Interior Design Services in {area.name}</h2>
            <p className="font-sans text-muted-foreground text-sm">Complete home transformation solutions</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {services.map((svc) => (
              <Link to={`/services#${svc.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={svc} className="p-4 rounded-2xl bg-card border border-border/30 text-center transition-all hover:border-gold/30">
                <CheckCircle className="w-5 h-5 text-gold mx-auto mb-2" />
                <p className="font-sans text-xs text-foreground">{svc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Why Us</p>
            <h2 className="font-serif text-2xl md:text-3xl gold-text mb-2">Why Choose Zikhra in {area.name}?</h2>
          </div>
          <div className="space-y-3">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/30">
                <Star className="w-4 h-4 text-gold flex-shrink-0" />
                <p className="font-sans text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="section-padding bg-luxury-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-lg mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Free Consultation</p>
            <h2 className="font-serif text-2xl md:text-3xl gold-text mb-2">Book Your Free Design Consultation in {area.name}</h2>
            <p className="font-sans text-muted-foreground text-sm">Tell us about your dream space and we'll get back within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" />
            <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" />
            <input type="email" placeholder="Email (optional)" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" />
            <input type="text" placeholder="Project Type (e.g., 2 BHK, Villa, Duplex)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" />
            <textarea placeholder="Tell us about your project..." rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors resize-none" />
            <button type="submit" disabled={submitting} className="w-full gold-gradient py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] gold-glow disabled:opacity-50">
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="text-center max-w-md mx-auto">
          <h2 className="font-serif text-2xl gold-text mb-4">Ready to Design Your Dream Home in {area.name}?</h2>
          <p className="font-sans text-muted-foreground text-sm mb-6">
            Get a free 3D design preview and transparent quote from Hyderabad's best interior designers.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/919886285028?text=Hi%20Zikhra,%20I%20need%20interior%20design%20for%20my%20home%20in%20${encodeURIComponent(area.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full gold-gradient text-primary-foreground font-sans text-sm font-medium transition-all hover:scale-105 gold-glow"
            >
              <img src={whatsappIcon} alt="" className="w-4 h-4 brightness-0" />
              WhatsApp Now
            </a>
            <a href="tel:+919886285028" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-gold/40 text-gold-light font-sans text-sm transition-all hover:border-gold hover:bg-gold/10">
              <Phone className="w-4 h-4" />
              Call +91 98862 85028
            </a>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="section-padding bg-luxury-dark">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-6">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Explore More</p>
            <h2 className="font-serif text-xl gold-text">We Also Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {areas.filter((a) => a.slug !== slug).slice(0, 16).map((a) => (
              <Link
                key={a.slug}
                to={`/area/${a.slug}`}
                className="px-4 py-2 rounded-full border border-border/40 font-sans text-xs text-muted-foreground hover:text-gold hover:border-gold/40 transition-all flex items-center gap-1"
              >
                {a.name}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default AreaLanding;
