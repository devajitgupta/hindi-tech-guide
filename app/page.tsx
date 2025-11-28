import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { ArrowRight, BookOpen, Lightbulb, TrendingUp, Code2, Smartphone, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Home - हिंदी में तकनीकी गाइड और ट्यूटोरियल",
  description:
    "HindiTechGuide पर आपका स्वागत है। भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में व्यापक तकनीकी गाइड, ट्यूटोरियल और नवीनतम टेक समाचार।",
}

const features = [
  {
    icon: BookOpen,
    title: "विस्तृत गाइड",
    description: "हिंदी में आसान भाषा में लिखे गए विस्तृत तकनीकी गाइड और ट्यूटोरियल।",
  },
  {
    icon: Lightbulb,
    title: "नवीनतम टेक समाचार",
    description: "टेक्नोलॉजी की दुनिया की सबसे नई खबरें और अपडेट्स।",
  },
  {
    icon: TrendingUp,
    title: "ट्रेंडिंग टॉपिक्स",
    description: "सबसे लोकप्रिय और ट्रेंडिंग तकनीकी विषयों पर विशेष लेख।",
  },
  {
    icon: Code2,
    title: "कोडिंग टिप्स",
    description: "प्रोग्रामिंग और सॉफ्टवेयर डेवलपमेंट के लिए व्यावहारिक टिप्स।",
  },
  {
    icon: Smartphone,
    title: "मोबाइल टेक",
    description: "स्मार्टफोन, ऐप्स और मोबाइल टेक्नोलॉजी पर गहन समीक्षाएं।",
  },
  {
    icon: Globe,
    title: "वेब टेक्नोलॉजी",
    description: "वेब डेवलपमेंट और इंटरनेट टेक्नोलॉजी पर विशेषज्ञ सलाह।",
  },
]

const recentArticles = [
  {
    title: "Next.js 15 की नई विशेषताएं - एक संपूर्ण गाइड",
    description: "Next.js 15 में आने वाली सभी नई सुविधाओं और सुधारों के बारे में विस्तार से जानें।",
    category: "Web Development",
    readTime: "8 मिनट",
    image: "/nextjs-development.jpg",
  },
  {
    title: "आर्टिफिशियल इंटेलिजेंस: भविष्य की तकनीक",
    description: "AI कैसे हमारे जीवन को बदल रहा है और इसके भविष्य की संभावनाओं पर एक नज़र।",
    category: "Artificial Intelligence",
    readTime: "12 मिनट",
    image: "/artificial-intelligence-future.jpg",
  },
  {
    title: "मोबाइल ऐप डेवलपमेंट के लिए सर्वश्रेष्ठ फ्रेमवर्क",
    description: "React Native, Flutter और अन्य लोकप्रिय मोबाइल ऐप फ्रेमवर्क की तुलना।",
    category: "Mobile Development",
    readTime: "10 मिनट",
    image: "/mobile-app-frameworks.jpg",
  },
]

export default function HomePage() {
  return (
    <>
      <WebPageSchema
        name="HindiTechGuide - Home पेज"
        description="भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में तकनीकी गाइड और ट्यूटोरियल"
        url="https://hinditechguide.com"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://hinditechguide.com" }]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <Badge className="w-fit">हिंदी में तकनीकी शिक्षा</Badge>
              <h1 className="font-bold text-4xl text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-foreground">HindiTechGuide</span>
                <br />
                <span className="text-primary">टेक्नोलॉजी को आसान बनाएं</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
                अजीत गुप्ता द्वारा लिखे गए हिंदी में तकनीकी गाइड, ट्यूटोरियल और नवीनतम टेक समाचार। प्रोग्रामिंग, वेब डेवलपमेंट, AI और नई
                तकनीकों के बारे में सीखें।
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="text-lg" asChild>
                  <Link href="/about">
                    शुरू करें
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
                  <Link href="/author">लेखक के बारे में</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl border bg-muted/50">
                <img
                  src="/hinditechguide.png"
                  alt="Technology Guide Illustration"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4">हम क्या प्रदान करते हैं</h2>
            <p className="text-lg text-muted-foreground text-pretty mx-auto max-w-2xl">
              HindiTechGuide पर आपको मिलेंगे विभिन्न तकनीकी विषयों पर गुणवत्ता पूर्ण लेख और गाइड
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4">नवीनतम लेख</h2>
              <p className="text-lg text-muted-foreground">हमारे सबसे हाल के तकनीकी गाइड और ट्यूटोरियल पढ़ें</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-snug">{article.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="px-0">
                    पूरा लेख पढ़ें
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4">नई तकनीक सीखने के लिए तैयार हैं?</h2>
          <p className="text-lg text-muted-foreground text-pretty mb-8 mx-auto max-w-2xl">
            HindiTechGuide के साथ जुड़ें और हिंदी में सबसे बेहतरीन तकनीकी गाइड और ट्यूटोरियल प्राप्त करें।
          </p>
          <Button size="lg" className="text-lg" asChild>
            <Link href="/contact">
              संपर्क करें
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
