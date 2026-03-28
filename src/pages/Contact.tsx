import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import contactHero from "@/assets/contact-hero.jpg";
import whatsappIcon from "@/assets/whatsapp.svg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Zikhra, I'm ${formData.name}. ${formData.message}. Contact me at ${formData.phone}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img src={contactHero} alt="Contact Zikhra" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black/90" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-14 text-center">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">Get In Touch</h1>
          <p className="font-sans text-foreground/80 text-sm max-w-sm">
            Ready to transform your space? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto mb-10">
          {[
            { icon: Phone, title: "Call Us", detail: "+91 99999 99999" },
            { icon: Mail, title: "Email", detail: "hello@zikhra.com" },
            { icon: MapPin, title: "Visit", detail: "HSR Layout, Bangalore" },
            { icon: Clock, title: "Hours", detail: "Mon–Sat, 10am–7pm" },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-2xl bg-card border border-border/50 text-center">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-sm text-foreground mb-1">{item.title}</h3>
              <p className="font-sans text-xs text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl gold-text mb-2">Send Us a Message</h2>
            <p className="font-sans text-xs text-muted-foreground">Fill out the form and we'll connect with you on WhatsApp</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full gold-gradient py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] gold-glow"
            >
              Send via WhatsApp
            </button>
          </form>

          {/* Direct WhatsApp */}
          <div className="text-center mt-6">
            <p className="font-sans text-xs text-muted-foreground mb-3">Or connect directly</p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[hsl(142,70%,45%)]/40 text-[hsl(142,70%,45%)] font-sans text-sm transition-all hover:bg-[hsl(142,70%,45%)]/10"
            >
              <img src={whatsappIcon} alt="" className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Contact;
