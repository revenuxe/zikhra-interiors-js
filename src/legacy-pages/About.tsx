import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import aboutHero from "@/assets/about-hero.webp";
import { Award, Users, Clock, Target } from "lucide-react";

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "8+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Design Awards" },
];

const values = [
  { icon: Award, title: "Excellence", desc: "We never settle for ordinary. Every Bangalore project is a masterpiece." },
  { icon: Users, title: "Client First", desc: "Your vision drives our design. We listen, understand, and deliver." },
  { icon: Clock, title: "On Time", desc: "We respect your time. Projects delivered as promised, always." },
  { icon: Target, title: "Precision", desc: "Every millimeter matters. We obsess over the details so you don't have to." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#f8f8f7] pb-12 pt-28 sm:pb-16 sm:pt-32">
        <img src={aboutHero.src} alt="About Zikhra Interior Designers Bangalore" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.36] sm:opacity-[0.32]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(248,248,247,0.94)_0%,rgba(248,248,247,0.86)_45%,rgba(248,248,247,0.64)_100%)]" />
        <div className="absolute -right-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl text-left">
            <h1 className="mb-8 max-w-[12ch] font-sans text-[3.35rem] font-light leading-[0.97] tracking-[-0.07em] text-[#171717] sm:text-6xl md:max-w-[14ch] md:text-7xl lg:text-[5.8rem]">
              About Zikhra Interior Designers in Bangalore
            </h1>
            <p className="max-w-xl font-sans text-[1.03rem] font-light leading-[1.72] tracking-[-0.02em] text-[#525252] md:text-[1.15rem]">
              Thoughtful, premium interiors shaped around the way you live.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl gold-text mb-6">Our Philosophy</h2>
        <p className="font-sans text-foreground/80 text-sm leading-relaxed mb-4">
          At Zikhra, we believe that interior design is not just about aesthetics — it's about creating environments that elevate the way you live. Founded in Bangalore, we've grown from a boutique studio into one of the city's most sought-after interior design firms, serving Koramangala, Indiranagar, Whitefield, HSR Layout, Electronic City and beyond.
        </p>
        <p className="font-sans text-foreground/80 text-sm leading-relaxed">
          Our team of passionate designers, architects, and craftsmen work in harmony to deliver spaces that are both timeless and deeply personal. We don't follow trends — we set them.
        </p>
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
