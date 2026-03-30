import Link from "next/link";

/** Editorial copy for the homepage: reinforces the hero H1 and adds depth for SEO without changing the hero layout. */
const HomeStorySection = () => {
  return (
    <section className="section-padding bg-luxury-dark/30 border-y border-border/40">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4 text-center">Our Approach</p>
        <h2 className="font-serif text-2xl md:text-3xl gold-text text-center mb-8">
          Designing timeless luxury for Hyderabad homes
        </h2>

        <div className="space-y-5 font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            At Zikhra, we believe <strong className="text-foreground font-medium">designing timeless luxury</strong> is not
            about following short-lived trends. It is about crafting calm, sophisticated rooms that feel effortlessly{" "}
            <strong className="text-foreground font-medium">elegant</strong> today and still feel relevant years from now.
            Our studio works with discerning homeowners across Hyderabad who want{" "}
            <strong className="text-foreground font-medium">premium interiors</strong>, honest timelines, and workmanship
            they can trust from first sketch to final styling.
          </p>
          <p>
            Whether you are renovating a compact city apartment, fitting out a new <strong className="text-foreground font-medium">villa</strong>{" "}
            in Jubilee Hills, or upgrading a <strong className="text-foreground font-medium">penthouse</strong> with bespoke
            finishes, we treat every project as a collaboration. We listen to how you live—your routines, your collection of
            art and books, the way light moves through your rooms—and translate that into <strong className="text-foreground font-medium">bespoke</strong>{" "}
            layouts, joinery, and <strong className="text-foreground font-medium">high-end</strong> materials that suit both climate and culture in Telangana.
          </p>
          <p>
            <strong className="text-foreground font-medium">Luxury interior design</strong>, in our view, should feel grounded.
            We layer textures, warm metallics, and sculptural lighting so your home feels inviting rather than imposing. For
            kitchens, we specify durable worktops, intelligent storage, and{" "}
            <strong className="text-foreground font-medium">modular</strong> systems that make everyday cooking a pleasure. For
            bedrooms and wardrobes, we focus on quiet details—soft-close hardware, integrated lighting, and walk-in experiences
            that rival boutique retail.
          </p>
          <p>
            Many clients come to us for <strong className="text-foreground font-medium">turnkey interiors</strong>: one team
            handling drawings, procurement, site coordination, and quality checks. That continuity protects your budget,
            reduces confusion between vendors, and keeps the vision intact. We are equally comfortable partnering with your architect
            or builder when you already have a trusted construction team and need specialist interior documentation and
            execution support.
          </p>
          <p>
            Hyderabad&apos;s neighbourhoods each carry a different rhythm—from the leafy avenues of Banjara Hills to the fast-growing
            corridors near <strong className="text-foreground font-medium">HITEC City</strong> and Financial District. We adapt
            our palettes, ceiling strategies, and façade-sensitive fenestration so your interiors feel native to the microclimate
            and streetscape, not copied from a generic catalogue.
          </p>
          <p>
            If you are comparing <strong className="text-foreground font-medium">interior designers in Hyderabad</strong> for a{" "}
            <strong className="text-foreground font-medium">premium home</strong>, start with a conversation. Browse our{" "}
            <Link href="/projects" className="text-gold hover:underline">
              project stories
            </Link>
            , explore{" "}
            <Link href="/services" className="text-gold hover:underline">
              services from full home interiors to renovation
            </Link>
            , and{" "}
            <Link href="/contact" className="text-gold hover:underline">
              book a consultation
            </Link>{" "}
            when you are ready to translate <strong className="text-foreground font-medium">timeless luxury</strong> into a home
            you will love living in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeStorySection;
