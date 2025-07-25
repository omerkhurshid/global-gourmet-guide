import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Filter, Grid, List, MapPin, Star } from "lucide-react"
import { CityHero } from "@/components/features/city-hero"
import { RestaurantCard } from "@/components/features/restaurant-card"
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
  const restaurants = getRestaurantsByCity(citySlug)

  // Calculate stats
  const avgRating = restaurants.length > 0 
    ? (restaurants.reduce((sum, r) => sum + r.rating, 0) / restaurants.length).toFixed(1)
    : "0"
  
  const cuisineTypes = [...new Set(restaurants.flatMap(r => r.cuisine))].length

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* City Hero */}
      <CityHero city={city} />

      {/* Restaurant Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Top Restaurants in {city.name}
              </h2>
              <p className="text-gray-600">
                Discover {restaurants.length} carefully curated dining experiences
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{avgRating} avg rating</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                <span>{cuisineTypes} cuisine types</span>
              </div>
            </div>
          </div>

          {/* Filters & View Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                All Cuisines
              </Button>
              <Button variant="outline" size="sm">
                All Prices
              </Button>
              <Button variant="outline" size="sm">
                Highest Rated
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Grid className="w-4 h-4 mr-1" />
                Grid
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center">
                <List className="w-4 h-4 mr-1" />
                List
              </Button>
            </div>
          </div>

          {/* Restaurant Grid */}
          {restaurants.length > 0 ? (
            <>
              {/* Featured Restaurants */}
              {city.featuredRestaurants.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Featured Restaurants
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restaurants
                      .filter(r => city.featuredRestaurants.includes(r.id))
                      .map((restaurant) => (
                        <RestaurantCard
                          key={restaurant.id}
                          restaurant={restaurant}
                          variant="featured"
                          priority
                        />
                      ))}
                  </div>
                </div>
              )}

              {/* All Restaurants */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  All Restaurants
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {restaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                      variant="default"
                    />
                  ))}
                </div>
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Showing {restaurants.length} restaurants in {city.name}
                </p>
                <Button variant="outline" size="lg">
                  Load More Restaurants
                </Button>
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Coming Soon!
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We're currently curating the best restaurants in {city.name}. 
                Check back soon for amazing dining recommendations!
              </p>
              <Button variant="outline">
                Notify Me When Available
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* City Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Dining in {city.name}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {city.description}
            </p>
            
            {/* SEO Content */}
            <div className="mt-8 text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Best Restaurants Near You in {city.name}
              </h3>
              <p className="text-gray-600 mb-4">
                Looking for the best restaurants in {city.name}? You've come to the right place. 
                Our curated list features top-rated dining spots, from local favorites to 
                internationally acclaimed establishments. Whether you're searching for 
                "restaurants near me" or planning a special dining experience, we've got you covered.
              </p>
              <p className="text-gray-600">
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