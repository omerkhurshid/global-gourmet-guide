import { Restaurant } from "@/data/types"
// UK restaurants
import londonRestaurantsData from "@/data/restaurants/uk/london.json"
// Pakistani restaurants
import lahoreRestaurantsData from "@/data/restaurants/pakistan/lahore.json"
import karachiRestaurantsData from "@/data/restaurants/pakistan/karachi.json"
import faisalabadRestaurantsData from "@/data/restaurants/pakistan/faisalabad.json"
import peshawarRestaurantsData from "@/data/restaurants/pakistan/peshawar.json"
import gujranwalaRestaurantsData from "@/data/restaurants/pakistan/gujranwala.json"
// USA restaurants
import newYorkRestaurantsData from "@/data/restaurants/usa/new-york.json"
import losAngelesRestaurantsData from "@/data/restaurants/usa/los-angeles.json"
// France restaurants
import parisRestaurantsData from "@/data/restaurants/france/paris.json"

// Type assertion to ensure the imported JSON matches our Restaurant interface
export const londonRestaurants: Restaurant[] = londonRestaurantsData as Restaurant[]
export const lahoreRestaurants: Restaurant[] = lahoreRestaurantsData as Restaurant[]
export const karachiRestaurants: Restaurant[] = karachiRestaurantsData as Restaurant[]
export const faisalabadRestaurants: Restaurant[] = faisalabadRestaurantsData as Restaurant[]
export const peshawarRestaurants: Restaurant[] = peshawarRestaurantsData as Restaurant[]
export const gujranwalaRestaurants: Restaurant[] = gujranwalaRestaurantsData as Restaurant[]
export const newYorkRestaurants: Restaurant[] = newYorkRestaurantsData as Restaurant[]
export const losAngelesRestaurants: Restaurant[] = losAngelesRestaurantsData as Restaurant[]
export const parisRestaurants: Restaurant[] = parisRestaurantsData as Restaurant[]

// Map city slugs to restaurant data
export const restaurantData: Record<string, Restaurant[]> = {
  london: londonRestaurants,
  lahore: lahoreRestaurants,
  karachi: karachiRestaurants,
  faisalabad: faisalabadRestaurants,
  peshawar: peshawarRestaurants,
  gujranwala: gujranwalaRestaurants,
  "new-york": newYorkRestaurants,
  "los-angeles": losAngelesRestaurants,
  paris: parisRestaurants,
}

export function getRestaurantsByCity(citySlug: string): Restaurant[] {
  return restaurantData[citySlug] || []
}

export function getAllRestaurants(): Restaurant[] {
  return Object.values(restaurantData).flat()
}