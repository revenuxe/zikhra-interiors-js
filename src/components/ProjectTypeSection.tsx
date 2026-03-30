import Link from "next/link";
import project2bhk from "@/assets/project-2bhk.webp";
import project3bhk from "@/assets/project-3bhk.webp";
import project4bhk from "@/assets/project-4bhk.webp";
import projectPenthouse from "@/assets/project-penthouse.webp";

const projectTypes = [
  { name: "2 BHK", image: project2bhk.src, slug: "2bhk", desc: "Smart luxury for compact spaces" },
  { name: "3 BHK", image: project3bhk.src, slug: "3bhk", desc: "Spacious elegance for families" },
  { name: "4 BHK", image: project4bhk.src, slug: "4bhk", desc: "Grand living redefined" },
  { name: "Penthouse", image: projectPenthouse.src, slug: "penthouse", desc: "Ultra-luxury sky living" },
];

const ProjectTypeSection = () => {
  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">By Property</p>
        <h2 className="font-serif text-3xl md:text-4xl gold-text">Project Types</h2>
        <p className="font-sans text-muted-foreground text-sm mt-3 max-w-sm mx-auto">
          Tailored interior solutions for every home type in Hyderabad
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
        {projectTypes.map((pt) => (
          <Link
            key={pt.slug}
              href={`/project-type/${pt.slug}`}
            className="relative rounded-2xl overflow-hidden group cursor-pointer block h-52"
          >
            <img
              src={pt.image}
              alt={`${pt.name} interior design Hyderabad`}
              loading="lazy"
              width={800}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/85 via-luxury-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-serif text-lg text-foreground">{pt.name}</h3>
              <p className="font-sans text-xs text-foreground/60 mt-1">{pt.desc}</p>
              <div className="w-8 h-0.5 gold-gradient mt-2 transition-all duration-300 group-hover:w-14" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectTypeSection;
