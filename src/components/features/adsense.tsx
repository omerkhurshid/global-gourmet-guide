"use client"

import Script from "next/script"
import { useEffect, useRef } from "react"

export function AdSenseScript() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7652171156655375"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

interface AdSenseAdProps {
  adSlot: string
  adFormat?: string
  fullWidthResponsive?: boolean
  className?: string
}

export function AdSenseAd({ 
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true,
  className = ""
}: AdSenseAdProps) {
  const adRef = useRef<HTMLModElement>(null)
  
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle && adRef.current) {
        // Clear any existing content
        adRef.current.innerHTML = ''
        
        // Push the ad to the queue
        ;(window.adsbygoogle as any[]).push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7652171156655375"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  )
}