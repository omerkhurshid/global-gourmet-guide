interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = "", size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', 
    lg: 'w-12 h-12'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Location pin shape */}
        <path
          d="M50 0C22.386 0 0 22.386 0 50C0 77.614 50 120 50 120C50 120 100 77.614 100 50C100 22.386 77.614 0 50 0Z"
          fill="#1F2937"
        />
        
        {/* Globe/fork design inside pin */}
        <g transform="translate(20, 15)">
          {/* Fork prongs */}
          <rect x="26" y="10" width="3" height="25" fill="#F59E0B" rx="1.5"/>
          <rect x="31" y="10" width="3" height="25" fill="#F59E0B" rx="1.5"/>
          
          {/* Fork handle */}
          <rect x="25" y="30" width="10" height="35" fill="#F59E0B" rx="5"/>
          
          {/* Globe segments */}
          <path
            d="M15 30C15 20 20 15 30 15C40 15 45 20 45 30C45 40 40 45 30 45C20 45 15 40 15 30Z"
            fill="#DC2626"
            opacity="0.8"
          />
          
          <path
            d="M10 35C10 25 15 20 25 20C35 20 40 25 40 35C40 45 35 50 25 50C15 50 10 45 10 35Z"
            fill="#F59E0B"
            opacity="0.7"
          />
          
          <path
            d="M20 25C20 20 22 18 27 18C32 18 35 20 35 25C35 30 32 32 27 32C22 32 20 30 20 25Z"
            fill="#FBBF24"
            opacity="0.6"
          />
        </g>
        
        {/* Pin tip */}
        <circle cx="50" cy="50" r="8" fill="#374151"/>
      </svg>
    </div>
  )
}