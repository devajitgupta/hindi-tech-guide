import Link from "next/link"
import { Metadata } from "next"
import { Folder, ArrowRight } from "lucide-react"
import { BreadcrumbSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "All Categories – HindiTechGuide",
  description:
    "Mobile Tips, Tech News, AI, ChatGPT, Earn Money Online और अन्य टेक कैटेगरी हिंदी में पढ़ें।",
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
    name: "Mobile Tips",
    slug: "mobile-tips",
    description: "Smartphone tips, tricks और hidden features हिंदी में",
  },
  {
    name: "Earn Money Online",
    slug: "earn-money-online",
    description: "घर बैठे पैसे कमाने के बेहतरीन तरीके",
  },
  {
    name: "How To",
    slug: "how-to",
    description: "How-to guides और step-by-step tutorials",
  },
  {
    name: "AI",
    slug: "ai",
    description: "Artificial Intelligence से जुड़ी जानकारी",
  },
  {
    name: "ChatGPT",
    slug: "chat-gpt",
    description: "ChatGPT tips, prompts और guides",
  },
]

export default function LabelIndexPage() {
  return (
    <>
      {/* ✅ Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "Categories", url: "https://hinditechguide.com/label" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Browse by Category
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            अपनी पसंद की टेक कैटेगरी चुनें और सभी आर्टिकल एक जगह पढ़ें।
          </p>
        </header>

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
                  <h2 className="text-xl font-semibold group-hover:text-primary">
                    {label.name}
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {label.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View Articles
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </>
  )
}
