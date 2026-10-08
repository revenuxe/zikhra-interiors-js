import HeroBackdrop from "@/components/HeroBackdrop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import { Award, Users, Clock, Target } from "lucide-react";

const stats = [
  { number: "Umrah", label: "Journey Planning" },
  { number: "Hajj", label: "Seasonal Enquiries" },
  { number: "Family", label: "Travel Options" },
  { number: "Private", label: "Itineraries" },
];

const values = [
  {
    "icon": Award,
    "title": "Careful Planning",
    "desc": "Your dates, budget, and travel needs shape the itinerary."
  },
  {
    "icon": Users,
    "title": "Family First",
    "desc": "Discuss children, older relatives, and accessibility before booking."
  },
  {
    "icon": Clock,
    "title": "Clear Communication",
    "desc": "Review timings, provider details, and arrangements before departure."
  },
  {
    "icon": Target,
    "title": "Attention to Detail",
    "desc": "Check room sharing, meals, transfers, and exclusions in writing."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#f8f8f7] pb-12 pt-28 sm:pb-16 sm:pt-32">
      <HeroBackdrop />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl text-left">
            <h1 className="mb-8 max-w-[12ch] font-sans text-[3.35rem] font-light leading-[0.97] tracking-[-0.07em] text-[#171717] sm:text-6xl md:max-w-[14ch] md:text-7xl lg:text-[5.8rem]">
              About Zikhra Tours & Travels in Bangalore
            </h1>
            <p className="max-w-xl font-sans text-[1.03rem] font-light leading-[1.72] tracking-[-0.02em] text-[#525252] md:text-[1.15rem]">Thoughtful planning for Umrah, Hajj enquiries, and Muslim-friendly journeys.</p>
          </div>
        </div>
      </section>

      <section className="section-padding max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl gold-text mb-6">Our Philosophy</h2>
        <p className="font-sans text-foreground/80 text-sm leading-relaxed mb-4">Zikhra Tours & Travels focuses on thoughtful pilgrimage and travel planning from Bangalore. We help individuals, families, and groups explore Umrah itineraries, discuss Hajj enquiries, and plan journeys around their dates, budget, and preferences.</p>
        <p className="font-sans text-foreground/80 text-sm leading-relaxed">Our approach starts with listening. Accommodation, room sharing, transfers, meals, and travel pace are discussed together, with the confirmed arrangements set out in a written quotation before booking.</p>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold gold-text mb-1">{stat.number}</p>
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="text-center mb-10">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Our Values</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">What Drives Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {values.map((val) => (
            <div key={val.title} className="p-6 rounded-2xl bg-card border border-border/50 text-center">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                <val.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-base text-foreground mb-2">{val.title}</h3>
              <p className="font-sans text-xs text-muted-foreground">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-lg mx-auto rounded-2xl border border-border/40 bg-card/30 px-6 py-5 text-center">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground mb-2">Digital presence</p>
          <p className="font-sans text-sm text-foreground/85 leading-relaxed">
            This website was designed and built by{" "}
            <a
              href="https://revenuxe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline underline-offset-4"
            >
              Revenuxe
            </a>
            .
          </p>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default About;
