"use client";

import HeroBackdrop from "@/components/HeroBackdrop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { getSupabaseClient } from "@/integrations/supabase/client";
import { insertLead } from "@/lib/lead-insert";
import TravelLeadFields, { emptyTravelLead, travelLeadMessage } from "@/components/TravelLeadFields";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { enquiryFromSearch } from "@/lib/travel-enquiry";
import { COMPANY, OFFICE_MAP_URL } from "@/lib/company";

const Contact = () => {
  const [formData, setFormData] = useState(emptyTravelLead);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setFormData(data => ({ ...data, ...enquiryFromSearch(window.location.search) }));
  }, []);

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
      source: "contact-page",
    });

    if (error) {
      toast.error("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    router.push("/thank-you");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#f8f8f7] pt-24 sm:pt-28">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-7xl px-5 py-5 sm:px-10 sm:py-7 lg:px-16">
          <div className="mx-auto max-w-2xl">
            <h1 className="font-sans text-3xl font-light leading-tight tracking-[-0.045em] text-[#171717] sm:text-4xl">
              Plan your journey
            </h1>
            <p className="mt-2 font-sans text-sm leading-relaxed text-[#5b5b5b]">Share your details and we’ll help you plan.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-4 pb-12 pt-4 sm:px-6 sm:pt-6">
        <div className="order-2 mx-auto mt-6 grid w-full max-w-2xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            { icon: Phone, title: "Call Us", detail: COMPANY.phoneLabel, href: `tel:${COMPANY.phone}` },
            { icon: Mail, title: "Email", detail: COMPANY.email, href: `mailto:${COMPANY.email}` },
            { icon: MapPin, title: "Visit", detail: COMPANY.locality, href: OFFICE_MAP_URL },
            { icon: Clock, title: "Hours", detail: "Mon–Sat, 10am–7pm" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-black/10 bg-white p-3 text-center">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#171717]">
                <item.icon className="h-4 w-4 text-white" />
              </div>
              <h3 className="mb-1 font-sans text-sm font-medium text-[#171717]">{item.title}</h3>
              <p className="break-words font-sans text-xs text-muted-foreground">{item.href ? <a href={item.href} className="hover:underline">{item.detail}</a> : item.detail}</p>
            </div>
          ))}
        </div>

        <div className="order-3 mx-auto mt-3 w-full max-w-2xl rounded-xl border border-black/10 bg-white p-4">
          <h2 className="text-sm font-medium">Our RT Nagar office</h2>
          <address className="mt-1 text-xs not-italic leading-relaxed text-muted-foreground">{COMPANY.address}</address>
          <a href={OFFICE_MAP_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex text-xs font-medium underline underline-offset-4">Get directions</a>
        </div>

        <div className="order-1 mx-auto w-full max-w-2xl rounded-2xl border border-black/10 bg-white p-4 shadow-[0_14px_32px_rgba(0,0,0,0.055)] sm:p-6">
          <div className="mb-4">
            <h2 className="font-sans text-xl font-medium tracking-[-0.025em] text-[#171717]">Request a travel quote</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <TravelLeadFields value={formData} onChange={setFormData} compact />
            <button type="submit" disabled={submitting} className="w-full rounded-lg bg-[#171717] py-3.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)] disabled:opacity-50">
              {submitting ? "Submitting..." : "Request Travel Quote"}
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
