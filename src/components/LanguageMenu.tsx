import classNames from 'classnames'
import { useRef } from 'react'

import { AVAILABLE_LOCALES, LANGUAGE_NAMES } from '@/constants/language'
import { useTranslation } from '@/hooks/useTranslation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export const LanguageMenu = () => {
  const languageMenuCloseRef = useRef<(() => void) | null>(null)
  // TODO: FIX THIS
  const { locale, changeLanguage, loading } = useTranslation()

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
              disabled={loading}
            >
              {loading ? '...' : locale.toUpperCase()}
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
                      disabled={loading}
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
