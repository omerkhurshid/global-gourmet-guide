"use client"

import Link from "next/link"
import { MapPin, Star, Phone, ExternalLink } from "lucide-react"
import { Restaurant } from "@/data/types"
import { Button } from "@/components/ui/button"
import { formatPrice, formatRating, formatAddress, generateRestaurantSlug, generateCitySlug } from "@/lib/utils"

interface RestaurantCardProps {
  restaurant: Restaurant
  variant?: "default" | "featured" | "compact"
  priority?: boolean
}

export function RestaurantCard({ 
  restaurant, 
  variant = "default",
  priority = false 
}: RestaurantCardProps) {
  const restaurantSlug = generateRestaurantSlug(restaurant.name)
  const citySlug = generateCitySlug(restaurant.address.city)
  const restaurantUrl = `/${citySlug}/${restaurantSlug}`

  if (variant === "compact") {
    return (
      <div className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg group">
        <Link href={restaurantUrl} className="block p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex-shrink-0 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                <span className="text-xl">{restaurant.images.hero}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                  {restaurant.name}
                </h3>
                <p className="text-sm text-gray-600 truncate">{restaurant.cuisine.join(" • ")}</p>
                <p className="text-xs text-gray-500 mt-1 truncate">{formatAddress(restaurant.address)}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 ml-4">
              <div className="text-center">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900 ml-1">{formatRating(restaurant.rating)}</span>
                </div>
                <p className="text-xs text-gray-500">{restaurant.reviewCount} reviews</p>
              </div>
              
              <div className="text-center">
                <span className="text-lg font-bold text-gray-900">{formatPrice(restaurant.priceLevel)}</span>
                <p className="text-xs text-gray-500">Price</p>
              </div>
              
              <div className="flex items-center space-x-2">
                {restaurant.contact.phone && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={`tel:${restaurant.contact.phone}`} className="flex items-center">
                      <Phone className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {restaurant.contact.website && (
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={restaurant.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  if (variant === "featured") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
        <Link href={restaurantUrl}>
          <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-300">
            <div className="text-center">
              <span className="text-6xl mb-4 block">🍽️</span>
              <span className="text-lg font-semibold text-gray-700">{restaurant.name}</span>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-white/90 text-gray-900 px-2 py-1 rounded-full text-sm font-medium">
                {formatPrice(restaurant.priceLevel)}
              </span>
            </div>
          </div>
        </Link>
        
        <div className="p-6">
          <Link href={restaurantUrl}>
            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-gray-700 transition-colors">
              {restaurant.name}
            </h3>
          </Link>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {restaurant.description}
          </p>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-700 ml-1">
                {formatRating(restaurant.rating)} ({restaurant.reviewCount} reviews)
              </span>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="truncate">{formatAddress(restaurant.address)}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {restaurant.cuisine.map((cuisine) => (
              <span
                key={cuisine}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
              >
                {cuisine}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <Button variant="default" size="sm" asChild>
              <Link href={restaurantUrl}>
                View Details
              </Link>
            </Button>
            
            {restaurant.contact.website && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={restaurant.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Website
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden group">
      <Link href={restaurantUrl}>
        <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-300">
          <div className="text-center">
            <span className="text-5xl mb-2 block">🍽️</span>
            <span className="text-sm font-medium text-gray-600">{restaurant.cuisine[0]}</span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-white/90 text-gray-900 px-2 py-1 rounded-full text-sm font-medium">
              {formatPrice(restaurant.priceLevel)}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <Link href={restaurantUrl}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors">
            {restaurant.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {restaurant.description}
        </p>
        
        <div className="flex items-center space-x-4 mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-700 ml-1">
              {formatRating(restaurant.rating)}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            {restaurant.reviewCount} reviews
          </span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{formatAddress(restaurant.address)}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {restaurant.cuisine.slice(0, 3).map((cuisine) => (
            <span
              key={cuisine}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {cuisine}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <Button variant="default" size="sm" asChild>
            <Link href={restaurantUrl}>
              More Details
            </Link>
          </Button>
          
          {restaurant.contact.phone && (
            <Button variant="ghost" size="sm" asChild>
              <a href={`tel:${restaurant.contact.phone}`} className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                Call
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}