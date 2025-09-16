import classNames from 'classnames'
import { usePathname, useRouter } from 'next/navigation'
import { useRef } from 'react'

import { AVAILABLE_LOCALES, LANGUAGE_NAMES } from '@/constants/language'
import { usePageContext } from '@/context/page-context'
import { SupportedLocale } from '@/types/language'
import { getCurrentLocale, storeLanguagePreference } from '@/utils/language'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export const LanguageMenu = () => {
  const router = useRouter()
  const pathname = usePathname()

  const languageMenuCloseRef = useRef<(() => void) | null>(null)

  const { locale } = usePageContext()

  const changeLanguage = (newLocale: SupportedLocale) => {
    const currentLocale = getCurrentLocale(pathname)

    if (!currentLocale) {
      // eslint-disable-next-line no-console
      console.warn('No valid locale found in current path')
      return
    }

    if (currentLocale === newLocale) {
      return
    }

    storeLanguagePreference(newLocale)

    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <Menu className="h-full" as="div">
      {({ close }) => {
        languageMenuCloseRef.current = close

        return (
          <>
            {/* Button */}
            <MenuButton
              className="nav h-full w-auto min-w-28 items-end text-right focus:outline-none"
              aria-label="Current language"
            >
              {locale.toUpperCase()}
            </MenuButton>

            {/* Drop down */}
            <MenuItems anchor="top start" className="dropDown" modal={false}>
              {AVAILABLE_LOCALES.map((locale, i, arr) => (
                <MenuItem key={i}>
                  {() => (
                    <button
                      onClick={() => {
                        changeLanguage(locale)
                      }}
                      className={classNames('nav dropDownItem', {
                        '!border-0': i === arr.length - 1
                      })}
                    >
                      {LANGUAGE_NAMES[locale] || locale.toUpperCase()}
                    </button>
                  )}
                </MenuItem>
              ))}
              <MenuItem>
                <div className="dropDownMask" />
              </MenuItem>
            </MenuItems>
          </>
        )
      }}
    </Menu>
  )
}
