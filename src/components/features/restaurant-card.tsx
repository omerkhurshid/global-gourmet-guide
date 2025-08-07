"use client"

import Link from "next/link"
import { MapPin, Star, Phone, ExternalLink, FileText } from "lucide-react"
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
      <div className={`bg-white transition-all duration-300 group shadow-sm hover:shadow-md ${
        restaurant.spotlight 
          ? "border-2 border-[#b07968] shadow-lg shadow-[#b07968]/20 hover:shadow-xl hover:shadow-[#b07968]/30" 
          : "border border-gray-200 hover:border-[#b07968]"
      }`}>
        <div className="p-8">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-wide group-hover:text-[#8b6355] transition-colors" style={{color: '#8b6355'}}>
                  {restaurant.name}
                </h3>
                <div className="text-sm mb-3 uppercase tracking-wide" style={{color: '#b07968'}}>
                  {restaurant.cuisine.slice(0, 2).join(" • ")}
                  {restaurant.cuisine.length > 2 && " • MORE"}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl mb-2">{restaurant.images.hero}</div>
              </div>
            </div>
            
            {/* Rating and Features */}
            <div className="flex items-center justify-between text-sm mb-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-black mr-2" style={{color: '#8b6355'}}>{formatRating(restaurant.rating)}</span>
                  <span className="text-gray-500">({restaurant.reviewCount})</span>
                </div>
                <span className="font-black uppercase tracking-wide" style={{color: '#b07968'}}>{formatPrice(restaurant.priceLevel)}</span>
              </div>
            </div>

            {/* Features/Recognition */}
            {restaurant.features && restaurant.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {restaurant.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-full"
                    style={{backgroundColor: '#f3e8e4', color: '#8b6355'}}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <p className="text-sm leading-relaxed mb-3" style={{color: '#8b6355'}}>
              {restaurant.description}
            </p>
            {restaurant.reviewSummary && (
              <div className="border-l-4 pl-4 mb-4" style={{borderColor: '#e6d1c9'}}>
                <p className="text-sm leading-relaxed italic" style={{color: '#b07968'}}>
                  {restaurant.reviewSummary}
                </p>
              </div>
            )}
          </div>

          {/* Specialties */}
          {restaurant.specialties && restaurant.specialties.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-black uppercase tracking-wide mb-2" style={{color: '#8b6355'}}>
                Signature Dishes
              </h4>
              <div className="flex flex-wrap gap-2">
                {restaurant.specialties.slice(0, 3).map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full border"
                    style={{borderColor: '#e6d1c9', color: '#8b6355'}}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Spotlight Call-to-Action */}
          {restaurant.spotlight && (
            <div className="mb-6">
              <Link 
                href={`/spotlight/${citySlug}/${restaurantSlug}`}
                className="block w-full text-center py-3 px-4 rounded-lg font-black uppercase tracking-wide text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                style={{backgroundColor: '#b07968', color: 'white'}}
              >
                <FileText className="w-4 h-4 mr-2 inline" />
                Read Full Spotlight Review
              </Link>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t" style={{borderColor: '#f3e8e4'}}>
            <div className="flex items-center text-sm" style={{color: '#b07968'}}>
              <MapPin className="w-4 h-4 mr-1" />
              <span className="uppercase tracking-wide">
                {formatAddress(restaurant.address)}
              </span>
            </div>
            <Link 
              href={restaurantUrl}
              className="text-sm font-medium hover:underline"
              style={{color: '#8b6355'}}
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "featured") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
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
        
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {restaurant.name}
            </h3>
          
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
      
      <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {restaurant.name}
          </h3>
        
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