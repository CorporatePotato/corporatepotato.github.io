type CountryInfo = {
  locale: string
  language: string
  countryName: string
  countryCode: string
  threeLetterCode: string
}

export const supportedCountries = [
  {
    locale: 'en-us',
    language: 'English',
    countryName: 'United States',
    countryCode: 'us',
    threeLetterCode: 'USA'
  },
  {
    locale: 'ja-jp',
    language: '日本語',
    countryName: '日本',
    countryCode: 'jp',
    threeLetterCode: 'JPN'
  },
  {
    locale: 'zh-hans',
    language: '简体中文',
    countryName: '中国',
    countryCode: 'cn',
    threeLetterCode: 'CHN'
  },
  {
    locale: 'zh-hant',
    language: '繁體中文',
    countryName: '台灣',
    countryCode: 'tw',
    threeLetterCode: 'TWN'
  },
  {
    locale: 'ko-kr',
    language: '한국어',
    countryName: '대한민국',
    countryCode: 'kr',
    threeLetterCode: 'KOR'
  }
] as const satisfies readonly CountryInfo[]

export type SupportedLocale = (typeof supportedCountries)[number]['locale']
export type SupportedCountryCode = (typeof supportedCountries)[number]['countryCode']
