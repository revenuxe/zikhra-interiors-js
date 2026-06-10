import Link from "next/link";
import { ArrowLeft, BadgeCheck, CheckCircle2, Clock3, Home, IndianRupee, Layers3, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import type { ProjectTypeItem } from "@/lib/project-types-data";
import type { MarketId } from "@/lib/market-types";
import { applyMarketToCopy, backHubPath, cityLabel } from "@/lib/marketing-paths";

type Props = { item: ProjectTypeItem; market?: MarketId };

export default function ProjectTypeDetailView({ item, market = "bangalore" }: Props) {
  const intro = applyMarketToCopy(item.intro, market);
  const tagline = applyMarketToCopy(item.tagline, market);
  const city = cityLabel(market);
  const heroTitle = `${item.title.replace("Design", "Designer")} in ${city}`;
  const heroIntro =
    item.pricing.toLowerCase().includes("starts")
      ? `${item.pricing}. ${intro}`
      : intro;
  const summaryCards = [
    { label: "Starting Budget", value: item.pricing, icon: IndianRupee },
    { label: "Typical Timeline", value: item.timeline, icon: Clock3 },
    { label: "Best For", value: applyMarketToCopy(item.idealFor[0], market), icon: Home },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative min-h-[680px] w-full overflow-hidden md:h-[70vh] md:min-h-[560px]">
        <img src={item.heroImage} alt={item.metaTitle} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/95" />
        <div className="relative z-10 flex min-h-[680px] flex-col px-6 pb-14 pt-32 text-center md:h-full md:min-h-[560px] md:items-center md:justify-end md:px-8 md:pb-16 md:pt-0">
          <Link href={backHubPath(market)} className="mb-10 inline-flex w-fit items-center gap-2 text-sm font-sans font-medium text-gold md:absolute md:left-5 md:top-28 md:mb-0">
            <ArrowLeft className="w-4 h-4" /> {market === "bangalore" ? "Bangalore" : "Home"}
          </Link>
          <div className="mx-auto flex w-full max-w-md flex-col items-center">
            <p className="max-w-sm text-xs font-sans tracking-[0.16em] uppercase leading-relaxed text-gold mb-4">
              {tagline}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-4 leading-tight">{heroTitle}</h1>
            <p className="font-sans text-foreground/85 text-[15px] leading-relaxed max-w-md">{heroIntro}</p>
          </div>
          <Link
            href="/contact"
            className="mx-auto mt-8 inline-flex gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {summaryCards.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-lg border border-gold/20 bg-card/80 p-5 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mb-2 font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                <p className="font-serif text-xl leading-snug text-foreground">{value}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl text-center">
            <p className="mb-3 text-xs font-sans tracking-[0.3em] uppercase text-gold">What's Included</p>
            <h2 className="font-serif text-2xl font-bold gold-text md:text-4xl">
              Complete {item.title.replace("Interior Design", "Interior Scope")} in {city}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-7 text-foreground/75 md:text-base">
              {applyMarketToCopy(item.seoSections[0]?.body ?? intro, market)}
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {item.features.map((feat) => (
              <div key={feat} className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/60 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <span className="font-sans text-sm leading-6 text-foreground/90">{applyMarketToCopy(feat, market)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-sans tracking-[0.3em] uppercase text-gold">Design Priorities</p>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-4xl">
              Interior Design That Matches the Way You Live
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
            {item.designFocus.map((focus) => (
              <div key={focus.title} className="rounded-lg border border-border bg-card p-6">
                <Sparkles className="mb-4 h-6 w-6 text-gold" />
                <h3 className="mb-3 font-serif text-xl text-foreground">{applyMarketToCopy(focus.title, market)}</h3>
                <p className="font-sans text-sm leading-7 text-foreground/75">{applyMarketToCopy(focus.desc, market)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-sans tracking-[0.3em] uppercase text-gold">Room-Wise Scope</p>
              <h2 className="font-serif text-2xl font-bold gold-text md:text-4xl">
                Planned Room by Room, Not Piece by Piece
              </h2>
              <p className="mt-4 font-sans text-sm leading-7 text-foreground/75 md:text-base">
                Every room is mapped for movement, storage, finish durability, light, and furniture proportion before production begins.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {item.rooms.map((room) => (
                <div key={room.name} className="rounded-lg border border-gold/15 bg-background/70 p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg text-foreground">{applyMarketToCopy(room.name, market)}</h3>
                  <p className="font-sans text-sm leading-7 text-foreground/75">{applyMarketToCopy(room.desc, market)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-sans tracking-[0.3em] uppercase text-gold">Who It Suits</p>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-4xl">
                Best-Fit Homes for This Interior Package
              </h2>
              <div className="mt-6 space-y-3">
                {item.idealFor.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                    <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="font-sans text-sm leading-6 text-foreground/80">{applyMarketToCopy(point, market)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="mb-3 text-xs font-sans tracking-[0.25em] uppercase text-gold">Planning Guide</p>
              <div className="space-y-6">
                {item.seoSections.map((section) => (
                  <article key={section.heading}>
                    <h3 className="mb-3 font-serif text-xl text-foreground">{applyMarketToCopy(section.heading, market)}</h3>
                    <p className="font-sans text-sm leading-7 text-foreground/75">{applyMarketToCopy(section.body, market)}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-sans tracking-[0.3em] uppercase text-gold">Execution Process</p>
            <h2 className="font-serif text-2xl font-bold gold-text md:text-4xl">From Design Brief to Handover</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-4">
            {item.process.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-gold/15 bg-background/70 p-5">
                <p className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </p>
                <h3 className="mb-2 font-serif text-lg text-foreground">{applyMarketToCopy(step.title, market)}</h3>
                <p className="font-sans text-sm leading-7 text-foreground/75">{applyMarketToCopy(step.desc, market)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-sans tracking-[0.3em] uppercase text-gold">FAQs</p>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-4xl">
              {item.title} Questions
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4">
            {item.faqs.map((faq) => (
              <article key={faq.q} className="rounded-lg border border-border bg-card p-5">
                <h3 className="mb-2 font-serif text-lg text-foreground">{applyMarketToCopy(faq.q, market)}</h3>
                <p className="font-sans text-sm leading-7 text-foreground/75">{applyMarketToCopy(faq.a, market)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <BottomNav />
    </div>
  );
}

