import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, RefreshCcw, Tag } from "lucide-react"
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
    const description = cleanText.length > 150
      ? cleanText.slice(0, 150) + "..."
      : cleanText;
    const rawImage = extractImage(post.content)
    const optimizedImage = rawImage
      ? rawImage.replace(/\/s\d+(-[a-zA-Z0-9-]+)?\//, "/s640/")
      : "/default-og.webp"

    function extractImage(html: string): string | null {
      const match = html.match(/<img[^>]+src="([^">]+)"/)
      return match ? match[1] : null
    }

    // UPDATED LOGIC (From Blogger API)
    const publishDate = new Date(post.published)
    const updateDate = new Date(post.updated)
    const isRecentlyUpdated = updateDate.getTime() > publishDate.getTime() + 86400000
const wordCount = cleanText.trim().split(/\s+/).filter(word => word.length > 0).length;
const readTime = wordCount > 0 ? Math.ceil(wordCount / 200) : 1;
const finalReadTime = `${readTime} min read`;
    return {
      slug,
      title: post.title,
      description,
      category: post.labels?.[0] || "Tech",
      tags: post.labels || [],
      readTime: finalReadTime,
      publishedDate: post.published,
      updatedDate: post.updated,
      isRecentlyUpdated,
      image: optimizedImage,
    }
  })

  return (
    <>
      <WebPageSchema
        name="Blog - HindiTechGuide"
        description="Latest technology guides and reviews in Hindi"
        url="https://hinditechguide.com/blog"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://hinditechguide.com" }, { name: "Blog", url: "https://hinditechguide.com/blog" }]} />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-12 text-center">
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any, i: number) => (
              <article key={post.slug} className="flex flex-col group">
                <Link href={`/blog/${post.slug}`} className="relative h-full">
                  <Card className="h-full border border-border/50 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-2xl">

                    <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl bg-muted">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority={i < 3} // First 3 images load faster
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Category & Update Badge */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-background/90 text-foreground backdrop-blur-md border-none shadow-sm">
                          {post.category}
                        </Badge>
                        {post.isRecentlyUpdated && (
                          <Badge className="bg-emerald-500 text-white border-none animate-in fade-in zoom-in">
                            <RefreshCcw className="h-3 w-3 mr-1 animate-spin-slow" /> Updated
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardHeader className="p-6">
                      {/* SEO Fix: Using h2 for card titles */}
                      <h2 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <CardDescription className="line-clamp-3 text-base mt-2">
                        {post.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 mt-auto">
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5" />
                          <span className="font-medium">
                            {new Date(post.isRecentlyUpdated ? post.updatedDate : post.publishedDate)
                              .toLocaleDateString("en-US", {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 font-semibold text-primary/80">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </article>
            ))}
          </div>
        </header>
      </main>
    </>
  )
}
