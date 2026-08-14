import { defineField, defineType } from "sanity";

export const experienceTypes = ["work", "activity"] as const;

export type ExperienceType = (typeof experienceTypes)[number];

export const experience = defineType({
  name: "experience",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      type: "string",
      validation: (rule) =>
        rule.custom((value) =>
          value && experienceTypes.includes(value as ExperienceType)
            ? true
            : { message: `One of: ${experienceTypes.join(", ")}` },
        ),
    }),
    defineField({
      name: "company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "current",
      type: "boolean",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "bullets",
      type: "array",
      of: [
        defineField({
          name: "bullet",
          type: "string",
        }),
      ],
    }),
  ],
});
