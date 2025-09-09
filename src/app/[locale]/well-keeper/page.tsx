import { Metadata } from 'next'

import { AVAILABLE_LOCALES } from '@/constants/language'
import { getDictionary } from '@/lib/dictionaries'
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

  const dict = await getDictionary(locale)

  const titleDefault = dict.metadata_titleDefault || 'Coming soon'
  const titleFallback = `${titleDefault} - Corporate Potato`
  const description =
    dict.metadata_description ||
    dict.description ||
    "Coming soon"

  const ogTitle = dict.metadata_ogTitle || titleFallback
  const ogDescription = dict.metadata_ogDescription || description

  const twitterTitle = dict.metadata_twitterTitle || titleFallback
  const twitterDescription = dict.metadata_twitterDescription || description

  return {
    title: titleDefault,
    description,
    applicationName: 'Coming soon',
    openGraph: {
      // TODO: Maybe change this value?
      type: 'website',
      siteName: 'Corporate Potato',
      title: ogTitle,
      description: ogDescription,
      // TODO: Maybe remove this line?
      url: `/${locale}/well-keeper`,
      // url: 'https://corporatepotato.com',
      images: [
        {
          url: `/assets/meta/og/og-${locale}.png`,
          width: 1200,
          height: 630,
          // TODO: Maybe add this to the dictionary? Also it should describe the image not the game
          alt: 'Coming soon'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@CorporatePotato',
      creator: '@CorporatePotato',
      title: twitterTitle,
      description: twitterDescription,
      images: [
        {
          url: `/assets/meta/twitter/twitter-${locale}.png`,
          // TODO: Maybe add this to the dictionary? Also it should describe the image not the game
          alt: 'Coming soon'
        }
      ]
    }
  }
}

export default async function Page({ params }: { params: Promise<{ locale: SupportedLocale }> }) {
  const { locale } = await params

  return (
    <main className="page" lang={locale}>
 <div className="h-128 flex flex-col items-center justify-center">
          <p className="text-5xl text-center">Coming soon</p>
        </div>
    </main>
  )
}
