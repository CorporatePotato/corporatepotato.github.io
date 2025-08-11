import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Press Kit',
    default: 'Coming soon',
  },
  description: 'Coming soon',
  openGraph: {
    type: 'website',
    title: 'Corporate Potato',
    description: 'Coming soon',
    url: 'https://corporatepotato.com',
  },
  twitter: {
    card: 'summary_large_image', 
    site: '@CorporatePotato', 
    creator: '@CorporatePotato',
    title: 'Corporate Potato',
    description:
      'Coming soon',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>
) {
  return (
    <html lang="en">
      <body>
       

        <main>{children}</main>

      </body>
      <GoogleAnalytics gaId="G-GFP88W7X30" />
    </html>
  )
}
