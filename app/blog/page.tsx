import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, RefreshCcw, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { getAllPosts, getPostsByLabel } from "@/lib/blogger"

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
function cleanHtmlText(html: string) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
}


export default async function BlogPage() {
  const items = await getAllPosts()
  const posts = items.map((post: any) => {
    const slug = post.url.split("/").pop()?.replace(".html", "") || ""
    const cleanText = cleanHtmlText(post.content || "")
    const description = cleanText.slice(0, 150) + "..."
    const rawImage = extractImage(post.content)
    const optimizedImage = rawImage
      ? rawImage.replace("s1600", "s600")
      : "/default-og.webp"
    function extractImage(html: string): string | null {
      const match = html.match(/<img[^>]+src="([^">]+)"/)
      return match ? match[1] : null
    }
    // Dates Logic
    const publishDate = new Date(post.published)
    const updateDate = new Date(post.updated)
    const isUpdated = updateDate.getTime() > publishDate.getTime() + 86400000

    const image = extractImage(post.content)
    const category = post.labels?.[0] || "General"
    const readTime = Math.ceil(cleanText.split(" ").length / 200) + " min read"

    return {
      slug,
      title: post.title + " | HindiTechGuide",
      description,
      category,
      tags: post.labels || [], readTime,
      publishedDate: post.published,
      updatedDate: post.updated,
      isUpdated, 
      image: optimizedImage,
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
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl tracking-tight">हमारा लेटेस्ट Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            लेटेस्ट टेक्नोलॉजी, मोबाइल टिप्स और ऑनलाइन सुरक्षा के बारे में विस्तार से जानें।
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any, i: number) => (
            <article key={post.slug} className="group flex flex-col" itemScope itemType="https://schema.org/BlogPosting">
              <Link href={`/blog/${post.slug}`} className="flex-1">
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-card">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority={i < 3}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                       <Badge className="bg-white/90 text-black hover:bg-white border-none backdrop-blur-sm">
                         {post.category}
                       </Badge>
                       {post.isUpdated && (
                         <Badge variant="secondary" className="bg-primary text-primary-foreground border-none">
                           Updated
                         </Badge>
                       )}
                    </div>
                  </div>

                  <CardHeader className="pt-6">
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors" itemProp="headline">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-3 line-clamp-3 text-base leading-relaxed" itemProp="description">
                      {post.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto">
                    {/* Date & Read Time Row */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        {post.isUpdated ? <RefreshCcw className="h-3.5 w-3.5" /> : <Calendar className="h-3.5 w-3.5" />}
                        <time dateTime={post.publishedDate}>
                          {new Date(post.isUpdated ? post.updatedDate : post.publishedDate).toLocaleDateString("hi-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-2 border-t pt-4">
                      {post.tags.slice(0, 3).map((tag: string) => (
                        <span key={tag} className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                          <Tag className="h-3 w-3" /> {tag}
                        </span>
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
