"use client"
import Link from "next/link"
interface NewsHeadlineTickerProps {
  posts: { slug: string; title: string }[]
}

export function NewsHeadlineTicker({ posts }: NewsHeadlineTickerProps) {
  if (!posts.length) return null

  return (
    <div className="w-full overflow-hidden border-y bg-background">
      <div className="flex items-center gap-3 px-3 py-2">
        <span className="shrink-0 text-xs font-bold uppercase bg-red-600 text-white px-2 py-1 rounded animate-pulse">
          Latest Tech News
        </span>
        <div className="relative overflow-hidden w-full">
          <div className="flex w-max animate-news-ticker hover:[animation-play-state:paused]">
            {[...posts, ...posts].map((post, i) => (
              <Link
                key={i}
                href={`/tech/${post.slug}`}
                className="mx-6 whitespace-nowrap text-sm sm:text-base font-medium hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
