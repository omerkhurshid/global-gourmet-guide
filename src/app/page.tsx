import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Utensils } from "lucide-react"
import { SearchBar } from "@/components/features/search-bar"
import { RestaurantCard } from "@/components/features/restaurant-card"
import { AdSenseAd } from "@/components/features/adsense"
import { Button } from "@/components/ui/button"
import { cities } from "@/data/cities"
import { generateCitySlug } from "@/lib/utils"
import { londonRestaurants, lahoreRestaurants } from "@/lib/restaurants"

export default function Home() {
  // Organize cities by country
  const citiesByCountry = {
    "United States": cities.filter(city => city.country === "United States"),
    "United Kingdom": cities.filter(city => city.country === "United Kingdom"),
    "France": cities.filter(city => city.country === "France"),
    "Pakistan": cities.filter(city => city.country === "Pakistan"),
    "India": cities.filter(city => city.country === "India"),
  }
  
  const featuredRestaurants = [
    ...londonRestaurants.slice(0, 2),
    ...lahoreRestaurants.slice(0, 1)
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover the World&apos;s
            <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Best Restaurants
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find amazing dining experiences in top cities worldwide. From hidden gems to Michelin-starred establishments.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <SearchBar placeholder="Search cities or cuisines..." />
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-center space-x-6 md:space-x-8 text-gray-300 text-sm">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">160+</div>
              <div className="text-xs md:text-sm">Top Restaurants</div>
            </div>
            <div className="w-px h-12 bg-gray-600" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">8</div>
              <div className="text-xs md:text-sm">Major Cities</div>
            </div>
            <div className="w-px h-12 bg-gray-600" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">5</div>
              <div className="text-xs md:text-sm">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities by Country */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Cities by Country
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the best restaurants in top culinary destinations worldwide
            </p>
          </div>
          
          <div className="space-y-12">
            {Object.entries(citiesByCountry).map(([country, countryCities]) => (
              <div key={country} className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{country}</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {countryCities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/${generateCitySlug(city.name)}`}
                      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={city.heroImage}
                          alt={city.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="text-xl font-bold mb-1">{city.name}</h4>
                          <div className="flex items-center text-sm">
                            <Utensils className="w-3 h-3 mr-1" />
                            {city.totalRestaurants} Restaurants
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {city.description}
                        </p>
                        <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                          Explore Now
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertisement */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-sm text-gray-500">Advertisement</span>
          </div>
          <AdSenseAd 
            adSlot="1234567890" 
            className="mx-auto max-w-2xl"
          />
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Restaurants
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-picked dining experiences from our curated collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                variant="featured"
                priority
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Ready to explore more amazing restaurants?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/london">
                  Browse London Restaurants
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/lahore">
                  Discover Lahore Cuisine
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <MapPin className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Next Great Meal
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking for fine dining, street food, or something in between, 
            we'll help you discover the best restaurants near you.
          </p>
          <SearchBar 
            placeholder="Search restaurants worldwide..." 
            className="max-w-xl mx-auto"
          />
        </div>
      </section>
    </div>
  )
}