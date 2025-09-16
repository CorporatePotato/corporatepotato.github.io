'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { detectBrowserLanguage, storeLanguagePreference } from '@/utils/language'

export default function StartPageClient() {
  const router = useRouter()

  useEffect(() => {
    const preferredLocale = detectBrowserLanguage()

    storeLanguagePreference(preferredLocale)

    router.replace(`/${preferredLocale}/well-keeper`)
  }, [router])

  return (
    <>
      <main className="page">
        <div className="flex h-screen flex-col items-center justify-center">
          <Image
            alt="Corporate Potato logo"
            src="/assets/CorporatePotato_Logo_Horizontal_White.png"
            className="block h-12 w-auto sm:h-8"
            width={300}
            height={60}
          />
        </div>
      </main>
    </>
  )
}
