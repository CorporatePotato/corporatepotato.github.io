import Link from 'next/link'

import { supportedCountries } from '@/types/language'

export default function NotFound() {
  return (
    <div className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="p1">404</p>
        <h1>Page not found</h1>
        <p className="p1">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-x-6 gap-y-4">
          <h2>Choose your language</h2>
          <div className="flex flex-col gap-4 text-lg">
            {supportedCountries.map((country, key) => (
              <Link href={`/${country.locale}/wellkeeper`} key={key}>
                {country.language}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
