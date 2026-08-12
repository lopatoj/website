import { defineArrayMember, defineField } from "sanity";

/**
 * Body text for blog posts and project descriptions.
 */
export const body = defineField({
  name: "body",
  type: "array",
  initialValue: () => [],
  of: [
    defineArrayMember({
      type: "block",
      marks: {
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({ type: "image" }),
    defineArrayMember({
      type: "object",
      name: "code",
      fields: [
        defineField({
          name: "code",
          type: "text",
        }),
        defineField({
          name: "lang",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
});
