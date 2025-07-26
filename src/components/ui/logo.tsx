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
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer circle */}
        <circle cx="50" cy="50" r="50" fill="#b07968"/>
        
        {/* Inner circles */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="2"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="2"/>
        
        {/* Decorative arc at top */}
        <path
          d="M30 35 Q40 25 50 35 Q60 25 70 35"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Fork */}
        <g transform="translate(35, 40)">
          <line x1="0" y1="35" x2="0" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="-3" y1="15" x2="-3" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="0" y1="15" x2="0" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="15" x2="3" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="6" y1="15" x2="6" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </g>
        
        {/* Knife */}
        <g transform="translate(50, 40)">
          <line x1="0" y1="35" x2="0" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M0 5 L3 8 L0 11 Z" fill="white"/>
        </g>
        
        {/* Spoon */}
        <g transform="translate(65, 40)">
          <line x1="0" y1="35" x2="0" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="0" cy="10" r="4" fill="none" stroke="white" strokeWidth="2"/>
        </g>
      </svg>
    </div>
  )
}