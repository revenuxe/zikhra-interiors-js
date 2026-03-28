import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import kitchenImg from "@/assets/kitchen.jpg";
import kitchenImg2 from "@/assets/kitchen-2.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import bedroomImg2 from "@/assets/bedroom-2.jpg";
import livingroomImg from "@/assets/livingroom.jpg";
import livingroomImg2 from "@/assets/livingroom-2.jpg";
import wardrobeImg from "@/assets/wardrobe.jpg";
import wardrobeImg2 from "@/assets/wardrobe-2.jpg";

const portfolioData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  process: { step: string; desc: string }[];
}> = {
  kitchen: {
    title: "Kitchen Design",
    tagline: "Where Culinary Art Meets Architecture",
    description: "Our modular kitchens blend functionality with opulence. Every surface, every handle, every light is placed with intent — creating spaces where cooking becomes an experience.",
    heroImage: kitchenImg,
    galleryImages: [kitchenImg, kitchenImg2],
    features: [
      "Premium Italian marble countertops",
      "Soft-close German hardware",
      "Integrated LED ambient lighting",
      "Custom brass & gold fixtures",
      "Space-optimized modular layouts",
      "Waterproof & termite-proof materials",
    ],
    process: [
      { step: "Consultation", desc: "Understanding your cooking habits, family size, and style preferences" },
      { step: "3D Design", desc: "Photorealistic 3D renders so you see it before it's built" },
      { step: "Material Selection", desc: "Handpicked premium materials from our curated catalog" },
      { step: "Installation", desc: "Expert craftsmen deliver flawless execution in 25-35 days" },
    ],
  },
  bedroom: {
    title: "Bedroom Design",
    tagline: "Your Personal Sanctuary of Serenity",
    description: "We design bedrooms that are more than rooms — they're retreats. Plush textures, moody lighting, and bespoke furniture come together to create your perfect escape.",
    heroImage: bedroomImg,
    galleryImages: [bedroomImg, bedroomImg2],
    features: [
      "Custom upholstered headboards",
      "Cove & ambient ceiling lighting",
      "Built-in vanity & dressing areas",
      "Premium veneer wall paneling",
      "Motorized curtain systems",
      "Acoustic-optimized layouts",
    ],
    process: [
      { step: "Vision", desc: "We listen to your dreams — colors, moods, and lifestyle" },
      { step: "Concept", desc: "Mood boards and material palettes for your approval" },
      { step: "Crafting", desc: "Each element custom-built by master artisans" },
      { step: "Reveal", desc: "A space that exceeds every expectation" },
    ],
  },
  "living-room": {
    title: "Living Room Design",
    tagline: "The Heart of Your Home, Reimagined",
    description: "Grand yet inviting, our living rooms are designed to impress and comfort. From statement furniture to curated art walls, every detail reflects refined taste.",
    heroImage: livingroomImg,
    galleryImages: [livingroomImg, livingroomImg2],
    features: [
      "Statement designer furniture",
      "Curated art & accent walls",
      "Smart home integration ready",
      "Premium marble & stone finishes",
      "Layered lighting design",
      "Custom entertainment units",
    ],
    process: [
      { step: "Discovery", desc: "Understanding how you live and entertain" },
      { step: "Design", desc: "Space planning, furniture selection, and lighting design" },
      { step: "Source", desc: "Procuring the finest pieces from trusted partners" },
      { step: "Transform", desc: "Bringing it all together with precision and care" },
    ],
  },
  wardrobe: {
    title: "Wardrobe Design",
    tagline: "Luxury Storage, Masterfully Organized",
    description: "Walk-in closets and built-in wardrobes that turn your everyday routine into a boutique experience. Every shelf, drawer, and hanger has its purpose.",
    heroImage: wardrobeImg,
    galleryImages: [wardrobeImg, wardrobeImg2],
    features: [
      "Glass-front display sections",
      "Built-in LED strip lighting",
      "Soft-close drawer systems",
      "Custom shoe & accessory racks",
      "Pull-out trouser hangers",
      "Anti-dust sealed compartments",
    ],
    process: [
      { step: "Audit", desc: "We assess your wardrobe needs and collection size" },
      { step: "Layout", desc: "Maximizing every inch with smart modular design" },
      { step: "Material", desc: "High-grade laminates, veneers, and hardware" },
      { step: "Install", desc: "Precision-fitted with zero gaps — factory perfect" },
    ],
  },
};

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? portfolioData[slug] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Portfolio not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img src={data.heroImage} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black/90" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 text-center">
          <Link to="/" className="absolute top-20 left-5 flex items-center gap-2 text-gold text-sm font-sans">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">{data.title}</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-3 leading-tight">{data.tagline}</h1>
          <p className="font-sans text-foreground/80 text-sm max-w-sm">{data.description}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Gallery</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">Our Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {data.galleryImages.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden group">
              <img
                src={img}
                alt={`${data.title} ${i + 1}`}
                loading="lazy"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-luxury-dark">
        <div className="text-center mb-8">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Features</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">What's Included</h2>
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

      {/* Process */}
      <section className="section-padding">
        <div className="text-center mb-10">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Process</p>
          <h2 className="font-serif text-2xl md:text-3xl gold-text">How We Work</h2>
        </div>
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          {data.process.map((step, i) => (
            <div key={step.step} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-sm font-bold text-primary-foreground">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">{step.step}</h3>
                <p className="font-sans text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-luxury-dark text-center">
        <h2 className="font-serif text-2xl md:text-3xl gold-text mb-4">Ready to Transform Your {data.title.split(" ")[0]}?</h2>
        <p className="font-sans text-sm text-muted-foreground mb-6">Get a free consultation and 3D design preview</p>
        <a
          href="https://wa.me/919999999999?text=Hi%20Zikhra,%20I%20am%20interested%20in%20your%20kitchen%20design"
          target="_blank"
          rel="noopener noreferrer"
          className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow inline-block"
        >
          Get Free Consultation
        </a>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default PortfolioDetail;
