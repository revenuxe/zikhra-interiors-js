import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { MarketId } from "@/lib/market-types";
import { applyMarketToCopy, cityLabel, serviceDetailPath } from "@/lib/marketing-paths";

import serviceHome from "@/assets/service-home.webp";
import serviceKitchen from "@/assets/service-kitchen.webp";
import serviceWardrobe from "@/assets/service-wardrobe.webp";
import serviceRenovation from "@/assets/service-renovation.webp";
import serviceTvunit from "@/assets/service-tvunit.webp";
import servicePooja from "@/assets/service-pooja.webp";
import serviceCeiling from "@/assets/service-ceiling.webp";
import serviceBathroom from "@/assets/service-bathroom.webp";
import serviceLivingroom from "@/assets/service-livingroom.webp";
import serviceBedroom from "@/assets/service-bedroom.webp";
import serviceCommercial from "@/assets/service-commercial.webp";

const services = [
  {
    id: "full-home",
    image: serviceHome.src,
    title: "Full Home Interiors",
    subtitle: "Complete Premium Home Design in Hyderabad",
    description: "From conceptualization to execution, we design every corner of your home with precision and elegance. Our full home interior service covers living rooms, bedrooms, kitchens, bathrooms, and all transitional spaces — creating a cohesive premium experience throughout your Hyderabad home.",
    features: [
      "Complete space planning & 3D visualization",
      "Custom furniture design & procurement",
      "Premium flooring — marble, hardwood, vitrified",
      "False ceiling with ambient cove lighting",
      "Wall paneling, textures & accent walls",
      "Smart home integration ready",
    ],
    price: "Custom estimate after floor plan review",
  },
  {
    id: "modular-kitchen",
    image: serviceKitchen.src,
    title: "Modular Kitchen",
    subtitle: "Premium Kitchen Design Across Hyderabad",
    description: "Our modular kitchens combine European aesthetics with Indian functionality. Every surface, handle, and fixture is selected with intent — creating spaces where cooking feels polished, efficient, and personal.",
    features: [
      "Premium Italian marble & quartz countertops",
      "Soft-close German Hettich/Blum hardware",
      "Integrated LED ambient & task lighting",
      "Custom brass & gold accent fixtures",
      "Space-optimized modular island layouts",
      "Waterproof & termite-proof BWR plywood",
    ],
    price: "Custom estimate after layout review",
  },
  {
    id: "wardrobes",
    image: serviceWardrobe.src,
    title: "Wardrobes & Walk-in Closets",
    subtitle: "Custom Storage Solutions in Hyderabad",
    description: "Walk-in closets and built-in wardrobes that turn your everyday routine into a boutique experience. Every shelf, drawer, and hanger is designed with purpose.",
    features: [
      "Glass-front display sections with LED strips",
      "Soft-close drawer & sliding systems",
      "Custom shoe racks & accessory organizers",
      "Pull-out trouser & saree hangers",
      "Anti-dust sealed compartments",
      "Premium lacquer & veneer finishes",
    ],
    price: "Custom estimate after storage review",
  },
  {
    id: "living-room",
    image: serviceLivingroom.src,
    title: "Living Room Design",
    subtitle: "Elegant Living Spaces in Hyderabad",
    description: "Create a stunning first impression with our bespoke living room designs. From statement walls to premium seating arrangements, we craft spaces that reflect your personality and lifestyle.",
    features: [
      "Custom sofa & seating design",
      "Statement accent walls & textures",
      "Premium coffee tables & consoles",
      "Ambient & decorative lighting design",
      "Curtain & blind coordination",
      "Art curation & styling",
    ],
    price: "Custom estimate after room review",
  },
  {
    id: "bedroom",
    image: serviceBedroom.src,
    title: "Bedroom Interiors",
    subtitle: "Premium Bedroom Design in Hyderabad",
    description: "Your bedroom should be a sanctuary. We design bedrooms that promote relaxation and reflect your personal style — from custom headboards to ambient lighting that sets the perfect mood.",
    features: [
      "Custom upholstered headboard designs",
      "Walk-in wardrobe integration",
      "Ambient cove & bedside lighting",
      "Premium bedside tables & dressers",
      "Blackout curtain solutions",
      "En-suite bathroom coordination",
    ],
    price: "Custom estimate after room review",
  },
  {
    id: "bathroom",
    image: serviceBathroom.src,
    title: "Bathroom Interiors",
    subtitle: "Premium Bathroom Design in Hyderabad",
    description: "Transform your bathroom into a spa-like retreat. From premium fixtures to marble finishes, we create bathrooms that are both functional and luxurious.",
    features: [
      "Premium marble & tile selection",
      "Rain shower & premium fixtures",
      "LED mirror & vanity lighting",
      "Custom vanity & storage solutions",
      "Heated towel rails & accessories",
      "Waterproofing & drainage solutions",
    ],
    price: "Custom estimate after scope review",
  },
  {
    id: "false-ceiling",
    image: serviceCeiling.src,
    title: "False Ceiling & Lighting",
    subtitle: "Designer Ceilings Across Hyderabad",
    description: "Elevate your interiors with stunning false ceiling designs that add depth, dimension, and drama. Combined with expert lighting design, we create atmospheres that transform spaces.",
    features: [
      "Multi-layered gypsum ceiling designs",
      "Cove lighting with LED strips",
      "Chandelier & pendant integration",
      "Recessed downlight planning",
      "POP & wooden ceiling options",
      "Smart lighting automation",
    ],
    price: "Custom estimate after ceiling plan review",
  },
  {
    id: "tv-unit",
    image: serviceTvunit.src,
    title: "TV Unit & Entertainment",
    subtitle: "Custom Entertainment Units in Hyderabad",
    description: "Statement TV units that serve as the focal point of your living room. From floating designs to full wall units with integrated storage and lighting.",
    features: [
      "Wall-mounted & floating designs",
      "Integrated LED backlighting",
      "Hidden cable management",
      "Display shelves & storage",
      "Premium wood & lacquer finishes",
      "Sound system integration",
    ],
    price: "Custom estimate after wall review",
  },
  {
    id: "pooja-room",
    image: servicePooja.src,
    title: "Pooja Room Design",
    subtitle: "Sacred Space Design in Hyderabad",
    description: "Create a serene and beautiful pooja room that blends tradition with modern aesthetics. From marble temples to intricately carved wooden mandirs, we design spaces that inspire devotion.",
    features: [
      "Custom marble & wooden temple designs",
      "Brass & gold-finish embellishments",
      "LED backlit deity panels",
      "Storage for pooja essentials",
      "Bell & diya holder integration",
      "Vastu-compliant layouts",
    ],
    price: "Custom estimate after design review",
  },
  {
    id: "renovation",
    image: serviceRenovation.src,
    title: "Home Renovation",
    subtitle: "Transform Your Existing Hyderabad Home",
    description: "Breathe new life into your existing space. Our renovation service covers everything from structural changes to cosmetic upgrades — transforming outdated interiors into modern, polished living spaces.",
    features: [
      "Complete demolition & reconstruction",
      "Electrical & plumbing rework",
      "Flooring replacement & upgrades",
      "Bathroom & kitchen remodeling",
      "Painting, textures & wall treatments",
      "Project managed end-to-end",
    ],
    price: "Custom estimate after site review",
  },
  {
    id: "commercial",
    image: serviceCommercial.src,
    title: "Commercial & Office Interiors",
    subtitle: "Professional Workspace Design in Hyderabad",
    description: "From startups to corporate offices, retail stores to restaurants — we design commercial spaces that impress clients and boost productivity.",
    features: [
      "Office layout & partition planning",
      "Reception & lobby design",
      "Conference room & cabin interiors",
      "Retail store & showroom design",
      "Restaurant & café interiors",
      "Brand-aligned design language",
    ],
    price: "Custom estimate after site review",
  },
];

