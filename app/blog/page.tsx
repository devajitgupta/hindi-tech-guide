import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, RefreshCcw, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { getAllPosts } from "@/lib/blogger"
import { BlogPost } from "@/lib/blog"
import { getBlogList } from "@/lib/getBlogList"
import Script from "next/script"

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
  const posts: BlogPost[] = await getBlogList()

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "HindiTechGuide Blog Posts",
    "description": "मोबाइल और गैजेट्स के बारे में हिंदी में जानकारी।",
    "url": "https://hinditechguide.com/blog",
    "itemListElement": posts.map((post: BlogPost, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://hinditechguide.com/blog/${post.slug}`,
      "name": post.title,
      "image": post.image
    }))
  };

  return (
    <>
      <Script
        id="blog-itemlist-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

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
                        priority={i < 3}
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
                    <CardHeader className="p-4 sm:p-6 text-center sm:text-left">
                      {/* Title */}
                      <h2
                        className="text-xl sm:text-2xl md:text-3xl font-bold
    leading-snug sm:leading-tight
    tracking-tight sm:tracking-normal
    text-gray-900 dark:text-gray-100
    group-hover:text-primary
    transition-all duration-300
    group-hover:translate-x-1
    break-words"
                      >
                        {post.title}
                      </h2>

                      {/* Description */}
                      <CardDescription
                        className="line-clamp-2 sm:line-clamp-3
    text-sm sm:text-base md:text-lg
    text-gray-600 dark:text-gray-400
    mt-3 sm:mt-4
    leading-relaxed sm:leading-normal
    relative overflow-hidden"
                      >
                        {/* Gradient fade */}
                        <span
                          className="bg-gradient-to-r from-transparent via-transparent
      to-white dark:to-gray-900
      absolute right-0 top-0 h-full w-12
      hidden sm:block"
                        />
                        {post.description}
                      </CardDescription>
                    </CardHeader>


                    <CardContent className="px-6 pb-6 mt-auto">
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5" />
                          <span className="font-medium">
                            {new Date(post.isRecentlyUpdated ? post.updatedDate : post.publishedDate)
                              .toLocaleDateString("hi-IN", {
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
