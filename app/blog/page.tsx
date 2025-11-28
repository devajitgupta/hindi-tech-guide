import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { getAllPosts } from "@/lib/blogger"

export const metadata = {
  title: "Blog - HindiTechGuide | टेक न्यूज़ और ट्यूटोरियल",
  description: "हिंदी में नवीनतम तकनीक, गाइड, Blog और टिप्स। रोजाना अपडेटेड Blog सेक्शन।",
  openGraph: {
    title: "Blog - HindiTechGuide",
    description: "हिंदी में नवीनतम तकनीक Blog और ट्यूटोरियल।",
    url: "https://hinditechguide.com/blog",
    siteName: "HindiTechGuide",
    type: "website",
    images: [
      {
        url: "https://hinditechguide.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
alternates: {
  canonical: "https://hinditechguide.com/blog",
},

}


export default async function BlogPage() {

  // Get all posts
  const items = await getAllPosts()

  const posts = items.map((post: any) => {
    const slug = post.url.split("/").pop()?.replace(".html", "") || ""

    const cleanText = post.content
      ?.replace(/<[^>]+>/g, "")
      ?.replace(/\s+/g, " ")
      ?.trim() || ""

    const description = cleanText.slice(0, 150) + "..."

    // Extract image
    function extractImage(html: string): string | null {
      const match = html.match(/<img[^>]+src="([^">]+)"/)
      return match ? match[1] : null
    }

    const image = extractImage(post.content)
    const category = post.labels?.[0] || "General"
    const tags = post.labels?.slice(1) || []
    const readTime = Math.ceil(cleanText.split(" ").length / 200) + " min read"

    return {
      slug,
    title: post.title + " | HindiTechGuide",
      description,
      category,
      tags,
      readTime,
      date: post.published,
      image,
    }
  })

  return (
    <>
      <WebPageSchema
        name="Blog - HindiTechGuide"
        description="तकनीकी गाइड, ट्यूटोरियल और लेख हिंदी में"
        url="https://hinditechguide.com/blog"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "Blog", url: "https://hinditechguide.com/blog" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">हमारा Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            नवीनतम तकनीक और ट्यूटोरियल हिंदी में।
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <article
              key={post.slug}
              className="group block"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">

                  {/* Blog Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.png"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={false}
                    />
                  </div>

                  {/* Blog Card Header */}
                  <CardHeader>
                    <Badge variant="secondary">{post.category}</Badge>
                    <CardTitle className="line-clamp-2 mt-2" itemProp="headline">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3" itemProp="description">
                      {post.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">

                      {/* Date */}
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time itemProp="datePublished">
                          {new Date(post.date).toLocaleDateString("hi-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>

                      {/* Read Time */}
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag: any) => (
                        <div
                          key={tag}
                          className="flex items-center gap-1 text-xs text-muted-foreground"
                          itemProp="keywords"
                        >
                          <Tag className="h-3 w-3" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </article>
          ))}

        </div>
      </div>
    </>
  )
}
