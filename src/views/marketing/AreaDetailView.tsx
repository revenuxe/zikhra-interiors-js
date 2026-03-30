import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import type { AreaItem } from "@/lib/areas-data";

type Props = {
  area: AreaItem;
};

const services = ["Full Home Interiors", "Modular Kitchen Design", "Wardrobe Solutions", "Living Room Design"];

export default function AreaDetailView({ area }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-24 pb-12 px-5 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-4">Interior Designers in {area.name}</h1>
        <p className="font-sans text-muted-foreground text-sm max-w-md mx-auto">{area.tagline}</p>
      </section>
      <section className="section-padding bg-luxury-dark">
        <div className="max-w-lg mx-auto grid grid-cols-2 gap-3">
          {services.map((svc) => (
            <Link key={svc} href="/services" className="p-4 rounded-2xl bg-card border border-border/30 text-center">
              <CheckCircle className="w-5 h-5 text-gold mx-auto mb-2" />
              <p className="font-sans text-xs text-foreground">{svc}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-lg mx-auto space-y-3">
          {["500+ Homes Transformed", "10-Year Warranty", "Transparent Pricing"].map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/30">
              <Star className="w-4 h-4 text-gold" />
              <p className="font-sans text-sm text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding text-center">
        <Link href="/contact" className="inline-flex items-center gap-2 gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground">
          Get Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="font-sans text-xs text-muted-foreground mt-4">
          Also explore our{" "}
          <Link href="/projects" className="text-gold hover:underline">
            premium interior projects
          </Link>{" "}
          and{" "}
          <Link href="/services" className="text-gold hover:underline">
            luxury service packages
          </Link>{" "}
          in Hyderabad.
        </p>
      </section>
      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}
