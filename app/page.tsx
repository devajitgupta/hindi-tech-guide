import type { Metadata } from "next"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { getPostsByLabel } from "@/lib/blogger"
import LabelPostSection from "@/components/Mobile-tips"
import NewsHomePage from "@/components/Tech-News/HomePage"

export const metadata: Metadata = {
  title: "HindiTechGuide - हिंदी में तकनीकी गाइड और ट्यूटोरियल",
  description: "भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में व्यापक तकनीकी गाइड, ट्यूटोरियल और नवीनतम टेक समाचार।",
}

export default async function HomePage() {
  const [mobileTips, aiPosts, howTo, mobileReviews] = await Promise.all([
    getPostsByLabel("Mobile Tips"),
    getPostsByLabel("AI"),
    getPostsByLabel("How To"),
    getPostsByLabel("Mobile Review"),
  ])

  return (
    <>
      <WebPageSchema
        name="HindiTechGuide - Home"
        description="भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में तकनीकी गाइड"
        url="https://hinditechguide.com"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://hinditechguide.com" }]} />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NewsHomePage/>
        <div className="space-y-8 py-8">
          <LabelPostSection
            title="📱 Mobile Tips & Tricks"
            description="अपने स्मार्टफोन को बेहतर बनाने के सीक्रेट टिप्स।"
            posts={mobileTips}
            viewAllLink="/label/mobile-tips"
          />
            <LabelPostSection
            title="📱 Mobile Review"
            description="अपने स्मार्टफोन को बेहतर बनाने के सीक्रेट टिप्स।"
            posts={mobileReviews}
            viewAllLink="/label/mobile-review"
          />
          <LabelPostSection
            title="🤖 Artificial Intelligence"
            description="AI की दुनिया और ChatGPT के बेहतरीन इस्तेमाल।"
            posts={aiPosts}
            viewAllLink="/label/ai"
          />

          <LabelPostSection
            title="🛠️ How To Guides"
            description="टेक्नोलॉजी से जुड़ी समस्याओं के आसान समाधान।"
            posts={howTo}
            viewAllLink="/label/how-to"
          />
        </div>

        {/* Info Section */}
        <section className="py-16 border-t">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-slate-900 dark:text-white">
              हम क्या प्रदान करते हैं
            </h2>
            <p className="text-lg text-muted-foreground mx-auto max-w-2xl leading-relaxed">
              HindiTechGuide पर आपको मोबाइल रिव्यु, सॉफ्टवेयर गाइड, और इंटरनेट सिक्योरिटी से जुड़े 
              गुणवत्ता पूर्ण लेख मिलेंगे।
            </p>
          </div>
        </section>
      </main>
    </>
  )
}