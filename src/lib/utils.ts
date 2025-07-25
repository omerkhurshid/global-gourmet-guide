import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Restaurant } from "@/data/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(priceLevel: '$' | '$$' | '$$$'): string {
  return priceLevel
}

export function formatRating(rating: number): string {
  return rating.toFixed(1)
}

export function generateRestaurantSlug(restaurantName: string): string {
  return restaurantName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function generateCitySlug(cityName: string): string {
  return cityName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function formatAddress(address: Restaurant['address']): string {
  return `${address.street}, ${address.city}, ${address.country}`
}

export function getRestaurantsByCity(restaurants: Restaurant[], cityName: string): Restaurant[] {
  return restaurants.filter(restaurant => 
    restaurant.address.city.toLowerCase() === cityName.toLowerCase()
  )
}

export function sortRestaurantsByRating(restaurants: Restaurant[]): Restaurant[] {
  return [...restaurants].sort((a, b) => b.rating - a.rating)
}

export function filterRestaurantsByCuisine(restaurants: Restaurant[], cuisine: string): Restaurant[] {
  return restaurants.filter(restaurant =>
    restaurant.cuisine.some(c => c.toLowerCase().includes(cuisine.toLowerCase()))
  )
}

export function filterRestaurantsByPrice(restaurants: Restaurant[], priceLevel: string): Restaurant[] {
  return restaurants.filter(restaurant => restaurant.priceLevel === priceLevel)
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}