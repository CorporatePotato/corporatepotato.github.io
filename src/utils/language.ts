import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/constants/language'
import { supportedCountries, SupportedLocale } from '@/types/language'

export function detectBrowserLanguage(): SupportedLocale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE

  const languages = (navigator.languages || [navigator.language]) as SupportedLocale[]

  for (const lang of languages) {
    // Check exact match first
    if (isValidLanguage(lang)) {
      return lang
    }

    // Check base language (e.g., 'zh' from 'zh-CN')
    const baseLang = lang.split('-')[0] as SupportedLocale
    if (isValidLanguage(baseLang)) {
      return baseLang
    }

    // Handle Chinese variants specifically
    if (lang.startsWith('zh')) {
      if (lang.includes('tw') || lang.includes('HK') || lang.includes('Hant')) {
        return 'zh-hant'
      } else if (lang.includes('CN') || lang.includes('Hans')) {
        return 'zh-hans'
      }
    }
  }

  return DEFAULT_LOCALE
}

export function isValidLanguage(locale: SupportedLocale) {
  return AVAILABLE_LOCALES.includes(locale)
}

export const isStringSupportedLocale = (locale: string): locale is SupportedLocale => {
  return supportedCountries.some((country) => country.locale === locale)
}

export const getCurrentLocale = (pathname: string): SupportedLocale | null => {
  const potentialLocale = pathname.split('/')[1]
  return AVAILABLE_LOCALES.includes(potentialLocale as SupportedLocale)
    ? (potentialLocale as SupportedLocale)
    : null
}
