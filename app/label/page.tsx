import Link from "next/link"
import { Metadata } from "next"
import { Folder, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "All Categories – HindiTechGuide",
  description:
    "Mobile Tips, Tech News, AI, Mobile Reviews और अन्य टेक्नोलॉजी कैटेगरी हिंदी में पढ़ें।",
  alternates: {
    canonical: "https://hinditechguide.com/label",
  },
}

const LABELS = [
  {
    name: "Mobile Tips",
    slug: "mobile-tips",
    description: "Smartphone tips, tricks और hidden features हिंदी में",
  },
  {
    name: "Tech News",
    slug: "tech-news",
    description: "Latest technology news और updates",
  },
  {
    name: "AI",
    slug: "ai",
    description: "Artificial Intelligence से जुड़ी जानकारी और tools",
  },
  {
    name: "Mobile Review",
    slug: "mobile-review",
    description: "Latest smartphones के honest reviews",
  },
  {
    name: "EV & Auto",
    slug: "ev-auto",
    description: "Electric vehicles और automobile news",
  },
]

export default function LabelIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Page Heading */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Browse by Category
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          अपनी पसंद की टेक्नोलॉजी कैटेगरी चुनें और सभी आर्टिकल एक जगह पढ़ें।
        </p>
      </header>

      {/* Categories Grid */}
      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {LABELS.map((label) => (
          <Link
            key={label.slug}
            href={`/label/${label.slug}`}
            className="group rounded-xl border bg-background p-6 transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <Folder className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {label.name}
                </h2>

                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {label.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  View Articles
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
