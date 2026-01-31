
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  posts: any[];
  viewAllLink?: string;
};

export default function LabelPostSection({
  title,
  posts,
  viewAllLink,
}: Props) {
  if (!posts?.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-3 py-4">
      {/* ===== Section Header ===== */}
      <div className="mb-4 border-b-2 border-blue-600">
        <span className="inline-block bg-blue-600 text-white px-4 py-1 text-sm font-bold uppercase">
          {title}
        </span>
      </div>

      {/* ===== News List ===== */}
      <div className="space-y-4">
        {posts.slice(0, 6).map((post: any) => (
          <article
            key={post.slug}
            itemScope
            itemType="https://schema.org/NewsArticle"
            className="border-b pb-4 last:border-b-0"
          >
            {/* Entire card clickable */}
            <Link
              href={`/blog/${post.slug}`}
              className="flex gap-3 w-full group"
            >
              {/* Thumbnail */}
              <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden rounded">
                <Image
                  src={post.image || "/default-og.webp"}
                  alt={post.title}
                  fill
                  loading="lazy"
                  sizes="112px"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  itemProp="headline"
                  className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </h3>

           
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* ===== View All ===== */}
      {viewAllLink && (
        <div className="mt-4 text-center">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
