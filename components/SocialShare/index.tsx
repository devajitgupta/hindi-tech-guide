"use client"
import { usePathname } from "next/navigation"
import {
  Facebook,
  Linkedin,
  Twitter,
  Share2,
  Copy,
} from "lucide-react"
import { useEffect, useState } from "react"

interface SocialShareProps {
  title: string
}

export default function SocialShare({ title }: SocialShareProps) {
  const pathname = usePathname()
  const url = `https://hinditechguide.com${pathname}`
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const [copied, setCopied] = useState(false)
  const [canShare, setCanShare] = useState(false)

  const shareData = {
    title,
    text: title,
    url,
  }


  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator.share === "function") {
      setCanShare(true)
    }
  }, [])
  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title,
        text: title,
        url,
      })
    }
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="mt-10 rounded-xl border bg-background p-4">
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        इस लेख को शेयर करें 👇
      </p>

      <div className="flex flex-wrap gap-3">
        {/* Native Share (Mobile) */}
        {"share" in navigator && (
          <button
            onClick={handleNativeShare}
            className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-muted"
          >
            <Share2 size={16} />
            Share
          </button>
        )}

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-muted"
        >
          🟢 WhatsApp
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-muted"
        >
          <Facebook size={16} /> Facebook
        </a>

        {/* Twitter / X */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-muted"
        >
          <Twitter size={16} /> X
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-muted"
        >
          <Linkedin size={16} /> LinkedIn
        </a>

        {/* Copy Link */}
        <button
          onClick={copyLink}
          className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-muted"
        >
          <Copy size={16} />
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  )
}
