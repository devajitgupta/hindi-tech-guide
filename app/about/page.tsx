import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Target, Users, Zap, Heart, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - HindiTechGuide का मिशन और विजन",
  description:
    "HindiTechGuide के बारे में जानें। हम भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में गुणवत्ता पूर्ण तकनीकी गाइड और ट्यूटोरियल प्रदान करते हैं।",
}

const values = [
  {
    icon: Target,
    title: "हमारा उद्देश्य",
    description: "तकनीकी ज्ञान को सभी के लिए सुलभ बनाना, विशेष रूप से हिंदी भाषी दर्शकों के लिए।",
  },
  {
    icon: Users,
    title: "हमारा समुदाय",
    description: "भारतीय टेक्नोलॉजी उत्साही लोगों का एक बढ़ता हुआ समुदाय जो एक साथ सीखता और बढ़ता है।",
  },
  {
    icon: Zap,
    title: "हमारा दृष्टिकोण",
    description: "जटिल तकनीकी अवधारणाओं को सरल, समझने योग्य और व्यावहारिक तरीके से प्रस्तुत करना।",
  },
  {
    icon: Heart,
    title: "हमारी प्रतिबद्धता",
    description: "नवीनतम और सटीक जानकारी प्रदान करने के लिए निरंतर प्रयास और समर्पण।",
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
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                HindiTechGuide की शुरुआत एक सरल विचार से हुई - भारत में तकनीकी शिक्षा को और अधिक सुलभ बनाना। हमने देखा कि अधिकांश
                तकनीकी संसाधन केवल अंग्रेजी में उपलब्ध हैं, जो कई भारतीय उत्साही लोगों के लिए एक बाधा बन सकता है।
              </p>
              <p>
                इसी चुनौती को ध्यान में रखते हुए, हमने HindiTechGuide की स्थापना की - एक मंच जहां तकनीकी ज्ञान को हिंदी में सरल और
                समझने योग्य तरीके से प्रस्तुत किया जाता है। हमारा लक्ष्य है कि हर कोई, चाहे उनकी अंग्रेजी कितनी भी मजबूत या कमजोर हो,
                नवीनतम तकनीकों को सीख सके।
              </p>
              <p>
                आज, HindiTechGuide हजारों पाठकों को प्रोग्रामिंग, वेब डेवलपमेंट, मोबाइल ऐप्स, आर्टिफिशियल इंटेलिजेंस और अन्य कई तकनीकी
                विषयों पर गाइड प्रदान करता है। हम गर्व से कह सकते हैं कि हमने भारतीय टेक समुदाय में एक सकारात्मक प्रभाव डाला है।
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
