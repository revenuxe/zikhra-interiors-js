import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import serviceHome from "@/assets/service-home.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceWardrobe from "@/assets/service-wardrobe.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";

const services = [
  {
    id: "full-home",
    image: serviceHome,
    title: "Full Home Interiors",
    subtitle: "Complete Luxury Home Design in Hyderabad",
    description: "From conceptualization to execution, we design every corner of your home with precision and elegance. Our full home interior service covers living rooms, bedrooms, kitchens, bathrooms, and all transitional spaces — creating a cohesive luxury experience throughout your Hyderabad home.",
    features: [
      "Complete space planning & 3D visualization",
      "Custom furniture design & procurement",
      "Premium flooring — marble, hardwood, vitrified",
      "False ceiling with ambient cove lighting",
      "Wall paneling, textures & accent walls",
      "Smart home integration ready",
    ],
    price: "Starting from ₹8 Lakhs",
  },
  {
    id: "modular-kitchen",
    image: serviceKitchen,
    title: "Modular Kitchen",
    subtitle: "Premium Kitchen Design Across Hyderabad",
    description: "Our modular kitchens combine European aesthetics with Indian functionality. Every surface, handle, and fixture is selected with intent — creating spaces where cooking becomes a luxury experience. Serving homes across Jubilee Hills, Banjara Hills, Gachibowli & HITEC City.",
    features: [
      "Premium Italian marble & quartz countertops",
      "Soft-close German Hettich/Blum hardware",
      "Integrated LED ambient & task lighting",
      "Custom brass & gold accent fixtures",
      "Space-optimized modular island layouts",
      "Waterproof & termite-proof BWR plywood",
    ],
    price: "Starting from ₹4 Lakhs",
  },
  {
    id: "wardrobes",
    image: serviceWardrobe,
    title: "Wardrobes & Walk-in Closets",
    subtitle: "Custom Storage Solutions in Hyderabad",
    description: "Walk-in closets and built-in wardrobes that turn your everyday routine into a boutique experience. Every shelf, drawer, and hanger is designed with purpose — maximizing storage while maintaining a luxurious aesthetic.",
    features: [
      "Glass-front display sections with LED strips",
      "Soft-close drawer & sliding systems",
      "Custom shoe racks & accessory organizers",
      "Pull-out trouser & saree hangers",
      "Anti-dust sealed compartments",
      "Premium lacquer & veneer finishes",
    ],
    price: "Starting from ₹2.5 Lakhs",
  },
  {
    id: "renovation",
    image: serviceRenovation,
    title: "Home Renovation",
    subtitle: "Transform Your Existing Hyderabad Home",
    description: "Breathe new life into your existing space. Our renovation service covers everything from structural changes to cosmetic upgrades — transforming outdated interiors into modern luxury living spaces without the hassle of starting from scratch.",
    features: [
      "Complete demolition & reconstruction",
      "Electrical & plumbing rework",
      "Flooring replacement & upgrades",
      "Bathroom & kitchen remodeling",
      "Painting, textures & wall treatments",
      "Project managed end-to-end",
    ],
    price: "Starting from ₹5 Lakhs",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-10 px-5 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Our Expertise</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">Interior Design Services</h1>
        <p className="font-sans text-sm text-muted-foreground max-w-sm mx-auto">
          Premium interior design & renovation services across Hyderabad — Jubilee Hills, Gachibowli, Kondapur & beyond
        </p>
      </section>

      {/* Services */}
      <section className="px-5 pb-8">
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {services.map((svc, i) => (
            <div key={svc.id} id={svc.id} className="scroll-mt-20">
              <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 items-center`}>
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden group">
                  <img
                    src={svc.image}
                    alt={`${svc.title} in Hyderabad`}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-xs font-sans tracking-[0.2em] uppercase text-gold mb-2">{svc.subtitle}</p>
                  <h2 className="font-serif text-2xl md:text-3xl gold-text mb-3">{svc.title}</h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">{svc.description}</p>
                  <div className="space-y-2.5 mb-5">
                    {svc.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-foreground/80">{feat}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-lg text-gold">{svc.price}</span>
                    <a
                      href={`https://wa.me/919999999999?text=Hi%20Zikhra,%20I'm%20interested%20in%20${encodeURIComponent(svc.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-gradient px-6 py-2.5 rounded-full font-sans text-xs font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-luxury-dark">
        <div className="text-center mb-10">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Our Process</p>
          <h2 className="font-serif text-3xl md:text-4xl gold-text">How We Work</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Consultation", desc: "Free meeting to understand your vision & budget" },
            { step: "02", title: "3D Design", desc: "Photorealistic renders of your dream space" },
            { step: "03", title: "Execution", desc: "Expert craftsmen bring the design to life" },
            { step: "04", title: "Handover", desc: "Quality checked & delivered on time" },
          ].map((item) => (
            <div key={item.step} className="text-center p-5 rounded-2xl bg-card border border-border/50">
              <span className="font-serif text-3xl font-bold gold-text">{item.step}</span>
              <h3 className="font-serif text-sm text-foreground mt-3 mb-1">{item.title}</h3>
              <p className="font-sans text-xs text-muted-foreground">{item.desc}</p>
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

export default Services;
