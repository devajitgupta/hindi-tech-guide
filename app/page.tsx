import type { Metadata } from "next"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { getPostsByLabel } from "@/lib/blogger"
import LabelPostSection from "@/components/Mobile-tips"

export const metadata: Metadata = {
  title: "HindiTechGuide - हिंदी में तकनीकी गाइड और ट्यूटोरियल",
  description: "भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में व्यापक तकनीकी गाइड, ट्यूटोरियल और नवीनतम टेक समाचार।",
}

export default async function HomePage() {
  const [mobileTips, aiPosts, techNews, mobileReviews] = await Promise.all([
    getPostsByLabel("Mobile Tips"),
    getPostsByLabel("AI"),
    getPostsByLabel("Tech News"),
    getPostsByLabel("How To"),
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
        
        {/* Sections based on Labels */}
        <div className="space-y-12 py-10">
          <LabelPostSection
            title="📱 Mobile Tips & Tricks"
            description="अपने स्मार्टफोन को बेहतर बनाने के सीक्रेट टिप्स।"
            posts={mobileTips}
            viewAllLink="/label/mobile-tips"
          />

          <LabelPostSection
            title="🤖 Artificial Intelligence"
            description="AI की दुनिया और ChatGPT के बेहतरीन इस्तेमाल।"
            posts={aiPosts}
            viewAllLink="/label/ai"
          />

          <LabelPostSection
            title="📰 Tech News"
            description="टेक्नोलॉजी की दुनिया की ताज़ा ख़बरें।"
            posts={techNews}
            viewAllLink="/label/tech-news"
          />

          <LabelPostSection
            title="📲 How To Guides"
            description="कठिन तकनीकी चीज़ों को आसान भाषा में सीखें।"
            posts={mobileReviews}
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