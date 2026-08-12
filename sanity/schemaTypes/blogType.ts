import { defineField, defineType } from "sanity";
import { body } from "./shared";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pinned",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      type: "object",
      fields: [
        defineField({
          name: "image",
          type: "image",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "caption",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    body,
  ],
});

export type Blog = typeof blogType;
