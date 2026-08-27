import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import heroImage from "@/assets/hero-interior.webp";

export type BlogListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
  mainImageUrl?: string | null;
  authorName?: string | null;
};

function formatDate(d: string | null | undefined) {
  return d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "";
}

export default function BlogListView({ posts }: { posts: BlogListItem[] }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#f8f8f7] pb-12 pt-28 sm:pb-16 sm:pt-32">
        <img src={heroImage.src} alt="Interior design insights for Bangalore homes" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.36] sm:opacity-[0.32]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(248,248,247,0.94)_0%,rgba(248,248,247,0.86)_45%,rgba(248,248,247,0.64)_100%)]" />
        <div className="absolute -right-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl text-left">
            <h1 className="mb-8 max-w-[12ch] font-sans text-[3.35rem] font-light leading-[0.97] tracking-[-0.07em] text-[#171717] sm:text-6xl md:max-w-[14ch] md:text-7xl lg:text-[5.8rem]">Interior Design Insights for Bangalore</h1>
            <p className="mb-6 max-w-xl font-sans text-[1.03rem] font-light leading-[1.72] tracking-[-0.02em] text-[#525252] md:text-[1.15rem]">
          Pricing guides, planning advice, and premium interior design insights for Bangalore homes.
            </p>
        <div className="max-w-2xl space-y-4 font-sans text-sm leading-relaxed text-[#525252]">
          <p>
            Welcome to <strong className="text-foreground font-medium">Interior Design Insights</strong> by Zikhra - practical,
            idea-rich articles for homeowners who want calmer layouts, better lighting, and materials that age gracefully in
            Bangalore&apos;s climate. Each piece translates what we see on premium residential sites into guidance you can discuss
            with your family or your designer.
          </p>
          <p>
            Expect deep dives on <strong className="text-foreground font-medium">premium kitchens</strong>, wardrobe ergonomics,
            subtle colour palettes, and how to brief a studio for a <strong className="text-foreground font-medium">turnkey</strong>{" "}
            apartment or <strong className="text-foreground font-medium">villa</strong> without losing personality. We write for
            readers across Koramangala, Whitefield, and emerging townships who care about craftsmanship as much as aesthetics.
          </p>
          <p>
            Whether you are early in planning or already comparing quotes, these interior design insights help you ask sharper
            questions, spot durable specification details, and align your budget with the experiences that matter most in your home.
          </p>
        </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-sm mb-4">No blog posts yet. Check back soon!</p>
            <Link href="/" className="text-gold font-sans text-sm">← Back to Home</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden group transition-all duration-300 hover:border-gold/30 hover:gold-glow block"
              >
                {post.mainImageUrl && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.mainImageUrl}
                      alt={`${post.title} — premium interior design article and home inspiration`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h2 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h2>
                  {post.excerpt && <p className="font-sans text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-muted-foreground/60">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-sans text-xs">{formatDate(post.publishedAt)}</span>
                    </div>
                    <span className="flex items-center gap-1 text-gold text-xs font-sans font-medium group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="px-5 pb-10">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border/50 bg-card p-5 md:p-7">
          <h2 className="font-serif text-2xl gold-text mb-2">Explore More Interior Planning Resources</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Continue your planning journey with our premium service breakdowns and curated project case studies.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            <Link href="/bangalore/services" className="text-gold hover:underline">
              Interior Services
            </Link>
            <Link href="/bangalore/interior-design-cost" className="text-gold hover:underline">
              Interior Design Cost Guide
            </Link>
            <Link href="/bangalore/projects" className="text-gold hover:underline">
              Premium Interior Projects
            </Link>
            <Link href="/contact" className="text-gold hover:underline">
              Talk to a Designer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
}

