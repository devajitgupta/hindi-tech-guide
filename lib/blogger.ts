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
export async function getLatestPosts(limit: number = 3) {
  const res = await fetch(
    `${BASE_URL}/posts?key=${API_KEY}&maxResults=${limit}&orderBy=published`,
    { next: { revalidate: 1800 } } // 30 min cache
  );

  if (!res.ok) return [];

  const data = await res.json();
  const posts = data.items || [];

  return posts.map((post: any) => ({
    title: post.title,
    slug: post.url.split("/").pop()?.replace(".html", "") || "",
    image:
      post.images?.[0]?.url ||
      extractFirstImage(post.content) ||
      "/default-og.webp",
    description: post.content.replace(/<[^>]+>/g, "").slice(0, 100) + "...",
    date: post.published,
  }));
}

function extractFirstImage(html: string) {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}
export async function getRelatedPosts(currentSlug: string, labels: string[]) {
  if (!labels || labels.length === 0) {
    return await getAllPosts(4);
  }
  const labelString = labels.join(',');
  const maxResults = 5;
  const apiUrl = `${BASE_URL}/posts?labels=${labelString}&maxResults=${maxResults}&key=${API_KEY}`;

  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.error("Error fetching related posts from Blogger API");
      return [];
    }
    const data = await res.json();
    const allFetchedPosts = data.items || [];

    let relatedPosts = allFetchedPosts.filter((post: any) => {
      const slug = post.url.split("/").pop()?.replace(".html", "") || "";
      return slug !== currentSlug;
    });
    relatedPosts = relatedPosts.slice(0, 10)
    return relatedPosts.map((post: any) => ({
      title: post.title,
      slug: post.url.split("/").pop()?.replace(".html", "") || "",
      image:
        post.images?.[0]?.url ||
        extractFirstImage(post.content) ||
        "/default-og.webp",
      description: post.content.replace(/<[^>]+>/g, "").slice(0, 120) + "...",
    }));

  } catch (error) {
    console.error("Exception in getRelatedPosts:", error);
    return [];
  }
}

export async function getPostsByLabel(
  label: string,
  limit: number = 20
) {
  const apiUrl = `${BASE_URL}/posts?labels=${encodeURIComponent(label)}&maxResults=${limit}&key=${API_KEY}`

  const res = await fetch(apiUrl, {
    next: { revalidate: 3600 }
  })

  if (!res.ok) return []

  const data = await res.json()

  return (data.items || []).map((post: any) => ({
    title: post.title,
    slug: post.url.split("/").pop()?.replace(".html", "") || "",
    image:
      post.images?.[0]?.url ||
      extractFirstImage(post.content) ||
      "/default-og.webp",
    description:
      post.content.replace(/<[^>]+>/g, "").slice(0, 150) + "...",
    date: post.published
  }))
}
export function extractLabels(posts: any[]) {
  const labelsSet = new Set<string>()

  posts.forEach(post => {
    post.labels?.forEach((label: string) => {
      if (label !== "Mobile Tips") {
        labelsSet.add(label)
      }
    })
  })

  return Array.from(labelsSet)
}

