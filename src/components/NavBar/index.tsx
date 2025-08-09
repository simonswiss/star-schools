'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { Logo } from '@/components/Logo'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <nav className="mx-auto flex max-w-7xl items-center p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex flex-1">
          <Logo className="h-12" />
        </div>
        <nav className="flex gap-8 items-center">
          <Link
            className={twMerge(
              'border-b-2 border-transparent text-sm font-semibold leading-6 text-gray-900',
              pathname?.startsWith('/coaches') && 'border-gray-900'
            )}
            href="/coaches"
          >
            Coaches
          </Link>
        </nav>
      </nav>
    </header>
  )
}
