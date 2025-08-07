"use client"

import { useState, useEffect } from "react"
import { RestaurantCard } from "@/components/features/restaurant-card"
import { cities } from "@/data/cities"
import { generateCitySlug } from "@/lib/utils"
import { getRestaurantsByCity } from "@/lib/restaurants"
import { Restaurant } from "@/data/types"

interface SearchResultsProps {
  searchParams: { q?: string; city?: string; cuisine?: string }
}

export function SearchResults({ searchParams }: SearchResultsProps) {
  const [results, setResults] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const searchTerm = searchParams.q?.toLowerCase() || ""
    const cityFilter = searchParams.city?.toLowerCase()
    const cuisineFilter = searchParams.cuisine?.toLowerCase()

    // Get all restaurants
    const allRestaurants: Restaurant[] = []
    
    for (const city of cities) {
      const citySlug = generateCitySlug(city.name)
      const cityRestaurants = getRestaurantsByCity(citySlug)
      allRestaurants.push(...cityRestaurants)
    }

    // Filter restaurants
    let filtered = allRestaurants

    if (searchTerm) {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.description.toLowerCase().includes(searchTerm) ||
        restaurant.cuisine.some(c => c.toLowerCase().includes(searchTerm)) ||
        restaurant.address.city.toLowerCase().includes(searchTerm) ||
        restaurant.specialties?.some(s => s.toLowerCase().includes(searchTerm))
      )
    }

    if (cityFilter) {
      filtered = filtered.filter(restaurant =>
        restaurant.address.city.toLowerCase().includes(cityFilter)
      )
    }

    if (cuisineFilter) {
      filtered = filtered.filter(restaurant =>
        restaurant.cuisine.some(c => c.toLowerCase().includes(cuisineFilter))
      )
    }

    setResults(filtered)
    setLoading(false)
  }, [searchParams])

  if (loading) {
    return <div className="text-center py-8">Searching restaurants...</div>
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600 mb-4">No restaurants found</p>
        <p className="text-gray-500">Try adjusting your search terms</p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-lg mb-8" style={{color: '#8b6355'}}>
        Found {results.length} restaurant{results.length !== 1 ? 's' : ''}
      </p>
      
      <div className="space-y-6">
        {results.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            variant="compact"
          />
        ))}
      </div>
    </div>
  )
}