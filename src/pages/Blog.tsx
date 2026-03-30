import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  category: string | null;
  published_at: string | null;
  author: string | null;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, featured_image, category, published_at, author")
        .eq("published", true)
        .order("published_at", { ascending: false });
      setPosts(data || []);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const formatDate = (d: string | null) =>
    d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-10 px-5 text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Our Blog</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3">Interior Design Insights</h1>
        <p className="font-sans text-sm text-muted-foreground max-w-sm mx-auto">
          Tips, trends, and inspiration for luxury interiors in Hyderabad
        </p>
      </section>

      <section className="px-5 pb-16">
        {loading ? (
          <div className="text-center py-20 text-muted-foreground text-sm">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-sm mb-4">No blog posts yet. Check back soon!</p>
            <Link to="/" className="text-gold font-sans text-sm">← Back to Home</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden group transition-all duration-300 hover:border-gold/30 hover:gold-glow block"
              >
                {post.featured_image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {post.category && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full gold-gradient font-sans text-[10px] font-medium text-primary-foreground uppercase tracking-wider">
                        {post.category}
                      </span>
                    )}
                  </div>
                )}
                <div className="p-5">
                  <h2 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h2>
                  {post.excerpt && <p className="font-sans text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-muted-foreground/60">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-sans text-xs">{formatDate(post.published_at)}</span>
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

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Blog;
