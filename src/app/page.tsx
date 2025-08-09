import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Utensils } from "lucide-react"
import { cities } from "@/data/cities"
import { generateCitySlug } from "@/lib/utils"
import { AdSenseAd, SearchBar } from "@/components/performance/client-components"

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
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F5'}}>
      {/* Clean divider line */}
      <div className="w-full h-px bg-black"></div>

      {/* Hero Content Section */}
      <section className="py-20" style={{backgroundColor: '#FAF8F5'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Massive Typography Treatment */}
          <div className="text-center mb-12">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black leading-none tracking-tighter mb-4 px-2" style={{letterSpacing: '-0.04em'}}>
              RESTAURANTS
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-8 tracking-tighter px-2" style={{letterSpacing: '-0.03em'}}>
              NEAR YOU
            </h2>
            <p className="text-sm sm:text-base text-black max-w-2xl mx-auto mb-16 leading-relaxed tracking-wide px-4" style={{letterSpacing: '0.08em'}}>
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
              <div className="text-4xl md:text-5xl font-black text-black mb-2">160</div>
              <div className="text-xs text-black uppercase" style={{letterSpacing: '0.15em'}}>RESTAURANTS</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">18</div>
              <div className="text-xs text-black uppercase" style={{letterSpacing: '0.15em'}}>CITIES</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">5</div>
              <div className="text-xs text-black uppercase" style={{letterSpacing: '0.15em'}}>COUNTRIES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad after Hero */}
      <section className="py-2 sm:py-4" style={{backgroundColor: '#F5F3F0'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2 sm:mb-4">
            <span className="text-xs text-gray-400" style={{letterSpacing: '0.08em'}}>ADVERTISEMENT</span>
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
      <section className="py-24" style={{backgroundColor: '#FAF8F5'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-black mb-6" style={{letterSpacing: '-0.03em'}}>
              EXPLORE CITIES
            </h2>
            <div className="w-24 h-px mx-auto mb-6 bg-black"></div>
            <p className="text-sm max-w-xl mx-auto" style={{letterSpacing: '0.08em'}}>
              TOP CULINARY DESTINATIONS WORLDWIDE
            </p>
          </div>
          
          <div className="space-y-20">
            {Object.entries(citiesByCountry).map(([country, countryCities]) => (
              <div key={country} className="space-y-12">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-black" style={{letterSpacing: '0.08em'}}>{country.toUpperCase()}</h3>
                  <div className="w-16 h-px mx-auto mb-8 bg-black opacity-30"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {countryCities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/${generateCitySlug(city.name)}`}
                      className="group"
                    >
                      <div className="bg-white border border-black hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={city.heroImage}
                            alt={city.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            priority={city.name === "New York" || city.name === "London"}
                            loading={city.name === "New York" || city.name === "London" ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                            quality={75}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                          />
                          <div className="absolute top-2 right-2 bg-white px-2 py-1 text-xs font-bold text-black" style={{letterSpacing: '0.08em'}}>
                            {city.totalRestaurants}
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h4 className="text-sm font-black text-center text-black" style={{letterSpacing: '0.1em'}}>{city.name.toUpperCase()}</h4>
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
      <section className="py-8 sm:py-12" style={{backgroundColor: '#F5F3F0'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs text-gray-400" style={{letterSpacing: '0.08em'}}>ADVERTISEMENT</span>
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
      <section className="py-8 sm:py-12" style={{backgroundColor: '#FAF8F5'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-xs text-gray-400" style={{letterSpacing: '0.08em'}}>ADVERTISEMENT</span>
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
      <section className="py-32 text-black" style={{backgroundColor: '#FAF8F5'}}>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none" style={{letterSpacing: '-0.03em'}}>
            DISCOVER<br />
            AMAZING FOOD
          </h2>
          <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{letterSpacing: '0.08em'}}>
            FROM FINE DINING TO STREET FOOD<br />
            EXPLORE THE BEST RESTAURANTS WORLDWIDE
          </p>
        </div>
      </section>
    </div>
  )
}