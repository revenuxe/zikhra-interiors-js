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
  { icon: Award, title: "Excellence", desc: "We never settle for ordinary. Every Hyderabad project is a masterpiece." },
  { icon: Users, title: "Client First", desc: "Your vision drives our design. We listen, understand, and deliver." },
  { icon: Clock, title: "On Time", desc: "We respect your time. Projects delivered as promised, always." },
  { icon: Target, title: "Precision", desc: "Every millimeter matters. We obsess over the details so you don't have to." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[60vh] w-full overflow-hidden">
        <img src={aboutHero} alt="About Zikhra Interior Designers Hyderabad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 text-center">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">The Zikhra Story</h1>
          <p className="font-sans text-foreground/80 text-sm max-w-sm">
            Hyderabad's most trusted luxury interior design studio
          </p>
        </div>
      </section>

      <section className="section-padding max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl gold-text mb-6">Our Philosophy</h2>
        <p className="font-sans text-foreground/80 text-sm leading-relaxed mb-4">
          At Zikhra, we believe that interior design is not just about aesthetics — it's about creating environments that elevate the way you live. Founded in Hyderabad, we've grown from a boutique studio into one of the city's most sought-after interior design firms, serving Jubilee Hills, Banjara Hills, Gachibowli, Kondapur, HITEC City and beyond.
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

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default About;
