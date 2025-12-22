import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <FileQuestion className="mb-6 h-20 w-20 text-muted-foreground" />
      <h1 className="mb-4 text-4xl font-bold">पोस्ट नहीं मिला</h1>
      <p className="mb-8 text-lg text-muted-foreground">क्षमा करें, आपके द्वारा खोजा गया Blog पोस्ट मौजूद नहीं है।</p>
      <div className="flex gap-4">
        <Link href="/blog">
          <Button>सभी पोस्ट देखें</Button>
        </Link>
        <Link href="/">
          <Button variant="outline">Home पेज पर जाएं</Button>
        </Link>
      </div>
    </div>
  )
}
