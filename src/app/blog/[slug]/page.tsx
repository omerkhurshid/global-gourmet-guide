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
import { autumnFestivalFoodData } from "@/data/blog/autumn-festival-food-lahore-karachi"
import { lahoreLateNightFoodData } from "@/data/blog/lahore-late-night-food-culture"
import { karachiFoodRevolution2025Data } from "@/data/blog/karachi-food-revolution-2025"
import { christmasDiningNewYork2025Data } from "@/data/blog/christmas-dining-new-york-2024"
import { newYearsEveDiningNewYork2025Data } from "@/data/blog/new-years-eve-dining-new-york-2024"
import { christmasDiningLondon2025Data } from "@/data/blog/christmas-dining-london-2024"
import { newYearsEveDiningLondon2025Data } from "@/data/blog/new-years-eve-dining-london-2025"
import { christmasDiningParis2025Data } from "@/data/blog/christmas-dining-paris-2024"
import { christmasDiningLahore2025Data } from "@/data/blog/christmas-dining-lahore-2024"
import { newYearsEveDiningKarachi2025Data } from "@/data/blog/new-years-eve-dining-karachi-2024"
import { christmasDiningMumbai2025Data } from "@/data/blog/christmas-dining-mumbai-2024"
import { christmasDiningLosAngeles2025Data } from "@/data/blog/christmas-dining-los-angeles-2025"
import { newYearsEveDiningLosAngeles2025Data } from "@/data/blog/new-years-eve-dining-los-angeles-2025"
import { christmasDiningChicago2025Data } from "@/data/blog/christmas-dining-chicago-2025"
import { christmasDiningEdinburgh2025Data } from "@/data/blog/christmas-dining-edinburgh-2025"
import { newYearsEveDiningEdinburgh2025Data } from "@/data/blog/new-years-eve-dining-edinburgh-2025"

async function getBlogPostData(slug: string) {
  const blogDataMap: Record<string, any> = {
    "london-summer-outdoor-dining": { type: "summer", data: londonSummerData },
    "nyc-summer-outdoor-dining": { type: "summer", data: nycSummerData },
    "gcse-free-food": { type: "gcse", data: gcseFreeFood },
    "korean-food-revolution-nyc": { type: "trending", data: koreanNYCData },
    "pakistani-korean-fusion-lahore": { type: "trending", data: pakKoreanFusionData },
    "sustainable-seafood-karachi": { type: "trending", data: sustainableSeafoodKarachiData },
    "sake-revolution-usa": { type: "trending", data: sakeRevolutionUSAData },
    "filipino-food-boom-usa": { type: "trending", data: filipinoFoodUSAData },
    "autumn-festival-food-lahore-karachi": { type: "trending", data: autumnFestivalFoodData },
    "lahore-late-night-food-culture": { type: "trending", data: lahoreLateNightFoodData },
    "karachi-food-revolution-2025": { type: "trending", data: karachiFoodRevolution2025Data },
    "christmas-dining-new-york-2025": { type: "trending", data: christmasDiningNewYork2025Data },
    "new-years-eve-dining-new-york-2025": { type: "trending", data: newYearsEveDiningNewYork2025Data },
    "christmas-dining-london-2025": { type: "trending", data: christmasDiningLondon2025Data },
    "new-years-eve-dining-london-2025": { type: "trending", data: newYearsEveDiningLondon2025Data },
    "christmas-dining-paris-2025": { type: "trending", data: christmasDiningParis2025Data },
    "christmas-dining-lahore-2025": { type: "trending", data: christmasDiningLahore2025Data },
    "new-years-eve-dining-karachi-2025": { type: "trending", data: newYearsEveDiningKarachi2025Data },
    "christmas-dining-mumbai-2025": { type: "trending", data: christmasDiningMumbai2025Data },
    "christmas-dining-los-angeles-2025": { type: "trending", data: christmasDiningLosAngeles2025Data },
    "new-years-eve-dining-los-angeles-2025": { type: "trending", data: newYearsEveDiningLosAngeles2025Data },
    "christmas-dining-chicago-2025": { type: "trending", data: christmasDiningChicago2025Data },
    "christmas-dining-edinburgh-2025": { type: "trending", data: christmasDiningEdinburgh2025Data },
    "new-years-eve-dining-edinburgh-2025": { type: "trending", data: newYearsEveDiningEdinburgh2025Data }
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
    { slug: 'filipino-food-boom-usa' },
    { slug: 'autumn-festival-food-lahore-karachi' },
    { slug: 'lahore-late-night-food-culture' },
    { slug: 'karachi-food-revolution-2025' },
    { slug: 'christmas-dining-new-york-2025' },
    { slug: 'new-years-eve-dining-new-york-2025' },
    { slug: 'christmas-dining-london-2025' },
    { slug: 'new-years-eve-dining-london-2025' },
    { slug: 'christmas-dining-paris-2025' },
    { slug: 'christmas-dining-lahore-2025' },
    { slug: 'new-years-eve-dining-karachi-2025' },
    { slug: 'christmas-dining-mumbai-2025' },
    { slug: 'christmas-dining-los-angeles-2025' },
    { slug: 'new-years-eve-dining-los-angeles-2025' },
    { slug: 'christmas-dining-chicago-2025' },
    { slug: 'christmas-dining-edinburgh-2025' },
    { slug: 'new-years-eve-dining-edinburgh-2025' }
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
      if (params.slug.includes('christmas')) {
        keywords = `Christmas dining ${data.city.toLowerCase()}, Christmas restaurants ${data.city.toLowerCase()}, holiday dining 2025, Christmas dinner, festive restaurants`
      } else if (params.slug.includes('new-years-eve')) {
        keywords = `New Year's Eve dining ${data.city.toLowerCase()}, NYE restaurants ${data.city.toLowerCase()}, New Year's Eve 2025, midnight dining, celebration restaurants`
      } else {
        keywords = `trending restaurants, ${data.city.toLowerCase()} restaurants, food trends 2025, restaurant trends`
      }
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