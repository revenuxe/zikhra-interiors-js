import whatsappIcon from "@/assets/whatsapp.svg";

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
          Transform your vision into reality with Zikhra's premium interior solutions
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/919999999999?text=Hi%20Zikhra,%20I%20want%20to%20design%20my%20dream%20space"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans text-sm font-medium bg-[hsl(142,70%,45%)] text-foreground transition-all duration-300 hover:scale-105 shadow-lg shadow-[hsla(142,70%,45%,0.3)]"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Now
          </a>
          <a
            href="https://wa.me/919999999999?text=Hi%20Zikhra,%20I%20want%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
