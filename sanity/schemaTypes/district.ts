import { defineField, defineType } from 'sanity'

export const districtType = defineType({
  name: 'district',
  title: 'District',
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
  ],
  preview: {
    select: {
      title: 'name',
      description: 'nepaliName',
    },
  },
})
