import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react"
import { BreadcrumbSchema } from "@/components/seo/json-ld"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getAllSlugs, getLatestPosts, getPostBySlug, getRelatedPosts, injectReadAlso } from "@/lib/blogger"
import '../blog-post.css'
import ReadAlso from "@/components/ReadAlso"
import LatestPosts from "@/components/LatestPosts"
import SocialShare from "@/components/SocialShare"
import AuthorCard from "@/components/AuthorCard"

function cleanHeadingText(text: string) {
  return text
    .replace(/&nbsp;/gi, ' ')
    .replace(/\u00A0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function generateTOC(html: string) {
  const headingRegex = /<(h2|h3)[^>]*>(.*?)<\/\1>/gi
  const items: { id: string; text: string; level: number }[] = []

  let match
  while ((match = headingRegex.exec(html)) !== null) {
    const level = match[1] === "h2" ? 2 : 3

    const rawText = match[2].replace(/<[^>]+>/g, "")
    const text = cleanHeadingText(rawText)

    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\u0900-\u097F]+/g, "-")
      .replace(/(^-|-$)/g, "")

    items.push({ id, text, level })
  }

  return items
}

function injectHeadingIds(html: string) {
  return html.replace(/<(h2|h3)([^>]*)>(.*?)<\/\1>/gi, (_, tag, attrs, content) => {
    const rawText = content.replace(/<[^>]+>/g, "")
    const text = cleanHeadingText(rawText)

    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\u0900-\u097F]+/g, "-")
      .replace(/(^-|-$)/g, "")

    return `<${tag} id="${id}"${attrs}>${content}</${tag}>`
  })
}


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
  let processed = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/style="[^"]*font-size:\s*[^;"]*;?[^"]*"/gi, '')
    .replace(/style="[^"]*text-align:\s*[^;"]*;?[^"]*"/gi, '')
    .replace(/style="[^"]*clear:\s*[^;"]*;?[^"]*"/gi, '')
    .replace(/style="\s*"/gi, '')
    .replace(/width="[^"]*"/gi, '')
    .replace(/height="[^"]*"/gi, '')
    .replace(/data-original-width="[^"]*"/gi, '')
    .replace(/data-original-height="[^"]*"/gi, '')
    .replace(/<div class="separator"[^>]*>/gi, '<div>')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return processed;
}

function extractAndProcessImages(html: string): { processedHTML: string; imageUrls: string[] } {
  const images: string[] = [];

  const processedHTML = html.replace(/<img([^>]+)src="([^">]+)"([^>]*)>/gi, (match, before, src, after) => {
    let imageUrl = src.trim();

    if (imageUrl.includes('blogger.googleusercontent.com')) {
      imageUrl = imageUrl.replace(/\/s\d+(-h\d+)?\//, '/w1200/');
      if (!imageUrl.startsWith('https://')) imageUrl = imageUrl.replace('http://', 'https://');
    }
    images.push(imageUrl);
    const fullAttributes = before + after;
    const altMatch = fullAttributes.match(/alt="([^">]*)"/i);
    const titleMatch = fullAttributes.match(/title="([^">]*)"/i);

    const altText = altMatch ? altMatch[1] : "HindiTechGuide Blog Image";
    const titleText = titleMatch ? titleMatch[1] : "";
    return `
      <figure class="my-8 group">
        <div class="relative w-full overflow-hidden rounded-xl shadow-lg border border-border bg-muted">
          <img
            src="${imageUrl}" 
            alt="${altText}" 
            title="${titleText}"
            loading="lazy" 
            decoding="async" 
            class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
        ${titleText ? `<figcaption class="mt-3 text-center text-sm text-muted-foreground italic font-medium">${titleText}</figcaption>` : ''}
      </figure>
    `;
  });

  return { processedHTML, imageUrls: images };
}


