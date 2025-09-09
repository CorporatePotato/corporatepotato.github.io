'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/constants/language'
import { SupportedLocale } from '@/types/language'

export default function StartPage() {
  const router = useRouter()

  useEffect(() => {
    const preferredLocale = (navigator.language.toLowerCase() as SupportedLocale) || DEFAULT_LOCALE

    const locale = AVAILABLE_LOCALES.includes(preferredLocale) ? preferredLocale : DEFAULT_LOCALE

    router.replace(`/${locale}/well-keeper`)
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
