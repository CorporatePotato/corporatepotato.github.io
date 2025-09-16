import { Metadata } from 'next'

import { AVAILABLE_LOCALES } from '@/constants/language'
import { generateProjectMetadata } from '@/lib/metadata'
import About from '@/sections/About'
import BannerImage from '@/sections/BannerImage'
import Contact from '@/sections/Contact'
import Description from '@/sections/Description'
import FactSheet from '@/sections/FactSheet'
import Features from '@/sections/Features'
import MediaKit from '@/sections/MediaKit'
import Trailer from '@/sections/Trailer'
import { SupportedLocale } from '@/types/language'

type Props = {
  params: Promise<{ locale: SupportedLocale }>
}

export function generateStaticParams() {
  return AVAILABLE_LOCALES.map((locale) => ({ locale: locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  return await generateProjectMetadata(locale)
}

export default async function Page({ params }: { params: Promise<{ locale: SupportedLocale }> }) {
  const { locale } = await params

  return (
    <main className="page" lang={locale}>
      <BannerImage />
      <Description />
      <Features />
      <Trailer />
      <FactSheet />
      <MediaKit />
      <Contact />
      <About />
    </main>
  )
}
