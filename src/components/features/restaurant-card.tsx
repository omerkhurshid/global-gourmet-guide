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
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden border border-gray-100">
        <Link href={restaurantUrl} className="block">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 flex-shrink-0 flex items-center justify-center group-hover:from-orange-100 group-hover:to-orange-200 transition-colors">
                  <span className="text-2xl">{restaurant.images.hero}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{restaurant.cuisine.join(" • ")}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold text-gray-800">{formatRating(restaurant.rating)}</span>
                      <span className="text-sm text-gray-500 ml-1">({restaurant.reviewCount})</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-orange-600">{formatPrice(restaurant.priceLevel)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {restaurant.reviewSummary && (
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-700 italic">"{restaurant.reviewSummary}"</p>
              </div>
            )}
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="truncate">{formatAddress(restaurant.address)}</span>
              </div>
              <div className="flex items-center space-x-2 ml-4">
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
          
          {restaurant.reviewSummary && (
            <p className="text-gray-700 text-sm mb-3 italic border-l-4 border-blue-200 pl-3">
              "{restaurant.reviewSummary}"
            </p>
          )}
          
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
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden border border-gray-100">
      <Link href={restaurantUrl}>
        <div className="relative h-56 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300">
          <div className="text-center">
            <span className="text-6xl mb-3 block">{restaurant.images.hero}</span>
            <span className="text-sm font-medium text-gray-700 bg-white/80 px-3 py-1 rounded-full">
              {restaurant.cuisine[0]}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-white/95 text-orange-600 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
              {formatPrice(restaurant.priceLevel)}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link href={restaurantUrl}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {restaurant.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {restaurant.description}
        </p>
        
        {restaurant.reviewSummary && (
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <p className="text-sm text-gray-700 italic">"{restaurant.reviewSummary}"</p>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            <span className="text-sm font-semibold text-gray-800">
              {formatRating(restaurant.rating)}
            </span>
            <span className="text-sm text-gray-500 ml-1">({restaurant.reviewCount})</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="truncate max-w-32">{restaurant.address.city}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {restaurant.cuisine.slice(0, 3).map((cuisine) => (
            <span
              key={cuisine}
              className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {cuisine}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <Button variant="default" size="sm" asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href={restaurantUrl}>
              View Details
            </Link>
          </Button>
          
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
    </div>
  )
}