import { Metadata } from 'next'

import { DEFAULT_LOCALE } from '@/constants/language'
import { SupportedLocale } from '@/types/language'

import { getServerTranslation } from './serverTranslations'

export function generateMetadata(locale: SupportedLocale = DEFAULT_LOCALE): Metadata {
  // Get translations with fallbacks to the hardcoded values
  const titleDefault = getServerTranslation('metadata_titleDefault', locale) || 'GameName'
  const titleTemplate = getServerTranslation('metadata_titleTemplate', locale) || 'Press Kit'
  const description =
    getServerTranslation('metadata_description', locale) ||
    getServerTranslation('description', locale) ||
    "GameName is a game."

  const ogTitle =
    getServerTranslation('metadata_ogTitle', locale) || `${titleDefault} - Corporate Potato`
  const ogDescription = getServerTranslation('metadata_ogDescription', locale) || description

  const twitterTitle =
    getServerTranslation('metadata_twitterTitle', locale) || `${titleDefault} - Corporate Potato`
  const twitterDescription =
    getServerTranslation('metadata_twitterDescription', locale) || description

  const metaData: Metadata = {
    title: {
      template: `%s | ${titleTemplate}`,
      default: titleDefault
    },
    description
  }

  metaData.openGraph = {
    type: 'website',
    title: ogTitle,
    description: ogDescription,
    url: 'https://corporatepotato.com',
    siteName: 'Corporate Potato',
    images: [
      {
        url: 'https://corporatepotato.com/metaAssets/GameName_OpenGraphImage.jpg',
        width: 1200,
        height: 630,
        alt: 'GameName - a game'
      }
    ],
    locale
  }

  metaData.twitter = {
    card: 'summary_large_image',
    site: '@CorporatePotato',
    creator: '@CorporatePotato',
    title: twitterTitle,
    description: twitterDescription,
    // TODO: This might not be needed if we use the built in nextjs meta file name
    images: ['/metaAssets/GameName_OpenGraphImage.jpg']
  }

  metaData.alternates = {
    languages: {
      en: '/en-US',
      ja: '/JP',
      'zh-Hant': '/zh-Hant',
      'zh-Hans': '/zh-Hans',
      // Add more languages as needed
      'x-default': '/en' // Default language
    }
  }

  metaData.icons = {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png'
  }

  metaData.robots = {
    index: false, // Set to true at launch
    follow: false, // Set to true at launch
  }

  // TODO: Maybe add this? t.metadata_titleDefault in the old file
  //   metaData.applicationName = ''
  metaData.category = 'Games'

  return metaData
}
