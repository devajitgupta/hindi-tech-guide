import Link from "next/link";
import Image from "next/image";

export default function LatestPosts({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-44 object-cover"
              />
            </Link>

            <div className="p-4">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-lg font-semibold hover:text-blue-600">
                  {post.title}
                </h3>
              </Link>

              <p className="text-gray-600 text-sm mt-2">{post.description}</p>

              <span className="text-xs text-gray-400 block mt-2">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
