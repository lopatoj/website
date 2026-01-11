import {defineType} from 'sanity'
import {pageFields} from './pageFields'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: pageFields,
})

export type Blog = typeof blogType
