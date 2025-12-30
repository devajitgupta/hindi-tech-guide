import { NextResponse } from "next/server"

export function GET() {
  const content = `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /search
Disallow: /admin/

# Sitemap location
Sitemap: https://hinditechguide.com/sitemap.xml

# Host
Host: https://hinditechguide.com
  `.trim()

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600, s-max-age=3600",
    },
  })
}