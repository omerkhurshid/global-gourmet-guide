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
      <section className="py-14" style={{backgroundColor: '#b07968'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Massive Typography Treatment */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight mb-4 px-2">
              RESTAURANTS
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight px-2">
              NEAR YOU
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed uppercase tracking-wide px-4">
              Curated dining experiences<br />
              in top cities worldwide
            </p>
          </div>
          
          {/* Search functionality */}
          <div className="max-w-xl mx-auto mb-14">
            <SearchBar 
              placeholder="Search cities or countries..."
              className="w-full"
            />
          </div>
          
          {/* Minimal Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">178</div>
              <div className="text-sm text-white opacity-80 uppercase tracking-wide">RESTAURANTS</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">15</div>
              <div className="text-sm text-white opacity-80 uppercase tracking-wide">CITIES</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">5</div>
              <div className="text-sm text-white opacity-80 uppercase tracking-wide">COUNTRIES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad after Hero */}
      <section className="py-4 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
          </div>
          <AdSenseAd 
            adSlot="4780708832" 
            adFormat="auto"
            fullWidthResponsive={true}
            className="mx-auto"
          />
        </div>
      </section>

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
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {countryCities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/${generateCitySlug(city.name)}`}
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 hover:border-[#b07968] transition-colors duration-300 overflow-hidden">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={city.heroImage}
                            alt={city.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            priority={city.name === "New York" || city.name === "London"}
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                            quality={85}
                          />
                          <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 text-xs font-bold uppercase tracking-wide" style={{color: '#b07968'}}>
                            {city.totalRestaurants}
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h4 className="text-sm font-black uppercase tracking-wide text-center" style={{color: '#8b6355'}}>{city.name}</h4>
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

      {/* Advertisement - Mid Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
          </div>
          <AdSenseAd 
            adSlot="2819377018" 
            adFormat="auto"
            fullWidthResponsive={true}
            className="mx-auto max-w-2xl"
          />
        </div>
      </section>

      {/* Ad before CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
          </div>
          <AdSenseAd 
            adSlot="5968284538" 
            adFormat="auto"
            fullWidthResponsive={true}
            className="mx-auto"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-white" style={{backgroundColor: '#8b6355'}}>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tight">
            DISCOVER<br />
            AMAZING FOOD
          </h2>
          <p className="text-lg text-white opacity-90 max-w-xl mx-auto uppercase tracking-wide leading-relaxed">
            FROM FINE DINING TO STREET FOOD<br />
            EXPLORE THE BEST RESTAURANTS WORLDWIDE
          </p>
        </div>
      </section>
    </div>
  )
}