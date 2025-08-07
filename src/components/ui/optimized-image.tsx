"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fill?: boolean
  sizes?: string
  quality?: number
}

export function OptimizedImage({ 
  src, 
  alt, 
  width,
  height,
  priority = false,
  className,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  
  // Get base path and name for optimized versions
  const getOptimizedSrc = (originalSrc: string, suffix: string, format: string) => {
    if (originalSrc.includes('/cities/') || originalSrc.includes('/spotlight/')) {
      const parts = originalSrc.split('/')
      const fileName = parts[parts.length - 1]
      const baseName = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '')
      const directory = parts.slice(0, -1).join('/')
      
      return `${directory}/optimized/${baseName}${suffix}.${format}`
    }
    return originalSrc
  }
  
  // Generate srcSet for responsive images
  const generateSrcSet = (originalSrc: string) => {
    if (!originalSrc.includes('/cities/') && !originalSrc.includes('/spotlight/')) {
      return undefined
    }
    
    const sizes = originalSrc.includes('/cities/') 
      ? [
          { suffix: '-sm', width: 480 },
          { suffix: '-md', width: 768 },
          { suffix: '-lg', width: 1280 },
          { suffix: '-xl', width: 1920 }
        ]
      : [
          { suffix: '-sm', width: 400 },
          { suffix: '-md', width: 600 },
          { suffix: '-lg', width: 800 }
        ]
    
    const webpSrcSet = sizes.map(size => 
      `${getOptimizedSrc(originalSrc, size.suffix, 'webp')} ${size.width}w`
    ).join(', ')
    
    const jpegSrcSet = sizes.map(size => 
      `${getOptimizedSrc(originalSrc, size.suffix, 'jpg')} ${size.width}w`
    ).join(', ')
    
    return { webpSrcSet, jpegSrcSet }
  }
  
  const srcSets = generateSrcSet(imgSrc)
  
  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      // Fallback to original image
      setImgSrc(src)
    }
  }
  
  // If we have optimized versions, use picture element for WebP support
  if (srcSets && !hasError) {
    return (
      <picture className={className}>
        <source 
          srcSet={srcSets.webpSrcSet} 
          sizes={sizes}
          type="image/webp" 
        />
        <source 
          srcSet={srcSets.jpegSrcSet} 
          sizes={sizes}
          type="image/jpeg" 
        />
        <Image
          src={getOptimizedSrc(imgSrc, '-lg', 'jpg')}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          fill={fill}
          sizes={sizes}
          quality={quality}
          onError={handleError}
          className="w-full h-full object-cover"
        />
      </picture>
    )
  }
  
  // Fallback to regular Image component
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      fill={fill}
      sizes={sizes}
      quality={quality}
      className={className}
      onError={handleError}
    />
  )
}