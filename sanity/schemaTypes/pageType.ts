import { defineArrayMember, defineField, defineType } from 'sanity'

export const pageEnum = ['project', 'etc'];

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: pageEnum
      },
      initialValue: 'project',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'number',
    //   type: 'number',
    //   readOnly: true,
    //   initialValue: (_, context) => context.getClient({ apiVersion: "2025-01-07" }).fetch("count(*[_type == 'project'])"),
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      type: 'object',
      fields: [
        defineField({
          name: "image",
          type: "image",
          validation: (rule) => rule.required()
        }),
        defineField({
          name: "caption",
          type: "string",
          validation: (rule) => rule.required()
        })
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      initialValue: () => [],
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({ type: 'image' })
      ],
    }),
  ],
})

export type Page = typeof pageType;