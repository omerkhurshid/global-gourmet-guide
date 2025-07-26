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
    <div className="bg-rose-50">
      {/* Header Line Section */}
      <section className="relative w-full bg-rose-50 py-8">
        <div className="flex justify-center">
          <div className="h-0.5 bg-rose-500" style={{width: '0.5cm'}}></div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Massive Typography Treatment */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none tracking-tight mb-4">
              RESTAURANTS
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-8 tracking-tight">
              NEAR YOU
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed uppercase tracking-wide">
              Curated dining experiences<br />
              in top cities worldwide
            </p>
          </div>
          
          {/* Clean Search Bar */}
          <div className="max-w-xl mx-auto mb-20">
            <div className="relative">
              <input
                type="text"
                placeholder="Search restaurants, cities, cuisines..."
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-none bg-white focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>
          
          {/* Minimal Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-black mb-2">70+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">RESTAURANTS</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-black mb-2">11</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">CITIES</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-black mb-2">5</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">COUNTRIES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities by Country */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              EXPLORE CITIES
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto uppercase tracking-wide">
              TOP CULINARY DESTINATIONS WORLDWIDE
            </p>
          </div>
          
          <div className="space-y-20">
            {Object.entries(citiesByCountry).map(([country, countryCities]) => (
              <div key={country} className="space-y-12">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-black text-black mb-8 uppercase tracking-wide">{country}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {countryCities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/${generateCitySlug(city.name)}`}
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 hover:border-black transition-colors duration-300">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={city.heroImage}
                            alt={city.name}
                            fill
                            className="object-cover"
                            priority={city.name === "New York" || city.name === "London"}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            quality={85}
                          />
                        </div>
                        
                        <div className="p-8">
                          <h4 className="text-xl font-black text-black mb-2 uppercase tracking-wide">{city.name}</h4>
                          <div className="text-sm text-gray-600 mb-4 uppercase tracking-wide">
                            {city.totalRestaurants} RESTAURANTS
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {city.description}
                          </p>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
          </div>
          <AdSenseAd 
            adSlot="1234567890" 
            className="mx-auto max-w-2xl"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tight">
            FIND YOUR<br />
            NEXT MEAL
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-16 uppercase tracking-wide leading-relaxed">
            FROM FINE DINING TO STREET FOOD<br />
            DISCOVER THE BEST RESTAURANTS NEAR YOU
          </p>
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search restaurants worldwide..."
              className="w-full px-6 py-4 text-lg bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-colors"
            />
          </div>
        </div>
      </section>
    </div>
  )
}