import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, MapPin, Star, Phone, Globe, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdSenseAd } from "@/components/features/adsense"
import { StructuredData } from "@/components/seo/structured-data"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { cities } from "@/data/cities"
import { generateCitySlug, generateRestaurantSlug, formatPrice, formatRating } from "@/lib/utils"
import { getRestaurantsByCity } from "@/lib/restaurants"
import { generateRestaurantSEO } from "@/lib/seo"

interface RestaurantPageProps {
  params: Promise<{
    city: string
    restaurant: string
  }>
}

export async function generateStaticParams() {
  const params: { city: string; restaurant: string }[] = []
  
  for (const city of cities) {
    const citySlug = generateCitySlug(city.name)
    const restaurants = getRestaurantsByCity(citySlug)
    
    for (const restaurant of restaurants) {
      params.push({
        city: citySlug,
        restaurant: generateRestaurantSlug(restaurant.name)
      })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: RestaurantPageProps): Promise<Metadata> {
  const { city: citySlug, restaurant: restaurantSlug } = await params
  
  const city = cities.find(c => generateCitySlug(c.name) === citySlug)
  if (!city) return { title: "City Not Found" }
  
  const restaurants = getRestaurantsByCity(citySlug)
  const restaurant = restaurants.find(r => generateRestaurantSlug(r.name) === restaurantSlug)
  
  if (!restaurant) {
    return { title: "Restaurant Not Found" }
  }

  const seoData = generateRestaurantSEO(restaurant)

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords.join(", "),
    openGraph: {
      title: seoData.openGraph.title,
      description: seoData.openGraph.description,
      type: "article",
    },
    alternates: {
      canonical: `https://restaurantsnearme.tech/${citySlug}/${restaurantSlug}`,
    },
  }
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { city: citySlug, restaurant: restaurantSlug } = await params
  
  const city = cities.find(c => generateCitySlug(c.name) === citySlug)
  if (!city) notFound()
  
  const restaurants = getRestaurantsByCity(citySlug)
  const restaurant = restaurants.find(r => generateRestaurantSlug(r.name) === restaurantSlug)
  
  if (!restaurant) notFound()

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f9f7f6'}}>
      <StructuredData 
        type="restaurant" 
        data={{
          ...restaurant,
          citySlug
        }} 
      />

      {/* Header */}
      <div className="bg-white border-b" style={{borderColor: '#e6d1c9'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumbs 
            items={[
              { label: city.name, href: `/${citySlug}` },
              { label: restaurant.name }
            ]} 
          />
          
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-3" style={{color: '#8b6355'}}>
              {restaurant.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span className="font-bold mr-1">{formatRating(restaurant.rating)}</span>
                <span className="text-gray-600">({restaurant.reviewCount} reviews)</span>
              </div>
              <span className="font-bold" style={{color: '#b07968'}}>{formatPrice(restaurant.priceLevel)}</span>
              <div className="flex items-center" style={{color: '#8b6355'}}>
                <MapPin className="w-4 h-4 mr-1" />
                <span>{restaurant.address.city}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {restaurant.cuisine.map((cuisine) => (
                <span
                  key={cuisine}
                  className="px-3 py-1 text-sm rounded-full"
                  style={{backgroundColor: '#f3e8e4', color: '#8b6355'}}
                >
                  {cuisine}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ad after header */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
          </div>
          <AdSenseAd 
            adSlot="3010948702" 
            adFormat="auto"
            fullWidthResponsive={true}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="text-center mb-8 p-16 rounded-lg" style={{backgroundColor: '#f3e8e4'}}>
              <div className="text-8xl mb-4">{restaurant.images.hero}</div>
              <p className="text-lg" style={{color: '#8b6355'}}>
                {restaurant.cuisine.join(' • ')} in {city.name}
              </p>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4" style={{color: '#8b6355'}}>About {restaurant.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {restaurant.description}
              </p>
              {restaurant.reviewSummary && (
                <div className="border-l-4 pl-4" style={{borderColor: '#e6d1c9'}}>
                  <p className="italic" style={{color: '#b07968'}}>
                    "{restaurant.reviewSummary}"
                  </p>
                </div>
              )}
            </div>

            {/* Specialties */}
            {restaurant.specialties && restaurant.specialties.length > 0 && (
              <div className="bg-white rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#8b6355'}}>Signature Dishes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {restaurant.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#b07968'}}></span>
                      <span className="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {restaurant.features && restaurant.features.length > 0 && (
              <div className="bg-white rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#8b6355'}}>What Makes It Special</h2>
                <div className="flex flex-wrap gap-3">
                  {restaurant.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium border"
                      style={{borderColor: '#e6d1c9', color: '#8b6355'}}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Spotlight Link */}
            {restaurant.spotlight && (
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-3" style={{color: '#8b6355'}}>Featured Review</h3>
                <p className="text-gray-700 mb-4">{restaurant.spotlight.excerpt}</p>
                <Link 
                  href={`/spotlight/${citySlug}/${restaurantSlug}`}
                  className="inline-flex items-center px-4 py-2 rounded-lg font-medium text-white transition-colors"
                  style={{backgroundColor: '#b07968'}}
                >
                  Read Full Spotlight Review
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4" style={{color: '#8b6355'}}>Restaurant Details</h3>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1" style={{color: '#b07968'}} />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">
                      {restaurant.address.street && `${restaurant.address.street}, `}
                      {restaurant.address.city}, {restaurant.address.country}
                      {restaurant.address.postalCode && ` ${restaurant.address.postalCode}`}
                    </p>
                  </div>
                </div>

                {restaurant.contact.phone && (
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" style={{color: '#b07968'}} />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a 
                        href={`tel:${restaurant.contact.phone}`} 
                        className="text-sm hover:underline"
                        style={{color: '#8b6355'}}
                      >
                        {restaurant.contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {restaurant.contact.website && (
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-3" style={{color: '#b07968'}} />
                    <div>
                      <p className="font-medium text-gray-900">Website</p>
                      <a 
                        href={restaurant.contact.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                        style={{color: '#8b6355'}}
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="border-t pt-4" style={{borderColor: '#e6d1c9'}}>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
                    <span className="text-2xl font-bold" style={{color: '#8b6355'}}>
                      {formatRating(restaurant.rating)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{restaurant.reviewCount} reviews</p>
                </div>
              </div>
            </div>

            {/* Ad in sidebar */}
            <div className="mt-6">
              <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
              </div>
              <AdSenseAd 
                adSlot="9558893800" 
                adFormat="auto"
                fullWidthResponsive={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}