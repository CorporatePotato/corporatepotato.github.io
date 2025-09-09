'use client'

import { useDictionary } from '@/context/dictionary-context'

export const navigation = {
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/corporatepotato.gamedev/',
      icon: ({ className }: { className?: string }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          className={className}
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
            ></path>
            <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" d="m17.5 6.51l.01-.011"></path>
          </g>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@corporatepotato.gamedev',
      icon: ({ className }: { className?: string }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          className={className}
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"></path>
            <path d="M10 12a3 3 0 1 0 3 3V6c.333 1 1.6 3 4 3"></path>
          </g>
        </svg>
      )
    },
    {
      name: 'Reddit',
      href: 'https://www.reddit.com/user/CorporatePotato/',
      icon: ({ className }: { className?: string }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width="1em"
          height="1em"
          className={className}
        >
          <path
            fill="currentColor"
            d="M246 104a30 30 0 0 0-50.64-21.76C178 72.75 157 67.17 135.05 66.18l5.89-35.35l21.16 3.26a22 22 0 1 0 2.17-11.81l-27.36-4.21a6 6 0 0 0-6.83 4.93l-7.18 43.09c-22.64.74-44.41 6.38-62.26 16.15a30 30 0 1 0-40 44.66A57 57 0 0 0 18 144c0 21.26 11.74 41.09 33.05 55.84C71.68 214.13 99 222 128 222s56.32-7.87 76.95-22.16C226.26 185.09 238 165.26 238 144a57 57 0 0 0-2.63-17.1A30.16 30.16 0 0 0 246 104m-62-82a10 10 0 1 1-10 10a10 10 0 0 1 10-10m41.15 97.51a6 6 0 0 0-2.46 7.51A45.7 45.7 0 0 1 226 144c0 36.39-44 66-98 66s-98-29.61-98-66a45.6 45.6 0 0 1 3.3-16.94a6 6 0 0 0-2.45-7.55a18 18 0 1 1 23.71-26.1a6 6 0 0 0 7.79 1.7a4 4 0 0 0 .34-.2C80.7 84 103.89 78 128 78c24.1 0 47.28 6 65.29 16.9l.16.11a6 6 0 0 0 8-1.6a18 18 0 1 1 23.71 26.1Zm-59.85 53.68a6 6 0 0 1-2.49 8.11a74.22 74.22 0 0 1-69.62 0a6 6 0 0 1 5.62-10.6a62.2 62.2 0 0 0 58.38 0a6 6 0 0 1 8.11 2.49M88 142a14 14 0 1 1 14-14a14 14 0 0 1-14 14m94-14a14 14 0 1 1-14-14a14 14 0 0 1 14 14"
          ></path>
        </svg>
      )
    }
  ]
}

export default function Footer() {
  const dict = useDictionary()

  return (
    <footer>
      <div data-section="footer" className="mx-auto max-w-2xl overflow-hidden">
        <div className="text-lightGrey p3 flex w-full justify-center">
          <div className="flex flex-col items-start gap-x-14 gap-y-4 sm:flex-row sm:items-center">
            {navigation.social.slice(0, 3).map((item) => {
              const isExternal = /^https?:\/\//.test(item.href)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="footerLink flex flex-row items-center gap-x-2"
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  <item.icon className="size-8" aria-hidden="true" />
                  <span>
                    {dict.socialMedia_names[item.name as keyof typeof dict.socialMedia_names]}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
        <div className="text-lightGrey">
          <p className="mt-10 text-center text-sm/6">{dict.footer_disclaimer}</p>
          <p className="mt-10 text-center text-sm/6">
            &copy; 2025 Corporate Potato. {dict.footer_rights || 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
