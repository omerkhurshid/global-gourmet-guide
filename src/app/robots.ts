import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/*.json$'],
    },
    sitemap: 'https://restaurantsnearme.vercel.app/sitemap.xml',
    host: 'https://restaurantsnearme.vercel.app',
  }
}