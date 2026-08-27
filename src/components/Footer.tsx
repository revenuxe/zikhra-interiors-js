import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/zikhra-design-logo.webp";

const studioLinks = [{ label: "About Us", to: "/about" }, { label: "Projects", to: "/bangalore/projects" }, { label: "Portfolio", to: "/bangalore/portfolio/kitchen" }, { label: "Contact", to: "/contact" }];
const serviceLinks = [{ label: "Full Home Interiors", to: "/bangalore/services/full-home" }, { label: "Modular Kitchen", to: "/bangalore/services/modular-kitchen" }, { label: "Wardrobes", to: "/bangalore/services/wardrobes" }, { label: "Renovation", to: "/bangalore/services/renovation" }];
const resourceLinks = [{ label: "Interior Cost Guide", to: "/bangalore/interior-design-cost" }, { label: "2 BHK Cost", to: "/2bhk-interior-design-cost-bangalore" }, { label: "3 BHK Cost", to: "/3bhk-interior-design-cost-bangalore" }, { label: "Design Journal", to: "/blog" }];
const linkClass = "font-sans text-sm leading-relaxed text-[#666] transition-colors hover:text-black";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f1] px-5 pb-24 pt-8 sm:px-8 sm:pt-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/10 bg-white px-6 py-10 shadow-[0_16px_45px_rgba(0,0,0,0.06)] sm:px-10 sm:py-12 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.65fr_0.75fr_0.9fr_0.9fr] lg:gap-10">
          <div className="max-w-sm">
            <Link href="/" className="inline-block"><img src={logo.src} alt="Zikhra Interior Designers Bangalore" className="h-14 w-auto" /></Link>
            <p className="mt-6 font-sans text-sm leading-7 text-[#5e5e5e]">Thoughtful interior design for Bangalore homes—planned around the way you live.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.instagram.com/zikhra.interiors/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#222] transition-transform hover:-translate-y-0.5"><Instagram className="h-5 w-5" strokeWidth={1.75} /></a>
              <a href="https://www.linkedin.com/company/zikhra/" target="_blank" rel="noopener noreferrer" aria-label="Zikhra on LinkedIn" className="text-[#222] transition-transform hover:-translate-y-0.5"><Linkedin className="h-5 w-5" strokeWidth={1.75} /></a>
              <a href="mailto:zikhraofficial@gmail.com" aria-label="Email Zikhra" className="text-[#222] transition-transform hover:-translate-y-0.5"><Mail className="h-5 w-5" strokeWidth={1.75} /></a>
            </div>
          </div>
          <FooterColumn title="Studio" links={studioLinks} />
          <div>
            <FooterColumn title="Services" links={serviceLinks} />
            <Link href="/bangalore/services" className="mt-6 inline-flex rounded-lg bg-[#171717] px-4 py-3 font-sans text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black">Explore more services</Link>
          </div>
          <div>
            <h4 className="mb-5 font-sans text-sm font-medium text-[#171717]">Resources</h4>
            <ul className="space-y-3">{resourceLinks.map((link) => <li key={link.label}><Link href={link.to} className={linkClass}>{link.label}</Link></li>)}</ul>
            <a href="tel:9886579923" className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-[#171717] transition-colors hover:text-[#1f7a5a]"><Phone className="h-4 w-4" /> 9886579923</a>
          </div>
        </div>
        <div className="my-10 h-px bg-black/10" />
        <div className="flex flex-col gap-4 font-sans text-xs text-[#777] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Zikhra Interiors. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2"><Link href="/blog" className="hover:text-black">Blog</Link><Link href="/privacy" className="hover:text-black">Privacy Policy</Link><Link href="/terms" className="hover:text-black">Terms & Conditions</Link><Link href="/contact" className="hover:text-black">Contact</Link></div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return <div><h4 className="mb-5 font-sans text-sm font-medium text-[#171717]">{title}</h4><ul className="space-y-3">{links.map((link) => <li key={link.label}><Link href={link.to} className={linkClass}>{link.label}</Link></li>)}</ul></div>;
}
