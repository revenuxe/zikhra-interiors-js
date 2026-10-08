"use client";

import { useState } from "react";
import { getSupabaseClient } from "@/integrations/supabase/client";
import { insertLead } from "@/lib/lead-insert";
import TravelLeadFields, { emptyTravelLead, travelLeadMessage } from "@/components/TravelLeadFields";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [formData, setFormData] = useState(emptyTravelLead);
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
      message: travelLeadMessage(formData),
      travel: formData,
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
            Plan Your Journey
          </h2>
          <p className="mt-2 font-sans text-sm text-muted-foreground">
            Tell us your dates and preferences for Umrah, Hajj, or a family journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TravelLeadFields value={formData} onChange={setFormData} />
            <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#171717] py-3.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)] disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Request Travel Quote"}
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
