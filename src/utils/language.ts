// lib/languageConstants.ts

import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/constants/language'
import { SupportedLocale } from '@/types/language'

export function isValidLanguage(lang: SupportedLocale) {
  return AVAILABLE_LOCALES.includes(lang)
}

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
