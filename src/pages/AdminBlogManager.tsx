import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import BlogEditor from "@/components/admin/BlogEditor";
import { toast } from "sonner";
import {
  ArrowLeft, Plus, Edit, Trash2, Eye, EyeOff, X, Upload, Save, FileText, Search,
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  author: string | null;
  category: string | null;
  tags: string[] | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
}

const emptyPost = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  featured_image: "",
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  author: "Zikhra Interiors",
  category: "",
  tags: [] as string[],
  published: false,
};

const AdminBlogManager = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyPost);
  const [tagInput, setTagInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inlineImageRef = useRef<HTMLInputElement>(null);
  const [editorContent, setEditorContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchPosts();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) navigate("/admin/login");
  };

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    setPosts((data as BlogPost[]) || []);
    setLoading(false);
  };

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleTitleChange = (title: string) => {
    setForm((f) => ({ ...f, title, slug: editId ? f.slug : generateSlug(title) }));
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from("blog-images").upload(path, file);
    if (error) {
      toast.error("Image upload failed");
      return null;
    }
    const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleFeaturedImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadImage(file);
    if (url) setForm((f) => ({ ...f, featured_image: url }));
  };

  const handleInlineImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadImage(file);
    if (url) {
      setEditorContent((prev) => prev + `<img src="${url}" alt="Blog image" />`);
      // Force re-render by updating form content
      setForm((f) => ({ ...f, content: f.content + `<img src="${url}" alt="Blog image" />` }));
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm((f) => ({ ...f, tags: [...f.tags, tagInput.trim()] }));
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setForm((f) => ({ ...f, tags: f.tags.filter((t) => t !== tag) }));
  };

  const handleSave = async () => {
    if (!form.title || !form.content) {
      toast.error("Title and content are required");
      return;
    }
    setSaving(true);

    const payload = {
      title: form.title,
      slug: form.slug || generateSlug(form.title),
      excerpt: form.excerpt || null,
      content: form.content,
      featured_image: form.featured_image || null,
      meta_title: form.meta_title || null,
      meta_description: form.meta_description || null,
      meta_keywords: form.meta_keywords || null,
      author: form.author || "Zikhra Interiors",
      category: form.category || null,
      tags: form.tags.length > 0 ? form.tags : null,
      published: form.published,
      published_at: form.published ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };

    if (editId) {
      const { error } = await supabase.from("blog_posts").update(payload).eq("id", editId);
      if (error) toast.error("Failed to update");
      else toast.success("Blog updated!");
    } else {
      const { error } = await supabase.from("blog_posts").insert(payload);
      if (error) toast.error("Failed to create");
      else toast.success("Blog created!");
    }

    setSaving(false);
    setEditing(false);
    setEditId(null);
    setForm(emptyPost);
    fetchPosts();
  };

  const startEdit = (post: BlogPost) => {
    setEditId(post.id);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      content: post.content,
      featured_image: post.featured_image || "",
      meta_title: post.meta_title || "",
      meta_description: post.meta_description || "",
      meta_keywords: post.meta_keywords || "",
      author: post.author || "Zikhra Interiors",
      category: post.category || "",
      tags: post.tags || [],
      published: post.published,
    });
    setEditorContent(post.content);
    setEditing(true);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) toast.error("Failed to delete");
    else {
      toast.success("Blog deleted");
      setPosts(posts.filter((p) => p.id !== id));
    }
    setDeleteId(null);
  };

  const togglePublish = async (post: BlogPost) => {
    const newState = !post.published;
    const { error } = await supabase.from("blog_posts").update({
      published: newState,
      published_at: newState ? new Date().toISOString() : null,
    }).eq("id", post.id);
    if (error) toast.error("Failed to update");
    else {
      toast.success(newState ? "Published!" : "Unpublished");
      fetchPosts();
    }
  };

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    (p.category || "").toLowerCase().includes(search.toLowerCase())
  );

  const inputClass = "w-full px-4 py-3 rounded-xl bg-background border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors";

  if (editing) {
    return (
      <div className="min-h-screen bg-luxury-black">
        <div className="sticky top-0 z-40 glass-effect border-b border-border/20 px-4 py-3 flex items-center justify-between">
          <button onClick={() => { setEditing(false); setEditId(null); setForm(emptyPost); }} className="flex items-center gap-1.5 text-muted-foreground text-xs font-sans hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="font-serif text-lg gold-text">{editId ? "Edit Post" : "New Post"}</h1>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-1.5 gold-gradient px-4 py-2 rounded-full font-sans text-xs font-medium text-primary-foreground"
          >
            <Save className="w-3.5 h-3.5" /> {saving ? "Saving..." : "Save"}
          </button>
        </div>

        <div className="px-4 py-6 space-y-5 max-w-3xl mx-auto pb-20">
          {/* Title */}
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-1.5">Title *</label>
            <input className={inputClass} value={form.title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="Blog post title" />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-1.5">URL Slug</label>
            <input className={inputClass} value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} placeholder="auto-generated-from-title" />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-1.5">Excerpt</label>
            <textarea className={`${inputClass} min-h-[80px]`} value={form.excerpt} onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))} placeholder="Short summary for listing pages" />
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-1.5">Featured Image</label>
            {form.featured_image && (
              <div className="relative mb-3">
                <img src={form.featured_image} alt="Featured" className="w-full h-48 object-cover rounded-xl" />
                <button onClick={() => setForm((f) => ({ ...f, featured_image: "" }))} className="absolute top-2 right-2 w-7 h-7 rounded-full bg-destructive/80 flex items-center justify-center">
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFeaturedImage} className="hidden" />
            <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 font-sans text-sm text-muted-foreground hover:border-gold/30 transition-colors">
              <Upload className="w-4 h-4" /> Upload Image
            </button>
          </div>

          {/* Content Editor */}
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-1.5">Content *</label>
            <input ref={inlineImageRef} type="file" accept="image/*" onChange={handleInlineImage} className="hidden" />
            <BlogEditor
              content={form.content}
              onChange={(html) => setForm((f) => ({ ...f, content: html }))}
              onImageUpload={() => inlineImageRef.current?.click()}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-1.5">Category</label>
            <input className={inputClass} value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} placeholder="e.g., Interior Tips, Trends, Guide" />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-1.5">Tags</label>
            <div className="flex gap-2 mb-2 flex-wrap">
              {form.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-gold/10 text-gold font-sans text-xs">
                  {tag}
                  <button onClick={() => removeTag(tag)} className="hover:text-destructive"><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                className={`${inputClass} flex-1`}
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                placeholder="Add tag and press Enter"
              />
              <button onClick={addTag} className="px-4 py-2 rounded-xl border border-border/50 font-sans text-sm text-muted-foreground hover:border-gold/30">Add</button>
            </div>
          </div>

          {/* Author */}
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-1.5">Author</label>
            <input className={inputClass} value={form.author} onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))} placeholder="Author name" />
          </div>

          {/* SEO Section */}
          <div className="border-t border-border/30 pt-5">
            <p className="font-serif text-base text-gold mb-4">SEO Settings</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-sans text-muted-foreground mb-1.5">Meta Title</label>
                <input className={inputClass} value={form.meta_title} onChange={(e) => setForm((f) => ({ ...f, meta_title: e.target.value }))} placeholder="SEO title (max 60 chars)" maxLength={60} />
                <p className="text-[10px] text-muted-foreground/50 mt-1">{form.meta_title.length}/60</p>
              </div>
              <div>
                <label className="block text-xs font-sans text-muted-foreground mb-1.5">Meta Description</label>
                <textarea className={`${inputClass} min-h-[60px]`} value={form.meta_description} onChange={(e) => setForm((f) => ({ ...f, meta_description: e.target.value }))} placeholder="SEO description (max 160 chars)" maxLength={160} />
                <p className="text-[10px] text-muted-foreground/50 mt-1">{form.meta_description.length}/160</p>
              </div>
              <div>
                <label className="block text-xs font-sans text-muted-foreground mb-1.5">Meta Keywords</label>
                <input className={inputClass} value={form.meta_keywords} onChange={(e) => setForm((f) => ({ ...f, meta_keywords: e.target.value }))} placeholder="keyword1, keyword2, keyword3" />
              </div>
            </div>
          </div>

          {/* Publish Toggle */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/30">
            <button
              onClick={() => setForm((f) => ({ ...f, published: !f.published }))}
              className={`w-12 h-6 rounded-full transition-colors ${form.published ? "bg-gold" : "bg-muted/30"} relative`}
            >
              <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${form.published ? "translate-x-6" : "translate-x-0.5"}`} />
            </button>
            <span className="font-sans text-sm text-foreground">{form.published ? "Published" : "Draft"}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-black">
      <div className="sticky top-0 z-40 glass-effect border-b border-border/20 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate("/admin/dashboard")} className="flex items-center gap-1.5 text-muted-foreground text-xs font-sans hover:text-gold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </button>
        <h1 className="font-serif text-lg gold-text">Blog Manager</h1>
        <button
          onClick={() => { setEditing(true); setEditId(null); setForm(emptyPost); }}
          className="flex items-center gap-1.5 gold-gradient px-4 py-2 rounded-full font-sans text-xs font-medium text-primary-foreground"
        >
          <Plus className="w-3.5 h-3.5" /> New
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
          <input
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border/30 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
          />
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 pb-4 flex gap-3">
        <div className="flex-1 bg-card rounded-xl border border-border/30 p-3 text-center">
          <p className="font-sans text-xl font-bold text-foreground">{posts.length}</p>
          <p className="font-sans text-[10px] text-muted-foreground">Total</p>
        </div>
        <div className="flex-1 bg-card rounded-xl border border-border/30 p-3 text-center">
          <p className="font-sans text-xl font-bold text-gold">{posts.filter((p) => p.published).length}</p>
          <p className="font-sans text-[10px] text-muted-foreground">Published</p>
        </div>
        <div className="flex-1 bg-card rounded-xl border border-border/30 p-3 text-center">
          <p className="font-sans text-xl font-bold text-muted-foreground">{posts.filter((p) => !p.published).length}</p>
          <p className="font-sans text-[10px] text-muted-foreground">Drafts</p>
        </div>
      </div>

      {/* Posts List */}
      <div className="px-4 pb-8">
        {loading ? (
          <div className="text-center py-10 text-muted-foreground text-sm">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-10">
            <FileText className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">No blog posts yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((post) => (
              <div key={post.id} className="bg-card rounded-2xl border border-border/30 overflow-hidden">
                <div className="flex">
                  {post.featured_image && (
                    <img src={post.featured_image} alt="" className="w-20 h-20 object-cover flex-shrink-0" />
                  )}
                  <div className="flex-1 p-3 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-sans text-sm font-medium text-foreground truncate">{post.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {post.category && (
                            <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold font-sans text-[10px]">{post.category}</span>
                          )}
                          <span className={`px-2 py-0.5 rounded-full font-sans text-[10px] ${post.published ? "bg-green-500/10 text-green-400" : "bg-muted/20 text-muted-foreground"}`}>
                            {post.published ? "Live" : "Draft"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex border-t border-border/20">
                  <button onClick={() => startEdit(post)} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-muted-foreground text-xs font-sans hover:text-gold hover:bg-gold/5 transition-colors">
                    <Edit className="w-3.5 h-3.5" /> Edit
                  </button>
                  <div className="w-px bg-border/20" />
                  <button onClick={() => togglePublish(post)} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-muted-foreground text-xs font-sans hover:text-gold hover:bg-gold/5 transition-colors">
                    {post.published ? <><EyeOff className="w-3.5 h-3.5" /> Unpublish</> : <><Eye className="w-3.5 h-3.5" /> Publish</>}
                  </button>
                  <div className="w-px bg-border/20" />
                  <button onClick={() => setDeleteId(post.id)} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-muted-foreground text-xs font-sans hover:text-destructive hover:bg-destructive/5 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-4" onClick={() => setDeleteId(null)}>
          <div className="bg-card rounded-2xl border border-border/30 w-full max-w-xs p-5 text-center animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3">
              <Trash2 className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-1">Delete Post?</h3>
            <p className="font-sans text-xs text-muted-foreground mb-5">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-full border border-border/50 font-sans text-sm text-muted-foreground hover:bg-muted/10 transition-colors">Cancel</button>
              <button onClick={() => handleDelete(deleteId)} className="flex-1 py-2.5 rounded-full bg-destructive font-sans text-sm text-destructive-foreground hover:bg-destructive/90 transition-colors">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogManager;
