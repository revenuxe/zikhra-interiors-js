import Link from "next/link";
import serviceHome from "@/assets/service-home.webp";
import serviceKitchen from "@/assets/service-kitchen.webp";
import serviceWardrobe from "@/assets/service-wardrobe.webp";
import serviceRenovation from "@/assets/service-renovation.webp";

const services = [
  { image: serviceHome.src, title: "Full Home Interiors", desc: "Complete luxury home design solutions", slug: "full-home" },
  { image: serviceKitchen.src, title: "Modular Kitchen", desc: "Bespoke premium kitchen designs", slug: "modular-kitchen" },
  { image: serviceWardrobe.src, title: "Wardrobes", desc: "Custom walk-in closet solutions", slug: "wardrobes" },
  { image: serviceRenovation.src, title: "Renovation", desc: "Transform your existing space", slug: "renovation" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">What We Do</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Our Services</h2>
        <p className="font-sans text-muted-foreground text-sm mt-3 max-w-sm mx-auto">
          Premium interior design services across Hyderabad — from Jubilee Hills to HITEC City
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
        {services.map((svc) => (
          <Link
            key={svc.title}
            href={`/services#${svc.slug}`}
            className="flex flex-col items-center text-center rounded-2xl overflow-hidden bg-card border border-border/50 transition-all duration-300 hover:border-gold/30 hover:gold-glow group cursor-pointer"
          >
            <div className="relative w-full h-32 overflow-hidden">
              <img
                src={svc.image}
                alt={`${svc.title} in Hyderabad`}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </div>
            <div className="p-4 -mt-4 relative z-10">
              <h3 className="font-serif text-sm text-foreground mb-1">{svc.title}</h3>
              <p className="text-xs font-sans text-muted-foreground">{svc.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
            href="/services"
          className="inline-block px-8 py-3 rounded-full font-sans text-sm font-medium border border-gold/40 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/10"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
