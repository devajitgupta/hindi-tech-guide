import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

export interface NewsPost {
  slug: string
  title: string
  image: string
  author: string
  date: string
  highlight?: boolean
}

interface NewsSectionProps {
  title: string
  basePath: string 
  posts: NewsPost[]
  color?: "red" | "blue" | "green" | "yellow"
}

const COLOR_MAP = {
  red: "bg-red-600 border-red-600 hover:bg-red-700 text-red-600",
  blue: "bg-blue-600 border-blue-600 hover:bg-blue-700 text-blue-600",
  green: "bg-green-600 border-green-600 hover:bg-green-700 text-green-600",
  yellow: "bg-yellow-500 border-yellow-500 hover:bg-yellow-600 text-yellow-600",
}

export default function NewsSection({
  title,
  basePath,
  posts,
  color = "red",
}: NewsSectionProps) {
  const colorClasses = COLOR_MAP[color]

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      {/* ===== Section Header ===== */}
      <div className={clsx("mb-4 border-b-2", colorClasses.split(" ")[1])}>
        <span
          className={clsx(
            "inline-block px-4 py-1 text-sm font-bold uppercase text-white",
            colorClasses.split(" ")[0]
          )}
        >
          {title}
        </span>
      </div>

      {/* ===== News Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <article
            key={i}
            className="border rounded-md overflow-hidden bg-white dark:bg-background"
          >
            {/* Image */}
            <div className="relative aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2
                className={clsx(
                  "font-bold leading-snug mb-2 line-clamp-3",
                  post.highlight ? colorClasses.split(" ")[3] : "text-foreground"
                )}
              >
                {post.title}
              </h2>

              <p className="text-xs text-muted-foreground mb-4">
                <span className="font-semibold">{post.author}</span> –{" "}
                {post.date}
              </p>

              <Link
                href={`${basePath}/${post.slug}`}
                className={clsx(
                  "inline-block px-4 py-2 text-sm font-semibold text-white transition",
                  colorClasses.split(" ")[0],
                  colorClasses.split(" ")[2]
                )}
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
