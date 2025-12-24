const BLOG_ID = process.env.BLOG_ID!;
const BLOG_AUTO_ID = process.env.BLOG_AUTO_ID!;
const API_KEY = process.env.BLOGGER_API_KEY!;

const BLOGS = {
  main: `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}`,
  auto: `https://www.googleapis.com/blogger/v3/blogs/${BLOG_AUTO_ID}`,
};

function getBaseUrl(blogType: "main" | "auto") {
  return BLOGS[blogType];
}

function extractFirstImage(html: string) {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}

// -------------------- Generic Functions -------------------- //

export async function getAllPosts(blogType: "main" | "auto" = "main", limit: number = 50) {
  const res = await fetch(`${getBaseUrl(blogType)}/posts?key=${API_KEY}&maxResults=${limit}`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data.items || [];
}

export async function getPostBySlug(slug: string, blogType: "main" | "auto" = "main") {
  const posts = await getAllPosts(blogType, 50);
  return posts.find((p: any) => {
    const urlSlug = p.url.split("/").pop()?.replace(".html", "");
    return urlSlug === slug;
  }) || null;
}

export async function getAllSlugs(blogType: "main" | "auto" = "main") {
  const posts = await getAllPosts(blogType, 50);
  return posts.map((post: any) => ({ slug: post.url.split("/").pop()?.replace(".html", "") }));
}

export async function getLatestPosts(blogType: "main" | "auto" = "main", limit: number = 3) {
  const res = await fetch(
    `${getBaseUrl(blogType)}/posts?key=${API_KEY}&maxResults=${limit}&orderBy=published`,
    { next: { revalidate: 1800 } }
  );
  if (!res.ok) return [];

  const data = await res.json();
  const posts = data.items || [];
  return posts.map((post: any) => ({
    title: post.title,
    slug: post.url.split("/").pop()?.replace(".html", "") || "",
    image: post.images?.[0]?.url || extractFirstImage(post.content) || "/default-og.webp",
    description: post.content.replace(/<[^>]+>/g, "").slice(0, 100) + "...",
    date: post.published,
  }));
}

export async function getPostsByLabel(label: string, blogType: "main" | "auto" = "main", limit: number = 50) {
  const apiUrl = `${getBaseUrl(blogType)}/posts?labels=${encodeURIComponent(label)}&maxResults=${limit}&key=${API_KEY}`;
  const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const data = await res.json();
  return (data.items || []).map((post: any) => ({
    title: post.title,
    slug: post.url.split("/").pop()?.replace(".html", "") || "",
    image: post.images?.[0]?.url || extractFirstImage(post.content) || "/default-og.webp",
    description: post.content.replace(/<[^>]+>/g, "").slice(0, 150) + "...",
    date: post.published,
  }));
}

export async function getRelatedPosts(currentSlug: string, labels: string[], blogType: "main" | "auto" = "main") {
  if (!labels || labels.length === 0) return await getAllPosts(blogType, 4);
  const labelString = labels.join(",");
  const maxResults = 5;
  const apiUrl = `${getBaseUrl(blogType)}/posts?labels=${labelString}&maxResults=${maxResults}&key=${API_KEY}`;
  try {
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const allFetchedPosts = (await res.json()).items || [];
    let relatedPosts = allFetchedPosts.filter((post: any) => post.url.split("/").pop()?.replace(".html", "") !== currentSlug);
    relatedPosts = relatedPosts.slice(0, 10);
    return relatedPosts.map((post: any) => ({
      title: post.title,
      slug: post.url.split("/").pop()?.replace(".html", "") || "",
      image: post.images?.[0]?.url || extractFirstImage(post.content) || "/default-og.webp",
      description: post.content.replace(/<[^>]+>/g, "").slice(0, 120) + "...",
    }));
  } catch (error) {
    console.error("Exception in getRelatedPosts:", error);
    return [];
  }
}

export function extractLabels(posts: any[]) {
  const labelsSet = new Set<string>();
  posts.forEach(post => {
    post.labels?.forEach((label: string) => {
      if (label !== "Mobile Tips") labelsSet.add(label);
    });
  });
  return Array.from(labelsSet);
}
