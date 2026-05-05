import { areas } from "@/lib/areas-data";
import { bangaloreAreas } from "@/lib/bangalore-areas-data";
import { portfolioItems } from "@/lib/portfolio-data";
import { projectTypes } from "@/lib/project-types-data";
import { projects } from "@/lib/projects-data";
import { services } from "@/lib/services-data";

export type SiteIndexLink = { label: string; href: string };

export type SiteIndexSection = { title: string; description?: string; links: SiteIndexLink[] };

const mainPages: SiteIndexLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Services", href: "/services" },
  { label: "Interior design cost", href: "/interior-design-cost" },
  { label: "Hyderabad interior design cost", href: "/hyderabad/interior-design-cost" },
  { label: "Bangalore interior design cost", href: "/bangalore/interior-design-cost" },
  { label: "2 BHK interior design cost Hyderabad", href: "/2bhk-interior-design-cost-hyderabad" },
  { label: "2 BHK interior design cost Bangalore", href: "/2bhk-interior-design-cost-bangalore" },
  { label: "3 BHK interior design cost Hyderabad", href: "/3bhk-interior-design-cost-hyderabad" },
  { label: "3 BHK interior design cost Bangalore", href: "/3bhk-interior-design-cost-bangalore" },
  { label: "Projects", href: "/projects" },
  { label: "Projects — Bangalore", href: "/bangalore/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Bangalore", href: "/bangalore" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Thank you", href: "/thank-you" },
];

export function getStaticSiteIndexSections(): SiteIndexSection[] {
  return [
    {
      title: "Main pages",
      description: "Core pages across the Zikhra website.",
      links: mainPages,
    },
    {
      title: "Services",
      description: "Premium interior services — each with its own detail page.",
      links: services.map((s) => ({ label: s.title, href: `/services/${s.id}` })),
    },
    {
      title: "Project types",
      description: "Interiors by apartment or villa format.",
      links: projectTypes.map((p) => ({ label: p.title, href: `/project-type/${p.slug}` })),
    },
    {
      title: "Featured projects",
      description: "Case-style project pages.",
      links: projects.map((p) => ({ label: p.title, href: `/projects/${p.slug}` })),
    },
    {
      title: "Portfolio",
      description: "Browse by room or space type.",
      links: portfolioItems.map((p) => ({ label: p.title, href: `/portfolio/${p.slug}` })),
    },
    {
      title: "Hyderabad areas",
      description: "Local interior design landing pages in Hyderabad.",
      links: areas.map((a) => ({ label: `${a.name}, Hyderabad`, href: `/area/${a.slug}` })),
    },
    {
      title: "Bangalore areas",
      description: "Local interior design landing pages in Bangalore.",
      links: [
        { label: "Bangalore — premium interiors hub", href: "/bangalore" },
        ...bangaloreAreas.map((a) => ({ label: `${a.name}, Bangalore`, href: `/bangalore/${a.slug}` })),
      ],
    },
    {
      title: "Bangalore & Bengaluru — services",
      description: "Same services as Hyderabad, with Bangalore-focused URLs and copy.",
      links: [
        { label: "Bangalore services overview", href: "/bangalore/services" },
        ...services.map((s) => ({ label: `${s.title} (Bangalore)`, href: `/bangalore/services/${s.id}` })),
      ],
    },
    {
      title: "Bangalore & Bengaluru — project types",
      description: "Property-type guides for Bangalore homeowners.",
      links: projectTypes.map((p) => ({ label: `${p.title} (Bangalore)`, href: `/bangalore/project-type/${p.slug}` })),
    },
    {
      title: "Bangalore & Bengaluru — portfolio",
      description: "Room and space categories — Bangalore funnel.",
      links: portfolioItems.map((p) => ({ label: `${p.title} (Bangalore)`, href: `/bangalore/portfolio/${p.slug}` })),
    },
    {
      title: "Bangalore & Bengaluru — featured projects",
      description: "Project stories linked from the Bangalore journey.",
      links: projects.map((p) => ({ label: `${p.title} (Bangalore)`, href: `/bangalore/projects/${p.slug}` })),
    },
  ];
}
