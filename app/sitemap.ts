import { MetadataRoute } from "next"

const BLOG_ID = process.env.BLOG_ID
const API_KEY = process.env.BLOGGER_API_KEY

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch latest blog posts
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=500`,
    { next: { revalidate: 86400 } } // 24 hours cache — updates daily
  )

  const data = await res.json()
  const items = data.items || []

  // Convert posts → sitemap format
  const blogUrls = items.map((post: any) => {
    const slug = post.url.split("/").pop()?.replace(".html", "")
    return {
      url: `https://hinditechguide.com/blog/${slug}`,
      lastModified: post.updated,
      changeFrequency: "daily",
      priority: 0.8,
    }
  })

  // Static pages
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: "https://hinditechguide.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://hinditechguide.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://hinditechguide.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://hinditechguide.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]

  return [...staticUrls, ...blogUrls]
}
