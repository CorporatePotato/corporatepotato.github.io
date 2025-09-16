import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/constants/language'
import { supportedCountries, SupportedLocale } from '@/types/language'

export function detectBrowserLanguage(): SupportedLocale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const storedPreference = getStoredLanguagePreference()
  if (storedPreference && isStringSupportedLocale(storedPreference)) {
    return storedPreference as SupportedLocale
  }

  const languages = navigator.languages || [navigator.language]

  for (const lang of languages) {
    const normalizedLang = lang.toLowerCase()

    if (isStringSupportedLocale(normalizedLang)) {
      return normalizedLang as SupportedLocale
    }

    const commonMappings: Record<string, SupportedLocale> = {
      en: 'en-us',
      'en-gb': 'en-us',
      'en-au': 'en-us',
      ko: 'ko-kr',
      ja: 'ja-jp',
      'zh-cn': 'zh-hans',
      'zh-tw': 'zh-hant',
      'zh-hk': 'zh-hant'
    }

    if (commonMappings[normalizedLang]) {
      return commonMappings[normalizedLang]
    }

    const baseLang = normalizedLang.split('-')[0]
    if (commonMappings[baseLang]) {
      return commonMappings[baseLang]
    }

    if (normalizedLang.startsWith('zh')) {
      if (
        normalizedLang.includes('tw') ||
        normalizedLang.includes('hk') ||
        normalizedLang.includes('hant')
      ) {
        return 'zh-hant'
      } else if (
        normalizedLang.includes('cn') ||
        normalizedLang.includes('hans') ||
        normalizedLang === 'zh'
      ) {
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

export const storeLanguagePreference = (locale: SupportedLocale): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-locale', locale)
    sessionStorage.setItem('preferred-locale', locale)
  }
}

export const getStoredLanguagePreference = (): SupportedLocale | null => {
  if (typeof window === 'undefined') return null

  const stored =
    localStorage.getItem('preferred-locale') || sessionStorage.getItem('preferred-locale')

  return stored && isStringSupportedLocale(stored) ? (stored as SupportedLocale) : null
}
