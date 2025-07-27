import { notFound } from "next/navigation"
import { Metadata } from "next"
import { MapPin } from "lucide-react"
import { CityHero } from "@/components/features/city-hero"
import { RestaurantCard } from "@/components/features/restaurant-card"
import { AdSenseAd } from "@/components/features/adsense"
import { Button } from "@/components/ui/button"
import { cities } from "@/data/cities"
import { generateCitySEO } from "@/lib/seo"
import { generateCitySlug } from "@/lib/utils"
import { getRestaurantsByCity } from "@/lib/restaurants"

interface CityPageProps {
  params: Promise<{
    city: string
  }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: generateCitySlug(city.name),
  }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  
  // Find city by slug
  const city = cities.find(c => generateCitySlug(c.name) === citySlug)
  
  if (!city) {
    return {
      title: "City Not Found",
      description: "The requested city page could not be found."
    }
  }

  const seoData = generateCitySEO(city)
  
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords.join(", "),
    openGraph: {
      title: seoData.openGraph.title,
      description: seoData.openGraph.description,
      type: "website",
      images: [seoData.openGraph.image],
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.openGraph.title,
      description: seoData.openGraph.description,
      images: [seoData.openGraph.image],
    },
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params
  
  // Find city by slug
  const city = cities.find(c => generateCitySlug(c.name) === citySlug)
  
  if (!city) {
    notFound()
  }

  // Get restaurants for this city
  const allRestaurants = getRestaurantsByCity(citySlug)
  
  // Separate spotlight restaurants from regular ones
  const spotlightRestaurants = allRestaurants.filter(restaurant => restaurant.spotlight)
  const regularRestaurants = allRestaurants.filter(restaurant => !restaurant.spotlight)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* City Hero */}
      <CityHero city={city} />

      {/* Ad after Hero */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
          </div>
          <AdSenseAd 
            adSlot="9715957859" 
            adFormat="auto"
            fullWidthResponsive={true}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Restaurant Listings */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight uppercase">
              {city.name}
            </h2>
            <p className="text-lg text-gray-600 uppercase tracking-wide">
              {allRestaurants.length} CURATED DINING EXPERIENCES
            </p>
          </div>

          {/* Restaurant List */}
          {allRestaurants.length > 0 ? (
            <>
              {/* Spotlight Restaurants Section */}
              {spotlightRestaurants.length > 0 && (
                <div className="mb-20">
                  <div className="mb-12">
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center px-6 py-3 rounded-full" style={{backgroundColor: '#f3e8e4'}}>
                        <span className="text-2xl mr-3">✨</span>
                        <h3 className="text-2xl font-black uppercase tracking-wide" style={{color: '#8b6355'}}>
                          Featured Spotlights
                        </h3>
                      </div>
                    </div>
                    <p className="text-center text-sm uppercase tracking-wide" style={{color: '#b07968'}}>
                      In-depth reviews and stories from {city.name}'s finest restaurants
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    {spotlightRestaurants.map((restaurant) => (
                      <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                        variant="compact"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Restaurants Section */}
              {regularRestaurants.length > 0 && (
                <div>
                  {spotlightRestaurants.length > 0 && (
                    <div className="mb-12">
                      <h3 className="text-3xl font-black uppercase tracking-wide text-center mb-6" style={{color: '#8b6355'}}>
                        All Restaurants
                      </h3>
                      <div className="w-24 h-0.5 mx-auto" style={{backgroundColor: '#e6d1c9'}}></div>
                    </div>
                  )}
                  
                  <div className="space-y-8">
                    {regularRestaurants.map((restaurant) => (
                      <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                        variant="compact"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Load More */}
              <div className="text-center mt-20">
                <p className="text-gray-600 mb-8 uppercase tracking-wide text-sm">
                  Showing {allRestaurants.length} restaurants in {city.name}
                </p>
                <button className="border border-black px-8 py-3 text-black font-black uppercase tracking-wide text-sm hover:bg-black hover:text-white transition-colors">
                  Load More Restaurants
                </button>
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-32">
              <h3 className="text-3xl font-black text-black mb-6 uppercase tracking-wide">
                Coming Soon
              </h3>
              <p className="text-gray-600 mb-12 max-w-md mx-auto uppercase tracking-wide text-sm">
                We're currently curating the best restaurants in {city.name}.<br />
                Check back soon for amazing dining recommendations.
              </p>
              <button className="border border-black px-8 py-3 text-black font-black uppercase tracking-wide text-sm hover:bg-black hover:text-white transition-colors">
                Notify Me When Available
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Ad between sections */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
          </div>
          <AdSenseAd 
            adSlot="5710647125" 
            adFormat="auto"
            fullWidthResponsive={true}
            className="mx-auto"
          />
        </div>
      </section>

      {/* City Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-8 uppercase tracking-wide">
              About Dining in {city.name}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {city.description}
            </p>
          </div>
          
          {/* SEO Content */}
          <div className="text-left space-y-8">
            <div>
              <h3 className="text-xl font-black text-black mb-4 uppercase tracking-wide">
                Best Restaurants Near You in {city.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Looking for the best restaurants in {city.name}? You've come to the right place. 
                Our curated list features top-rated dining spots, from local favorites to 
                internationally acclaimed establishments. Whether you're searching for 
                "restaurants near me" or planning a special dining experience, we've got you covered.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Discover amazing {city.name} restaurants offering diverse cuisines, 
                from traditional local dishes to international flavors. Each restaurant 
                has been carefully selected based on quality, reviews, and dining experience 
                to ensure you find the perfect place to eat in {city.name}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}