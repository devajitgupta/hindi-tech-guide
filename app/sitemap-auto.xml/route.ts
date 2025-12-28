import { NextResponse } from "next/server";

const BLOG_AUTO_ID = process.env.BLOG_AUTO_ID!;
const API_KEY = process.env.BLOGGER_API_KEY!;

// Escape XML special characters (Safe for Google)
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

async function fetchAutoPosts() {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_AUTO_ID}/posts?key=${API_KEY}&maxResults=500&status=live`,
    { next: { revalidate: 3600 } } // cache 1 hour
  );

  if (!res.ok) {
    console.error("Auto sitemap fetch failed");
    return [];
  }

  const data = await res.json();
  return data.items || [];
}

export async function GET() {
  const posts = await fetchAutoPosts();

  const postUrls = posts
    .map((post: any) => {
      const slug = post.url.split("/").pop()?.replace(".html", "") || "";
      const lastmod = post.updated || post.published || new Date().toISOString();

      return `
        <url>
          <loc>https://hinditechguide.com/auto/${escapeXML(slug)}</loc>
          <lastmod>${new Date(lastmod).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.6</priority>
        </url>
      `;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Auto Category Page -->
  <url>
    <loc>https://hinditechguide.com/auto</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  ${postUrls}

</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
    },
  });
}
