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

export async function getAllPosts(blogType: "main" | "auto" = "main", limit: number = 500) {
  const res = await fetch(`${getBaseUrl(blogType)}/posts?key=${API_KEY}&maxResults=${limit}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.items || [];
}

export async function getPostBySlug(slug: string, blogType: "main" | "auto" = "main") {
  const posts = await getAllPosts(blogType, 500);
  return posts.find((p: any) => {
    const urlSlug = p.url.split("/").pop()?.replace(".html", "");
    return urlSlug === slug;
  }) || null;
}

export async function getAllSlugs(blogType: "main" | "auto" = "main") {
  const posts = await getAllPosts(blogType, 500);
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

export async function getPostsByLabel(label: string, blogType: "main" | "auto" = "main", limit: number = 500) {
  const apiUrl = `${getBaseUrl(blogType)}/posts?labels=${encodeURIComponent(label)}&maxResults=${limit}&key=${API_KEY}`;
  const res = await fetch(apiUrl );
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
type RelatedPost = {
  title: string;
  slug: string;
};

export function injectReadAlso(
  htmlContent: string,
  relatedPosts: RelatedPost[],
  limit: number = 3
): string {
  if (!relatedPosts || relatedPosts.length === 0) return htmlContent;

  // Prevent duplicate injection
  if (htmlContent.includes('id="read-also-block"')) return htmlContent;

  const linksToShow = relatedPosts.slice(0, limit);
  
  // Create the HTML Block
  const readAlsoHtml = `
    <div id="read-also-block" class="my-8 rounded-xl border-l-4 border-blue-600 bg-muted/30 p-6 not-prose">
      <h3 class="mb-3 text-lg font-bold flex items-center gap-2">
        <span class="bg-blue-600 text-white px-2 py-0.5 rounded text-xs uppercase tracking-wider">Must Read</span>
        इसे भी पढ़ें / Read Also
      </h3>
      <ul class="space-y-2 list-none m-0 p-0">
        ${linksToShow
          .map(
            (post) => `
          <li class="p-0 m-0">
            <a href="/blog/${post.slug}" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors underline-offset-4 hover:underline decoration-blue-600/30">
              ${post.title}
            </a>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `;

  // Injection Rules
  const h2Match = htmlContent.match(/<\/h2>/i);
  const pMatch = htmlContent.match(/<\/p>/i);

  if (h2Match) {
    // Insert after the first </h2>
    const index = h2Match.index! + h2Match[0].length;
    return htmlContent.slice(0, index) + readAlsoHtml + htmlContent.slice(index);
  } else if (pMatch) {
    // Fallback: Insert after the first </p>
    const index = pMatch.index! + pMatch[0].length;
    return htmlContent.slice(0, index) + readAlsoHtml + htmlContent.slice(index);
  }

  // If no tags found, append to start
  return readAlsoHtml + htmlContent;
}