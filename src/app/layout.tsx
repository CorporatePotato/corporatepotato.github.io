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
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon-32x32.png',
    apple: '/icons/apple-touch-icon.png'
  },
  robots: {
    index: true,
    follow: true
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
