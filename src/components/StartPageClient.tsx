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
    <main className="page">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="relative mb-60 aspect-[400/160] w-1/2 md:w-[200px]">
          <Image
            alt="Corporate Potato logo"
            src="/assets/CorporatePotato_Logo_Horizontal_White.png"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </main>
  )
}
