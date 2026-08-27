"use client";

import { useState, useEffect } from "react";
import { getSupabaseClient } from "@/integrations/supabase/client";
import { insertLead } from "@/lib/lead-insert";
import { toast } from "sonner";
import { X } from "lucide-react";
import popupHero from "@/assets/popup-hero.webp";
import { useRouter } from "next/navigation";

const ConsultationPopup = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", area: "", projectType: "", message: "" });
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
    const { error } = await insertLead(supabase, {
      name: formData.name,
      phone: formData.phone,
      area: formData.area,
      projectType: formData.projectType,
      message: formData.message,
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
            alt="Premium Bangalore home interior consultation — bespoke living space design by Zikhra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
          <button
            onClick={close}
            aria-label="Close consultation form"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-black/20 bg-white/95 shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:bg-white"
          >
            <X className="h-[18px] w-[18px] stroke-[2.5] text-[#171717]" />
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
              className="w-full rounded-xl border border-black/15 bg-[#fafafa] px-4 py-2.5 font-sans text-xs text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-black/45 focus:outline-none"
            />
            <input
              type="tel" placeholder="Phone Number" required
              value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-xl border border-black/15 bg-[#fafafa] px-4 py-2.5 font-sans text-xs text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-black/45 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Area / locality"
              required
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full rounded-xl border border-black/15 bg-[#fafafa] px-4 py-2.5 font-sans text-xs text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-black/45 focus:outline-none"
            />
            <input
              type="text" placeholder="Project Type (e.g., 2 BHK, Villa, Duplex)"
              value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full rounded-xl border border-black/15 bg-[#fafafa] px-4 py-2.5 font-sans text-xs text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-black/45 focus:outline-none"
            />
            <textarea
              placeholder="Tell us about your project..." rows={2}
              value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-black/15 bg-[#fafafa] px-4 py-2.5 font-sans text-xs text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-black/45 focus:outline-none"
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