export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {
    title: "Post Not Found | HindiTechGuide",
    description: "The requested blog post could not be found."
  };

  const base = "https://www.hinditechguide.com";
  const canonicalUrl = `${base}/blog/${slug}`;

  const cleanContent = post.content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const description = cleanContent.length > 155
    ? cleanContent.slice(0, 200) + "..."
    : cleanContent;

  const firstImgMatch = post.content.match(/<img[^>]+src="([^">]+)"/i);
  let ogImage = "/default-og-hinditechguide.webp";

  if (firstImgMatch && firstImgMatch[1]) {
    ogImage = firstImgMatch[1].trim();
    if (ogImage.includes('blogger.googleusercontent.com')) {
      ogImage = ogImage.replace(/\/s\d+(-h\d+)?\//, '/w1200/');
    }
  } else if (post.images?.[0]?.url) {
    ogImage = post.images[0].url;
  }

  if (!ogImage.startsWith('http')) {
    ogImage = `${base}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
  }
  const keywords = post.labels?.join(', ') || '';
  const finalOgImage = ogImage.startsWith('http')
    ? ogImage
    : `https://www.hinditechguide.com${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
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
      siteName: "HindiTechGuide",
      locale: "hi_IN",
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [post.author.displayName],
      tags: post.labels || [],
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
      description: description,
      images: [ogImage],
      creator: "@hinditechguide",
      site: "@hinditechguide",
    },

    keywords: keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const relatedPosts = await getRelatedPosts(slug, post.labels);
  const latestPosts = await getLatestPosts();
  const readTime = calculateReadingTime(post.content);
  const category = post.labels?.[0] || "General";
  const tags = post.labels?.slice(1) || [];
  const cleanDescription = post.content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160) + "...";

  const { processedHTML, imageUrls } = extractAndProcessImages(
    processContentHTML(post.content)
  );
  function getRawText(html: string) {
    return html
      .replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
      .replace(/<style[^>]*>([\S\s]*?)<\/style>/gmi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  const featuredImage = imageUrls[0] || (post.images?.[0]?.url.replace(/\/s\d+(-h\d+)?\//, '/w1200/')) || "/default-og-hinditechguide.webp";
  const finalContent = injectReadAlso(processedHTML, relatedPosts, 3);
  const rawContent = getRawText(post.content);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": cleanDescription,
    "articleBody": rawContent,
    "image": {
      "@type": "ImageObject",
      "url": featuredImage,
      "width": 1200,
      "height": 675
    },
    "datePublished": post.published,
    "dateModified": post.updated,
    "author": {
      "@type": "Person",
      "name": post.author.displayName,
      "url": "https://www.hinditechguide.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HindiTechGuide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hinditechguide.com/apple-icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hinditechguide.com/blog/${slug}`
    },
    "articleSection": category,
    "keywords": tags.join(", "),
    "wordCount": post.content.split(/\s+/).length,
    "timeRequired": `PT${Math.ceil(post.content.split(/\s+/).length / 200)}M`
  };
  const htmlWithIds = injectHeadingIds(finalContent)
  const tocItems = generateTOC(htmlWithIds)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "Blog", url: "https://hinditechguide.com/blog" },
          { name: post.title, url: `https://hinditechguide.com/blog/${slug}` },
        ]}
      />

<article className="mx-auto max-w-[720px] px-4 py-6 sm:px-6 sm:py-8 scroll-smooth">
        <Link href="/blog" prefetch={false} className="inline-flex items-center mb-4">
          <Button variant="ghost" size="sm" className="gap-2 px-2 text-sm">
            <ArrowLeft className="h-4 w-4" />
            Blog
          </Button>
        </Link>


        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-sm text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link
                href="/"
                className="hover:underline text-blue-600 transition-colors"
                prefetch={false}
              >
                Home
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li>
              <Link
                href="/blog"
                className="hover:underline text-blue-600 transition-colors"
                prefetch={false}
              >
                Blog
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground font-medium line-clamp-1 max-w-[200px] sm:max-w-none">
              {post.title}
            </li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <Badge variant="secondary" className="text-xs">{category}</Badge>

          <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground pt-3 border-t">
            <span>{post.author.displayName}</span>
            <span>•</span>
            <time>{new Date(post.published).toLocaleDateString("hi-IN")}</time>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </header>
        {tocItems.length > 0 && (
          <details className="mb-6 rounded-xl border bg-muted p-4 lg:hidden">
            <summary className="cursor-pointer font-semibold text-sm">
              📌 Table of Contents
            </summary>

            <ul className="mt-3 space-y-2 text-sm">
              {tocItems.map(item => (
                <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
                  <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        )}
        {tocItems.length > 0 && (
          <aside className="hidden lg:block fixed right-6 top-28 w-64">
            <div className="rounded-xl border bg-card p-4">
              <h3 className="font-bold text-sm mb-3">📌 On this page</h3>
              <ul className="space-y-2 text-sm">
                {tocItems.map(item => (
                  <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
                    <a href={`#${item.id}`} className="text-muted-foreground hover:text-blue-600">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}


        {/* {featuredImage !== "/default-og-hinditechguide.webp" && (
          <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 90vw,
                     800px"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
          </div>
        )} */}

        <div
          className="prose max-w-none
    prose-p:text-[16px]
    prose-p:leading-[1.8]
    prose-p:mb-5

    prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
    prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3

    prose-ul:ml-5 prose-ol:ml-5
    prose-li:mb-2

    prose-a:text-blue-600 prose-a:font-medium
    hover:prose-a:underline

    [&_img]:w-full
    [&_img]:h-auto
    [&_img]:rounded-xl
    [&_img]:my-6

    dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: htmlWithIds }}
        />

        <div className="mt-8">
          <SocialShare title={post.title} />
        </div>

        <div className="mt-10 space-y-10">
          <ReadAlso posts={relatedPosts.slice(0, 4)} />
          <LatestPosts posts={latestPosts.slice(0, 4)} />
        </div>

        <div className="mt-12">
          <AuthorCard
            name="Ajit Gupta"
            bio="Tech blogger, developer, and digital marketing enthusiast. Sharing tips and tutorials in Hindi."
            avatar="/ajit-hinditechguide.jpg"
            social={{
              email: "hinditechguides@gmail.com",
              twitter: "https://twitter.com/hinditechguide",
              linkedin: "https://linkedin.com/in/ajitgupta50",
              github: "https://github.com/devajitgupta",
              instagram: "https://instagram.com/ajitgupta50",
            }}
          /></div>

      </article>
    </>
  )
}