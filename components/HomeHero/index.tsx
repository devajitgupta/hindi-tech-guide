import { getPostsByLabel } from "@/lib/blogger"
import LabelPostSection from "../Mobile-tips"

export default async function HomePage() {
  const mobileTips = await getPostsByLabel("Mobile Tips")
  const aiPosts = await getPostsByLabel("AI")
  const techNews = await getPostsByLabel("Tech News")
  const mobileReviews = await getPostsByLabel("Mobile Review")

  return (
    <>
      <LabelPostSection
        title="📱 Mobile Tips & Tricks"
        description="Smartphone ko fast, safe aur powerful banane ke best tips."
        posts={mobileTips}
        viewAllLink="/label/mobile-tips"
      />

      <LabelPostSection
        title="🤖 Artificial Intelligence"
        description="AI tools, ChatGPT tips aur future technology updates."
        posts={aiPosts}
        viewAllLink="/label/ai"
      />

      <LabelPostSection
        title="📰 Tech News"
        description="Latest technology news, launches and trending updates."
        posts={techNews}
        viewAllLink="/label/tech-news"
      />

      <LabelPostSection
        title="📱 Mobile Reviews"
        description="New smartphones ke honest reviews, camera & performance tests."
        posts={mobileReviews}
        viewAllLink="/label/mobile-review"
      />
    </>
  )
}
