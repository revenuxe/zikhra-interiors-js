import project2bhk from "@/assets/project-2bhk.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import project3bhk from "@/assets/project-3bhk.jpg";
import { MapPin } from "lucide-react";

const projects = [
  { image: project2bhk, type: "2BHK Apartment", location: "Whitefield, Bangalore", budget: "₹12-18 Lakhs" },
  { image: projectVilla, type: "Luxury Villa", location: "Sarjapur Road, Bangalore", budget: "₹45-60 Lakhs" },
  { image: project3bhk, type: "3BHK Penthouse", location: "Indiranagar, Bangalore", budget: "₹25-35 Lakhs" },
];

const FeaturedProjects = () => {
  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Featured</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Recent Projects</h2>
      </div>

      <div className="flex flex-col gap-6 max-w-lg mx-auto">
        {projects.map((project) => (
          <div
            key={project.type}
            className="rounded-2xl overflow-hidden bg-card border border-border/50 group cursor-pointer transition-all duration-300 hover:border-gold/30"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.type}
                loading="lazy"
                width={800}
                height={1024}
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
  );
};

export default FeaturedProjects;
