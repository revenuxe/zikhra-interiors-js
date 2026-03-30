import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import { ArrowLeft, CheckCircle2, Home, Ruler, Lightbulb, Palette } from "lucide-react";

import project2bhk from "@/assets/project-2bhk.webp";
import project3bhk from "@/assets/project-3bhk.webp";
import project4bhk from "@/assets/project-4bhk.webp";
import projectPenthouse from "@/assets/project-penthouse.webp";

const projectTypeData: Record<string, {
  title: string;
  tagline: string;
  heroImage: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  features: string[];
  rooms: { name: string; desc: string }[];
  pricing: string;
  timeline: string;
  faqs: { q: string; a: string }[];
}> = {
  "2bhk": {
    title: "2 BHK Interior Design",
    tagline: "Smart Luxury 2 BHK Interiors in Hyderabad",
    heroImage: project2bhk,
    metaTitle: "Best 2 BHK Interior Design in Hyderabad | Zikhra Interiors",
    metaDesc: "Transform your 2 BHK apartment with luxury interior design in Hyderabad. Modular kitchens, smart storage, false ceilings & more. Starting ₹4 Lakhs.",
    intro: "A 2 BHK apartment demands smart design that maximizes every square foot without compromising on luxury. At Zikhra Interiors, we specialize in creating stunning 2 BHK interiors across Hyderabad — from Gachibowli to Kondapur, Manikonda to Narsingi. Our designs blend space-saving innovation with premium aesthetics, giving you a home that feels twice its size.",
    features: [
      "Space-optimized modular furniture",
      "Multi-functional living-dining layouts",
      "Compact modular kitchen with full functionality",
      "Built-in wardrobes with smart storage",
      "False ceiling with ambient cove lighting",
      "Premium flooring — vitrified or laminate",
      "Wall-mounted TV unit with storage",
      "Pooja unit integration",
    ],
    rooms: [
      { name: "Living + Dining", desc: "Open-plan layout with designer sofa, dining table, and accent wall" },
      { name: "Master Bedroom", desc: "King-size bed, wardrobe, dresser, and ambient ceiling" },
      { name: "Second Bedroom", desc: "Flexible guest room / kids room with study desk" },
      { name: "Kitchen", desc: "L-shaped modular kitchen with chimney and accessories" },
    ],
    pricing: "₹4 — ₹8 Lakhs",
    timeline: "30 — 45 Days",
    faqs: [
      { q: "What is the cost of 2 BHK interior design in Hyderabad?", a: "A complete 2 BHK interior package at Zikhra starts from ₹4 Lakhs, including modular kitchen, wardrobes, false ceiling, and furnishing for all rooms." },
      { q: "How long does 2 BHK interior work take?", a: "Typically 30-45 days from design approval to handover, depending on customization level." },
      { q: "Do you provide 3D designs before starting?", a: "Yes! We provide photorealistic 3D renders of every room so you can visualize and approve before work begins." },
    ],
  },
  "3bhk": {
    title: "3 BHK Interior Design",
    tagline: "Spacious Luxury 3 BHK Interiors in Hyderabad",
    heroImage: project3bhk,
    metaTitle: "Premium 3 BHK Interior Design Hyderabad | Zikhra Interiors",
    metaDesc: "Luxury 3 BHK interior design in Hyderabad. Complete home interiors with modular kitchen, wardrobes, living room & more. Starting ₹7 Lakhs.",
    intro: "A 3 BHK home is the perfect canvas for creating distinct zones — entertainment, relaxation, and productivity. Zikhra Interiors transforms 3 BHK apartments across Jubilee Hills, Banjara Hills, Kondapur, and Tellapur into cohesive luxury experiences where every room tells a story.",
    features: [
      "Separate living and family room design",
      "Premium modular kitchen with island option",
      "Master suite with walk-in closet",
      "Kids room with study & play zones",
      "Guest bedroom with en-suite coordination",
      "Multi-layered false ceiling designs",
      "Smart home automation ready",
      "Premium marble or wooden flooring",
    ],
    rooms: [
      { name: "Grand Living Room", desc: "Statement sofa, accent wall, chandelier, and entertainment unit" },
      { name: "Master Suite", desc: "Luxury bed, walk-in wardrobe, vanity, and ambient lighting" },
      { name: "Kids / Second Bedroom", desc: "Playful yet functional design with study desk and storage" },
      { name: "Guest Bedroom", desc: "Elegant space with wardrobe and bedside accessories" },
      { name: "Modular Kitchen", desc: "U-shaped or island kitchen with premium hardware" },
    ],
    pricing: "₹7 — ₹15 Lakhs",
    timeline: "45 — 60 Days",
    faqs: [
      { q: "What does a 3 BHK interior package include?", a: "Our package covers modular kitchen, wardrobes for all bedrooms, false ceiling, TV unit, shoe rack, crockery unit, and complete furnishing." },
      { q: "Can I customize individual rooms?", a: "Absolutely! Every room is designed individually based on your preferences and lifestyle needs." },
      { q: "Do you work in gated communities?", a: "Yes, we work extensively in My Home Bhooja, Aparna Serene, Prestige, Lodha, and all premium gated communities in Hyderabad." },
    ],
  },
  "4bhk": {
    title: "4 BHK Interior Design",
    tagline: "Grand 4 BHK Villa & Apartment Interiors in Hyderabad",
    heroImage: project4bhk,
    metaTitle: "Luxury 4 BHK Interior Design Hyderabad | Zikhra Interiors",
    metaDesc: "Grand 4 BHK villa & apartment interior design in Hyderabad. Complete luxury interiors with premium materials. Starting ₹12 Lakhs.",
    intro: "A 4 BHK home demands grandeur. At Zikhra, we design 4 BHK apartments and villas across Hyderabad's most prestigious addresses — Jubilee Hills, Banjara Hills, Kokapet, and Financial District. Every space is crafted to exude luxury with premium materials, bespoke furniture, and architectural detailing.",
    features: [
      "Double-height living room design",
      "Premium Italian marble flooring",
      "Bespoke furniture & upholstery",
      "Home theatre / entertainment room",
      "Walk-in closets for all bedrooms",
      "Designer false ceilings with chandeliers",
      "Full smart home integration",
      "Pooja room with traditional detailing",
      "Bar / lounge area",
    ],
    rooms: [
      { name: "Grand Foyer", desc: "Impressive entrance with console, mirror, and statement lighting" },
      { name: "Living & Entertainment", desc: "Expansive living with premium furniture and art curation" },
      { name: "Master Suite", desc: "Luxury suite with attached walk-in, vanity, and lounge" },
      { name: "Family Room", desc: "Casual seating, games, and media area" },
      { name: "Premium Kitchen", desc: "Island kitchen with premium hardware and integrated appliances" },
      { name: "All Bedrooms", desc: "Each bedroom uniquely themed with full wardrobes and lighting" },
    ],
    pricing: "₹12 — ₹30 Lakhs",
    timeline: "60 — 90 Days",
    faqs: [
      { q: "Do you design 4 BHK villas too?", a: "Yes! We handle both 4 BHK apartments and independent villas/duplexes across Hyderabad." },
      { q: "What premium materials do you use?", a: "Italian marble, Hettich/Blum hardware, premium veneer, lacquer finishes, imported wallpapers, and handcrafted brass fixtures." },
      { q: "Can you handle duplex apartments?", a: "Absolutely. We specialize in duplex and triplex interior design with staircase, double-height ceiling, and terrace garden design." },
    ],
  },
  penthouse: {
    title: "Penthouse Interior Design",
    tagline: "Ultra-Luxury Penthouse Interiors in Hyderabad",
    heroImage: projectPenthouse,
    metaTitle: "Luxury Penthouse Interior Design Hyderabad | Zikhra Interiors",
    metaDesc: "Ultra-luxury penthouse interior design in Hyderabad. Bespoke designs with panoramic views, premium materials & smart automation. Custom pricing.",
    intro: "A penthouse is not just a home — it's a statement. Zikhra Interiors creates ultra-luxury penthouse interiors in Hyderabad that rival international standards. From panoramic living rooms to private terraces, home theatres to wine cellars — we design every element to match the exclusivity of penthouse living in Jubilee Hills, Banjara Hills, and Financial District.",
    features: [
      "Panoramic living room with floor-to-ceiling glass",
      "Private terrace & garden design",
      "Home theatre with acoustic treatment",
      "Wine cellar & bar lounge",
      "Master suite with spa bathroom",
      "Private elevator lobby design",
      "Imported Italian furniture curation",
      "Complete smart home automation",
      "Art gallery wall integration",
      "Indoor-outdoor seamless transitions",
    ],
    rooms: [
      { name: "Sky Lounge", desc: "Panoramic living space with designer furniture and city views" },
      { name: "Private Terrace", desc: "Landscaped outdoor space with seating and bar" },
      { name: "Master Suite", desc: "Palatial bedroom with walk-in, spa bath, and private balcony" },
      { name: "Home Theatre", desc: "Acoustically treated media room with premium seating" },
      { name: "Gourmet Kitchen", desc: "Chef's kitchen with island, premium appliances, and butler's pantry" },
      { name: "Guest Suites", desc: "Hotel-grade guest bedrooms with en-suite bathrooms" },
    ],
    pricing: "Custom — ₹25 Lakhs+",
    timeline: "90 — 120 Days",
    faqs: [
      { q: "Do you handle penthouse-specific challenges?", a: "Yes — from double-height ceilings to terrace waterproofing, HVAC integration to structural glazing, we handle all penthouse complexities." },
      { q: "Can you source international furniture brands?", a: "Absolutely. We curate furniture from Italian, Scandinavian, and bespoke Indian craftsmen for a truly unique penthouse experience." },
      { q: "Do you offer turnkey penthouse projects?", a: "Yes, we provide end-to-end turnkey solutions including civil, MEP, interiors, furniture, art, and styling." },
    ],
  },
};

const ProjectTypeLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? projectTypeData[slug] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground mb-4">Project type not found</p>
          <Link to="/" className="text-gold font-sans text-sm">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img src={data.heroImage} alt={data.metaTitle} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 text-center">
          <Link to="/" className="absolute top-20 left-5 flex items-center gap-2 text-gold text-sm font-sans">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Project Type</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-3 leading-tight">{data.tagline}</h1>
          <p className="font-sans text-foreground/80 text-sm max-w-md">{data.intro.substring(0, 150)}...</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">{data.intro}</p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-luxury-dark">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">What's Included</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Features & Inclusions</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
          {data.features.map((feat) => (
            <div key={feat} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="font-sans text-sm text-foreground/90">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Room Breakdown */}
      <section className="section-padding">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Room by Room</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Design Breakdown</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          {data.rooms.map((room, i) => (
            <div key={room.name} className="flex gap-4 items-start p-5 rounded-2xl bg-card border border-border/50">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                {i % 4 === 0 && <Home className="w-5 h-5 text-primary-foreground" />}
                {i % 4 === 1 && <Ruler className="w-5 h-5 text-primary-foreground" />}
                {i % 4 === 2 && <Lightbulb className="w-5 h-5 text-primary-foreground" />}
                {i % 4 === 3 && <Palette className="w-5 h-5 text-primary-foreground" />}
              </div>
              <div>
                <h3 className="font-serif text-base text-foreground mb-1">{room.name}</h3>
                <p className="font-sans text-sm text-muted-foreground">{room.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing & Timeline */}
      <section className="section-padding bg-luxury-dark">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="text-center p-6 rounded-2xl bg-card border border-border/50">
            <p className="text-xs font-sans tracking-wider uppercase text-gold mb-2">Investment</p>
            <p className="font-serif text-xl gold-text">{data.pricing}</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card border border-border/50">
            <p className="text-xs font-sans tracking-wider uppercase text-gold mb-2">Timeline</p>
            <p className="font-serif text-xl gold-text">{data.timeline}</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">FAQ</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Common Questions</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          {data.faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-2xl bg-card border border-border/50">
              <h3 className="font-serif text-sm text-foreground mb-2">{faq.q}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-luxury-dark text-center">
        <h2 className="font-serif text-2xl md:text-3xl gold-text mb-4">Ready to Design Your {data.title.split(" ")[0]} {data.title.split(" ")[1]}?</h2>
        <p className="font-sans text-sm text-muted-foreground mb-6">Get a free consultation and 3D design preview</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/919886285028?text=Hi%20Zikhra,%20I'm%20interested%20in%20${encodeURIComponent(data.title)}%20in%20Hyderabad`}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow inline-block"
          >
            WhatsApp Us
          </a>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full font-sans text-sm font-medium border border-gold/40 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/10 inline-block"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default ProjectTypeLanding;
