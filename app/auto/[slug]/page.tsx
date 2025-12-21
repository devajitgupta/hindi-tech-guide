import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Tag, Car } from "lucide-react"
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  getAllSlugs,
  getLatestPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blogger" // unified API

import '../../blog/blog-post.css'
import ReadAlso from "@/components/ReadAlso"
import LatestPosts from "@/components/LatestPosts"
import SocialShare from "@/components/SocialShare"

interface PageProps {
  params: { slug: string } | Promise<{ slug: string }>
}

/* ---------- SSG ---------- */

export async function generateStaticParams() {
  return await getAllSlugs("auto") // fetch slugs from Auto Blog
}

/* ---------- Helpers ---------- */

function calculateReadingTime(text: string) {
  const words = text.replace(/<[^>]+>/g, "").trim().split(/\s+/).length
  return `${Math.ceil(words / 200)} min read`
}

function processContentHTML(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/style="[^"]*font-size:[^"]*"/gi, "")
    .replace(/style="\s*"/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim()
}

function extractImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^">]+)"/i)
  return match ? match[1] : null
}

/* ---------- Metadata ---------- */

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug, "auto") // Auto Blog
  if (!post) return {}

  const base = "https://hinditechguide.com"
  const url = `${base}/auto/${slug}`
  const description = post.content.replace(/<[^>]+>/g, "").slice(0, 150) + "..."
  const ogImage = extractImage(post.content) || post.images?.[0]?.url || `${base}/auto-default.webp`

  return {
    title: `${post.title} | Auto News`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      type: "article",
      siteName: "HindiTechGuide",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      publishedTime: post.published,
      modifiedTime: post.updated,
      tags: post.labels || [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage],
      creator: "@hinditechguide",
    },
  }
}

/* ---------- Page ---------- */

export default async function AutoPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug, "auto") // Auto Blog
  if (!post) notFound()

  const relatedPosts = await getRelatedPosts(slug, post.labels, "auto")
  const latestPosts = await getLatestPosts("auto")

  const description = post.content.replace(/<[^>]+>/g, "").slice(0, 150) + "..."
  const category = post.labels?.[0] || "Auto News"
  const tags = post.labels?.slice(1) || []
  const readTime = calculateReadingTime(post.content)
  const featuredImage = extractImage(post.content) || "/auto-default.webp"
  const contentHTML = processContentHTML(post.content.replace(/<img[^>]+>/i, ""))

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={description}
        image={featuredImage}
        datePublished={post.published}
        dateModified={post.updated}
        author={{ name: post.author.displayName, jobTitle: "Auto Journalist" }}
        url={`https://hinditechguide.com/auto/${slug}`}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "Auto News", url: "https://hinditechguide.com/auto" },
          { name: post.title, url: `https://hinditechguide.com/auto/${slug}` },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/auto">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            वापस Auto News पर
          </Button>
        </Link>

        <header className="mb-8">
          <Badge variant="secondary" className="mb-4 flex gap-2 w-fit">
            <Car className="h-4 w-4" />
            {category}
          </Badge>

          <h1 className="mb-4 border-b pb-4 text-3xl font-bold sm:text-5xl">{post.title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author.displayName}
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>{new Date(post.published).toLocaleDateString("hi-IN")}</time>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readTime}
            </div>
          </div>

          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag: any) => (
                <span key={tag} className="flex items-center gap-1 text-xs">
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
          <Image src={featuredImage} alt={post.title} fill priority className="object-cover" />
        </div>

        <div
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600"
          dangerouslySetInnerHTML={{ __html: contentHTML }}
        />

        <SocialShare title={post.title} />
        <ReadAlso posts={relatedPosts} />
        <LatestPosts posts={latestPosts} />
      </article>
    </>
  )
}
