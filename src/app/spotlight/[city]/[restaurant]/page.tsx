import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdSenseAd } from "@/components/features/adsense"
import { cities } from "@/data/cities"
import { generateCitySlug, generateRestaurantSlug } from "@/lib/utils"
import { getRestaurantsByCity } from "@/lib/restaurants"

interface SpotlightPageProps {
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
      if (restaurant.spotlight) {
        params.push({
          city: citySlug,
          restaurant: generateRestaurantSlug(restaurant.name)
        })
      }
    }
  }
  
  return params
}

export async function generateMetadata({ params }: SpotlightPageProps): Promise<Metadata> {
  const { city: citySlug, restaurant: restaurantSlug } = await params
  
  const city = cities.find(c => generateCitySlug(c.name) === citySlug)
  if (!city) return { title: "City Not Found" }
  
  const restaurants = getRestaurantsByCity(citySlug)
  const restaurant = restaurants.find(r => generateRestaurantSlug(r.name) === restaurantSlug)
  
  if (!restaurant || !restaurant.spotlight) {
    return { title: "Restaurant Spotlight Not Found" }
  }

  return {
    title: `${restaurant.spotlight.title} | Restaurant Spotlight`,
    description: restaurant.spotlight.excerpt,
    openGraph: {
      title: restaurant.spotlight.title,
      description: restaurant.spotlight.excerpt,
      type: "article",
    },
  }
}

export default async function RestaurantSpotlightPage({ params }: SpotlightPageProps) {
  const { city: citySlug, restaurant: restaurantSlug } = await params
  
  const city = cities.find(c => generateCitySlug(c.name) === citySlug)
  if (!city) notFound()
  
  const restaurants = getRestaurantsByCity(citySlug)
  const restaurant = restaurants.find(r => generateRestaurantSlug(r.name) === restaurantSlug)
  
  if (!restaurant || !restaurant.spotlight) {
    notFound()
  }

  const spotlight = restaurant.spotlight

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f9f7f6'}}>
      {/* Header */}
      <div className="bg-white border-b" style={{borderColor: '#e6d1c9'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href={`/${citySlug}`}
            className="inline-flex items-center text-sm mb-4 transition-colors hover:text-[#b07968]"
            style={{color: '#8b6355'}}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {city.name}
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2" style={{color: '#8b6355'}}>
                {spotlight.title}
              </h1>
              <p className="text-lg" style={{color: '#b07968'}}>
                {spotlight.excerpt}
              </p>
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

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {spotlight.introduction}
            </p>
          </div>

          {/* Sections */}
          {spotlight.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* Images */}
          {spotlight.images && spotlight.images.length > 0 && (
            <div className="my-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {spotlight.images.map((image, index) => (
                  <div key={index} className="space-y-3">
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    {image.caption && (
                      <p className="text-sm text-gray-600 italic text-center">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ad mid-article */}
          <div className="my-12 py-8 bg-gray-50 rounded-lg">
            <div className="text-center mb-6">
              <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
            </div>
            <AdSenseAd 
              adSlot="9558893800" 
              adFormat="auto"
              fullWidthResponsive={true}
              className="mx-auto"
            />
          </div>

          {/* Restaurant Info */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Restaurant Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <div className="text-gray-700 text-sm flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 text-gray-400" />
                  {restaurant.address.street ? `${restaurant.address.street}, ` : ''}{restaurant.address.city}, {restaurant.address.country}
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                  {restaurant.contact.phone && (
                    <div className="flex items-center text-sm text-gray-700 mb-1">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      {restaurant.contact.phone}
                    </div>
                  )}
                  {restaurant.contact.website && (
                    <div className="flex items-center text-sm text-gray-700">
                      <Globe className="w-4 h-4 mr-2 text-gray-400" />
                      <a 
                        href={restaurant.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Menu Highlights */}
          {restaurant.specialties && restaurant.specialties.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Signature Dishes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {restaurant.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                    <p className="text-gray-700 text-sm">{specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Restaurant Features */}
          {restaurant.features && restaurant.features.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Makes It Special</h3>
              <div className="flex flex-wrap gap-3">
                {restaurant.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author */}
          <div className="border-t border-gray-200 pt-6 mt-12">
            <div className="text-sm text-gray-500">
              <p>Last Updated: {restaurant.lastUpdated}</p>
              <p>Experience shared by the editorial team</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}