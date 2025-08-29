import { supportedCountries, SupportedLocale } from '@/types/language'

export const AVAILABLE_LOCALES = supportedCountries.map((c) => c.locale)
export const AVAILABLE_COUNTRY_CODES = supportedCountries.map((c) => c.countryCode)
export const AVAILABLE_LANGUAGES = supportedCountries.map((c) => c.language)

export const LANGUAGE_NAMES: Record<SupportedLocale, string> = Object.fromEntries(
  supportedCountries.map((c) => [c.locale, c.language])
) as Record<SupportedLocale, string>

export const DEFAULT_LOCALE = 'en-us'
