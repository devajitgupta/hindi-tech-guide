// app/blog/page.tsx
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
const BLOG_ID = process.env.BLOG_ID;
const API_KEY = process.env.BLOGGER_API_KEY;
export default async function BlogPage() {
  // Fetch Blogger posts
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=20`,
    { next: { revalidate: 3600 } }
  )
  const data = await res.json()
  const items = data.items || []

  // Map Blogger posts to our card shape
  const posts = items.map((post: any) => {
    const slug = post.url.split("/").pop()?.replace(".html", "") || ""
    const description = post.content.replace(/<[^>]+>/g, "").slice(0, 150) + "..."
    const category = post.labels?.[0] || "General"
    const tags = post.labels?.slice(1) || []
    const readTime = Math.ceil(description.split(" ").length / 200) + " min read"
    const image = post.images?.[0]?.url || post.author.image.url

    return { slug, title: post.title, description, category, tags, readTime, date: post.published, image }
  })

  return (
    <>
      <WebPageSchema
        name="ब्लॉग - HindiTechGuide"
        description="तकनीकी गाइड, ट्यूटोरियल और लेख हिंदी में"
        url="https://hinditechguide.com/blog"
      />
      <BreadcrumbSchema
        items={[
          { name: "होम", url: "https://hinditechguide.com" },
          { name: "ब्लॉग", url: "https://hinditechguide.com/blog" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Static header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">हमारा ब्लॉग</h1>
          <p className="mt-4 text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            नवीनतम तकनीकी गाइड, ट्यूटोरियल और समाचार हिंदी में। वेब डेवलपमेंट, AI, मोबाइल ऐप्स और अधिक विषयों पर।
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2 text-balance group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-pretty">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("hi-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag: string) => (
                      <div key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mt-16 border-t pt-16">
          <h2 className="mb-8 text-2xl font-bold">श्रेणियां</h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(posts.map((post: any) => post.category))).map((category: any) => (
              <Badge key={category} variant="outline" className="px-4 py-2 text-base">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
