// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react"
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
const BLOG_ID = process.env.BLOG_ID;
const API_KEY = process.env.BLOGGER_API_KEY;

interface PageProps {
  params: { slug: string } | Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=20`
  )
  const data = await res.json()
  const posts = data.items || []

  return posts.map((post: any) => {
    const slug = post.url.split("/").pop()?.replace(".html", "")
    return { slug }
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=20`
  )
  const data = await res.json()
  const posts = data.items || []

  const post = posts.find(
    (p: any) => p.url.split("/").pop()?.replace(".html", "") === slug
  )

  if (!post) notFound()

  const description = post.content.replace(/<[^>]+>/g, "").slice(0, 150) + "..."
  const category = post.labels?.[0] || "General"
  const tags = post.labels?.slice(1) || []
  const readTime = Math.ceil(description.split(" ").length / 200) + " min read"
  const image = post.images?.[0]?.url || post.author.image.url

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={description}
        image={image}
        datePublished={post.published}
        dateModified={post.updated}
        author={{ name: post.author.displayName, jobTitle: "Author" }}
        url={`https://hinditechguide.com/blog/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "होम", url: "https://hinditechguide.com" },
          { name: "ब्लॉग", url: "https://hinditechguide.com/blog" },
          { name: post.title, url: `https://hinditechguide.com/blog/${slug}` },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            वापस ब्लॉग पर
          </Button>
        </Link>

        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">{category}</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">{post.title}</h1>
          <p className="text-xl text-muted-foreground text-pretty">{description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author.displayName}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.published}>{new Date(post.published).toLocaleDateString("hi-IN")}</time>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime} पढ़ने का समय</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <div key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                <Tag className="h-3 w-3" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
          <Image src={image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </>
  )
}
