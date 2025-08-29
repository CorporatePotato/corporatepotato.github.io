import { AVAILABLE_LOCALES } from '@/constants/language'
import About from '@/sections/About'
import BannerImage from '@/sections/BannerImage'
import Contact from '@/sections/Contact'
import Description from '@/sections/Description'
import FactSheet from '@/sections/FactSheet'
import Features from '@/sections/Features'
import MediaKit from '@/sections/MediaKit'
import Trailer from '@/sections/Trailer'
import { SupportedLocale } from '@/types/language'

export function generateStaticParams() {
  return AVAILABLE_LOCALES.map((locale) => ({ locale: locale }))
}

export default async function Page({ params }: { params: Promise<{ locale: SupportedLocale }> }) {
  const { locale } = await params

  return (
    <main className="page" lang={locale}>
      <BannerImage />
      <Description />
      <Features locale={locale} />
      <Trailer locale={locale} />
      <FactSheet />
      <MediaKit />
      <Contact />
      <About />
    </main>
  )
}
