import Image from 'next/image'

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
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src="/new_icon.png"
        alt="Global Gourmet Guide Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}