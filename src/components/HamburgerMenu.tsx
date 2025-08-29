import classNames from 'classnames'
import { useRef } from 'react'

import { useDictionary } from '@/context/dictionary-context'
import { handlePrefillClick, navigationItems } from '@/utils/navigation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export const HamburgerMenu = () => {
  const hamburgerMenuCloseRef = useRef<(() => void) | null>(null)

  const dict = useDictionary()

  return (
    <Menu className="h-full lg:hidden" as="div">
      {({ open, close }) => {
        hamburgerMenuCloseRef.current = close

        return (
          <>
            {/* Button */}
            <MenuButton className="nav hamburgerButton">
              {({ open }) => {
                const icon = open ? (
                  <XMarkIcon aria-hidden="true" className={`menu-icon block`} />
                ) : (
                  <Bars3Icon aria-hidden="true" className={`menu-icon block`} />
                )

                return icon
              }}
            </MenuButton>

            {/* Drop down */}
            <MenuItems anchor="top start" className="dropDown" modal={false}>
              {navigationItems.map((item, i, arr) => {
                if (['nav_requestKey', 'nav_contact'].includes(item.key)) {
                  const reason = item.key === 'nav_requestKey' ? 'request-key' : 'contact'

                  return (
                    <MenuItem key={i}>
                      {({ close: itemClose }) => (
                        <button
                          className="nav dropDownItem w-full border-0 bg-transparent p-0 text-left"
                          onClick={() => {
                            handlePrefillClick(reason)
                            itemClose()
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
