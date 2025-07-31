import Link from "next/link"
import { Logo } from "@/components/ui/logo"

export function Footer() {
  return (
    <footer className="bg-black text-white" style={{backgroundColor: '#2C2C2C'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="text-white leading-tight">
                <div className="text-2xl font-black" style={{letterSpacing: '-0.02em'}}>GLOBAL<br/>GOURMET<br/>GUIDE</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm">
              Curating exceptional dining experiences across the globe. Discover your next unforgettable meal.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4" style={{letterSpacing: '0.08em'}}>SITEMAP</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold mb-4" style={{letterSpacing: '0.08em'}}>LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white border-opacity-20">
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} GLOBAL GOURMET GUIDE
          </p>
        </div>
      </div>
    </footer>
  )
}