import { notFound } from "next/navigation"
import { SummerBlogLayout } from "@/components/blog/summer-blog-layout"
import { londonSummerData } from "@/data/blog/london-summer-outdoor"
import { nycSummerData } from "@/data/blog/nyc-summer-outdoor"

async function getBlogPostData(slug: string) {
  const blogDataMap: Record<string, any> = {
    "london-summer-outdoor-dining": londonSummerData,
    "nyc-summer-outdoor-dining": nycSummerData
  }
  
  return blogDataMap[slug] || null
}

export async function generateStaticParams() {
  return [
    { slug: 'london-summer-outdoor-dining' },
    { slug: 'nyc-summer-outdoor-dining' }
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const postData = await getBlogPostData(params.slug)
  
  if (!postData) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${postData.title} | Restaurant Guide`,
    description: postData.description,
    keywords: `${postData.city.toLowerCase()} restaurants, outdoor dining, summer dining, rooftop restaurants, terrace dining`,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const postData = await getBlogPostData(params.slug)

  if (!postData) {
    notFound()
  }

  return <SummerBlogLayout data={postData} />
}