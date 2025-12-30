import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { getPostsByLabel, LABEL_MAP } from "@/lib/blogger"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params 

  const label = LABEL_MAP[slug]
  if (!label) return {}

  return {
    title: `${label} in Hindi – HindiTechGuide`,
    description: `${label} से जुड़े सभी उपयोगी और लेटेस्ट आर्टिकल हिंदी में पढ़ें।`,
    alternates: {
      canonical: `https://hinditechguide.com/label/${slug}`,
    },
  }
}
export default async function LabelPage({ params }:PageProps ) {
   const { slug } = await params 
  const label = LABEL_MAP[slug]
  if (!label) notFound()

  console.log("SLUG:", slug)


  const posts = await getPostsByLabel(label)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">{label} Articles</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          {label} से जुड़े सभी टिप्स, गाइड और लेटेस्ट अपडेट – हिंदी में।
        </p>
      </header>

      {/* Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <article className="h-full overflow-hidden rounded-xl border bg-background transition hover:shadow-xl">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h2 className="line-clamp-2 font-semibold group-hover:text-primary">
                  {post.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {post.description}
                </p>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("hi-IN")}
                  </span>

                  <span className="flex items-center gap-1 text-primary">
                    पढ़ें
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {!posts.length && (
        <p className="mt-10 text-center text-muted-foreground">
          इस कैटेगरी में अभी कोई पोस्ट उपलब्ध नहीं है।
        </p>
      )}
    </div>
  )
}
