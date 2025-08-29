// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

import ClientTitleUpdater from '@/components/ClientTitleUpdater'
import { DEFAULT_LOCALE } from '@/constants/language'
import { generateMetadata as generateLocalizedMetadata } from '@/utils/metadata'
import { GoogleAnalytics } from '@next/third-parties/google'

// Generate metadata with default locale (English)
// For GitHub Pages, we'll use English as default and let client-side handle localization
// export const metadata: Metadata = generateLocalizedMetadata(DEFAULT_LOCALE)

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-GFP88W7X30" />
    </html>
  )
}
