"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, TrendingUp, Sparkles, Star } from "lucide-react"
import { AdSenseAd } from "@/components/performance/client-components"

interface TrendingRestaurant {
  number: number
  name: string
  address: string
  neighborhood: string
  cuisine: string
  priceRange: string
  description: string
  highlight: string
  whyTrending: string
  tip?: string
}

interface TrendingSection {
  sectionTitle: string
  sectionDescription: string
  restaurants: TrendingRestaurant[]
}

interface TrendingBlogData {
  title: string
  city: string
  publishDate: string
  readTime: string
  description: string
  introduction: string
  trendExplanation: string
  sections: TrendingSection[]
  conclusion: string
  trending: {
    icon: string
    color: string
  }
}

interface TrendingBlogLayoutProps {
  data: TrendingBlogData
}

function TrendingRestaurantCard({ restaurant }: { restaurant: TrendingRestaurant }) {
  return (
    <div className="group bg-white border-2 border-gray-100 hover:border-orange-400 transition-all duration-300 overflow-hidden">
      {/* Header with trending accent */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 relative overflow-hidden">
        {/* Trending decoration */}
        <TrendingUp className="absolute -right-4 -top-4 w-24 h-24 text-orange-200/20 rotate-12" />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-black text-gray-200">
                {restaurant.number.toString().padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-2xl font-black text-black uppercase tracking-tight">
                  {restaurant.name}
                </h3>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  {restaurant.cuisine} • {restaurant.priceRange}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {restaurant.neighborhood}
                </p>
              </div>
            </div>
          </div>
          
          {/* Address */}
          <div className="flex items-center text-sm text-gray-600 mt-2">
            <MapPin className="w-4 h-4 mr-2 text-orange-500" />
            <span>{restaurant.address}</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          {restaurant.description}
        </p>
        
        {/* Why It's Trending */}
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
          <div className="flex items-start">
            <TrendingUp className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-gray-800 mb-1">WHY IT'S TRENDING</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {restaurant.whyTrending}
              </p>
            </div>
          </div>
        </div>

        {/* Highlight */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex items-start">
            <Sparkles className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-gray-800 mb-1">MUST-TRY</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {restaurant.highlight}
              </p>
            </div>
          </div>
        </div>
        
        {/* Pro Tip */}
        {restaurant.tip && (
          <div className="bg-gray-50 p-4 border border-gray-200">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
              Insider Tip
            </p>
            <p className="text-sm text-gray-700 italic">
              {restaurant.tip}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function TrendingBlogLayout({ data }: TrendingBlogLayoutProps) {
  const { trending } = data
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Trending-themed hero section */}
      <div className="relative bg-gradient-to-br from-orange-100 via-red-50 to-pink-50 overflow-hidden">
        {/* Decorative elements */}
        <TrendingUp className="absolute top-10 right-10 w-32 h-32 text-orange-300/20 animate-pulse" />
        <Star className="absolute bottom-10 left-10 w-24 h-24 text-red-300/20 -rotate-12" />
        <Sparkles className="absolute top-1/2 right-1/3 w-20 h-20 text-pink-400/20" />
        
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

            {/* Title with Trending Badge */}
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 font-bold text-sm uppercase mb-4">
                <TrendingUp className="inline w-4 h-4 mr-2" />
                Trending Now
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight max-w-5xl">
                {data.title.toUpperCase()}
              </h1>
            </div>

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
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.introduction}
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 border-l-4 border-orange-400">
              <h3 className="font-black text-lg text-black mb-3">THE TREND EXPLAINED</h3>
              <p className="text-gray-700 leading-relaxed">
                {data.trendExplanation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Sections */}
      {data.sections.map((section, index) => (
        <section key={index} className={index % 2 === 0 ? "py-16 bg-gray-50" : "py-16 bg-white"}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
                {section.sectionTitle.toUpperCase()}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {section.sectionDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {section.restaurants.map((restaurant) => (
                <TrendingRestaurantCard key={restaurant.number} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </section>
      ))}

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

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {data.conclusion}
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide hover:bg-orange-700 transition-colors"
          >
            Explore More Cities
          </Link>
        </div>
      </section>
    </div>
  )
}