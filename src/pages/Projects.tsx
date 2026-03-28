import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

import project2bhk from "@/assets/project-2bhk.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import project3bhk from "@/assets/project-3bhk.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import livingroomImg from "@/assets/livingroom.jpg";

const projects = [
  { image: project2bhk, type: "2BHK Apartment", location: "Whitefield, Bangalore", budget: "₹12-18 Lakhs" },
  { image: projectVilla, type: "Luxury Villa", location: "Sarjapur Road, Bangalore", budget: "₹45-60 Lakhs" },
  { image: project3bhk, type: "3BHK Penthouse", location: "Indiranagar, Bangalore", budget: "₹25-35 Lakhs" },
  { image: kitchenImg, type: "Modular Kitchen", location: "Koramangala, Bangalore", budget: "₹8-12 Lakhs" },
  { image: bedroomImg, type: "Master Bedroom Suite", location: "JP Nagar, Bangalore", budget: "₹6-10 Lakhs" },
  { image: livingroomImg, type: "Living Room Makeover", location: "HSR Layout, Bangalore", budget: "₹10-15 Lakhs" },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-10 px-5 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Our Work</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">Featured Projects</h1>
        <p className="font-sans text-sm text-muted-foreground max-w-sm mx-auto">
          A curated selection of our finest interior transformations across Bangalore
        </p>
      </section>

      {/* Projects Grid */}
      <section className="px-5 pb-16">
        <div className="flex flex-col gap-5 max-w-lg mx-auto">
          {projects.map((project) => (
            <div
              key={project.type}
              className="rounded-2xl overflow-hidden bg-card border border-border/50 group cursor-pointer transition-all duration-300 hover:border-gold/30"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.type}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-foreground mb-1">{project.type}</h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-sans mb-2">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  {project.location}
                </div>
                <p className="text-xs font-sans text-gold/80 tracking-wide">{project.budget}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-luxury-dark text-center">
        <h2 className="font-serif text-2xl gold-text mb-4">Want Your Home Featured Here?</h2>
        <Link
          to="/contact"
          className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow inline-block"
        >
          Start Your Project
        </Link>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Projects;
