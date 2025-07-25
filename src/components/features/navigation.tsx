"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MapPin } from "lucide-react"
import { SearchBar } from "./search-bar"
import { cities, getAllCountries } from "@/data/cities"
import { generateCitySlug } from "@/lib/utils"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const countries = getAllCountries()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="w-8 h-8 text-black" />
            <span className="text-xl font-bold text-gray-900">
              Global Gourmet
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <SearchBar placeholder="Search cities..." />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium">
                Cities
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {countries.map((country) => (
                    <div key={country} className="mb-3">
                      <div className="text-sm font-semibold text-gray-900 px-3 py-2">
                        {country}
                      </div>
                      {cities
                        .filter(city => city.country === country)
                        .map((city) => (
                          <Link
                            key={city.id}
                            href={`/${generateCitySlug(city.name)}`}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
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
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <SearchBar placeholder="Search cities..." />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {countries.map((country) => (
              <div key={country} className="py-2">
                <div className="text-sm font-semibold text-gray-900 px-2 py-1">
                  {country}
                </div>
                {cities
                  .filter(city => city.country === country)
                  .map((city) => (
                    <Link
                      key={city.id}
                      href={`/${generateCitySlug(city.name)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {city.name}
                    </Link>
                  ))}
              </div>
            ))}
            <Link
              href="/about"
              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}