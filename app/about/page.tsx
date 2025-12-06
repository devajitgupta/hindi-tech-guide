import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Target, Users, Zap, Heart, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - HindiTechGuide का मिशन और विजन",
  description:
    "HindiTechGuide में पाएँ Trending Topics, Viral News, Google News Updates, Tech News, Mobile Tips, Laptop Guides, Reviews और हर तरह का Latest और Informative Content—सभी हिंदी और आसान Hinglish में।",
}

const values = [
  {
    icon: Target,
    title: "हमारा उद्देश्य",
    description:
      "हर तरह के Trending, Viral और Informative कंटेंट को सरल और विश्वसनीय तरीके से हिंदी में उपलब्ध कराना।",
  },
  {
    icon: Users,
    title: "हमारा समुदाय",
    description:
      "खबरों, ट्रेंड्स और टेक्नोलॉजी में रुचि रखने वाले लाखों हिंदी पाठकों का बढ़ता हुआ समुदाय।",
  },
  {
    icon: Zap,
    title: "हमारी ताकत",
    description:
      "तेज़ और सटीक अपडेट—चाहे बात Social Media Trends की हो, Tech News की या Viral Breaking News की।",
  },
  {
    icon: Heart,
    title: "हमारी प्रतिबद्धता",
    description:
      "हम हर विषय पर वास्तविक, ताज़ा, और रिसर्च-आधारित जानकारी प्रदान करने के लिए समर्पित हैं।",
  },
];


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
            HindiTechGuide भारतीय टेक्नोलॉजी उत्साही लोगों के लिए एक समर्पित मंच है जहां हम हिंदी में गुणवत्ता पूर्ण तकनीकी गाइड,
            ट्यूटोरियल और नवीनतम टेक समाचार प्रदान करते हैं।
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-bold text-3xl mb-6">हमारी कहानी</h2>
            <h2 className="font-bold text-3xl mb-6">हमारी कहानी</h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                HindiTechGuide की शुरुआत एक ऐसे मंच के रूप में हुई जहाँ हर व्यक्ति अपनी मातृभाषा
                में ट्रेंडिंग और वायरल इंटरनेट कंटेंट आसानी से समझ सके। आज की डिजिटल दुनिया में
                हर सेकंड नई खबरें, नए ट्रेंड्स और नई टेक्नोलॉजी सामने आती है—लेकिन हिंदी में
                विश्वसनीय और सरल जानकारी की कमी थी।
              </p>

              <p>
                इसी कमी को पूरा करने के लिए हमने यह प्लेटफ़ॉर्म बनाया। यहाँ हम Trending Topics,
                Viral News, Entertainment Updates, Tech News, Social Media Trends और Digital दुनिया
                से जुड़ी हर बड़ी और महत्वपूर्ण जानकारी आपके लिए लाते हैं।
              </p>

              <p>
                हमारा उद्देश्य है कि भारत का हर इंटरनेट यूज़र बिना किसी कठिनाई के हर तरह का कंटेंट
                — चाहे वह Breaking News हो, Tech Update हो, Social Media Trend हो या Viral Story —
                वह सब हिंदी में एक ही जगह आसानी से पढ़ सके।
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
              प्रत्येक भारतीय टेक्नोलॉजी उत्साही व्यक्ति को उनकी मातृभाषा में उच्च गुणवत्ता की तकनीकी शिक्षा और संसाधन प्रदान करना, जिससे
              वे अपने करियर और व्यक्तिगत विकास में आगे बढ़ सकें।
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4">हमारे साथ जुड़ें</h2>
          <p className="text-lg text-muted-foreground text-pretty mb-8">
            HindiTechGuide के साथ अपनी तकनीकी यात्रा शुरू करें और लेखक के बारे में अधिक जानें।
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
