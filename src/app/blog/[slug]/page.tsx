import { notFound } from "next/navigation"
import { SummerBlogLayout } from "@/components/blog/summer-blog-layout"
import { GCSEBlogLayout } from "@/components/blog/gcse-blog-layout"
import { TrendingBlogLayout } from "@/components/blog/trending-blog-layout"
import { londonSummerData } from "@/data/blog/london-summer-outdoor"
import { nycSummerData } from "@/data/blog/nyc-summer-outdoor"
import { gcseFreeFood } from "@/data/blog/gcse-free-food"
import { koreanNYCData } from "@/data/blog/korean-nyc-2025"
import { pakKoreanFusionData } from "@/data/blog/pak-korean-fusion"
import { sustainableSeafoodKarachiData } from "@/data/blog/sustainable-seafood-karachi"
import { sakeRevolutionUSAData } from "@/data/blog/sake-revolution-usa"
import { filipinoFoodUSAData } from "@/data/blog/filipino-food-usa"

async function getBlogPostData(slug: string) {
  const blogDataMap: Record<string, any> = {
    "london-summer-outdoor-dining": { type: "summer", data: londonSummerData },
    "nyc-summer-outdoor-dining": { type: "summer", data: nycSummerData },
    "gcse-free-food": { type: "gcse", data: gcseFreeFood },
    "korean-food-revolution-nyc": { type: "trending", data: koreanNYCData },
    "pakistani-korean-fusion-lahore": { type: "trending", data: pakKoreanFusionData },
    "sustainable-seafood-karachi": { type: "trending", data: sustainableSeafoodKarachiData },
    "sake-revolution-usa": { type: "trending", data: sakeRevolutionUSAData },
    "filipino-food-boom-usa": { type: "trending", data: filipinoFoodUSAData }
  }
  
  return blogDataMap[slug] || null
}

export async function generateStaticParams() {
  return [
    { slug: 'london-summer-outdoor-dining' },
    { slug: 'nyc-summer-outdoor-dining' },
    { slug: 'gcse-free-food' },
    { slug: 'korean-food-revolution-nyc' },
    { slug: 'pakistani-korean-fusion-lahore' },
    { slug: 'sustainable-seafood-karachi' },
    { slug: 'sake-revolution-usa' },
    { slug: 'filipino-food-boom-usa' }
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostData(params.slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  const data = post.data
  let keywords = ""
  
  switch (post.type) {
    case "gcse":
      keywords = "GCSE results day, free food UK, student offers, restaurant deals, GCSE 2025"
      break
    case "trending":
      keywords = `trending restaurants, ${data.city.toLowerCase()} restaurants, food trends 2025, restaurant trends`
      break
    default:
      keywords = `${data.city.toLowerCase()} restaurants, outdoor dining, summer dining, rooftop restaurants, terrace dining`
  }

  return {
    title: `${data.title} | Restaurant Guide`,
    description: data.description,
    keywords,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostData(params.slug)

  if (!post) {
    notFound()
  }

  switch (post.type) {
    case "gcse":
      return <GCSEBlogLayout data={post.data} />
    case "trending":
      return <TrendingBlogLayout data={post.data} />
    default:
      return <SummerBlogLayout data={post.data} />
  }
}