import {defineArrayMember, defineField} from 'sanity'

export const pageFields = [
  defineField({
    name: 'title',
    type: 'string',
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'slug',
    type: 'slug',
    options: {
      source: 'title',
      maxLength: 96,
    },
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'pinned',
    type: 'boolean',
    initialValue: false,
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
    name: 'thumbnail',
    type: 'object',
    fields: [
      defineField({
        name: 'image',
        type: 'image',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'caption',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    ],
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'body',
    type: 'array',
    initialValue: () => [],
    of: [
      defineArrayMember({
        type: 'block',
        marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'Link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL',
                },
              ],
            },
          ],
        },
      }),
      defineArrayMember({type: 'image'}),
      defineArrayMember({
        type: 'object',
        name: 'code',
        fields: [
          defineField({
            name: 'code',
            type: 'text',
          }),
          defineField({
            name: 'lang',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
        ],
      }),
    ],
  }),
]
