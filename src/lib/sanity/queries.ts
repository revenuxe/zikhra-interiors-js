import groq from "groq";

export const blogListQuery = groq`
*[_type == "post" && defined(coalesce(slug.current, slug))] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "slug": coalesce(slug.current, slug),
  excerpt,
  publishedAt,
  "mainImageUrl": mainImage.asset->url,
  "authorName": coalesce(author->name, "Zikhra Interiors")
}
`;

export const blogPostBySlugQuery = groq`
*[_type == "post" && (slug.current == $slug || slug == $slug)][0]{
  _id,
  title,
  "slug": coalesce(slug.current, slug),
  excerpt,
  publishedAt,
  "body": body[]{
    ...,
    _type == "image" => {
      _key,
      _type,
      alt,
      caption,
      crop,
      hotspot,
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    }
  },
  "mainImageUrl": mainImage.asset->url,
  "authorName": coalesce(author->name, "Zikhra Interiors"),
  "category": categories[0]->title
}
`;

export const blogSitemapQuery = groq`
*[_type == "post" && defined(coalesce(slug.current, slug))]{
  "slug": coalesce(slug.current, slug),
  _updatedAt
}
`;

