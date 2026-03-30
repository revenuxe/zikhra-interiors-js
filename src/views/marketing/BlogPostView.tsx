import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, User } from "lucide-react";
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
  body?: unknown[];
};

function formatDate(d: string | null | undefined) {
  return d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "";
}

export default function BlogPostView({ post }: { post: BlogPost }) {
  const portableTextComponents = {
    marks: {
      link: ({ children, value }: { children: React.ReactNode; value?: { href?: string } }) => {
        const href = value?.href ?? "#";
        const external = href.startsWith("http");
        return (
          <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {post.mainImageUrl && (
        <section className="relative h-[60vh] w-full overflow-hidden">
          <img
            src={post.mainImageUrl}
            alt={`${post.title} — luxury interior design article and premium home insight by Zikhra Hyderabad`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black/95" />
          <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-12 text-center">
            <Link href="/blog" className="absolute top-28 md:top-24 left-5 flex items-center gap-2 text-gold text-sm font-sans">
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

        <div className="prose prose-invert prose-sm max-w-none font-sans prose-headings:font-serif prose-headings:text-gold prose-p:text-muted-foreground prose-li:text-muted-foreground">
          {post.body && post.body.length > 0 ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : post.excerpt ? (
            <p>{post.excerpt}</p>
          ) : null}
        </div>

        <section className="mt-12 p-5 rounded-2xl border border-border/50 bg-card">
          <h2 className="font-serif text-xl gold-text mb-2">Plan Your Premium Interior Project</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Looking for luxury interior designers in Hyderabad? Explore our specialized services and recent premium projects before booking your consultation.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-sans">
            <Link href="/services" className="text-gold hover:underline">
              Luxury Interior Services
            </Link>
            <Link href="/projects" className="text-gold hover:underline">
              Premium Project Portfolio
            </Link>
            <Link href="/contact" className="text-gold hover:underline">
              Book a Free Consultation
            </Link>
          </div>
        </section>
      </article>

      <Footer />
      <BottomNav />
    </div>
  );
}

