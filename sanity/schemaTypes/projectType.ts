import {defineType} from 'sanity'
import {pageFields} from './pageFields'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: pageFields,
})

export type Project = typeof projectType
