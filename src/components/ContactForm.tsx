"use client";

import { useState } from "react";
import { getSupabaseClient } from "@/integrations/supabase/client";
import { insertLead } from "@/lib/lead-insert";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", area: "", projectType: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

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
      source: "website",
    });

    if (error) {
      toast.error("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    router.push("/thank-you");
  };

  return (
    <section className="section-padding bg-[#f5f5f3]">
      <div className="mx-auto max-w-2xl rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_14px_32px_rgba(0,0,0,0.055)] sm:p-8">
        <div className="mb-8">
          <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#595959]">Get Started</p>
          <h2 className="font-sans text-3xl font-light tracking-[-0.045em] text-[#171717] md:text-4xl">
            Book Your Free Consultation
          </h2>
          <p className="mt-2 font-sans text-sm text-muted-foreground">
            Best interior designers in Bangalore — tell us about your dream space
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-black/12 bg-[#fafafa] px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-lg border border-black/12 bg-[#fafafa] px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors"
          />
          <input
            type="text"
            placeholder="Area / locality (e.g. Koramangala, Whitefield, Indiranagar)"
            required
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            className="w-full rounded-lg border border-black/12 bg-[#fafafa] px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors"
          />
          <input
            type="text"
            placeholder="Project Type (e.g., 2 BHK, Villa, Duplex)"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full rounded-lg border border-black/12 bg-[#fafafa] px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors"
          />
          <textarea
            placeholder="Tell us about your project..."
            rows={3}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full resize-none rounded-lg border border-black/12 bg-[#fafafa] px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#171717] py-3.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)] disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <p className="mt-4 text-center font-sans text-xs text-muted-foreground/70">
          Serving Bangalore, Koramangala, Indiranagar, Whitefield, HSR Layout & Electronic City
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
