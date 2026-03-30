import whatsappIcon from "@/assets/whatsapp.svg";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="section-padding bg-luxury-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl gold-text mb-4">
          Let's Design Your Dream Space
        </h2>
        <p className="font-sans text-muted-foreground text-sm mb-8">
          Transform your vision into reality with Zikhra's premium interior solutions in Hyderabad
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans text-sm font-medium gold-gradient text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            <img src={whatsappIcon.src} alt="" className="w-4 h-4 brightness-0" />
            Talk to a Designer
          </Link>
          <Link
            href="/contact"
            className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
