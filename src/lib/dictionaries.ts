import 'server-only'

import { SupportedLocale } from '@/types/language'

const dictionaries = {
  'en-us': () => import('@/dictionaries/en-us.json').then((m) => m.default),
  'ja-jp': () => import('@/dictionaries/ja-jp.json').then((m) => m.default),
  'zh-hans': () => import('@/dictionaries/zh-hans.json').then((m) => m.default),
  'zh-hant': () => import('@/dictionaries/zh-hant.json').then((m) => m.default)
}

export const getDictionary = async (locale: SupportedLocale) => dictionaries[locale]()
