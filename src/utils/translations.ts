/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { DEFAULT_LOCALE } from '@/constants/language'
import { SupportedLocale } from '@/types/language'

export type Translations = Record<string, any>

export function translateKey(key: string, translations: Translations): string {
  if (!translations || Object.keys(translations).length === 0) {
    return ''
  }

  // For flat structure, just look up the key directly
  if (key in translations) {
    const result = translations[key]
    return typeof result === 'string' ? result : key
  }

  // Handle nested keys (backward compatibility)
  const keys = key.split('.')
  let result: any = translations

  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k]
    } else {
      console.warn(`Missing translation for key: ${key}`)
      return key
    }
  }

  if (typeof result === 'string') {
    return result
  }

  console.warn(`Translation for key "${key}" is not a string.`)
  return key
}

const clientDictionaries = {
  'en-us': () => import('@/dictionaries/en-us.json').then((m) => m.default),
  'ja-jp': () => import('@/dictionaries/ja-jp.json').then((m) => m.default),
  'zh-hans': () => import('@/dictionaries/zh-hans.json').then((m) => m.default),
  'zh-hant': () => import('@/dictionaries/zh-hant.json').then((m) => m.default),
  'ko-kr': () => import('@/dictionaries/ko-kr.json').then((m) => m.default)
}

export async function loadTranslations(locale: SupportedLocale): Promise<Translations> {
  try {
    return await clientDictionaries[locale]()
  } catch (error) {
    console.error(`Error loading translations for ${locale}:`, error)

    // Fallback to English if not already English
    if (locale !== DEFAULT_LOCALE) {
      try {
        return await clientDictionaries[DEFAULT_LOCALE]()
      } catch (fallbackError) {
        console.error('Error loading English fallback locale:', fallbackError)
        return {}
      }
    }

    return {}
  }
}
