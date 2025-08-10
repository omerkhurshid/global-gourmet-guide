import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Restaurants Near Me - Global Dining Guide',
    short_name: 'Restaurants Near Me',
    description: 'Find the best restaurants near you in 18 cities worldwide. Your ultimate restaurant finder and dining guide.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#000000',
    categories: ['food', 'travel', 'lifestyle'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    screenshots: [
      {
        src: '/images/screenshot-wide.jpg',
        sizes: '1280x720',
        type: 'image/jpeg',
        form_factor: 'wide',
        label: 'Restaurants Near Me - City Selection'
      },
      {
        src: '/images/screenshot-narrow.jpg',
        sizes: '640x1136',
        type: 'image/jpeg',
        form_factor: 'narrow',
        label: 'Restaurants Near Me - Mobile View'
      }
    ],
    lang: 'en',
    scope: '/',
    orientation: 'portrait-primary',
    prefer_related_applications: false,
  }
}