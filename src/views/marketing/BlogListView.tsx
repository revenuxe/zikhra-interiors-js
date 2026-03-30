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

      <section className="pt-24 pb-10 px-5 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Our Blog</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">Interior Design Insights</h1>
        <p className="font-sans text-sm text-muted-foreground max-w-sm mx-auto">
          Premium tips, trends, and inspiration for luxury interiors, modular kitchens, and high-end home design in Hyderabad.
        </p>
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
                      alt={post.title}
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
          <h2 className="font-serif text-2xl gold-text mb-2">Explore More Luxury Interior Resources</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Continue your planning journey with our premium service breakdowns and curated project case studies.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-sans">
            <Link href="/services" className="text-gold hover:underline">
              Luxury Interior Services
            </Link>
            <Link href="/projects" className="text-gold hover:underline">
              High-End Interior Projects
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

