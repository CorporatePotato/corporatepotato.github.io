'use client'

import Link from 'next/link'

import { HamburgerMenu } from '@/components/HamburgerMenu'
import { LanguageMenu } from '@/components/LanguageMenu'
import { useDictionary } from '@/context/dictionary-context'
import { handlePrefillClick, navigationItems } from '@/utils/navigation'

export default function Header() {
  const dict = useDictionary()

  return (
    <nav className="bg-darkGrey fixed top-0 right-0 left-0 z-50 border-b-4 border-black duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="header" style={{ height: 'var(--navbar-height)' }}>
          {/* Company logo */}
          <div className="mt-1 flex shrink-0 items-center">
            <Link href="/">
              <img
                alt="Corporate Potato logo"
                src="/assets/CorporatePotato_Logo_Horizontal_White.png"
                className="block h-auto w-42 sm:w-36"
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="space-x-10 lg:flex">
              {navigationItems.map((item) => {
                const label = dict[item.key]
                // Special keys trigger prefill + scroll
                if (['nav_requestKey', 'nav_contact'].includes(item.key)) {
                  const reason = item.key === 'nav_requestKey' ? 'request-key' : 'contact'

                  return (
                    <button
                      key={item.key}
                      onClick={() => handlePrefillClick(reason)}
                      className="nav hidden cursor-pointer border-0 bg-transparent p-0 lg:inline"
                    >
                      {label}
                    </button>
                  )
                }

                // Normal nav items
                return (
                  <a key={item.key} href={item.href} className="nav hidden lg:inline">
                    {label}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Language menu */}
          <LanguageMenu />

          {/* Hamburger */}
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  )
}
