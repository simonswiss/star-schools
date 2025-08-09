import { fields, singleton } from '@keystatic/core'

export const contact = singleton({
  label: 'Contact',
  path: 'src/content/contact',
  schema: {
    contactForm: fields.url({
      label: 'Contact Form URL',
      description: 'Use the Google Form URL here.',
    }),
  },
})
