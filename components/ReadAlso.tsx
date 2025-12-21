import Link from "next/link";

interface PostItem {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export default function ReadAlso({ posts }: { posts: PostItem[] }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Read Also
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {posts.map((post, index) => (
    <Link
      key={post.slug ?? index} // fallback to index if slug is missing
      href={`/blog/${post.slug ?? "#"}`}
      className="group block rounded-2xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-lg transition-all bg-white dark:bg-gray-900"
    >
            {/* Thumbnail */}
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
