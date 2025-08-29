// lib/serverTranslations.ts
import fs from 'fs'
import path from 'path'

import { DEFAULT_LOCALE } from '@/constants/language'
import { SupportedLocale } from '@/types/language'

import { isValidLanguage } from './language'
import { translateKey, Translations } from './translations'

export function getServerTranslations(locale: SupportedLocale = DEFAULT_LOCALE): Translations {
  try {
    // Ensure the locale is valid
    const validLocale: SupportedLocale = isValidLanguage(locale) ? locale : DEFAULT_LOCALE

    // Read the translation file from the public/locales directory
    const filePath = path.join(process.cwd(), 'public', 'locales', `${validLocale}.json`)

    if (!fs.existsSync(filePath)) {
      console.error(`Translation file does not exist: ${filePath}`)
      return {}
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const translations = JSON.parse(fileContents)

    return translations
  } catch (error) {
    console.error(`Error loading translations for ${locale}:`, error)

    // Fallback to English if available
    if (locale !== DEFAULT_LOCALE) {
      try {
        const fallbackPath = path.join(process.cwd(), 'public', 'locales', 'en-us.json')
        const fallbackContents = fs.readFileSync(fallbackPath, 'utf8')
        return JSON.parse(fallbackContents)
      } catch (fallbackError) {
        console.error('Error loading fallback translations:', fallbackError)
      }
    }

    return {}
  }
}

export function getServerTranslation(
  key: string,
  locale: SupportedLocale = DEFAULT_LOCALE
): string {
  const translations = getServerTranslations(locale)
  return translateKey(key, translations)
}
