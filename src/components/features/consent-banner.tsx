"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('gdpr-consent')
    if (!hasConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptConsent = () => {
    localStorage.setItem('gdpr-consent', 'accepted')
    localStorage.setItem('gdpr-consent-date', new Date().toISOString())
    setShowBanner(false)
  }

  const rejectConsent = () => {
    localStorage.setItem('gdpr-consent', 'rejected')
    localStorage.setItem('gdpr-consent-date', new Date().toISOString())
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={rejectConsent}
              className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={acceptConsent}
              className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800 transition-colors"
              style={{backgroundColor: '#b07968'}}
            >
              Accept All
            </button>
            <button
              onClick={rejectConsent}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}