import groq from "groq";

export const blogListQuery = groq`
*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "mainImageUrl": mainImage.asset->url,
  "authorName": coalesce(author->name, "Zikhra Interiors")
}
`;

export const blogPostBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  body,
  "mainImageUrl": mainImage.asset->url,
  "authorName": coalesce(author->name, "Zikhra Interiors"),
  "category": categories[0]->title
}
`;

export const blogSitemapQuery = groq`
*[_type == "post" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}
`;

