import { Restaurant } from "@/data/types"
import londonRestaurantsData from "@/data/restaurants/uk/london.json"
import lahoreRestaurantsData from "@/data/restaurants/pakistan/lahore.json"

// Type assertion to ensure the imported JSON matches our Restaurant interface
export const londonRestaurants: Restaurant[] = londonRestaurantsData as Restaurant[]
export const lahoreRestaurants: Restaurant[] = lahoreRestaurantsData as Restaurant[]

// Map city slugs to restaurant data
export const restaurantData: Record<string, Restaurant[]> = {
  london: londonRestaurants,
  lahore: lahoreRestaurants,
  // Add more cities as we expand
}

export function getRestaurantsByCity(citySlug: string): Restaurant[] {
  return restaurantData[citySlug] || []
}

export function getAllRestaurants(): Restaurant[] {
  return Object.values(restaurantData).flat()
}