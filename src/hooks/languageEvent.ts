import { SupportedLocale } from '@/types/language'

type LanguageListener = (locale: SupportedLocale) => void

class LanguageEvent {
  private listeners: LanguageListener[] = []

  addListener(listener: LanguageListener) {
    this.listeners.push(listener)
  }

  removeListener(listener: LanguageListener) {
    this.listeners = this.listeners.filter((l) => l !== listener)
  }

  dispatch(locale: SupportedLocale) {
    this.listeners.forEach((listener) => listener(locale))
  }
}

// Export singleton instance
export const languageEvent = new LanguageEvent()
