"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">आपको Home Page पर redirect किया जा रहा है...</p>
      <p className="text-gray-500">अगर automatic redirect नहीं हुआ, तो <a href="/" className="text-blue-600 underline">यहां क्लिक करें</a>.</p>
    </div>
  );
}
