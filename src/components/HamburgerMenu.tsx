import classNames from 'classnames'
import { useRef } from 'react'

import { useDictionary } from '@/context/dictionary-context'
import { useIsMobile } from '@/hooks/useIsMobile'
import { handlePrefillClick, navigationItems } from '@/utils/navigation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export const HamburgerMenu = () => {
  const hamburgerMenuCloseRef = useRef<(() => void) | null>(null)

  const isMobile = useIsMobile()

  const dict = useDictionary()

  return (
    <Menu className="h-full lg:hidden" as="div">
      {({ open, close }) => {
        hamburgerMenuCloseRef.current = close

        return (
          <>
            <MenuButton className="nav hamburgerButton" aria-label="Hamburger menu button">
              {({ open }) => {
                const icon = open ? (
                  <XMarkIcon aria-hidden="true" className={`menu-icon block`} />
                ) : (
                  <Bars3Icon aria-hidden="true" className={`menu-icon block`} />
                )

                return icon
              }}
            </MenuButton>

            <MenuItems
              anchor="top start"
              className="dropDown"
              modal={isMobile && open ? true : false}
              transition
            >
              {navigationItems.map((item, i, arr) => {
                if (['nav_requestKey', 'nav_contact'].includes(item.key)) {
                  const reason = item.key === 'nav_requestKey' ? 'request-key' : 'contact'

                  return (
                    <MenuItem key={i}>
                      {({ close: itemClose }) => (
                        <button
                          className="nav dropDownItem w-full border-0 bg-transparent p-0 text-left"
                          onClick={() => {
                            itemClose()
                            setTimeout(() => {
                              handlePrefillClick(reason)
                            }, 100)
                          }}
                        >
                          {dict[item.key]}
                        </button>
                      )}
                    </MenuItem>
                  )
                }

                return (
                  <MenuItem key={i}>
                    {({ close: itemClose }) => (
                      <a
                        href={item.href}
                        className={classNames('nav dropDownItem', {
                          '!border-0': i === arr.length - 1
                        })}
                        onClick={() => itemClose()}
                      >
                        {dict[item.key]}
                      </a>
                    )}
                  </MenuItem>
                )
              })}
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
