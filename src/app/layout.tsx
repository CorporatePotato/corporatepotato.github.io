import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Image from 'next/image'
import 'http://corporatepotato.github.io/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Press Kit',
    default: 'UNANNOUNCED GAME',
  },
  description: 'UNANNOUNCED GAME',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function RootLayout() {
  return (
    <html lang="en">
      <body>
        <div className="h-screen flex flex-col items-center justify-center">
          <Image
            alt="Corporate Potato logo"
            src="http://corporatepotato.github.io/assets/CorporatePotato_Logo_Horizontal_White.png"
            className="block h-5 w-auto sm:h-4"
            width={300} // adjust to your image's real width
            height={60} // adjust to your image's real height
          />
          <p className="text-5xl text-center">Coming soon</p>
        </div>
      </body>
      <GoogleAnalytics gaId="G-GFP88W7X30" />
    </html>
  )
}
