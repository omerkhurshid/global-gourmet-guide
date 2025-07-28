"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { SearchBar } from "./search-bar"
import { Logo } from "@/components/ui/logo"
import { AdSenseAd } from "./adsense"
import { cities, getAllCountries } from "@/data/cities"
import { generateCitySlug } from "@/lib/utils"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const countries = getAllCountries()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50" style={{backgroundColor: '#b07968'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Logo size="lg" />
            <div className="text-white leading-tight">
              <div className="text-xl font-black tracking-wide">Global</div>
              <div className="text-sm font-medium tracking-wide opacity-80">Gourmet Guide</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="relative group">
              <button className="text-white font-medium uppercase tracking-wide text-sm hover:text-gray-200 transition-colors">
                Explore Cities
              </button>
              <div className="absolute top-full left-0 mt-4 w-80 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-6">
                  {countries.map((country) => (
                    <div key={country} className="mb-6">
                      <div className="text-sm font-black text-black uppercase tracking-wide mb-3">
                        {country}
                      </div>
                      {cities
                        .filter(city => city.country === country)
                        .map((city) => (
                          <Link
                            key={city.id}
                            href={`/${generateCitySlug(city.name)}`}
                            className="block py-2 text-sm text-gray-600 hover:text-black transition-colors"
                          >
                            {city.name}
                          </Link>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Link 
              href="/about" 
              className="text-white font-medium uppercase tracking-wide text-sm hover:text-gray-200 transition-colors"
            >
              About us
            </Link>
            
            <Link 
              href="/contact" 
              className="text-white font-medium uppercase tracking-wide text-sm hover:text-gray-200 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-gray-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Thin horizontal divider line */}
      <div className="w-full h-px bg-white opacity-30"></div>

      {/* Header Ad - Leaderboard */}
      <div className="bg-gray-50 py-1 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide mb-1 sm:mb-2 block">Advertisement</span>
            <AdSenseAd 
              adSlot="6385935551" 
              adFormat="auto"
              fullWidthResponsive={true}
              className="mx-auto max-h-20 sm:max-h-none overflow-hidden"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-6">
            {countries.map((country) => (
              <div key={country}>
                <div className="text-sm font-black text-black uppercase tracking-wide mb-3">
                  {country}
                </div>
                {cities
                  .filter(city => city.country === country)
                  .map((city) => (
                    <Link
                      key={city.id}
                      href={`/${generateCitySlug(city.name)}`}
                      className="block py-2 text-sm text-gray-600 hover:text-black transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {city.name}
                    </Link>
                  ))}
              </div>
            ))}
            <Link
              href="/about"
              className="block text-black font-medium uppercase tracking-wide text-sm hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="block text-black font-medium uppercase tracking-wide text-sm hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}