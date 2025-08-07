import { MetadataRoute } from 'next'
import { cities } from '@/data/cities'
import { generateCitySlug, generateRestaurantSlug } from '@/lib/utils'
import { getRestaurantsByCity } from '@/lib/restaurants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://restaurantsnearme.tech'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // City pages
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/${generateCitySlug(city.name)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Individual restaurant pages
  const restaurantPages: MetadataRoute.Sitemap = []
  
  // Restaurant spotlight pages
  const spotlightPages: MetadataRoute.Sitemap = []
  
  for (const city of cities) {
    const citySlug = generateCitySlug(city.name)
    const restaurants = getRestaurantsByCity(citySlug)
    
    for (const restaurant of restaurants) {
      // Add individual restaurant page
      restaurantPages.push({
        url: `${baseUrl}/${citySlug}/${generateRestaurantSlug(restaurant.name)}`,
        lastModified: new Date(restaurant.lastUpdated || new Date().toISOString()),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
      
      // Add spotlight page if it exists
      if (restaurant.spotlight) {
        spotlightPages.push({
          url: `${baseUrl}/spotlight/${citySlug}/${generateRestaurantSlug(restaurant.name)}`,
          lastModified: new Date(restaurant.lastUpdated || new Date().toISOString()),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        })
      }
    }
  }

  return [...staticPages, ...cityPages, ...restaurantPages, ...spotlightPages]
}