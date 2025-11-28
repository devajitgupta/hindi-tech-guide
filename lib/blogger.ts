const BLOG_ID = process.env.BLOG_ID!;
const API_KEY = process.env.BLOGGER_API_KEY!;
const BASE_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}`;



export async function getAllPosts(limit: number = 20) {
  const res = await fetch(
    `${BASE_URL}/posts?key=${API_KEY}&maxResults=${limit}`,
    { next: { revalidate: 3600 } }
  )
  const data = await res.json()
  return data.items || []
}



export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts(50)

  return posts.find((p: any) => {
    const urlSlug = p.url.split("/").pop()?.replace(".html", "")
    return urlSlug === slug
  }) || null
}

export async function getAllSlugs() {
  const posts = await getAllPosts(50)

  return posts.map((post: any) => {
    const slug = post.url.split("/").pop()?.replace(".html", "")
    return { slug }
  })
}