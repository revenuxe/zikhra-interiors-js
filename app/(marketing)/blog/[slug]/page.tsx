import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  sanityClient,
  sanityConfigured,
  sanityLiveFetchOptions,
  sanitySitemapFetchOptions,
  skipSanityDuringBuild,
} from "@/lib/sanity/client";
import { blogPostBySlugQuery, blogSitemapQuery } from "@/lib/sanity/queries";
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

export const dynamic = "force-dynamic";

type Props = { params: { slug: string } };
type BlogSlugItem = { slug: string };

export async function generateStaticParams() {
  if (skipSanityDuringBuild) return localBlogPosts.map((post) => ({ slug: post.slug }));
  if (!sanityConfigured || !sanityClient) return localBlogPosts.map((post) => ({ slug: post.slug }));
  const posts: BlogSlugItem[] = await sanityClient.fetch(blogSitemapQuery, {}, sanitySitemapFetchOptions);
  const slugs = new Set([...localBlogPosts.map((post) => post.slug), ...posts.map((post) => post.slug)]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const localPost = getLocalBlogPostBySlug(params.slug);
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

  if (!sanityConfigured || !sanityClient) {
    return { title: "Blog" };
  }
  const post: BlogPost | null = await sanityClient.fetch(
    blogPostBySlugQuery,
    { slug: params.slug },
    sanityLiveFetchOptions,
  );
  if (!post) return { title: "Post Not Found" };

  const description = (post.excerpt ?? "").slice(0, 160);
  const path = `/blog/${post.slug}`;
  const ogTitle = `${post.title} | Zikhra Interiors`;
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
      imageAlt: `${post.title} by Zikhra Interiors`,
    }),
    twitter: twitterSummaryLarge(ogTitle, description, shareImage),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const localPost = getLocalBlogPostBySlug(params.slug);
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

  if (!sanityConfigured || !sanityClient) notFound();

  const post: BlogPost | null = await sanityClient.fetch(
    blogPostBySlugQuery,
    { slug: params.slug },
    sanityLiveFetchOptions,
  );
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
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
          publisher: {
            "@type": "Organization",
            name: "Zikhra Interiors",
          },
        })}
      />
      <BlogPostView post={post} />
    </>
  );
}

