import { collection, fields } from '@keystatic/core'

export const coaches = collection({
  label: 'Coaches',
  path: 'src/content/coaches/*',
  slugField: 'name',
  format: { contentField: 'bio' },
  schema: {
    name: fields.slug({ name: { label: 'Name' } }),
    role: fields.text({ label: 'Role' }),
    avatar: fields.image({
      label: 'Avatar',
      directory: 'public/images/coaches',
      publicPath: '/images/coaches/',
    }),
    shortIntro: fields.text({ label: 'Short Intro', multiline: true }),
    bio: fields.mdx({
      label: 'Bio',
      options: {
        image: false,
      },
    }),
    qualifications: fields.array(fields.text({ label: 'Qualification' }), {
      label: 'Qualifications',
      itemLabel: (props) => props.value,
    }),
    badges: fields.array(
      fields.object({
        image: fields.image({
          label: 'Badge',
          directory: 'public/images/coaches/badges',
          publicPath: '/images/coaches/badges/',
          validation: { isRequired: true },
        }),
        altText: fields.text({ label: 'Alt Text', validation: { isRequired: true } }),
      }),
      {
        label: 'Badges',
        itemLabel: (data) => data.fields.altText.value || 'Please add alt text!',
      }
    ),
  },
})
