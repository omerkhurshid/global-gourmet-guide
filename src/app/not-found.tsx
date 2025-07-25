import Link from "next/link"
import { MapPin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-6" />
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. 
          The city or restaurant you're searching for might not be available yet.
        </p>
        
        <div className="space-y-4">
          <Button asChild size="lg">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
          </Button>
          
          <div className="text-sm text-gray-500">
            or explore our available cities:
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" size="sm" asChild>
              <Link href="/london">London</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/lahore">Lahore</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/new-york">New York</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/paris">Paris</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}