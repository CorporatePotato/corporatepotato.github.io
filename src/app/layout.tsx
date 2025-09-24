import './globals.css'

import { Metadata } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    template: '%s | Corporate Potato',
    default: 'Corporate Potato'
  },
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' ? 'https://corporatepotato.com' : 'http://localhost:3000'
  ),
  robots: {
    index: true,
    follow: true
  },
  verification: {
    yandex: '187c8a8c931ab005',
    other: {
      'msvalidate.01': '9CE7A484A0C6E356F9896173F72F08D4'
    }
  },
  category: 'Games'
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
