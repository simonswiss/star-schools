import { singleton, fields } from '@keystatic/core'

export const homepage = singleton({
  label: 'Homepage',
  path: 'src/content/homepage',
  format: { contentField: 'introductionText' },
  schema: {
    introductionText: fields.mdx({
      label: 'Introduction Main Text',
    }),
    services: fields.array(
      fields.object({
        service: fields.text({ label: 'Service' }),
        content: fields.mdx.inline({ label: 'Content' }),
      }),
      {
        label: 'Service',
        itemLabel: (data) => data.fields.service.value,
      }
    ),
  },
})
