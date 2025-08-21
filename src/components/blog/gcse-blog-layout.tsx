"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Trophy, Gift, Clock, AlertCircle } from "lucide-react"
import { AdSenseAd } from "@/components/performance/client-components"

interface GCSEOffer {
  restaurant: string
  offer: string
  requirements: string
  locations?: string
  tip?: string
}

interface CityOffers {
  cityName: string
  introduction: string
  offers: GCSEOffer[]
}

interface GCSEBlogData {
  title: string
  publishDate: string
  readTime: string
  description: string
  introduction: string
  resultsDate: string
  cities: CityOffers[]
  generalTips: string[]
  importantNotes: string[]
}

interface GCSEBlogLayoutProps {
  data: GCSEBlogData
}

function OfferCard({ offer }: { offer: GCSEOffer }) {
  return (
    <div className="bg-white border-2 border-gray-100 hover:border-purple-400 transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <h4 className="text-xl font-black text-black mb-3 group-hover:text-purple-600 transition-colors">
          {offer.restaurant.toUpperCase()}
        </h4>
        
        <div className="space-y-3">
          {/* The Offer */}
          <div className="bg-purple-50 p-4 rounded">
            <div className="flex items-start">
              <Gift className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-gray-800 mb-1">THE OFFER</p>
                <p className="text-sm text-gray-700">
                  {offer.offer}
                </p>
              </div>
            </div>
          </div>
          
          {/* Requirements */}
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs font-bold text-gray-500 uppercase mb-1">What You Need</p>
            <p className="text-sm text-gray-600">{offer.requirements}</p>
          </div>
          
          {/* Locations if specified */}
          {offer.locations && (
            <div className="border-l-4 border-gray-200 pl-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-1">Locations</p>
              <p className="text-sm text-gray-600">{offer.locations}</p>
            </div>
          )}
          
          {/* Pro Tip */}
          {offer.tip && (
            <div className="bg-yellow-50 p-3 rounded text-xs">
              <span className="font-bold text-yellow-800">PRO TIP:</span>
              <span className="text-yellow-700 ml-1">{offer.tip}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function GCSEBlogLayout({ data }: GCSEBlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Purple Theme */}
      <div className="relative bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-50 overflow-hidden">
        {/* Decorative elements */}
        <Trophy className="absolute top-10 right-10 w-32 h-32 text-purple-300/20 animate-pulse" />
        <Gift className="absolute bottom-10 left-10 w-24 h-24 text-indigo-300/20 rotate-12" />
        
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
                <Calendar className="w-4 h-4 mr-1 text-purple-500" />
                <span>{data.publishDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-purple-500" />
                <span>{data.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-6 max-w-5xl">
              {data.title.toUpperCase()}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-8">
              {data.description}
            </p>

            {/* Results Date Banner */}
            <div className="inline-block bg-purple-600 text-white px-6 py-3 font-bold">
              <Trophy className="inline w-5 h-5 mr-2" />
              GCSE RESULTS DAY: {data.resultsDate.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* City-by-City Offers */}
      {data.cities.map((city, index) => (
        <section key={city.cityName} className={index % 2 === 0 ? "py-16 bg-gray-50" : "py-16 bg-white"}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-600 mr-2" />
                <h2 className="text-3xl md:text-4xl font-black text-black">
                  {city.cityName.toUpperCase()}
                </h2>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {city.introduction}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.offers.map((offer, offerIndex) => (
                <OfferCard key={`${city.cityName}-${offerIndex}`} offer={offer} />
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

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-black mb-12 text-center">
              ESSENTIAL TIPS FOR RESULTS DAY
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* General Tips */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 border-2 border-green-200">
                <h3 className="font-black text-lg text-black mb-4 uppercase">
                  How to Claim Your Freebies
                </h3>
                <ul className="space-y-3">
                  {data.generalTips.map((tip, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2 font-bold">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Important Notes */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 border-2 border-orange-200">
                <h3 className="font-black text-lg text-black mb-4 uppercase flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                  Important to Remember
                </h3>
                <ul className="space-y-3">
                  {data.importantNotes.map((note, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="w-16 h-16 text-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-black mb-4">
            CONGRATULATIONS ON YOUR RESULTS!
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're celebrating or contemplating your next steps, enjoy these treats on us. 
            You've earned it!
          </p>
          <Link
            href="/"
            className="inline-block bg-purple-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide hover:bg-purple-700 transition-colors"
          >
            Explore More Restaurant Guides
          </Link>
        </div>
      </section>
    </div>
  )
}