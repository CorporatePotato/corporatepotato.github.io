'use client'
import { Inter } from 'next/font/google'

import Button from '@/components/Button'

// Error boundaries must be Client Components

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <main>
          <h1 className="text-opacity-10 mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Something went wrong!
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {error.digest}
          </p>
          <Button onClick={reset}>Request key</Button>
        </main>
      </body>
    </html>
  )
}
