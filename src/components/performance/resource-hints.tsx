import { cities } from "@/data/cities"

export function ResourceHints() {
  // Preload critical images for the first few cities (above the fold)
  const priorityCities = cities.slice(0, 6)
  
  return (
    <>
      {/* DNS Prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//googletagmanager.com" />
      <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
      <link rel="dns-prefetch" href="//vercel.com" />
      
      {/* Preconnect to critical external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload critical images */}
      {priorityCities.map((city) => (
        <link
          key={city.id}
          rel="preload"
          href={city.heroImage}
          as="image"
          type="image/webp"
        />
      ))}
      
      {/* Preload critical CSS */}
      <link rel="preload" href="/_next/static/css/app/globals.css" as="style" />
      
      {/* Module preload for critical JavaScript */}
      <link rel="modulepreload" href="/_next/static/chunks/main.js" />
      <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
    </>
  )
}