'use client'

import { useEffect } from 'react'

import Button from './Button'

export default function ComponentError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2 className="text-opacity-10 mt-4 text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
        Something went wrong when loading the component.
      </h2>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        {error.digest}
      </p>
      <Button onClick={reset}>Try again!</Button>
    </div>
  )
}
