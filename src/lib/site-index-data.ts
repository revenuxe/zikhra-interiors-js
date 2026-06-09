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
  { label: "Bangalore", href: "/bangalore" },
  { label: "Bangalore services", href: "/bangalore/services" },
  { label: "Bangalore interior design cost", href: "/bangalore/interior-design-cost" },
  { label: "2 BHK interior design cost Bangalore", href: "/2bhk-interior-design-cost-bangalore" },
  { label: "3 BHK interior design cost Bangalore", href: "/3bhk-interior-design-cost-bangalore" },
  { label: "Bangalore projects", href: "/bangalore/projects" },
  { label: "Blog", href: "/blog" },
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
      title: "Bangalore areas",
      description: "Local interior design landing pages in Bangalore and Bengaluru.",
      links: [
        { label: "Bangalore premium interiors hub", href: "/bangalore" },
        ...bangaloreAreas.map((a) => ({ label: `${a.name}, Bangalore`, href: `/bangalore/${a.slug}` })),
      ],
    },
    {
      title: "Bangalore services",
      description: "Premium home interior services for Bangalore homeowners.",
      links: [
        { label: "Bangalore services overview", href: "/bangalore/services" },
        ...services.map((s) => ({ label: `${s.title} in Bangalore`, href: `/bangalore/services/${s.id}` })),
      ],
    },
    {
      title: "Bangalore project types",
      description: "Property-type guides for Bangalore homeowners.",
      links: projectTypes.map((p) => ({ label: `${p.title} in Bangalore`, href: `/bangalore/project-type/${p.slug}` })),
    },
    {
      title: "Bangalore portfolio",
      description: "Room and space categories for Bangalore homes.",
      links: portfolioItems.map((p) => ({ label: `${p.title} in Bangalore`, href: `/bangalore/portfolio/${p.slug}` })),
    },
    {
      title: "Bangalore featured projects",
      description: "Project stories linked from the Bangalore journey.",
      links: projects.map((p) => ({ label: `${p.title} in Bangalore`, href: `/bangalore/projects/${p.slug}` })),
    },
  ];
}
