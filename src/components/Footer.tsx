import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, ArrowRight } from "lucide-react";
import logo from "@/assets/zikhra-logo.webp";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
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

          <div className="col-span-2 md:col-span-2">
            <h4 className="font-serif text-base text-gold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm font-sans text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Jubilee Hills, Hyderabad,<br />Telangana 500033</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+91 98862 85028</span>
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
            </div>
          </div>
        </div>

        {/* SEO keyword footer */}
        <div className="text-center mb-6">
          <p className="font-sans text-xs text-muted-foreground/30 leading-relaxed">
            Interior designers in Hyderabad | Home interiors Jubilee Hills | Modular kitchen Hyderabad | Luxury villa interiors Banjara Hills | Best interior design company Gachibowli | Home renovation Kondapur | Wardrobe design HITEC City
          </p>
        </div>

        <div className="h-px bg-border/20 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-sans text-muted-foreground/40">
          <p>© 2026 Zikhra Interiors. All rights reserved.</p>
          <div className="flex items-center gap-3">
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
