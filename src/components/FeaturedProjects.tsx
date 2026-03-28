import project2bhk from "@/assets/project-2bhk.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import project3bhk from "@/assets/project-3bhk.jpg";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { image: project2bhk, type: "2BHK Apartment", location: "Gachibowli, Hyderabad", budget: "₹12-18 Lakhs", slug: "2bhk-apartment" },
  { image: projectVilla, type: "Luxury Villa", location: "Jubilee Hills, Hyderabad", budget: "₹45-60 Lakhs", slug: "luxury-villa" },
  { image: project3bhk, type: "3BHK Penthouse", location: "Banjara Hills, Hyderabad", budget: "₹25-35 Lakhs", slug: "3bhk-penthouse" },
];

const FeaturedProjects = () => {
  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Featured</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Recent Projects in Hyderabad</h2>
      </div>

      <div className="flex flex-col gap-6 max-w-lg mx-auto">
        {projects.map((project) => (
          <Link
            key={project.type}
            to={`/projects/${project.slug}`}
            className="rounded-2xl overflow-hidden bg-card border border-border/50 group cursor-pointer transition-all duration-300 hover:border-gold/30 block"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.type} interior design ${project.location}`}
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
