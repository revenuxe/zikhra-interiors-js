import HeroBackdrop from "@/components/HeroBackdrop";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

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
      <HeroBackdrop />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl text-left">
            <h1 className="mb-8 max-w-[12ch] font-sans text-[3.35rem] font-light leading-[0.97] tracking-[-0.07em] text-[#171717] sm:text-6xl md:max-w-[14ch] md:text-7xl lg:text-[5.8rem]">Travel Planning Insights for Bangalore</h1>
            <p className="mb-6 max-w-xl font-sans text-[1.03rem] font-light leading-[1.72] tracking-[-0.02em] text-[#525252] md:text-[1.15rem]">Practical planning notes for Umrah, Hajj enquiries, and family travel from Bangalore.</p>
        <div className="max-w-2xl space-y-4 font-sans text-sm leading-relaxed text-[#525252]">
          <p>Welcome to <strong className="text-foreground font-medium">Travel Notes</strong> by Zikhra. Explore questions to ask before booking, details to compare in an itinerary, and practical ways to prepare for your journey.</p>
          <p>Read about <strong className="text-foreground font-medium">Umrah planning</strong>, family room arrangements, and <strong className="text-foreground font-medium">Hajj enquiries</strong>. Each guide helps you discuss your needs and review the details before making a booking.</p>
          <p>Whether you are planning your first journey or travelling again, start with a clear itinerary. Requirements and availability can change; check current details through the relevant official channels.</p>
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
                      alt={`${post.title} — Umrah and travel planning article`}
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
          <h2 className="font-serif text-2xl gold-text mb-2">Explore More Travel Resources</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Continue planning with our travel services, destination guides, and illustrative itineraries.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            <Link href="/bangalore/services" className="text-gold hover:underline">
              Travel Services
            </Link>
            <Link href="/bangalore/travel-package-guide" className="text-gold hover:underline">
              Travel Package Guide
            </Link>
            <Link href="/bangalore/journeys" className="text-gold hover:underline">
              Umrah & Travel Itineraries
            </Link>
            <Link href="/contact" className="text-gold hover:underline">
              Talk to Our Travel Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
}

