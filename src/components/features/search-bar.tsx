"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin } from "lucide-react"
import { cities } from "@/data/cities"
import { generateCitySlug } from "@/lib/utils"

interface SearchResult {
  type: "city"
  id: string
  name: string
  country: string
  slug: string
}

interface SearchBarProps {
  placeholder?: string
  className?: string
}

export function SearchBar({ 
  placeholder = "Search cities or countries...", 
  className = "" 
}: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length >= 2) {
      const filteredResults: SearchResult[] = cities
        .filter(city => 
          city.name.toLowerCase().includes(query.toLowerCase()) ||
          city.country.toLowerCase().includes(query.toLowerCase())
        )
        .map(city => ({
          type: "city" as const,
          id: city.id,
          name: city.name,
          country: city.country,
          slug: generateCitySlug(city.name)
        }))
        .slice(0, 8)

      setResults(filteredResults)
      setIsOpen(filteredResults.length > 0)
      setSelectedIndex(-1)
    } else {
      setResults([])
      setIsOpen(false)
      setSelectedIndex(-1)
    }
  }, [query])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleResultClick = (result: SearchResult) => {
    router.push(`/${result.slug}`)
    setQuery("")
    setIsOpen(false)
    inputRef.current?.blur()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        )
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case "Enter":
        if (selectedIndex >= 0 && results[selectedIndex]) {
          e.preventDefault()
          handleResultClick(results[selectedIndex])
        }
        break
      case "Escape":
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (results.length > 0) {
      handleResultClick(results[0])
    }
  }

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(results.length > 0)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white shadow-sm"
            autoComplete="off"
          />
        </div>
      </form>

      {isOpen && results.length > 0 && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div 
            ref={resultsRef}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden"
          >
            {results.map((result, index) => (
              <button
                key={result.id}
                onClick={() => handleResultClick(result)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 transition-colors ${
                  index === selectedIndex ? "bg-gray-50" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">
                      {result.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {result.country}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}