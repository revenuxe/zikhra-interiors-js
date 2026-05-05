import { CheckCircle, Home, ArrowRight } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.svg";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/3 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-md mx-auto">
        <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6 animate-fade-in-up gold-glow">
          <CheckCircle className="w-10 h-10 text-primary-foreground" />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl gold-text mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Thank You!
        </h1>

        <p className="font-sans text-foreground/80 text-base mb-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Your message has been received successfully.
        </p>
        <p className="font-sans text-muted-foreground text-sm mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Our design team will review your requirements and get back to you within 24 hours. We're excited to help create your dream space!
        </p>

        <div className="flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href={getWhatsAppUrl("Hi Zikhra, I just submitted a form on your website — can we continue the conversation here?")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans text-sm font-medium gold-gradient text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            <img
              src={whatsappIcon.src}
              alt="WhatsApp — reach Zikhra’s Hyderabad interior design team after your form submission"
              className="w-4 h-4 brightness-0"
            />
            Chat on WhatsApp for Faster Response
          </a>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans text-sm font-medium border border-gold/40 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 font-sans text-xs text-muted-foreground hover:text-gold transition-colors mt-2"
          >
            Explore Our Projects
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <p className="font-sans text-[10px] text-muted-foreground/40 mt-12 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          Zikhra Interiors — Crafting Timeless Premium Interiors in Hyderabad
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
