import type { MetadataRoute } from 'next'

export const dynamic = 'force-static' // This makes it work with next export

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/'
      }
    ],
    sitemap: 'https://corporatepotato.com/sitemap.xml'
  }
}
