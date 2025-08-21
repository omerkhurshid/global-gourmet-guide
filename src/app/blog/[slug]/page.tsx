import { notFound } from "next/navigation"
import { SummerBlogLayout } from "@/components/blog/summer-blog-layout"
import { GCSEBlogLayout } from "@/components/blog/gcse-blog-layout"
import { londonSummerData } from "@/data/blog/london-summer-outdoor"
import { nycSummerData } from "@/data/blog/nyc-summer-outdoor"
import { gcseFreeFood } from "@/data/blog/gcse-free-food"

async function getBlogPostData(slug: string) {
  const blogDataMap: Record<string, any> = {
    "london-summer-outdoor-dining": { type: "summer", data: londonSummerData },
    "nyc-summer-outdoor-dining": { type: "summer", data: nycSummerData },
    "gcse-free-food": { type: "gcse", data: gcseFreeFood }
  }
  
  return blogDataMap[slug] || null
}

export async function generateStaticParams() {
  return [
    { slug: 'london-summer-outdoor-dining' },
    { slug: 'nyc-summer-outdoor-dining' },
    { slug: 'gcse-free-food' }
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
  const keywords = post.type === "gcse" 
    ? "GCSE results day, free food UK, student offers, restaurant deals, GCSE 2025"
    : `${data.city.toLowerCase()} restaurants, outdoor dining, summer dining, rooftop restaurants, terrace dining`

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

  if (post.type === "gcse") {
    return <GCSEBlogLayout data={post.data} />
  }

  return <SummerBlogLayout data={post.data} />
}