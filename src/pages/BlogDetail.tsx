import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  category: string | null;
  tags: string[] | null;
  author: string | null;
  published_at: string | null;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post?.meta_title) document.title = post.meta_title;
    else if (post?.title) document.title = `${post.title} | Zikhra Interiors Blog`;
  }, [post]);

  const formatDate = (d: string | null) =>
    d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "";

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground mb-4">Blog post not found</p>
          <Link to="/blog" className="text-gold font-sans text-sm">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      {post.featured_image && (
        <section className="relative h-[60vh] w-full overflow-hidden">
          <img src={post.featured_image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black/95" />
          <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-12 text-center">
            <Link to="/blog" className="absolute top-20 left-5 flex items-center gap-2 text-gold text-sm font-sans">
              <ArrowLeft className="w-4 h-4" /> Blog
            </Link>
            {post.category && (
              <span className="px-4 py-1.5 rounded-full gold-gradient font-sans text-xs font-medium text-primary-foreground uppercase tracking-wider mb-4">
                {post.category}
              </span>
            )}
            <h1 className="font-serif text-2xl md:text-4xl font-bold gold-text leading-tight max-w-2xl">{post.title}</h1>
            <div className="flex items-center gap-4 mt-4 text-muted-foreground">
              {post.author && (
                <span className="flex items-center gap-1.5 text-xs font-sans">
                  <User className="w-3.5 h-3.5" /> {post.author}
                </span>
              )}
              {post.published_at && (
                <span className="flex items-center gap-1.5 text-xs font-sans">
                  <Calendar className="w-3.5 h-3.5" /> {formatDate(post.published_at)}
                </span>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <article className="section-padding max-w-2xl mx-auto">
        {!post.featured_image && (
          <div className="mb-8">
            <Link to="/blog" className="flex items-center gap-2 text-gold text-sm font-sans mb-6">
              <ArrowLeft className="w-4 h-4" /> Blog
            </Link>
            <h1 className="font-serif text-3xl gold-text mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              {post.author && <span className="flex items-center gap-1.5 text-xs font-sans"><User className="w-3.5 h-3.5" /> {post.author}</span>}
              {post.published_at && <span className="flex items-center gap-1.5 text-xs font-sans"><Calendar className="w-3.5 h-3.5" /> {formatDate(post.published_at)}</span>}
            </div>
          </div>
        )}

        <div
          className="prose prose-invert prose-sm max-w-none font-sans
            prose-headings:font-serif prose-headings:text-gold
            prose-a:text-gold prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-2xl prose-img:border prose-img:border-border/30
            prose-strong:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-border/30">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-gold" />
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-gold/10 text-gold font-sans text-xs">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* CTA */}
      <section className="section-padding bg-luxury-dark text-center">
        <h2 className="font-serif text-2xl gold-text mb-4">Need Expert Interior Design?</h2>
        <p className="font-sans text-sm text-muted-foreground mb-6">Book a free consultation with Zikhra Interiors</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/919886285028?text=Hi%20Zikhra,%20I%20read%20your%20blog%20and%20I'm%20interested%20in%20interior%20design"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-8 py-3.5 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow inline-block"
          >
            WhatsApp Us
          </a>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full font-sans text-sm font-medium border border-gold/40 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/10 inline-block"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default BlogDetail;
