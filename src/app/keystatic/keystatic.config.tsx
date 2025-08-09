import { config } from '@keystatic/core'

import { storage } from './storage'

import { homepage } from './schema/homepage'
import { coachesPage } from './schema/coaches-page'
import { coaches } from './schema/coaches'

import { LogoMark } from './LogoMark'
import { services } from './schema/services'
import { contact } from './schema/contact'

export default config({
  storage,
  ui: {
    brand: {
      name: 'Star Schools',
      mark: LogoMark,
    },
  },
  singletons: {
    homepage,
    coachesPage,
    services,
    contact,
  },
  collections: {
    coaches,
  },
})
