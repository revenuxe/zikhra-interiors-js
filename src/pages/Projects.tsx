import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

import project2bhk from "@/assets/project-2bhk.webp";
import projectVilla from "@/assets/project-villa.webp";
import project3bhk from "@/assets/project-3bhk.webp";
import kitchenImg from "@/assets/kitchen.webp";
import bedroomImg from "@/assets/bedroom.webp";
import livingroomImg from "@/assets/livingroom.webp";

const projects = [
  { image: project2bhk, type: "2BHK Apartment", location: "Gachibowli, Hyderabad", budget: "₹12-18 Lakhs", slug: "2bhk-apartment" },
  { image: projectVilla, type: "Luxury Villa", location: "Jubilee Hills, Hyderabad", budget: "₹45-60 Lakhs", slug: "luxury-villa" },
  { image: project3bhk, type: "3BHK Penthouse", location: "Banjara Hills, Hyderabad", budget: "₹25-35 Lakhs", slug: "3bhk-penthouse" },
  { image: kitchenImg, type: "Modular Kitchen", location: "Kondapur, Hyderabad", budget: "₹8-12 Lakhs", slug: "modular-kitchen-project" },
  { image: bedroomImg, type: "Master Bedroom Suite", location: "HITEC City, Hyderabad", budget: "₹6-10 Lakhs", slug: "master-bedroom" },
  { image: livingroomImg, type: "Living Room Makeover", location: "Madhapur, Hyderabad", budget: "₹10-15 Lakhs", slug: "living-room-makeover" },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-10 px-5 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Our Work</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">Featured Projects</h1>
        <p className="font-sans text-sm text-muted-foreground max-w-sm mx-auto">
          A curated selection of our finest interior transformations across Hyderabad
        </p>
      </section>

      <section className="px-5 pb-16">
        <div className="flex flex-col gap-5 max-w-lg mx-auto">
          {projects.map((project) => (
            <Link
              key={project.type}
              to={`/projects/${project.slug}`}
              className="rounded-2xl overflow-hidden bg-card border border-border/50 group cursor-pointer transition-all duration-300 hover:border-gold/30 block"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={project.image} alt={`${project.type} interior design ${project.location}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
            </Link>
          ))}
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Projects;
