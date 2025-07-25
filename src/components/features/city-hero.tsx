import Image from "next/image"
import { City } from "@/data/types"

interface CityHeroProps {
  city: City
}

export function CityHero({ city }: CityHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={city.heroImage}
          alt={`${city.name} cityscape`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Best Restaurants in {city.name}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto">
          {city.description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-center space-x-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{city.totalRestaurants}</div>
            <div className="text-sm">Top Restaurants</div>
          </div>
          <div className="w-px h-12 bg-white/30" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{city.country}</div>
            <div className="text-sm">Country</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}