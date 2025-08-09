import { singleton, fields } from '@keystatic/core'

export const homepage = singleton({
  label: 'Homepage',
  path: 'src/content/homepage',
  format: { contentField: 'introductionText' },
  schema: {
    introductionText: fields.mdx({
      label: 'Introduction Main Text',
    }),
  },
})
