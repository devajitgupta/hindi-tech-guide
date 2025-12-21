import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag, Car } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { getAllPosts } from "@/lib/blogger" // unified API supporting blogType

export const metadata = {
  title: "Auto News - HindiTechGuide | Car, EV & Automobile Updates",
  description:
    "हिंदी में Car News, EV लॉन्च, Electric Vehicle अपडेट, ऑटोमोबाइल रिव्यू और ताज़ा ऑटो न्यूज़।",
  openGraph: {
    title: "Auto News - HindiTechGuide",
    description:
      "Car, EV और Automobile से जुड़ी ताज़ा खबरें और लॉन्च अपडेट हिंदी में।",
    url: "https://hinditechguide.com/auto",
    siteName: "HindiTechGuide",
    type: "website",
    images: [
      {
        url: "https://hinditechguide.com/og-auto.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://hinditechguide.com/auto",
  },
}

function cleanHtmlText(html: string) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
}

function extractImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^">]+)"/)
  return match ? match[1] : null
}

export default async function AutoNewsPage() {
  // ✅ Fetch from Auto Blog
  const items = await getAllPosts("auto", 20)

  const posts = items.map((post: any) => {
    const slug = post.url.split("/").pop()?.replace(".html", "") || ""
    const cleanText = cleanHtmlText(post.content || "")
    const description = cleanText.slice(0, 150) + "..."
    const rawImage = extractImage(post.content)
    const image = rawImage ? rawImage.replace("s1600", "s600") : "/auto-default.webp"
    const category = post.labels?.[0] || "Auto News"
    const tags = post.labels?.slice(1) || []
    const readTime = Math.ceil(cleanText.split(" ").length / 200) + " min read"

    return { slug, title: post.title, description, category, tags, readTime, date: post.published, image }
  })

  return (
    <>
      <WebPageSchema
        name="Auto News - HindiTechGuide"
        description="Car, EV और Automobile से जुड़ी ताज़ा खबरें हिंदी में"
        url="https://hinditechguide.com/auto"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "Auto News", url: "https://hinditechguide.com/auto" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl flex justify-center gap-2">
            <Car className="h-10 w-10" />
            Auto & EV News
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Car लॉन्च, EV अपडेट, इलेक्ट्रिक व्हीकल न्यूज़ और ऑटोमोबाइल रिव्यू — हिंदी में।
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any, i: number) => (
            <article key={post.slug} className="group" itemScope itemType="https://schema.org/NewsArticle">
              <Link href={`/auto/${post.slug}`} className="block">
                <Card className="h-full overflow-hidden transition-shadow hover:shadow-xl">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority={i < 2}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary">{post.category}</Badge>
                    <CardTitle className="mt-2 line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time>
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
                        <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Tag className="h-3 w-3" />
                          {tag}
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
