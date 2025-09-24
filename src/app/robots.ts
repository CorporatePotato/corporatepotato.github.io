import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/'
      },
      { userAgent: 'GoogleBot', crawlDelay: 1 }
    ],
    sitemap: 'https://corporatepotato.com/sitemap.xml'
  }
}
