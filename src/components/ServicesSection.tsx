import { Home, UtensilsCrossed, DoorOpen, Hammer } from "lucide-react";

const services = [
  { icon: Home, title: "Full Home Interiors", desc: "Complete design solutions" },
  { icon: UtensilsCrossed, title: "Modular Kitchen", desc: "Bespoke kitchen designs" },
  { icon: DoorOpen, title: "Wardrobes", desc: "Custom storage solutions" },
  { icon: Hammer, title: "Renovation", desc: "Transform your space" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">What We Do</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Our Services</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
        {services.map((svc) => (
          <div
            key={svc.title}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-gold/30 hover:gold-glow group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <svc.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-sm text-foreground mb-1">{svc.title}</h3>
            <p className="text-xs font-sans text-muted-foreground">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
