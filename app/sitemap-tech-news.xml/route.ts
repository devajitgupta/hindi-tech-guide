import { NextResponse } from "next/server";
const BLOG_techNews_ID = process.env.BLOG_techNews_ID!;
const API_KEY = process.env.BLOGGER_API_KEY!;

function escapeXML(str: string) {
  return str.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
      default: return c;
    }
  });
}

async function fetchTechPosts() {
  if (!BLOG_techNews_ID || !API_KEY) return [];

  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_techNews_ID}/posts?key=${API_KEY}&maxResults=500&status=live`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    console.error("❌ Tech sitemap fetch failed");
    return [];
  }

  const data = await res.json();
  return data.items ?? [];
}

export async function GET() {
  const posts = await fetchTechPosts();

  const postUrls = posts.map((post: any) => {
    const slug =
      post.url?.split("/").pop()?.replace(".html", "") || "";

    const lastmod = post.updated || post.published;

    return `
      <url>
        <loc>https://hinditechguide.com/tech/${escapeXML(slug)}</loc>
        <lastmod>${new Date(lastmod).toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  }).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Tech Category Page -->
  <url>
    <loc>https://hinditechguide.com/tech</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  ${postUrls}

</urlset>`;

  return new NextResponse(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
