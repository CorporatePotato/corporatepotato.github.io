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
<div className="h-screen flex flex-col items-center justify-center">
                  <img
                alt="Corporate Potato logo"
                 src="/nextjs-github-pages/assets/CorporatePotato_Logo_Horizontal_White.png"
                className="block h-5 w-auto sm:h-4"
              />
  <p className="text-5xl text-center">Coming soon</p>
</div>
      </body>
      <GoogleAnalytics gaId="G-GFP88W7X30" />
    </html>
  )
}
