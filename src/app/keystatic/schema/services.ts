import { fields, singleton } from '@keystatic/core'

export const services = singleton({
  label: 'Services',
  path: 'src/content/services',
  schema: {
    services: fields.array(
      fields.object({
        image: fields.image({
          label: 'Image',
          directory: 'public/images/homepage/services',
          publicPath: '/images/homepage/services/',
        }),
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
