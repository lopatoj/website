import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'number',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required(),
    }),
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
      name: 'images',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({
            name: "image",
            type: "image",
            validation: (rule) => rule.required()
          }),
          defineField({
            name: "caption",
            type: "text",
            validation: (rule) => rule.required()
          })
        ]
      })],
      validation: (rule) => rule.required().min(1)
    }),
    defineField({
      name: 'body',
      type: 'array',
      initialValue: () => [],
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})

export type Project = typeof projectType;