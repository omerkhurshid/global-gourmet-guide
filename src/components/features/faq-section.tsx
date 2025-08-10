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
    question: "How do I find restaurants near me?",
    answer: "Use our city search to browse restaurants in your area. We cover 18 major cities worldwide including New York, London, Paris, and more. Simply select your city to discover the best local dining spots.",
    keywords: ["restaurants near me", "find restaurants", "local dining"]
  },
  {
    question: "Which cities do you cover for restaurant recommendations?",
    answer: "We feature restaurants in 18 top cities across 5 countries: United States (New York, Los Angeles, Chicago, San Francisco), United Kingdom (London, Manchester), France (Paris, Lyon), Pakistan (Karachi, Lahore, Islamabad), and India (Mumbai, Delhi, Bangalore).",
    keywords: ["cities", "locations", "coverage"]
  },
  {
    question: "Are these restaurant recommendations updated regularly?",
    answer: "Yes, our restaurant database is regularly updated with new establishments, menu changes, and current ratings. We maintain a curated list of over 160 restaurants to ensure you get the most current dining recommendations.",
    keywords: ["updated", "current", "fresh recommendations"]
  },
  {
    question: "Do you include different types of restaurants?",
    answer: "Absolutely! Our guide covers everything from fine dining establishments to casual eateries, street food, cafes, and local hidden gems. We feature diverse cuisines including Italian, Asian, American, French, Pakistani, and Indian food.",
    keywords: ["types", "cuisine", "variety", "fine dining", "casual"]
  },
  {
    question: "How are restaurants selected for your recommendations?",
    answer: "Our restaurants are carefully curated based on food quality, service, atmosphere, and local popularity. We consider factors like customer reviews, chef reputation, unique offerings, and authentic local experiences.",
    keywords: ["selection criteria", "quality", "curation"]
  },
  {
    question: "Can I search for specific types of cuisine?",
    answer: "Yes, you can search for restaurants by cuisine type, location, or restaurant name using our search function. Each restaurant page includes detailed cuisine information and specialties.",
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
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-6 text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-black pr-4">{item.question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24" style={{backgroundColor: '#FAF8F5'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6" style={{letterSpacing: '-0.03em'}}>
            FREQUENTLY ASKED
          </h2>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8" style={{letterSpacing: '-0.03em'}}>
            QUESTIONS
          </h2>
          <div className="w-24 h-px mx-auto mb-6 bg-black"></div>
          <p className="text-sm max-w-2xl mx-auto text-gray-700" style={{letterSpacing: '0.08em'}}>
            EVERYTHING YOU NEED TO KNOW ABOUT FINDING RESTAURANTS NEAR YOU
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-none shadow-sm">
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
          <p className="text-sm text-gray-600" style={{letterSpacing: '0.08em'}}>
            STILL HAVE QUESTIONS? <a href="/contact" className="text-black font-semibold hover:underline">CONTACT US</a>
          </p>
        </div>
      </div>
    </section>
  )
}