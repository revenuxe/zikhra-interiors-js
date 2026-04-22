import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Linkedin, ArrowRight } from "lucide-react";
import logo from "@/assets/zikhra-logo.webp";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Projects — Bangalore", to: "/bangalore/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "All pages", to: "/all-pages" },
];

const serviceLinks = [
  { label: "Full Home Interiors", to: "/services#full-home" },
  { label: "Modular Kitchen", to: "/services#modular-kitchen" },
  { label: "Wardrobes", to: "/services#wardrobes" },
  { label: "Renovation", to: "/services#renovation" },
  { label: "Kitchen Design", to: "/portfolio/kitchen" },
  { label: "Bedroom Design", to: "/portfolio/bedroom" },
];

const Footer = () => {
  return (
    <footer className="bg-luxury-dark border-t border-border/20 pb-24">
      <div className="w-full h-px gold-gradient opacity-40" />

      <div className="max-w-6xl mx-auto px-5 pt-14">
        <div className="flex flex-col items-center text-center mb-12">
          <img src={logo.src} alt="Zikhra Interior Designers Hyderabad" className="h-16 w-auto mb-3" />
          <p className="font-sans text-muted-foreground text-sm max-w-xs">
            Hyderabad's most trusted luxury interior design studio. Crafting timeless spaces since 2018.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-serif text-base text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.to} className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base text-gold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.to} className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif text-base text-gold mb-4">Bangalore</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <Link
                  href="/bangalore"
                  className="font-sans text-sm text-foreground/90 hover:text-gold transition-colors flex items-center gap-1.5 group font-medium"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                  Luxury interiors Bangalore
                </Link>
              </li>
              <li>
                <Link href="/bangalore/services" className="font-sans text-xs text-muted-foreground hover:text-gold transition-colors block">
                  Services in Bangalore
                </Link>
              </li>
              <li>
                <Link href="/bangalore/projects" className="font-sans text-xs text-muted-foreground hover:text-gold transition-colors block">
                  Featured projects — Bangalore
                </Link>
              </li>
            </ul>
            <ul className="grid grid-cols-1 gap-y-1.5">
              {bangaloreAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/bangalore/${area.slug}`}
                    className="font-sans text-xs text-muted-foreground hover:text-gold transition-colors leading-snug block"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h4 className="font-serif text-base text-gold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm font-sans text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Jubilee Hills, Hyderabad,<br />Telangana 500033</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>9886579923</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>zikhraofficial@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/zikhra.interiors/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center transition-all hover:bg-gold/10 hover:border-gold/50 hover:scale-110"
              >
                <Instagram className="w-4 h-4 text-gold" />
              </a>
              <a
                href="https://www.linkedin.com/company/zikhra/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zikhra on LinkedIn"
                className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center transition-all hover:bg-gold/10 hover:border-gold/50 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* SEO keyword footer */}
        <div className="text-center mb-6">
          <p className="font-sans text-xs text-muted-foreground/30 leading-relaxed">
            Interior designers in Hyderabad | Home interiors Jubilee Hills | Modular kitchen Hyderabad | Luxury villa interiors Banjara Hills | Best interior design company Gachibowli | Home renovation Kondapur | Wardrobe design HITEC City | Interior designers Bangalore | Luxury home interiors Koramangala | Modular kitchen Whitefield | HSR Layout interiors | Indiranagar interior designers
          </p>
        </div>

        <div className="h-px bg-border/20 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-sans text-muted-foreground/40">
          <p>© 2026 Zikhra Interiors. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link href="/all-pages" className="hover:text-gold transition-colors">All pages</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          </div>
          <p>Designed with passion in Hyderabad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
