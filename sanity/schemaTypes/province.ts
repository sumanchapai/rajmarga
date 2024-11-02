import { defineField, defineType } from 'sanity'

export const provinceType = defineType({
  name: 'province',
  title: 'Province',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().min(1).max(80),
    }),
    defineField({
      name: 'nepaliName',
      description: 'नेपालीमा राख्नुहोला',
      type: 'string',
      validation: (rule) => rule.required().min(1).max(80),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'districts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'district' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      description: 'nepaliName',
    },
  },
})
