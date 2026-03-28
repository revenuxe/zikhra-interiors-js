import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-5 pt-12 pb-28 bg-luxury-black border-t border-border/30">
      <div className="max-w-lg mx-auto text-center">
        <h3 className="font-serif text-2xl gold-text mb-6">Zikhra</h3>

        <div className="flex flex-col gap-3 text-sm font-sans text-muted-foreground mb-8">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-gold" />
            Bangalore, Karnataka
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-gold" />
            +91 99999 99999
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-gold" />
            hello@zikhra.com
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center transition-colors hover:bg-gold/10">
            <Instagram className="w-4 h-4 text-gold" />
          </a>
        </div>

        <p className="text-xs font-sans text-muted-foreground/50">
          © 2026 Zikhra Interiors. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
