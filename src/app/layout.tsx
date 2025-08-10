import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Press Kit',
    default: 'UNANNOUNCED GAME'
  },
  description: 'UNANNOUNCED GAME',
  robots: {
    index: false,
    follow: false
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
<div className="h-screen flex items-center justify-center">
  <p className="text-4xl text-center">Coming soon</p>
</div>
      </body>
      <GoogleAnalytics gaId="G-GFP88W7X30" />
    </html>
  )
}
