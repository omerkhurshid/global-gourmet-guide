import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Utensils } from "lucide-react"
import { SearchBar } from "@/components/features/search-bar"
import { RestaurantCard } from "@/components/features/restaurant-card"
import { AdSenseAd } from "@/components/features/adsense"
import { Button } from "@/components/ui/button"
import { cities } from "@/data/cities"
import { generateCitySlug } from "@/lib/utils"

// Updated: Force deployment with terracotta color scheme
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
    <div style={{backgroundColor: '#b07968'}}>
      {/* Clean divider line */}
      <div className="w-full h-px bg-white opacity-30"></div>

      {/* Hero Content Section */}
      <section className="py-20" style={{backgroundColor: '#b07968'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Massive Typography Treatment */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight mb-4">
              RESTAURANTS
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">
              NEAR YOU
            </h2>
            <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed uppercase tracking-wide">
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
                className="w-full px-6 py-4 text-lg border border-white rounded-none bg-white focus:outline-none focus:border-gray-300 transition-colors"
              />
            </div>
          </div>
          
          {/* Minimal Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">70+</div>
              <div className="text-sm text-white opacity-80 uppercase tracking-wide">RESTAURANTS</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">11</div>
              <div className="text-sm text-white opacity-80 uppercase tracking-wide">CITIES</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">5</div>
              <div className="text-sm text-white opacity-80 uppercase tracking-wide">COUNTRIES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section - About Our Service */}
      <section className="py-24" style={{backgroundColor: '#b07968'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Typography */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight uppercase tracking-wide">
                RESTAURANT<br />
                DISCOVERY
              </h2>
              <p className="text-lg text-white opacity-90 leading-relaxed mb-8">
                We curate the finest dining experiences across major cities, from Michelin-starred establishments to hidden local gems. Each restaurant is carefully selected based on quality, atmosphere, and exceptional culinary offerings.
              </p>
              <p className="text-lg text-white opacity-90 leading-relaxed">
                Whether you're seeking fine dining for special occasions or authentic local cuisine for everyday meals, our platform connects you with the perfect dining experience in your city.
              </p>
            </div>
            
            {/* Right side - Featured content */}
            <div className="bg-white/10 backdrop-blur-sm p-12 border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-6">🍽️</div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide">
                  Premium Curation
                </h3>
                <p className="text-white opacity-90 leading-relaxed">
                  Every restaurant on our platform is hand-picked by our team of food experts and local insiders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean divider line */}
      <div className="w-full h-px bg-white opacity-30"></div>

      {/* Cities by Country */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              EXPLORE CITIES
            </h2>
            <div className="w-24 h-px mx-auto mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
            <p className="text-lg max-w-xl mx-auto uppercase tracking-wide" style={{color: '#8b6355'}}>
              TOP CULINARY DESTINATIONS WORLDWIDE
            </p>
          </div>
          
          <div className="space-y-20">
            {Object.entries(citiesByCountry).map(([country, countryCities]) => (
              <div key={country} className="space-y-12">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-wide" style={{color: '#8b6355'}}>{country}</h3>
                  <div className="w-16 h-px mx-auto mb-8" style={{backgroundColor: '#e6d1c9'}}></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {countryCities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/${generateCitySlug(city.name)}`}
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 hover:border-[#b07968] transition-colors duration-300">
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
                          <h4 className="text-xl font-black mb-2 uppercase tracking-wide" style={{color: '#8b6355'}}>{city.name}</h4>
                          <div className="text-sm mb-4 uppercase tracking-wide" style={{color: '#b07968'}}>
                            {city.totalRestaurants} RESTAURANTS
                          </div>
                          <p className="text-sm leading-relaxed line-clamp-3" style={{color: '#8b6355'}}>
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
      <section className="py-32 text-white" style={{backgroundColor: '#8b6355'}}>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tight">
            FIND YOUR<br />
            NEXT MEAL
          </h2>
          <p className="text-lg text-white opacity-90 max-w-xl mx-auto mb-16 uppercase tracking-wide leading-relaxed">
            FROM FINE DINING TO STREET FOOD<br />
            DISCOVER THE BEST RESTAURANTS NEAR YOU
          </p>
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search restaurants worldwide..."
              className="w-full px-6 py-4 text-lg bg-transparent border border-white text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-opacity-70 transition-colors"
            />
          </div>
        </div>
      </section>
    </div>
  )
}