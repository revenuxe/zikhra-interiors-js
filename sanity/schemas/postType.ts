import {defineArrayMember, defineField, defineType} from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(5),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {source: "title", maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {hotspot: true},
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{type: "author"}],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{type: "category"}],
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({type: "block"}),
        defineArrayMember({type: "image", options: {hotspot: true}}),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const {title, media, publishedAt} = selection;
      return {
        title,
        subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString() : "Draft",
        media,
      };
    },
  },
});
