"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface PostItem {
  title: string;
  slug: string;
  image: string;
  description: string;
}

/* Card animation variants */
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

export default function ReadAlso({ posts }: { posts: PostItem[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Read Also
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug ?? index}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            whileHover={{ y: -6 }}
            className="group block rounded-2xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-lg transition-all bg-white dark:bg-gray-900"
          >
            {/* Thumbnail */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
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

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {post.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
