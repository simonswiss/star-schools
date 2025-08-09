import { MetadataRoute } from 'next'

import { reader } from './keystatic/reader'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const coaches = await reader.collections.coaches.list()
  const coachesUrls = coaches.map((coach) => ({
    url: `https://www.star-schools.com.au/coaches/${coach}`,
    lastModified: new Date(),
  }))

  return [
    // Homepage
    { url: 'https://www.star-schools.com.au', lastModified: new Date() },
    // Coaches
    { url: 'https://www.star-athletics.com.au/coaches', lastModified: new Date() },
    ...coachesUrls,
  ]
}
