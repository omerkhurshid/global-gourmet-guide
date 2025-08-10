import Link from "next/link"
import Image from "next/image"
import { generateCitySlug } from "@/lib/utils"
import { City } from "@/data/types"
import styles from "@/app/HomePage.module.css"

interface CityGridProps {
  citiesByCountry: Record<string, City[]>
}

export function CityGrid({ citiesByCountry }: CityGridProps) {
  return (
    <div className="space-y-20">
      {Object.entries(citiesByCountry).map(([country, countryCities]) => (
        <div key={country} className="space-y-12">
          <div className="text-center">
            <h3 className={`text-2xl md:text-3xl font-black mb-4 text-black ${styles.countryTitle}`}>
              {country.toUpperCase()}
            </h3>
            <div className="w-16 h-px mx-auto mb-8 bg-black opacity-30"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
                      alt={`Best restaurants in ${city.name} - Discover top dining spots and local cuisine in ${city.name}, ${city.country}`}
                      width={320}
                      height={160}
                      className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-40"
                      priority={city.name === "New York" || city.name === "London"}
                      loading={city.name === "New York" || city.name === "London" ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className={`absolute top-2 right-2 bg-white px-2 py-1 text-xs font-bold text-black ${styles.restaurantCount}`}>
                      {city.totalRestaurants}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className={`text-sm font-black text-center text-black mb-2 ${styles.cityName}`}>
                      {city.name.toUpperCase()}
                    </h4>
                    <p className={`text-xs text-gray-600 text-center leading-tight ${styles.cityTagline}`}>
                      {city.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}