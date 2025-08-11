"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
  keywords: string[]
}

const faqData: FAQItem[] = [
  {
    question: "How do I find the best restaurants near me?",
    answer: "Use our curated city guides to discover exceptional dining experiences in your area. We cover 21 major cities worldwide including New York, London, Paris, Tokyo, and more. Each city features hand-picked restaurants based on quality, authenticity, and local reputation.",
    keywords: ["restaurants near me", "find restaurants", "local dining"]
  },
  {
    question: "Which cities are featured in your restaurant guide?",
    answer: "We feature restaurants in 21 top cities across 6 countries: United States (New York, Los Angeles, Chicago, San Francisco, Toronto), United Kingdom (London, Oxford, Cambridge, Edinburgh), France (Paris, Lyon), Pakistan (Karachi, Lahore, Islamabad), India (Mumbai, Delhi, Bangalore), UAE (Dubai), Australia (Sydney), Thailand (Bangkok), Singapore, Hong Kong, Germany (Berlin), Italy (Rome), Spain (Barcelona), Netherlands (Amsterdam), Turkey (Istanbul), and South Africa (Cape Town).",
    keywords: ["cities", "locations", "coverage"]
  },
  {
    question: "How many restaurants do you feature?",
    answer: "We currently feature over 213 carefully curated restaurants across our 21 cities. Each restaurant is selected based on exceptional food quality, service excellence, and authentic dining experiences. We focus on quality over quantity to ensure every recommendation meets our high standards.",
    keywords: ["restaurant count", "curation", "quality"]
  },
  {
    question: "What types of restaurants and cuisines do you include?",
    answer: "Our guide covers the full spectrum of dining experiences: Michelin-starred fine dining, innovative contemporary cuisine, traditional local specialties, casual neighborhood gems, and authentic ethnic restaurants. Featured cuisines include French, Italian, Asian, Indian, Middle Eastern, American, British, and many regional specialties.",
    keywords: ["types", "cuisine", "variety", "fine dining", "casual"]
  },
  {
    question: "How do you select restaurants for your recommendations?",
    answer: "Our curation process focuses on exceptional dining experiences. We evaluate restaurants based on food quality, service standards, atmosphere, authenticity, chef reputation, local acclaim, and unique offerings. Many of our featured restaurants have Michelin stars, industry awards, or are beloved local institutions.",
    keywords: ["selection criteria", "quality", "curation"]
  },
  {
    question: "Can I find restaurants by cuisine type or location?",
    answer: "Yes! You can browse restaurants by city, search by cuisine type, or use our search function to find specific restaurants or dishes. Each restaurant profile includes detailed cuisine information, signature dishes, and location details to help you find exactly what you're craving.",
    keywords: ["search", "cuisine type", "filter"]
  }
]

interface FAQAccordionProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function FAQAccordion({ item, isOpen, onToggle }: FAQAccordionProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-start w-full py-6 px-6 text-left hover:bg-gray-50 transition-colors duration-300 group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-bold text-black pr-6 leading-tight group-hover:text-gray-900">
          {item.question}
        </h3>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
          <ChevronDown 
            className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 px-6">
          <div className="pt-2 border-t border-gray-100">
            <p className="text-gray-700 leading-relaxed text-base mt-4">
              {item.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24" style={{backgroundColor: '#FEFEFE'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 mx-auto mb-6" style={{backgroundColor: '#8b6355'}}></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Everything you need to know about discovering the world's best restaurants through our curated dining guides.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {faqData.map((item, index) => (
            <FAQAccordion
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-base text-gray-600">
            Still have questions?{' '}
            <a 
              href="/contact" 
              className="font-semibold hover:underline transition-colors duration-200" 
              style={{color: '#8b6355'}}
            >
              Contact us
            </a>
            {' '}for personalized restaurant recommendations.
          </p>
        </div>
      </div>
    </section>
  )
}