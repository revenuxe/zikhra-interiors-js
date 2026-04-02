import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityClient, sanityConfigured } from "@/lib/sanity/client";
import { blogPostBySlugQuery, blogSitemapQuery } from "@/lib/sanity/queries";
import BlogPostView, { type BlogPost } from "@/views/marketing/BlogPostView";
import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbSchema, DEFAULT_OG_IMAGE_PATH, pageOpenGraph, toJsonLd, twitterSummaryLarge } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 3600;

type Props = { params: { slug: string } };
type BlogSlugItem = { slug: string };

export async function generateStaticParams() {
  if (!sanityConfigured || !sanityClient) return [];
  const posts: BlogSlugItem[] = await sanityClient.fetch(blogSitemapQuery);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!sanityConfigured || !sanityClient) {
    return { title: "Blog" };
  }
  const post: BlogPost | null = await sanityClient.fetch(blogPostBySlugQuery, { slug: params.slug });
  if (!post) return { title: "Post Not Found" };

  const description = (post.excerpt ?? "").slice(0, 160);
  const path = `/blog/${post.slug}`;
  const ogTitle = `${post.title} | Luxury Interior Blog`;
  const shareImage = post.mainImageUrl ?? DEFAULT_OG_IMAGE_PATH;
  return {
    title: ogTitle,
    description,
    alternates: { canonical: path },
    openGraph: pageOpenGraph({
      title: ogTitle,
      description,
      path,
      type: "article",
      imageUrl: shareImage,
      imageAlt: `${post.title} — interior design insight luxury homes Hyderabad`,
    }),
    twitter: twitterSummaryLarge(ogTitle, description, shareImage),
  };
}

export default async function BlogPostPage({ params }: Props) {
  if (!sanityConfigured || !sanityClient) notFound();

  const post: BlogPost | null = await sanityClient.fetch(blogPostBySlugQuery, { slug: params.slug });
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

