'use client'

import { useEffect, useState } from 'react'

import { DEFAULT_LOCALE } from '@/constants/language'
import { SupportedLocale } from '@/types/language'
import { detectBrowserLanguage, isValidLanguage } from '@/utils/language'
import { loadTranslations, translateKey, Translations } from '@/utils/translations'

import { languageEvent } from './languageEvent'

/**
 * @deprecated Use useDictionary from dictionary-context instead
 */
export function useTranslation() {
  const [locale, setLocale] = useState<SupportedLocale>(DEFAULT_LOCALE)
  const [translations, setTranslations] = useState<Translations>({})
  const [loading, setLoading] = useState<boolean>(true)

  async function loadAndSetTranslations(locale: SupportedLocale) {
    setLoading(true)
    try {
      const data = await loadTranslations(locale)

      setLocale(locale)
      setTranslations(data)

      // Store preference in localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('preferredLanguage', locale)
      }

      // Dispatch global language change event to update all subscribers
      languageEvent.dispatch(locale)
    } catch (error) {
      console.error('Error in loadAndSetTranslations:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Determine initial language
    let initialLang: SupportedLocale = DEFAULT_LOCALE

    if (typeof localStorage !== 'undefined') {
      const preferredLang = localStorage.getItem('preferredLanguage') as SupportedLocale | null
      if (preferredLang && isValidLanguage(preferredLang)) {
        initialLang = preferredLang
      } else {
        initialLang = detectBrowserLanguage()
      }
    } else {
      initialLang = detectBrowserLanguage()
    }

    loadAndSetTranslations(initialLang)
  }, [])

  useEffect(() => {
    const onLanguageChange = (lang: SupportedLocale) => {
      // Avoid reloading if same language
      if (lang !== locale && isValidLanguage(lang)) {
        loadAndSetTranslations(lang)
      }
    }

    languageEvent.addListener(onLanguageChange)

    return () => {
      languageEvent.removeListener(onLanguageChange)
    }
  }, [locale])

  function changeLanguage(lang: SupportedLocale) {
    if (isValidLanguage(lang) && lang !== locale) {
      loadAndSetTranslations(lang)
    }
  }

  function t(key: string): string {
    return translateKey(key, translations)
  }

  return {
    t,
    locale,
    translations,
    changeLanguage,
    loading
  }
}
