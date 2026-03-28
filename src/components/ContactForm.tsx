import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactForm = () => {
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
      source: "website",
    });

    if (error) {
      toast.error("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    navigate("/thank-you");
  };

  return (
    <section className="section-padding bg-luxury-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Get Started</p>
          <h2 className="font-serif text-3xl md:text-4xl gold-text mb-3">
            Book Your Free Consultation
          </h2>
          <p className="font-sans text-muted-foreground text-sm">
            Best interior designers in Hyderabad — tell us about your dream space
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
          />
          <textarea
            placeholder="Tell us about your project..."
            rows={3}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 gold-gradient py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] gold-glow disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <p className="text-center font-sans text-xs text-muted-foreground/50 mt-4">
          Serving Hyderabad, Jubilee Hills, Banjara Hills, Gachibowli, Kondapur & HITEC City
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
