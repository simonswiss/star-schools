import { reader } from '@/app/keystatic/reader'
import { MdxRenderer } from '@/components/MdxRenderer'
import Image from 'next/image'

import Link from 'next/link'

export default async function ServicesPage() {
  const [homepageData, servicesData, contactData] = await Promise.all([
    reader.singletons.homepage.read({ resolveLinkedFiles: true }),
    reader.singletons.services.read({ resolveLinkedFiles: true }),
    reader.singletons.contact.read(),
  ])

  // Bomb if any of the data is missing
  if (!homepageData) throw new Error('Missing homepage data')
  if (!servicesData) throw new Error('Missing services data')

  return (
    <>
      <div className="bg-white mt-24 sm:mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16">
          {homepageData.image && (
            <Image
              src={homepageData.image}
              alt="Star Athletics"
              width={1000}
              height={1000}
              className="w-full max-w-lg mx-auto lg:max-w-none h-full object-cover rounded-xl"
            />
          )}
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none">
              <div className="prose">
                <MdxRenderer content={homepageData.introductionText} />
              </div>
            </div>

            <div className="mt-10 flex items-center gap-x-6">
              {contactData?.contactForm && (
                <Link
                  target="_blank"
                  href={contactData.contactForm}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contact us
                </Link>
              )}
              <Link href="/coaches" className="text-sm/6 font-semibold text-gray-900">
                Meet the coaches <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="mt-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our Services
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2">
            {servicesData.services.map((service) => (
              <div key={service.service} className="flex flex-col">
                <div className="relative aspect-video mb-4">
                  <Image
                    src={service.image ? service.image : '/images/seo-image.png'}
                    alt={service.service}
                    fill
                    className="absolute inset-0 w-full h-full object-cover rounded-md ring-1 ring-black/10"
                  />
                </div>

                <dt className="mt-4 font-semibold text-gray-900 text-xl">{service.service}</dt>
                <dd className="mt-4 lg:mt-4 text-base/7 text-gray-600 prose">
                  <MdxRenderer content={service.content} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}
