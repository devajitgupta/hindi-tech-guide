import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

type Props = {
  title: string
  description?: string
  posts: any[]
  viewAllLink?: string
}

export default function LabelPostSection({
  title,
  description,
  posts,
  viewAllLink,
}: Props) {
  if (!posts?.length) return null
  return (
    <section className="py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.slice(0, 4).map((post: any) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={
                    post.image
                      ? post.image.replace("s1600", "s600")
                      : "/default-og.webp"
                  }
                  alt={post.title}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* View All */}
      {viewAllLink && (
        <div className="mt-8 text-center">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  )
}
