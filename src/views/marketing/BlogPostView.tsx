import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import type { TypedObject } from "@portabletext/types";
import BlogPortableText from "@/components/BlogPortableText";
import EditorialPageHero from "@/components/EditorialPageHero";
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

      <EditorialPageHero title={post.title} image={post.mainImageUrl || undefined} showCta={false} meta={<div className="flex flex-wrap items-center gap-4"><Link href="/blog" className="inline-flex items-center gap-2"><ArrowLeft size={14}/>Blog</Link>{post.authorName && <span className="inline-flex items-center gap-1.5 text-xs"><User size={13}/>{post.authorName}</span>}{post.publishedAt && <span className="inline-flex items-center gap-1.5 text-xs"><Calendar size={13}/>{formatDate(post.publishedAt)}</span>}</div>} />
      <article className="section-padding max-w-2xl mx-auto">
        <div className="max-w-none font-sans text-base [&_strong]:font-semibold [&_strong]:text-foreground [&_em]:italic [&_code]:rounded-md [&_code]:bg-muted/80 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_del]:opacity-80">
          {post.body && post.body.length > 0 ? (
            <BlogPortableText value={post.body} />
          ) : post.excerpt ? (
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{post.excerpt}</p>
          ) : null}
        </div>

        <section className="mt-12 p-5 rounded-2xl border border-border/50 bg-card">
          <h2 className="font-serif text-xl gold-text mb-2">Plan Your Next Journey</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Planning travel from Bangalore? Explore itinerary options and request a personalised quotation for your dates and group.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-sans">
            <Link href="/bangalore/services" className="text-gold hover:underline">
              Travel Services
            </Link>
            <Link href="/bangalore/travel-package-guide" className="text-gold hover:underline">
              Travel Package Guide
            </Link>
            <Link href="/bangalore/journeys" className="text-gold hover:underline">
              Illustrative Itineraries
            </Link>
            <Link href="/contact" className="text-gold hover:underline">
              Request a Travel Quote
            </Link>
          </div>
        </section>
      </article>

      <Footer />
      <BottomNav />
    </div>
  );
}

