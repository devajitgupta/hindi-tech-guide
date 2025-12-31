"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  description?: string;
  posts: any[];
  viewAllLink?: string;
};

export default function LabelPostSection({
  title,
  description,
  posts,
  viewAllLink,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  if (!posts?.length) return null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-2 md:py-10 overflow-hidden"
    >
      <div 
        className={`mb-8 text-center transition-all duration-700 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 md:mt-3 text-muted-foreground max-w-2xl mx-auto px-4 text-sm md:text-base">
            {description}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4">
        {posts.slice(0, 4).map((post: any, index: number) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
            prefetch={index < 2} 
          >
            <div
              className={`transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg md:hover:shadow-xl active:scale-[0.99] md:hover:-translate-y-1 border-muted/50">
                <div className="relative aspect-square md:aspect-video overflow-hidden bg-muted/20">
                  <Image
                    src={
                      post.image
                        ? post.image.replace("s1600", "s400") 
                        : "/default-og.webp"
                    }
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 2 ? "eager" : "lazy"} 
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader className="p-3 md:p-6">
                  <CardTitle className="line-clamp-2 text-sm md:text-base font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 md:line-clamp-3 text-xs md:text-sm mt-1">
                    {post.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-3 md:p-6 pt-0">
                  <span className="inline-flex items-center gap-1 text-xs md:text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Read <span className="hidden sm:inline">Full Article</span> 
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </div>
          </Link>
        ))}
      </div>

      {viewAllLink && (
        <div
          className={`pt-6 md:mt-8 text-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline active:scale-95 transition-transform px-4 py-2 rounded-full bg-primary/5 hover:bg-primary/10"
            prefetch={false} 
          >
            View All Articles 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </section>
  );
}