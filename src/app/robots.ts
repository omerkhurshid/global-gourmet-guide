import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/*.json$'],
    },
    sitemap: 'https://global-gourmet-guide.vercel.app/sitemap.xml',
    host: 'https://global-gourmet-guide.vercel.app',
  }
}