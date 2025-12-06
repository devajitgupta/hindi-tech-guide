// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react"
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getAllSlugs, getLatestPosts, getPostBySlug, getRelatedPosts } from "@/lib/blogger"
import '../blog-post.css'
import ReadAlso from "@/components/ReadAlso"
import LatestPosts from "@/components/LatestPosts"


interface PageProps {
  params: { slug: string } | Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return await getAllSlugs()
}

export function calculateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
}

function processContentHTML(html: string): string {
  let processed = html.replace(/<!--[\s\S]*?-->/g, '')
  processed = processed.replace(/style="[^"]*font-size:\s*[^;"]*;?[^"]*"/gi, (match) => {
    return match.replace(/font-size:\s*[^;"]*/gi, '')
  })
  processed = processed.replace(/style="\s*"/gi, '')

  processed = processed.replace(/\s{2,}/g, ' ')
  processed = processed.replace(/^\s+|\s+$/gm, '')
  processed = processed.replace(/\n{2,}/g, '\n')

  return processed
}

function extractImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^">]+)"/)
  return match ? match[1] : null
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);


  if (!post) return {};

  const base = "https://www.hinditechguide.com";

  const desc = post.content.replace(/<[^>]+>/g, "").slice(0, 150);
  const ogImage = post.images?.[0]?.url
    ? `${base}${post.images[0].url}`
    : `${base}/default-og.jpg`;

  const canonicalUrl = `${base}/blog/${slug}`;

  return {
    title: `${post.title} | HindiTechGuide`,
    description: desc,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: post.title,
      description: desc,
      url: canonicalUrl,
      type: "article",
      siteName: "HindiTechGuide",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: desc,
      images: [ogImage],
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()
  const relatedPosts = await getRelatedPosts(slug, post.labels);

  const description = post.content.replace(/<[^>]+>/g, "").slice(0, 150) + "..."
  const category = post.labels?.[0] || "General"
  const tags = post.labels?.slice(1) || []
  const readTime = calculateReadingTime(post.content)


  const image = extractImage(post.content) || "/default-og.jpg"
  function removeFirstImage(html: string): string {
    return html.replace(/<img[^>]+>/, '');
  }


  // Process the content to remove problematic styling
  const processedContent = removeFirstImage(processContentHTML(post.content));
  const latestPosts = await getLatestPosts();


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
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "Blog", url: "https://hinditechguide.com/blog" },
          { name: post.title, url: `https://hinditechguide.com/blog/${slug}` },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            वापस Blog पर
          </Button>
        </Link>

        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {category}
          </Badge>
          <h1 className="mb-4 border-b font-bold leading-normal sm:text-5xl">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground text-pretty">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <Link
                href="/author"
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                {post.author.displayName}
              </Link>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.published}>
                {new Date(post.published).toLocaleDateString("hi-IN")}
              </time>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime} पढ़ने का समय</span>
            </div>
          </div>

          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <div
                  key={tag}
                  className="flex items-center gap-1 text-xs text-muted-foreground"
                >
                  <Tag className="h-3 w-3" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          )}
        </header>
        <Image
          src={image}
          alt={post.title}
          width={1200}
          height={628}
          className="rounded-xl w-full h-auto mb-6"
          priority
        />
        <div
          className="prose prose-lg max-w-none dark:prose-invert
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-4 prose-h1:mt-8
            prose-h2:text-3xl prose-h2:mb-3 prose-h2:mt-6
            prose-h3:text-2xl prose-h3:mb-2 prose-h3:mt-4
            prose-p:text-base prose-p:leading-relaxed prose-p:mb-4
            prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4
            prose-li:mb-2
            prose-strong:font-bold prose-strong:text-foreground
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-lg prose-img:shadow-md
            [&_hr]:my-8 [&_hr]:border-border"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
        <ReadAlso posts={relatedPosts} />
        <LatestPosts posts={latestPosts} />


      </article>
    </>
  )
}