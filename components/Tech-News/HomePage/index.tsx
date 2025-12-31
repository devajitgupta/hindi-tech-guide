import { getAllPosts } from "@/lib/blogger"
import { NewsHeadlineTicker } from ".."

interface BlogPost {
  url: string
  title: string
}

export default async function NewsHomePage() {
  const techPosts = await getAllPosts("techNews", 100)

  const posts = techPosts.map((post: BlogPost) => ({
    slug: post.url.split("/").pop()?.replace(".html", "") || "",
    title: post.title,
  }))

  return (
    <section className="py-4">
      <NewsHeadlineTicker posts={posts.slice(0, 10)} />
    </section>
  )
}
