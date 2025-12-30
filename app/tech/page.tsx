import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag, Cpu, Smartphone, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { getAllPosts } from "@/lib/blogger"

export const metadata = {
  title: "Tech News - HindiTechGuide | लेटेस्ट मोबाइल और गैजेट्स समाचार",
  description:
    "हिंदी में लेटेस्ट टेक न्यूज़, स्मार्टफोन लॉन्च, AI अपडेट्स, और गैजेट रिव्यूज। टेक्नोलॉजी की दुनिया की हर खबर अब हिंदी में।",
  openGraph: {
    title: "Tech News - HindiTechGuide",
    description: "लेटेस्ट स्मार्टफोन, ऐप्स और टेक्नोलॉजी की ताज़ा खबरें हिंदी में।",
    url: "https://hinditechguide.com/tech-news",
    siteName: "HindiTechGuide",
    type: "website",
    images: [{ url: "https://hinditechguide.com/og-tech.png" }],
  },
  alternates: {
    canonical: "https://hinditechguide.com/tech-news",
  },
}

// Helpers unchanged as they work perfectly
function cleanHtmlText(html: string) {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim()
}

function extractImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^">]+)"/)
  return match ? match[1] : null
}

export default async function TechNewsPage() {
  const items = await getAllPosts("techNews", 20)
  
  const posts = items.map((post: any) => {
    const slug = post.url.split("/").pop()?.replace(".html", "") || ""
    const cleanText = cleanHtmlText(post.content || "")
    const rawImage = extractImage(post.content)
    const image = rawImage ? rawImage.replace("s1600", "s600") : "/tech-default.webp"
    
    return {
      slug,
      title: post.title,
      description: cleanText.slice(0, 160) + "...",
      category: post.labels?.[0] || "Technology",
      tags: post.labels?.slice(1) || [],
      readTime: Math.ceil(cleanText.split(" ").length / 200) + " min read",
      date: post.published,
      image
    }
  })

  return (
    <>
      <WebPageSchema
        name="Tech News - HindiTechGuide"
        description="Daily Technology updates, Smartphone reviews and Software news in Hindi"
        url="https://hinditechguide.com/tech-news"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "Tech News", url: "https://hinditechguide.com/tech-news" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 border-b pb-8">
          <div className="flex items-center gap-3 mb-4 text-primary font-bold tracking-widest uppercase text-sm">
            <Globe className="h-4 w-4 animate-pulse" />
            Live Updates
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl flex items-center gap-4">
            <Smartphone className="h-10 w-10 text-primary" />
            Tech News
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
            स्मार्टफोन लॉन्च, नए ऐप्स, AI की दुनिया और भविष्य की टेक्नोलॉजी — आसान हिंदी में।
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any, i: number) => (
            <article key={post.slug} className="group" itemScope itemType="https://schema.org/TechArticle">
              <Link href={`/tech-news/${post.slug}`} className="block h-full">
                <Card className="h-full border-none shadow-none hover:bg-muted/50 transition-colors rounded-xl overflow-hidden">
                  <div className="relative aspect-video overflow-hidden rounded-xl border">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority={i < 3}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                       <Badge className="bg-black/70 backdrop-blur-md text-white border-none">
                         {post.category}
                       </Badge>
                    </div>
                  </div>

                  <CardHeader className="px-0">
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-base mt-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-0">
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-tighter">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{new Date(post.date).toLocaleDateString("hi-IN")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag: string) => (
                        <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-[10px] font-bold text-secondary-foreground">
                          #{tag}
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