import { getAllPosts } from "@/lib/blogger"
import { BlogPost } from "./blog"

function cleanHtmlText(html: string): string {
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

function extractImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^">]+)"/)
  return match ? match[1] : null
}

export async function getBlogList(): Promise<BlogPost[]> {
  const items = await getAllPosts()
  return items.map((post: any) => {
    const slug = post.url.split("/").pop()?.replace(".html", "") || ""
    const cleanText = cleanHtmlText(post.content || "")
    const description =
      cleanText.length > 200 ? cleanText.slice(0, 200) + "..." : cleanText

    const rawImage = extractImage(post.content)
    const optimizedImage = rawImage
      ? rawImage.replace(/\/s\d+(-[a-zA-Z0-9-]+)?\//, "/s640/")
      : "/default-og.webp"
    const publishDate = new Date(post.published)
    const updateDate = new Date(post.updated)

    const isRecentlyUpdated =
      updateDate.getTime() > publishDate.getTime() + 86400000

    const wordCount = cleanText.split(/\s+/).length
    const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`

    return {
      slug,
      title: post.title,
      description,
      category: post.labels?.[0] || "Tech",
      tags: post.labels || [],
      readTime,
      publishedDate: post.published,
      updatedDate: post.updated,
      isRecentlyUpdated,
      image: optimizedImage,
    }
  })
}
