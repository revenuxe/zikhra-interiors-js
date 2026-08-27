import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalBlogPostBySlug, localBlogPosts } from "@/lib/local-blog-posts";
import BlogPostView, { type BlogPost } from "@/views/marketing/BlogPostView";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  absoluteUrl,
  breadcrumbSchema,
  DEFAULT_OG_IMAGE_PATH,
  pageOpenGraph,
  toJsonLd,
  twitterSummaryLarge,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return localBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const localPost = getLocalBlogPostBySlug(slug);
  if (localPost) {
    const description = (localPost.excerpt ?? "").slice(0, 160);
    const path = `/blog/${localPost.slug}`;
    const ogTitle = `${localPost.title} | Zikhra Interiors`;
    return {
      title: ogTitle,
      description,
      alternates: { canonical: path },
      openGraph: pageOpenGraph({
        title: ogTitle,
        description,
        path,
        type: "article",
        imageAlt: `${localPost.title} by Zikhra Interiors`,
      }),
      twitter: twitterSummaryLarge(ogTitle, description),
    };
  }

  return { title: "Post Not Found" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const localPost = getLocalBlogPostBySlug(slug);
  if (localPost) {
    return (
      <>
        <SeoJsonLd
          id={`blog-breadcrumb-${localPost.slug}`}
          json={toJsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: localPost.title, path: `/blog/${localPost.slug}` },
            ]),
          )}
        />
        <SeoJsonLd
          id={`blog-posting-${localPost.slug}`}
          json={toJsonLd({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: localPost.title,
            datePublished: localPost.publishedAt,
            dateModified: localPost.publishedAt,
            author: { "@type": "Person", name: localPost.authorName ?? "Zikhra Interiors" },
            description: localPost.excerpt ?? "",
            mainEntityOfPage: absoluteUrl(`/blog/${localPost.slug}`),
            publisher: { "@type": "Organization", name: "Zikhra Interiors" },
          })}
        />
        <BlogPostView post={localPost} />
      </>
    );
  }

  notFound();
}

