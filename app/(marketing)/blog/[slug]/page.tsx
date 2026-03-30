import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityClient, sanityConfigured } from "@/lib/sanity/client";
import { blogPostBySlugQuery } from "@/lib/sanity/queries";
import BlogPostView, { type BlogPost } from "@/views/marketing/BlogPostView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, toJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!sanityConfigured || !sanityClient) {
    return { title: "Blog" };
  }
  const post: BlogPost | null = await sanityClient.fetch(blogPostBySlugQuery, { slug: params.slug }, { cache: "no-store" });
  if (!post) return { title: "Post Not Found" };

  const description = (post.excerpt ?? "").slice(0, 160);
  return {
    title: `${post.title} | Luxury Interior Blog`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Luxury Interior Blog`,
      description,
      url: `/blog/${post.slug}`,
      type: "article",
      images: post.mainImageUrl ? [{ url: post.mainImageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Luxury Interior Blog`,
      description,
      images: post.mainImageUrl ? [post.mainImageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  if (!sanityConfigured || !sanityClient) notFound();

  const post: BlogPost | null = await sanityClient.fetch(blogPostBySlugQuery, { slug: params.slug }, { cache: "no-store" });
  if (!post) notFound();

  return (
    <>
      <SeoJsonLd
        id={`blog-breadcrumb-${post.slug}`}
        json={toJsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        )}
      />
      <SeoJsonLd
        id={`blog-posting-${post.slug}`}
        json={toJsonLd({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          author: {
            "@type": "Person",
            name: post.authorName ?? "Zikhra Interiors",
          },
          image: post.mainImageUrl ? [post.mainImageUrl] : undefined,
          description: post.excerpt ?? "",
          mainEntityOfPage: `https://zikhra.com/blog/${post.slug}`,
          publisher: {
            "@type": "Organization",
            name: "Zikhra Luxury Interiors",
          },
        })}
      />
      <BlogPostView post={post} />
    </>
  );
}

