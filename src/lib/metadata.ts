import { Metadata } from 'next'

import { SupportedLocale } from '@/types/language'

import { getDictionary } from './dictionaries'

export async function generateProjectMetadata(locale: SupportedLocale): Promise<Metadata> {
  const dict = await getDictionary(locale)

  const titleDefault = dict.metadata_titleDefault || 'Well Keeper'
  const titleFallback = `${titleDefault} - Corporate Potato`
  const imageAltFallback = 'Well Keeper key art and logo'
  const description =
    dict.metadata_description ||
    dict.description ||
    "Well Keeper is a Shoot 'Em Up / Bullet Hell game where you move by flapping. Battle waves of enemies, upgrade unique and unexpected abilities and become immensely powerful."

  const ogTitle = dict.metadata_ogTitle || titleFallback
  const ogDescription = dict.metadata_ogDescription || description

  const twitterTitle = dict.metadata_twitterTitle || titleFallback
  const twitterDescription = dict.metadata_twitterDescription || description
  const imageAlt = dict.metadata_images_alt || imageAltFallback

  return {
    title: titleDefault,
    description,
    applicationName: 'Well Keeper',
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
          alt: imageAlt
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
          alt: imageAlt
        }
      ]
    }
  }
}
