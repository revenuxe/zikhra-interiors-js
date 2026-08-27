"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { getSupabaseClient } from "@/integrations/supabase/client";
import { insertLead } from "@/lib/lead-insert";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Contact = () => {
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

      <section className="relative overflow-hidden bg-[#f8f8f7] pt-24 sm:pt-28">
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-black/[0.035] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-14 lg:px-16">
          <div className="max-w-5xl pb-8 sm:pb-12">
            <h1 className="max-w-[12ch] font-sans text-[3.2rem] font-light leading-[0.99] tracking-[-0.065em] text-[#171717] sm:text-7xl md:max-w-[24ch] md:text-[5.5rem]">
              Contact Interior Designer in Bangalore
            </h1>
            <p className="mt-8 max-w-xl font-sans text-[1.05rem] font-light leading-[1.7] tracking-[-0.015em] text-[#5b5b5b] md:text-[1.15rem]">Ready to transform your Bangalore home? We'd love to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="section-padding flex flex-col">
        <div className="order-2 mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            { icon: Phone, title: "Call Us", detail: "9886579923" },
            { icon: Mail, title: "Email", detail: "zikhraofficial@gmail.com" },
            { icon: MapPin, title: "Visit", detail: "Koramangala, Bangalore" },
            { icon: Clock, title: "Hours", detail: "Mon–Sat, 10am–7pm" },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.25rem] border border-black/10 bg-white p-5 text-center shadow-[0_10px_25px_rgba(0,0,0,0.055)]">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#171717]">
                <item.icon className="h-4 w-4 text-white" />
              </div>
              <h3 className="mb-1 font-sans text-sm font-medium text-[#171717]">{item.title}</h3>
              <p className="font-sans text-xs text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="order-1 mx-auto max-w-2xl rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_14px_32px_rgba(0,0,0,0.055)] sm:p-8">
          <div className="mb-8">
            <h2 className="font-sans text-3xl font-light tracking-[-0.045em] text-[#171717]">Send Us a Message</h2>
            <p className="mt-2 font-sans text-sm text-muted-foreground">Fill out the form and our team will get back to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-lg border border-black/12 bg-[#fafafa] px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors" />
            <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full rounded-lg border border-black/12 bg-[#fafafa] px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors" />
            <input
              type="text"
              placeholder="Area / locality (e.g. Indiranagar or Whitefield)"
              required
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full rounded-lg border border-black/12 bg-[#fafafa] px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors"
            />
            <input type="text" placeholder="Project Type (e.g., 2 BHK, Villa, Duplex)" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full rounded-lg border border-black/12 bg-[#fafafa] px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors" />
            <textarea placeholder="Tell us about your project..." rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full resize-none rounded-lg border border-black/12 bg-[#fafafa] px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-black/45 focus:outline-none transition-colors" />
            <button type="submit" disabled={submitting} className="w-full rounded-lg bg-[#171717] py-3.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)] disabled:opacity-50">
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
