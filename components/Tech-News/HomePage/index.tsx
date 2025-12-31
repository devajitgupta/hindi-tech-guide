import { getAllPosts } from "@/lib/blogger"
import NewsSection from ".."

interface BlogPost {
  url: string
  title: string
  content?: string
}

export default async function NewsHomePage() {
  const techPosts = await getAllPosts("techNews", 100)

  const posts = techPosts.map((post: BlogPost) => ({
    slug: post.url.split("/").pop()?.replace(".html", "") || "",
    title: post.title,
    image:
      post.content?.match(/<img[^>]+src="([^">]+)"/)?.[1] ||
      "/tech-default.webp",
  }))

  return (
    <section className="py-4">
      <NewsSection
        title="Tech News"
        basePath="/tech"
        color="blue"
        posts={posts.slice(0, 8)}
      />

    </section>
  )
}
