import { NextResponse } from "next/server"

export function GET() {
  const content = `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /search/
Disallow: /admin/

# Sitemap location
Sitemap: https://hinditechguide.com/sitemap.xml
  `.trim()

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-max-age=86400", 
    },
  })
}