export { services };

type ServicesProps = { market?: MarketId };

const Services = ({ market = "hyderabad" }: ServicesProps) => {
  const city = cityLabel(market);
  const heroLine =
    market === "bangalore"
      ? "2 BHK, 3 BHK, villa, modular kitchen, and renovation packages across Bangalore with clear scope planning"
      : "2 BHK, 3 BHK, villa, modular kitchen, and renovation packages across Hyderabad with clear scope planning";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 md:pt-28 pb-10 px-5 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Our Expertise</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">Interior Design Services</h1>
        <p className="font-sans text-sm text-muted-foreground max-w-md mx-auto">{heroLine}</p>
        <p className="font-sans text-xs text-muted-foreground mt-4 max-w-md mx-auto">
          Compare packages in our{" "}
          <Link href={market === "bangalore" ? "/bangalore/interior-design-cost" : "/hyderabad/interior-design-cost"} className="text-gold hover:underline">
            interior design cost guide
          </Link>
          , including room-wise planning for practical, premium, and signature scopes.
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
                    alt={`${svc.title} interior design service in ${city} by Zikhra`}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-xs font-sans tracking-[0.2em] uppercase text-gold mb-2">{applyMarketToCopy(svc.subtitle, market)}</p>
                  <h2 className="font-serif text-2xl md:text-3xl gold-text mb-3">{svc.title}</h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">{applyMarketToCopy(svc.description, market)}</p>
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
                    <Link
                      href={serviceDetailPath(market, svc.id)}
                      className="gold-gradient px-6 py-2.5 rounded-full font-sans text-xs font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow inline-block"
                    >
                      View Details
                    </Link>
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
