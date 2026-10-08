import { seoTitle } from "@/lib/seo";
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
    const ogTitle = `${localPost.title} | Zikhra Tours & Travels`;
    return {
      title: seoTitle(ogTitle),
      description,
      alternates: { canonical: path },
      openGraph: pageOpenGraph({
        title: ogTitle,
        description,
        path,
        type: "article",
        imageUrl: localPost.mainImageUrl,
        imageAlt: `${localPost.title} by Zikhra Tours & Travels`,
      }),
      twitter: twitterSummaryLarge(ogTitle, description, localPost.mainImageUrl),
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
            author: { "@type": "Organization", name: localPost.authorName ?? "Zikhra Tours & Travels" },
            description: localPost.excerpt ?? "",
            mainEntityOfPage: absoluteUrl(`/blog/${localPost.slug}`),
            image: absoluteUrl(localPost.mainImageUrl || DEFAULT_OG_IMAGE_PATH),
            publisher: { "@type": "Organization", "@id": absoluteUrl("/#organization"), name: "Zikhra Tours & Travels" },
          })}
        />
        <BlogPostView post={localPost} />
      </>
    );
  }

  notFound();
}

