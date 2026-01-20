import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react"
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getAllSlugs, getLatestPosts, getPostBySlug, getRelatedPosts, injectReadAlso } from "@/lib/blogger"
import '../blog-post.css'
import ReadAlso from "@/components/ReadAlso"
import LatestPosts from "@/components/LatestPosts"
import SocialShare from "@/components/SocialShare"
import AuthorCard from "@/components/AuthorCard"

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

// ऑप्टिमाइज्ड फ़ंक्शन: HTML कंटेंट प्रोसेसिंग
function processContentHTML(html: string): string {
  let processed = html
    // HTML कमेंट्स हटाएं
    .replace(/<!--[\s\S]*?-->/g, '')
    // बेकार स्टाइल एट्रिब्यूट्स हटाएं
    .replace(/style="[^"]*font-size:\s*[^;"]*;?[^"]*"/gi, '')
    .replace(/style="[^"]*text-align:\s*[^;"]*;?[^"]*"/gi, '')
    .replace(/style="[^"]*clear:\s*[^;"]*;?[^"]*"/gi, '')
    .replace(/style="\s*"/gi, '')
    // width/height एट्रिब्यूट्स हटाएं (Next.js Image के लिए)
    .replace(/width="[^"]*"/gi, '')
    .replace(/height="[^"]*"/gi, '')
    .replace(/data-original-width="[^"]*"/gi, '')
    .replace(/data-original-height="[^"]*"/gi, '')
    // Blogger के div.separator को सरल div में बदलें
    .replace(/<div class="separator"[^>]*>/gi, '<div>')
    // Extra whitespace कम करें
    .replace(/\s{2,}/g, ' ')
    .trim();

  return processed;
}

function extractAndProcessImages(html: string): { processedHTML: string; imageUrls: string[] } {
  const images: string[] = [];

  // यह Regex alt, title और src तीनों को कैप्चर करेगा चाहे वो किसी भी ऑर्डर में हों
  const processedHTML = html.replace(/<img([^>]+)src="([^">]+)"([^>]*)>/gi, (match, before, src, after) => {
    let imageUrl = src.trim();

    // 1. URL Optimization
    if (imageUrl.includes('blogger.googleusercontent.com')) {
      imageUrl = imageUrl.replace(/\/s\d+(-h\d+)?\//, '/w1200/'); // Blogger HD size
      if (!imageUrl.startsWith('https://')) imageUrl = imageUrl.replace('http://', 'https://');
    }

    images.push(imageUrl);

    // 2. Alt और Title को Extract करना (अगर मौजूद हैं)
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
  let ogImage = "/default-og.webp";

  if (firstImgMatch && firstImgMatch[1]) {
    ogImage = firstImgMatch[1].trim();
    // ब्लॉगर इमेज को HD (w1200) में बदलें
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
    .slice(0, 2) + "...";

  const { processedHTML, imageUrls } = extractAndProcessImages(
    processContentHTML(post.content)
  );

const featuredImage = imageUrls[0] || (post.images?.[0]?.url.replace(/\/s\d+(-h\d+)?\//, '/w1200/')) || "/default-og.webp";
  const finalContent = injectReadAlso(processedHTML, relatedPosts, 3);
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": cleanDescription,
    "image": featuredImage,
    "datePublished": post.published,
    "dateModified": post.updated,
    "author": {
      "@type": "Person",
      "name": post.author.displayName,
        "url": "https://www.hinditechguide.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HindiTechGuide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hinditechguide.com/logo.png"
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

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          prefetch={false}
          className="inline-block mb-8"
        >
          <Button variant="ghost" className="gap-2 hover:bg-accent transition-colors">
            <ArrowLeft className="h-4 w-4" />
            वापस Blog पर
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

        <header className="mb-8 space-y-4">
          <Badge
            variant="secondary"
            className="text-xs sm:text-sm font-semibold"
          >
            {category}
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground pt-4 border-t">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <Link
                href="/author"
                className="hover:underline text-blue-600 dark:text-blue-400 transition-colors"
                prefetch={false}
              >
                {post.author.displayName}
              </Link>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.published}>
                {new Date(post.published).toLocaleDateString("hi-IN", {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime} पढ़ने का समय</span>
            </div>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag: string) => (
                <Link
                  key={tag}
                  href={`/tag/${encodeURIComponent(tag.toLowerCase())}`}
                  className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
                  prefetch={false}
                >
                  <Tag className="h-3 w-3" />
                  <span>{tag}</span>
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* {featuredImage !== "/default-og.webp" && (
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
          className="prose prose-lg max-w-none dark:prose-invert
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-10
            prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
            prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
            prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6
            prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6
            prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-6
            prose-li:mb-2
            prose-strong:font-bold prose-strong:text-foreground
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
            [&_img]:rounded-lg [&_img]:shadow-lg [&_img]:my-6 [&_img]:w-full [&_img]:h-auto
            [&_hr]:my-8 [&_hr]:border-border
            [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic
            [&_code]:bg-accent [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm"
          dangerouslySetInnerHTML={{ __html: finalContent }}
        />
        <SocialShare title={"Social"} />
        <ReadAlso posts={relatedPosts} />
        <LatestPosts posts={latestPosts} />
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
          />
        </div>
      </article>
    </>
  )
}