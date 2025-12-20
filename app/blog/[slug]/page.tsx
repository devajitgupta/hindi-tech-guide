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
import SocialShare from "@/components/SocialShare"

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
  const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/i
  const match = html.match(imgRegex)
  
  if (match && match[1]) {
    let src = match[1].trim()
    
    if (src.startsWith('/')) {
      src = `https://www.hinditechguide.com${src}`
    }
    
    if (src.includes('blogger.googleusercontent.com') && !src.startsWith('https://')) {
      src = src.replace('http://', 'https://')
    }
    return src
  }
  
  return null
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  const base = "https://www.hinditechguide.com";
  
  const rawDescription = post.content.replace(/<[^>]+>/g, "").trim()
  const description = rawDescription.length > 150 
    ? rawDescription.slice(0, 150) + "..."
    : rawDescription;
  
  let ogImage = null;  
  const contentImage = extractImage(post.content)
  if (contentImage) {
    ogImage = contentImage
  }
  else if (post.images && post.images.length > 0 && post.images[0]?.url) {
    const imgUrl = post.images[0].url
    ogImage = imgUrl.startsWith('http') ? imgUrl : `${base}${imgUrl}`
  }
  else {
    ogImage = `${base}/default-og.webp`
  }

  const canonicalUrl = `${base}/blog/${slug}`;

  return {
    title: `${post.title} | HindiTechGuide`,
    description: description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: post.title,
      description: description,
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
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [post.author.displayName],
      tags: post.labels || [],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description,
      images: [ogImage],
      creator: "@hinditechguide",
      site: "@hinditechguide",
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

  // Get image for main content display (without base URL for Next.js Image)
  function getContentImage(html: string): string {
    const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/i
    const match = html.match(imgRegex)
    
    if (match && match[1]) {
      let src = match[1].trim()
      
      // Remove protocol and domain for Next.js Image component
      if (src.startsWith('https://')) {
        src = src.replace('https://www.hinditechguide.com', '')
      }
      
      return src
    }
    
    return "/default-og.webp"
  }

  const contentImage = getContentImage(post.content)
  
  function removeFirstImage(html: string): string {
    return html.replace(/<img[^>]+>/i, '');
  }

  // Process the content to remove problematic styling
  const processedContent = removeFirstImage(processContentHTML(post.content));
  const latestPosts = await getLatestPosts();

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={description}
        image={extractImage(post.content) || "https://www.hinditechguide.com/default-og.webp"}
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

        {/* Featured Image */}
        {contentImage !== "/default-og.webp" && (
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={contentImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}

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
        <SocialShare title={"Social"}/>
        <ReadAlso posts={relatedPosts} />
        <LatestPosts posts={latestPosts} />

      </article>
    </>
  )
}