import { defineField, defineType } from "sanity";
import { body } from "./shared";

export const projectType = defineType({
  name: "project",
  title: "Project",
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
      name: "repository",
      type: "url",
    }),
    body,
  ],
});

export type Project = typeof projectType;
