import { Restaurant } from "@/data/types"
// UK restaurants
import londonRestaurantsData from "@/data/restaurants/uk/london.json"
import oxfordRestaurantsData from "@/data/restaurants/uk/oxford.json"
import cambridgeRestaurantsData from "@/data/restaurants/uk/cambridge.json"
import edinburghRestaurantsData from "@/data/restaurants/uk/edinburgh.json"
// Pakistani restaurants
import lahoreRestaurantsData from "@/data/restaurants/pakistan/lahore.json"
import karachiRestaurantsData from "@/data/restaurants/pakistan/karachi.json"
import faisalabadRestaurantsData from "@/data/restaurants/pakistan/faisalabad.json"
import peshawarRestaurantsData from "@/data/restaurants/pakistan/peshawar.json"
import gujranwalaRestaurantsData from "@/data/restaurants/pakistan/gujranwala.json"
// USA restaurants
import newYorkRestaurantsData from "@/data/restaurants/usa/new-york.json"
import losAngelesRestaurantsData from "@/data/restaurants/usa/los-angeles.json"
import chicagoRestaurantsData from "@/data/restaurants/usa/chicago.json"
import houstonRestaurantsData from "@/data/restaurants/usa/houston.json"
import sanFranciscoRestaurantsData from "@/data/restaurants/usa/san-francisco.json"
// France restaurants
import parisRestaurantsData from "@/data/restaurants/france/paris.json"
import niceRestaurantsData from "@/data/restaurants/france/nice.json"
import lyonRestaurantsData from "@/data/restaurants/france/lyon.json"
import strasbourgRestaurantsData from "@/data/restaurants/france/strasbourg.json"
// India restaurants
import delhiRestaurantsData from "@/data/restaurants/india/delhi.json"
import mumbaiRestaurantsData from "@/data/restaurants/india/mumbai.json"
import bangaloreRestaurantsData from "@/data/restaurants/india/bangalore.json"

// Type assertion to ensure the imported JSON matches our Restaurant interface
export const londonRestaurants: Restaurant[] = londonRestaurantsData as Restaurant[]
export const oxfordRestaurants: Restaurant[] = oxfordRestaurantsData as Restaurant[]
export const cambridgeRestaurants: Restaurant[] = cambridgeRestaurantsData as Restaurant[]
export const edinburghRestaurants: Restaurant[] = edinburghRestaurantsData as Restaurant[]
export const lahoreRestaurants: Restaurant[] = lahoreRestaurantsData as Restaurant[]
export const karachiRestaurants: Restaurant[] = karachiRestaurantsData as Restaurant[]
export const faisalabadRestaurants: Restaurant[] = faisalabadRestaurantsData as Restaurant[]
export const peshawarRestaurants: Restaurant[] = peshawarRestaurantsData as Restaurant[]
export const gujranwalaRestaurants: Restaurant[] = gujranwalaRestaurantsData as Restaurant[]
export const newYorkRestaurants: Restaurant[] = newYorkRestaurantsData as Restaurant[]
export const losAngelesRestaurants: Restaurant[] = losAngelesRestaurantsData as Restaurant[]
export const chicagoRestaurants: Restaurant[] = chicagoRestaurantsData as Restaurant[]
export const houstonRestaurants: Restaurant[] = houstonRestaurantsData as Restaurant[]
export const sanFranciscoRestaurants: Restaurant[] = sanFranciscoRestaurantsData as Restaurant[]
export const parisRestaurants: Restaurant[] = parisRestaurantsData as Restaurant[]
export const niceRestaurants: Restaurant[] = niceRestaurantsData as Restaurant[]
export const lyonRestaurants: Restaurant[] = lyonRestaurantsData as Restaurant[]
export const strasbourgRestaurants: Restaurant[] = strasbourgRestaurantsData as Restaurant[]
export const delhiRestaurants: Restaurant[] = delhiRestaurantsData as Restaurant[]
export const mumbaiRestaurants: Restaurant[] = mumbaiRestaurantsData as Restaurant[]
export const bangaloreRestaurants: Restaurant[] = bangaloreRestaurantsData as Restaurant[]

// Map city slugs to restaurant data
export const restaurantData: Record<string, Restaurant[]> = {
  london: londonRestaurants,
  oxford: oxfordRestaurants,
  cambridge: cambridgeRestaurants,
  edinburgh: edinburghRestaurants,
  lahore: lahoreRestaurants,
  karachi: karachiRestaurants,
  faisalabad: faisalabadRestaurants,
  peshawar: peshawarRestaurants,
  gujranwala: gujranwalaRestaurants,
  "new-york": newYorkRestaurants,
  "los-angeles": losAngelesRestaurants,
  chicago: chicagoRestaurants,
  houston: houstonRestaurants,
  "san-francisco": sanFranciscoRestaurants,
  paris: parisRestaurants,
  nice: niceRestaurants,
  lyon: lyonRestaurants,
  strasbourg: strasbourgRestaurants,
  delhi: delhiRestaurants,
  mumbai: mumbaiRestaurants,
  bangalore: bangaloreRestaurants,
}

export function getRestaurantsByCity(citySlug: string): Restaurant[] {
  return restaurantData[citySlug] || []
}

export function getAllRestaurants(): Restaurant[] {
  return Object.values(restaurantData).flat()
}