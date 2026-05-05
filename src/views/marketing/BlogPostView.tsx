import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import type { TypedObject } from "@portabletext/types";
import BlogPortableText from "@/components/BlogPortableText";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
  mainImageUrl?: string | null;
  authorName?: string | null;
  category?: string | null;
  body?: TypedObject[];
};

function formatDate(d: string | null | undefined) {
  return d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "";
}

export default function BlogPostView({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {post.mainImageUrl && (
        <section className="relative min-h-[620px] w-full overflow-hidden md:h-[60vh] md:min-h-[520px]">
          <img
            src={post.mainImageUrl}
            alt={`${post.title} — premium interior design article and home insight by Zikhra Hyderabad`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black/95" />
          <div className="relative z-10 flex min-h-[620px] flex-col px-6 pb-12 pt-32 text-center md:h-full md:min-h-[520px] md:items-center md:justify-end md:px-8 md:pt-0">
            <Link href="/blog" className="mb-10 inline-flex w-fit items-center gap-2 text-sm font-sans font-medium text-gold md:absolute md:left-5 md:top-28 md:mb-0">
              <ArrowLeft className="w-4 h-4" /> Blog
            </Link>
            <h1 className="font-serif text-2xl md:text-4xl font-bold gold-text leading-tight max-w-2xl">{post.title}</h1>
            <div className="flex items-center gap-4 mt-4 text-muted-foreground">
              {post.authorName && (
                <span className="flex items-center gap-1.5 text-xs font-sans">
                  <User className="w-3.5 h-3.5" /> {post.authorName}
                </span>
              )}
              {post.publishedAt && (
                <span className="flex items-center gap-1.5 text-xs font-sans">
                  <Calendar className="w-3.5 h-3.5" /> {formatDate(post.publishedAt)}
                </span>
              )}
            </div>
          </div>
        </section>
      )}

      <article className="section-padding max-w-2xl mx-auto">
        {!post.mainImageUrl && (
          <div className="mb-8">
            <Link href="/blog" className="flex items-center gap-2 text-gold text-sm font-sans mb-6">
              <ArrowLeft className="w-4 h-4" /> Blog
            </Link>
            <h1 className="font-serif text-3xl gold-text mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              {post.authorName && (
                <span className="flex items-center gap-1.5 text-xs font-sans">
                  <User className="w-3.5 h-3.5" /> {post.authorName}
                </span>
              )}
              {post.publishedAt && (
                <span className="flex items-center gap-1.5 text-xs font-sans">
                  <Calendar className="w-3.5 h-3.5" /> {formatDate(post.publishedAt)}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="max-w-none font-sans text-base [&_strong]:font-semibold [&_strong]:text-foreground [&_em]:italic [&_code]:rounded-md [&_code]:bg-muted/80 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_del]:opacity-80">
          {post.body && post.body.length > 0 ? (
            <BlogPortableText value={post.body} />
          ) : post.excerpt ? (
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{post.excerpt}</p>
          ) : null}
        </div>

        <section className="mt-12 p-5 rounded-2xl border border-border/50 bg-card">
          <h2 className="font-serif text-xl gold-text mb-2">Plan Your Premium Interior Project</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Planning interiors in Hyderabad or Bangalore? Compare package pricing, explore services, and review premium projects before booking your estimate.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-sans">
            <Link href="/services" className="text-gold hover:underline">
              Interior Services
            </Link>
            <Link href="/interior-design-cost" className="text-gold hover:underline">
              Interior Design Cost Guide
            </Link>
            <Link href="/projects" className="text-gold hover:underline">
              Premium Project Portfolio
            </Link>
            <Link href="/contact" className="text-gold hover:underline">
              Book a Free Estimate
            </Link>
          </div>
        </section>
      </article>

      <Footer />
      <BottomNav />
    </div>
  );
}

