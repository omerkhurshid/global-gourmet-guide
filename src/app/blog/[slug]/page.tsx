import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react"
import fs from "fs"
import path from "path"
import { remark } from "remark"
import html from "remark-html"

interface BlogPost {
  title: string
  slug: string
  content: string
  city: string
  publishDate: string
  readTime: string
  description: string
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const blogPosts: Record<string, BlogPost> = {
    "london-summer-outdoor-dining": {
      title: "Summer Dining: Best Outdoor Restaurants and Terraces in London",
      slug: "london-summer-outdoor-dining",
      city: "London",
      publishDate: "August 19, 2024",
      readTime: "8 min read",
      description: "Discover London's most spectacular rooftop terraces, hidden gardens, and canal-side dining spots perfect for summer dining.",
      content: "" // Will be loaded from file
    },
    "nyc-summer-outdoor-dining": {
      title: "Summer Dining: Best Outdoor Restaurants and Terraces in New York City", 
      slug: "nyc-summer-outdoor-dining",
      city: "New York",
      publishDate: "August 19, 2024", 
      readTime: "8 min read",
      description: "From Brooklyn Bridge views to Manhattan rooftops, explore NYC's finest al fresco dining destinations.",
      content: "" // Will be loaded from file
    }
  }

  const post = blogPosts[slug]
  if (!post) return null

  try {
    const filePath = path.join(process.cwd(), `src/content/blog/${slug}.md`)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    
    // Process markdown
    const processedContent = await remark().use(html).process(fileContent)
    post.content = processedContent.toString()
    
    return post
  } catch (error) {
    return null
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'london-summer-outdoor-dining' },
    { slug: 'nyc-summer-outdoor-dining' }
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} | Restaurant Guide`,
    description: post.description,
    keywords: `${post.city.toLowerCase()} restaurants, outdoor dining, summer dining, rooftop restaurants, terrace dining`,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center mr-6">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="font-semibold">{post.city}</span>
            </div>
            <div className="flex items-center mr-6">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{post.publishDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-6">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {post.description}
          </p>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-black prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-black prose-strong:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Related Content */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-black mb-8 text-center">
            EXPLORE MORE DINING GUIDES
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/blog"
              className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-black text-lg text-black group-hover:underline mb-2">
                ALL RESTAURANT GUIDES
              </h3>
              <p className="text-gray-600 text-sm">
                Browse our complete collection of dining guides and restaurant insights
              </p>
            </Link>
            <Link
              href="/"
              className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-black text-lg text-black group-hover:underline mb-2">
                BROWSE BY CITY
              </h3>
              <p className="text-gray-600 text-sm">
                Discover restaurants in 21+ cities across 5 countries worldwide
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}