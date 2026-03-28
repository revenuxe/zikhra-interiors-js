import { Shield, Zap, Gem, BadgeCheck } from "lucide-react";

const points = [
  { icon: Shield, title: "End-to-End Solutions", desc: "From concept to completion, we handle everything for your Hyderabad home" },
  { icon: Zap, title: "Fast Delivery", desc: "On-time project completion guaranteed across Hyderabad" },
  { icon: Gem, title: "Premium Materials", desc: "Only the finest imported materials and finishes" },
  { icon: BadgeCheck, title: "Transparent Pricing", desc: "No hidden costs, complete clarity on every project" },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-luxury-dark">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Why Us</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Why Hyderabad Trusts Zikhra</h2>
      </div>

      <div className="flex flex-col gap-4 max-w-lg mx-auto">
        {points.map((pt) => (
          <div key={pt.title} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
              <pt.icon className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-base text-foreground mb-1">{pt.title}</h3>
              <p className="text-sm font-sans text-muted-foreground">{pt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
