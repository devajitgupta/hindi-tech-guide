import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Target, Users, Zap, Heart, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - HindiTechGuide | Tech News, How-To Guides, Blogging & More",
  description:
    "HindiTechGuide.com एक मल्टी-निच हिंदी टेक प्लेटफ़ॉर्म है जहाँ आपको Trending News, Technology, How-To Guides, Blogging, SEO, Digital Marketing, Entertainment, Viral News और Netflix Topics पर आसान भाषा में जानकारी मिलती है।",
}

const values = [
  {
    icon: Target,
    title: "हमारा उद्देश्य",
    description:
      "टेक्नोलॉजी, डिजिटल मार्केटिंग, SEO, सोशल मीडिया और trending topics को सरल भाषा में सभी के लिए समझने योग्य बनाना।",
  },
  {
    icon: Users,
    title: "हमारा समुदाय",
    description:
      "हिंदी भाषी यूज़र्स, ब्लॉगर्स, टेक लवर्स और क्रिएटर्स का एक विशाल समुदाय — जहाँ हर कोई सीखता और आगे बढ़ता है।",
  },
  {
    icon: Zap,
    title: "हमारा दृष्टिकोण",
    description:
      "जटिल तकनीकी और डिजिटल कॉन्सेप्ट्स को real-life examples, step-by-step guides और प्रैक्टिकल तरीके से समझाना।",
  },
  {
    icon: Heart,
    title: "हमारी प्रतिबद्धता",
    description:
      "पूरी तरह accurate, verified और आसान भाषा में content उपलब्ध कराना— बिना clickbait और बिना गलत जानकारी के।",
  },
]

export default function AboutPage() {
  return (
    <>
      <WebPageSchema
        name="About Us - HindiTechGuide"
        description="HindiTechGuide का मिशन, विजन और मूल्य"
        url="https://hinditechguide.com/about"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "About Us", url: "https://hinditechguide.com/about" },
        ]}
      />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-4xl text-balance md:text-5xl lg:text-6xl mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
            HindiTechGuide एक मल्टी-निच हिंदी ब्लॉगिंग प्लेटफ़ॉर्म है जहाँ हम Trending News, How-To Guides,
            Technology Updates, Viral Content, Entertainment News, Netflix Topics, Social Media Tricks, Digital
            Marketing, SEO, Blogging Tips और Website Creation जैसे विषयों पर आसान भाषा में जानकारी प्रदान करते हैं।
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-bold text-3xl mb-6">हमारी कहानी</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                HindiTechGuide.com की शुरुआत एक सरल लेकिन महत्वपूर्ण उद्देश्य के साथ हुई— भारत में तकनीकी और
                डिजिटल ज्ञान को हर किसी तक पहुंचाना। इंटरनेट पर अधिकतर जानकारी अंग्रेजी में उपलब्ध है, जिससे लाखों
                हिंदी भाषी यूज़र्स इसका पूरा लाभ नहीं उठा पाते।
              </p>

              <p>
                इसी जरूरत को समझते हुए हमने HindiTechGuide को एक ऐसे मंच के रूप में विकसित किया जहाँ Technology,
                Trending News, How-To Tutorials, Blogging, SEO, Digital Marketing, Social Media, Entertainment और
                Netflix जैसी व्यापक श्रेणियों को आसान, सरल और भरोसेमंद भाषा में प्रस्तुत किया जाता है।
              </p>

              <p>
                आज HindiTechGuide हजारों पाठकों को उपयोगी जानकारी प्रदान कर रहा है — चाहे वे एक नया ब्लॉग शुरू करना सीख
                रहे हों, YouTube grow करना चाहते हों, नई टेक्नोलॉजी समझना चाहें, या फिर trending news और viral topics के
                साथ अपडेट रहना चाहते हों।
              </p>

              <p>
                हमारा लक्ष्य सिर्फ जानकारी देना नहीं है, बल्कि लोगों की डिजिटल लाइफ और करियर को बेहतर बनाने में मदद करना है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4">हमारे मूल्य</h2>
            <p className="text-lg text-muted-foreground text-pretty mx-auto max-w-2xl">
              जो सिद्धांत हमें प्रेरित करते हैं और हमारे काम को दिशा देते हैं
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="font-bold text-3xl text-balance md:text-4xl">हमारा मिशन</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              हमारा मिशन है कि हर हिंदी भाषी यूज़र को उनकी भाषा में उच्च गुणवत्ता की तकनीकी, डिजिटल और मनोरंजन से जुड़ी
              जानकारी प्रदान की जाए। चाहे वह ब्लॉगिंग सीखना हो, SEO master करना हो, Social Media growth हो, या Trending
              News पढ़नी हो— HindiTechGuide आपका भरोसेमंद स्रोत है।
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4">हमारे साथ जुड़ें</h2>
          <p className="text-lg text-muted-foreground text-pretty mb-8">
            HindiTechGuide के साथ अपनी डिजिटल यात्रा शुरू करें और लेखक के बारे में अधिक जानें।
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" asChild>
              <Link href="/author">
                लेखक से मिलें
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">संपर्क करें</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
