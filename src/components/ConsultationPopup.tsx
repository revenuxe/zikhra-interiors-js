"use client";

import { useState, useEffect } from "react";
import { getSupabaseClient } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { X } from "lucide-react";
import popupHero from "@/assets/popup-hero.webp";
import { useRouter } from "next/navigation";

const ConsultationPopup = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", projectType: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("popup-dismissed", "1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const supabase = getSupabaseClient();
    if (!supabase) {
      toast.error("Form is temporarily unavailable. Please try again in a moment.");
      setSubmitting(false);
      return;
    }
    const { error } = await supabase.from("leads").insert({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      project_type: formData.projectType.trim() || null,
      message: formData.message.trim() || null,
      source: "popup",
    });
    if (error) {
      toast.error("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }
    close();
    router.push("/thank-you");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={close}>
      <div className="absolute inset-0 bg-luxury-black/80 backdrop-blur-sm" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-card rounded-3xl overflow-hidden border border-border/30 shadow-2xl animate-fade-in-up"
      >
        {/* Hero Image */}
          <div className="relative h-36 overflow-hidden">
          <img
            src={popupHero.src}
            alt="Premium Hyderabad home interior consultation — bespoke living space design by Zikhra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
          <button
            onClick={close}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-luxury-black/60 backdrop-blur-sm border border-border/30 flex items-center justify-center transition-all hover:bg-luxury-black/80"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 pb-5 -mt-4 relative z-10">
          <div className="text-center mb-4">
            <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-gold mb-1">Limited Offer</p>
            <h3 className="font-serif text-lg gold-text leading-snug">Get Your Free Design Consultation</h3>
            <p className="font-sans text-[11px] text-muted-foreground mt-1">Book today & get a complimentary 3D render</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2.5">
            <input
              type="text" placeholder="Your Name" required
              value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/50 font-sans text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <input
              type="tel" placeholder="Phone Number" required
              value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/50 font-sans text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <input
              type="text" placeholder="Project Type (e.g., 2 BHK, Villa, Duplex)"
              value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/50 font-sans text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <textarea
              placeholder="Tell us about your project..." rows={2}
              value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/50 font-sans text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
            />
            <button
              type="submit" disabled={submitting}
              className="w-full gold-gradient py-3 rounded-full font-sans text-xs font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] gold-glow disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Book Free Consultation"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;
