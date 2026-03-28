import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import logo from "@/assets/zikhra-logo.webp";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Kitchen Design", to: "/portfolio/kitchen" },
  { label: "Bedroom Design", to: "/portfolio/bedroom" },
  { label: "Living Room", to: "/portfolio/living-room" },
  { label: "Wardrobe", to: "/portfolio/wardrobe" },
];

const Footer = () => {
  return (
    <footer className="bg-luxury-dark border-t border-border/20 pb-24">
      {/* Top gold accent line */}
      <div className="w-full h-px gold-gradient opacity-40" />

      <div className="max-w-6xl mx-auto px-5 pt-14">
        {/* Logo & tagline */}
        <div className="flex flex-col items-center text-center mb-12">
          <img src={logo} alt="Zikhra" className="h-16 w-auto mb-3" />
          <p className="font-sans text-muted-foreground text-sm max-w-xs">
            Crafting luxury interiors that tell your story, one space at a time.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-base text-gold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-serif text-base text-gold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm font-sans text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>HSR Layout, Bangalore,<br />Karnataka 560102</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>hello@zikhra.com</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center transition-all hover:bg-gold/10 hover:border-gold/50 hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-gold" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/20 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-sans text-muted-foreground/40">
          <p>© 2026 Zikhra Interiors. All rights reserved.</p>
          <p>Designed with passion in Bangalore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
