import { MapPin, DollarSign, Sun, Sparkles } from "lucide-react"

interface RestaurantCardProps {
  number: number
  name: string
  address: string
  cuisine: string
  priceRange: string
  description: string
  highlight: string
  tip?: string
}

export function RestaurantCard({
  number,
  name,
  address,
  cuisine,
  priceRange,
  description,
  highlight,
  tip
}: RestaurantCardProps) {
  return (
    <div className="group bg-white border-2 border-gray-100 hover:border-yellow-400 transition-all duration-300 overflow-hidden">
      {/* Header with summer accent */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 relative overflow-hidden">
        {/* Summer decoration */}
        <Sun className="absolute -right-4 -top-4 w-24 h-24 text-yellow-200/20 rotate-12" />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-black text-gray-200">
                {number.toString().padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-2xl font-black text-black uppercase tracking-tight">
                  {name}
                </h3>
                <p className="text-sm font-semibold text-gray-600 mt-1">
                  {cuisine} • {priceRange}
                </p>
              </div>
            </div>
          </div>
          
          {/* Address */}
          <div className="flex items-center text-sm text-gray-600 mt-2">
            <MapPin className="w-4 h-4 mr-2 text-orange-500" />
            <span>{address}</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
        
        {/* Summer Highlight */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex items-start">
            <Sparkles className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-gray-800 mb-1">SUMMER HIGHLIGHT</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {highlight}
              </p>
            </div>
          </div>
        </div>
        
        {/* Pro Tip */}
        {tip && (
          <div className="bg-gray-50 p-4 border border-gray-200">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
              Insider Tip
            </p>
            <p className="text-sm text-gray-700 italic">
              {tip}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}