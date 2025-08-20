"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Sun, Umbrella, Trees } from "lucide-react"
import { RestaurantCard } from "./restaurant-card"
import { AdSenseAd } from "@/components/performance/client-components"

interface BlogPostData {
  title: string
  city: string
  publishDate: string
  readTime: string
  description: string
  introduction: string
  restaurants: Array<{
    number: number
    name: string
    address: string
    cuisine: string
    priceRange: string
    description: string
    highlight: string
    tip?: string
  }>
  planningTips: {
    bestTimes: string[]
    bookingTips: string[]
    whatToExpect: string[]
  }
  conclusion: string
}

interface SummerBlogLayoutProps {
  data: BlogPostData
}

export function SummerBlogLayout({ data }: SummerBlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Summer-themed hero section */}
      <div className="relative bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-50 overflow-hidden">
        {/* Decorative elements */}
        <Sun className="absolute top-10 right-10 w-32 h-32 text-yellow-300/20 animate-pulse" />
        <Umbrella className="absolute bottom-10 left-10 w-24 h-24 text-orange-300/20 -rotate-12" />
        <Trees className="absolute top-1/2 right-1/3 w-20 h-20 text-green-400/20" />
        
        <div className="relative z-10">
          {/* Navigation */}
          <div className="border-b border-white/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-bold text-gray-700 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-sm font-semibold text-gray-600 mb-6">
              <div className="flex items-center mr-6">
                <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                <span>{data.city}</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="w-4 h-4 mr-1 text-orange-500" />
                <span>{data.publishDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-orange-500" />
                <span>{data.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-6 max-w-5xl">
              {data.title.toUpperCase()}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.introduction}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              TOP 10 OUTDOOR DINING SPOTS
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.number} {...restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
          </div>
          <AdSenseAd 
            adSlot="2819377018" 
            adFormat="auto"
            fullWidthResponsive={true}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Planning Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-black mb-12 text-center">
              PLANNING YOUR SUMMER DINING ADVENTURE
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Best Times */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 border-2 border-yellow-200">
                <h3 className="font-black text-lg text-black mb-4 uppercase">
                  Best Times to Visit
                </h3>
                <ul className="space-y-2">
                  {data.planningTips.bestTimes.map((tip, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <Sun className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking Tips */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border-2 border-blue-200">
                <h3 className="font-black text-lg text-black mb-4 uppercase">
                  Booking Tips
                </h3>
                <ul className="space-y-2">
                  {data.planningTips.bookingTips.map((tip, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 border-2 border-green-200">
                <h3 className="font-black text-lg text-black mb-4 uppercase">
                  What to Expect
                </h3>
                <ul className="space-y-2">
                  {data.planningTips.whatToExpect.map((tip, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sun className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {data.conclusion}
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white px-8 py-4 font-black text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Explore More Cities
          </Link>
        </div>
      </section>
    </div>
  )
}