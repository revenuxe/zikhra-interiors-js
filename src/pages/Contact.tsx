import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import contactHero from "@/assets/contact-hero.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", projectType: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("leads").insert({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || null,
      project_type: formData.projectType.trim() || null,
      message: formData.message.trim() || null,
      source: "contact-page",
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

      <section className="relative h-[50vh] w-full overflow-hidden">
        <img src={contactHero} alt="Contact Zikhra Interior Designers Hyderabad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-14 text-center">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">Get In Touch</h1>
          <p className="font-sans text-foreground/80 text-sm max-w-sm">
            Ready to transform your Hyderabad home? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto mb-10">
          {[
            { icon: Phone, title: "Call Us", detail: "+91 98862 85028" },
            { icon: Mail, title: "Email", detail: "zikhraofficial@gmail.com" },
            { icon: MapPin, title: "Visit", detail: "Jubilee Hills, Hyderabad" },
            { icon: Clock, title: "Hours", detail: "Mon–Sat, 10am–7pm" },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-2xl bg-card border border-border/50 text-center">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-sm text-foreground mb-1">{item.title}</h3>
              <p className="font-sans text-xs text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl gold-text mb-2">Send Us a Message</h2>
            <p className="font-sans text-xs text-muted-foreground">Fill out the form and our team will get back to you shortly</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" />
            <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" />
            <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors" />
            <textarea placeholder="Tell us about your project..." rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors resize-none" />
            <button type="submit" disabled={submitting} className="w-full gold-gradient py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] gold-glow disabled:opacity-50">
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Contact;
