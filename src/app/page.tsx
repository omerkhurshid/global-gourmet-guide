import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Utensils } from "lucide-react"
import { SearchBar } from "@/components/features/search-bar"
import { RestaurantCard } from "@/components/features/restaurant-card"
import { AdSenseAd } from "@/components/features/adsense"
import { Button } from "@/components/ui/button"
import { cities } from "@/data/cities"
import { generateCitySlug } from "@/lib/utils"
export default function Home() {
  // Organize cities by country
  const citiesByCountry = {
    "United States": cities.filter(city => city.country === "United States"),
    "United Kingdom": cities.filter(city => city.country === "United Kingdom"),
    "France": cities.filter(city => city.country === "France"),
    "Pakistan": cities.filter(city => city.country === "Pakistan"),
    "India": cities.filter(city => city.country === "India"),
  }

  return (
    <div className="bg-white">
      {/* Hero Image Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1500&auto=format&fit=crop"
              alt="Elegant restaurant table setting"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover the World's Best
            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Restaurants near you
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
            Find amazing dining experiences in top cities worldwide. From hidden gems to Michelin-starred establishments.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar placeholder="Search for restaurants, cities, or cuisines..." />
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 md:space-x-12 text-gray-700">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">70+</div>
              <div className="text-sm md:text-base font-medium">Premium Restaurants</div>
            </div>
            <div className="w-px h-16 bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">11</div>
              <div className="text-sm md:text-base font-medium">Global Cities</div>
            </div>
            <div className="w-px h-16 bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-sm md:text-base font-medium">Countries</div>
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
                          priority={city.name === "New York" || city.name === "London"}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          quality={85}
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