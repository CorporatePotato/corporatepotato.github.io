import './globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Corporate Potato',
    default: 'Corporate Potato'
  },
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' ? 'https://corporatepotato.com' : 'http://localhost:3000'
  ),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png'
  },
  // TODO: Set these values to true at launch
  robots: {
    index: false,
    follow: false
  },
  category: 'Games',
  // TODO: Create open graph object for corporate potato brand
  // TODO: Generate meta image for og with the name opengraph-image.jpg/.jpeg/.png/.gif
  // TODO: Create file called opengraph-image.alt with alt text for the image
  openGraph: {
    type: 'website',
    title: 'Corporate Potato',
    description: 'Generic description for Corporate Potato',
    url: 'https://corporatepotato.com',
    siteName: 'Corporate Potato'
  },
  // TODO: Generate meta image for twitter with the name twitter-image.jpg/.jpeg/.png/.gif
  // TODO: Create file called twitter-image.alt with alt text for the image
  twitter: {
    card: 'summary_large_image',
    site: '@CorporatePotato',
    creator: '@CorporatePotato',
    title: 'Corporate Potato',
    description: 'Generic description for Corporate Potato'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-GFP88W7X30" />
    </html>
  )
}
