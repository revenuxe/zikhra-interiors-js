import heroImage from "@/assets/hero-interior.jpg";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Luxury interior design Hyderabad"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/85 via-luxury-black/70 to-luxury-black/95" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold/80 mb-4 animate-fade-in-up">Hyderabad's Premier Interior Studio</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold mb-6 animate-fade-in-up leading-[1.05]">
          <span className="gold-text">Designing</span>
          <br />
          <span className="gold-text italic">Timeless Luxury</span>
        </h1>
        <p className="font-sans text-foreground/80 text-lg md:text-xl max-w-md mb-10 font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Award-winning interior designers crafting bespoke homes across Hyderabad
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://wa.me/919999999999?text=Hi%20Zikhra,%20I%20want%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            Get Free Consultation
          </a>
          <Link
            to="/projects"
            className="px-8 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide border border-gold/40 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/10 text-center"
          >
            View Projects
          </Link>
        </div>

        <div className="absolute bottom-24 md:bottom-12 animate-scroll-bounce">
          <ChevronDown className="w-6 h-6 text-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
