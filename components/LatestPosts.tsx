"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface PostItem {
  title: string;
  slug: string;
  image: string;
  description: string;
  date: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function LatestPosts({ posts }: { posts: PostItem[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.article
            key={post.slug}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            whileHover={{ y: -6 }}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-900"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold hover:text-blue-600 line-clamp-2">
                  {post.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                  {post.description}
                </p>

                <time
                  dateTime={post.date}
                  className="text-xs text-gray-400 block mt-2"
                >
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
