import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import heroImage from "@/assets/hero-interior.webp";

type Props = {
  title: string;
  description?: string;
  meta?: ReactNode;
  showCta?: boolean;
};

/** Shared light editorial hero for detail pages. */
export default function EditorialPageHero({ title, description, meta, showCta = true }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8f8f7] pb-12 pt-28 sm:pb-16 sm:pt-32">
      <img src={heroImage.src} alt={`Luxury interior design inspiration for ${title}`} width={1920} height={1080} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.24] sm:opacity-[0.18]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(248,248,247,0.96)_0%,rgba(248,248,247,0.9)_45%,rgba(248,248,247,0.72)_100%)]" />
      <div className="absolute -right-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <h1 className="max-w-[11ch] font-sans text-[3.35rem] font-light leading-[0.97] tracking-[-0.07em] text-[#171717] sm:text-6xl md:max-w-[13ch] md:text-7xl lg:text-[5.8rem]">
            {title}
          </h1>
          {description ? <p className="mt-8 max-w-xl font-sans text-[1.03rem] font-light leading-[1.72] tracking-[-0.02em] text-[#525252] md:text-[1.15rem]">{description}</p> : null}
          {meta ? <div className="mt-5 font-sans text-sm text-[#5b5b5b]">{meta}</div> : null}
          {showCta ? <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#171717] px-5 py-3.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_12px_24px_rgba(0,0,0,0.16)] active:translate-y-0">
            Get Free Consultation <ArrowUpRight className="h-4 w-4" />
          </Link> : null}
        </div>
      </div>
    </section>
  );
}
