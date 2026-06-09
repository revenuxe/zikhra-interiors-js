import Link from "next/link";
import type { MarketId } from "@/lib/market-types";
import { projectsIndexPath, servicesIndexPath } from "@/lib/marketing-paths";

type Props = {
  market?: MarketId;
  /** When set, localises the story heading for area SEO pages. */
  areaName?: string;
};

/** Editorial copy: reinforces the hero H1 and adds depth for SEO without changing the hero layout. */
const HomeStorySection = ({ market = "bangalore", areaName }: Props) => {
  void market;

  return (
    <section className="section-padding bg-luxury-dark/30 border-y border-border/40">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4 text-center">Our Approach</p>
        <h2 className="font-serif text-2xl md:text-3xl gold-text text-center mb-8">
          {areaName
            ? `Designing timeless interiors in ${areaName}, Bangalore`
            : "Designing timeless interiors for Bangalore homes"}
        </h2>

        <div className="space-y-5 font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            At Zikhra, we believe <strong className="text-foreground font-medium">designing timeless interiors</strong> means
            creating calm, sophisticated rooms that feel effortlessly <strong className="text-foreground font-medium">elegant</strong>{" "}
            today and stay relevant for years. As we expand our presence in{" "}
            <strong className="text-foreground font-medium">Bangalore</strong>, we bring studio discipline, premium materials,
            transparent milestones, and designer-led execution to apartments, villas, and penthouses across the city.
          </p>
          <p>
            Whether you are in <strong className="text-foreground font-medium">Koramangala</strong>,{" "}
            <strong className="text-foreground font-medium">Indiranagar</strong>,{" "}
            <strong className="text-foreground font-medium">Whitefield</strong>,{" "}
            <strong className="text-foreground font-medium">HSR Layout</strong>, or along{" "}
            <strong className="text-foreground font-medium">Sarjapur Road</strong>, we plan interiors around how you live:
            daylight, ventilation, storage, and the rhythm of everyday routines, not generic catalogue layouts.
          </p>
          <p>
            <strong className="text-foreground font-medium">Premium interior design</strong> in Bangalore should feel grounded
            in climate and context. We layer textures, warm metallics, and sculptural lighting so your home feels inviting.
            Kitchens get durable worktops, intelligent storage, and <strong className="text-foreground font-medium">modular</strong>{" "}
            systems suited to Indian cooking and maintenance. Bedrooms and wardrobes focus on quiet details, soft-close hardware,
            integrated lighting, and walk-in experiences that feel boutique.
          </p>
          <p>
            Many clients choose <strong className="text-foreground font-medium">turnkey interiors</strong>: one team for drawings,
            procurement, site coordination, and quality checks. That continuity protects your budget, reduces vendor confusion,
            and keeps the vision intact. We are equally comfortable partnering with your architect or builder when you already
            have a trusted construction team.
          </p>
          <p>
            Comparing <strong className="text-foreground font-medium">interior designers in Bangalore</strong> for a{" "}
            <strong className="text-foreground font-medium">premium home</strong>? Browse our{" "}
            <Link href={projectsIndexPath("bangalore")} className="text-gold hover:underline">
              project stories
            </Link>
            , explore{" "}
            <Link href={servicesIndexPath("bangalore")} className="text-gold hover:underline">
              services from full home interiors to renovation
            </Link>
            , visit our{" "}
            <Link href="/bangalore" className="text-gold hover:underline">
              Bangalore hub
            </Link>{" "}
            for neighbourhood pages, and{" "}
            <Link href="/contact" className="text-gold hover:underline">
              book a consultation
            </Link>{" "}
            when you are ready to translate <strong className="text-foreground font-medium">timeless design</strong> into a home
            you will love living in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeStorySection;
