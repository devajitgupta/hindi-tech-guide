import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { getPostsByLabel } from "@/lib/blogger"
import { ArrowRight } from "lucide-react"

export default async function MobileTipsLabels() {
  const posts = await getPostsByLabel("Mobile Tips", 10)

  if (!posts.length) return null

  return (
    <div>
      <div className="p-2 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          📱 मोबाइल टिप्स & ट्रिक्स
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          अपने स्मार्टफोन को तेज, सुरक्षित और लंबे समय तक चलाने के आसान टिप्स – हिंदी में।
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post: any) => (
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
                      : "/default-og.jpg"
                  }
                  alt={post.title}
                  fill
                  priority={false}
                  placeholder="blur"
                  blurDataURL="/blur-placeholder.png"
                  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-primary to-purple-500" />

              <CardHeader>
                <CardTitle className="line-clamp-2 text-lg leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm font-medium text-primary">
                  <span>पूरा पढ़ें</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
