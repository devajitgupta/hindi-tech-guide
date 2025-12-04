import { NextResponse } from "next/server";

const BLOG_ID = process.env.BLOG_ID;
const API_KEY = process.env.BLOGGER_API_KEY;

export async function GET() {
   const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=500`,
    { cache: "no-cache" }
  );

  const data = await res.json();
  const items = data.items || [];

  const blogUrls = items
    .map((post: any) => {
      const slug = post.url.split("/").pop()?.replace(".html", "");

      return `
        <url>
          <loc>https://hinditechguide.com/blog/${slug}</loc>
          <lastmod>${post.updated}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join("");

  const staticUrls = `
    <url>
      <loc>https://hinditechguide.com</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>

    <url>
      <loc>https://hinditechguide.com/about</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>

    <url>
      <loc>https://hinditechguide.com/blog</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>

    <url>
      <loc>https://hinditechguide.com/contact</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
  `;

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls}
      ${blogUrls}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
