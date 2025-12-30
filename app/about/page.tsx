import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Target, Users, Zap, ShieldCheck, ArrowRight, Laptop, Smartphone, Cpu, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - HindiTechGuide का मिशन और विजन",
  description:
    "HindiTechGuide: भारत का विश्वसनीय हिंदी टेक पोर्टल। यहाँ पाएँ लेटेस्ट मोबाइल रिव्यू, लैपटॉप गाइड्स, सॉफ्टवेयर ट्यूटोरियल और टेक्नोलॉजी की दुनिया के हर छोटे-बड़े अपडेट सरल भाषा में।",
}

const values = [
  {
    icon: Target,
    title: "हमारा उद्देश्य",
    description:
      "जटिल टेक्नोलॉजी और गैजेट्स की जानकारी को सरल और सटीक तरीके से अपनी मातृभाषा हिंदी में हर भारतीय तक पहुँचाना।",
  },
  {
    icon: ShieldCheck,
    title: "विश्वसनीयता",
    description:
      "हम केवल रिसर्च-आधारित और जाँचे हुए टेक रिव्यूज और गाइड्स साझा करते हैं, ताकि आपको मिले हमेशा सही जानकारी।",
  },
  {
    icon: Zap,
    title: "ताज़ा अपडेट्स",
    description:
      "चाहे वो नया प्रोसेसर हो या स्मार्टफोन लॉन्च, हम टेक्नोलॉजी की दुनिया की हर खबर आप तक सबसे तेज़ पहुँचाते हैं।",
  },
  {
    icon: Heart,
    title: "हमारी प्रतिबद्धता",
    description:
      "हम हिंदी भाषी टेक समुदाय को सशक्त बनाने और उन्हें डिजिटल रूप से साक्षर बनाने के लिए पूरी तरह समर्पित हैं।",
  },
];

export default function AboutPage() {
  return (
    <>
      <WebPageSchema
        name="About Us - HindiTechGuide"
        description="HindiTechGuide का मिशन, विजन और तकनीकी मूल्य"
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
            HindiTechGuide भारतीय टेक्नोलॉजी प्रेमियों के लिए एक समर्पित मंच है। हमारा लक्ष्य 
            हिंदी भाषी लोगों के लिए टेक्नोलॉजी की दुनिया को सरल, सुलभ और उपयोगी बनाना है।
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
                HindiTechGuide की शुरुआत एक विजन के साथ हुई थी—कि भाषा टेक्नोलॉजी सीखने के रास्ते में बाधा नहीं बननी चाहिए। 
                इंटरनेट पर टेक कंटेंट की भरमार है, लेकिन हिंदी में गुणवत्तापूर्ण (Quality) और गहराई से दी गई जानकारी आज भी कम है।
              </p>

              <p>
                हमने इस कमी को महसूस किया और एक ऐसे मंच की नींव रखी जहाँ हम **Smartphone Reviews, Laptop Buying Guides, 
                Software Tutorials, AI (Artificial Intelligence)** और **Future Tech** से जुड़ी जानकारी को शुद्ध हिंदी में साझा करते हैं।
              </p>

              <p>
                आज हम केवल एक ब्लॉग नहीं, बल्कि टेक लवर्स का एक ऐसा समुदाय हैं जो नई तकनीकों को समझना और उन्हें अपनाना चाहते हैं। 
                हमारा फोकस हमेशा 'User-First' अप्रोच पर रहता है, ताकि आप अपने पैसों और समय का सही चुनाव कर सकें।
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
              यही वो स्तंभ हैं जिन पर HindiTechGuide की विश्वसनीयता टिकी है।
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-foreground/80">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="border-t py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl mb-12">हम क्या कवर करते हैं?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="p-6 border rounded-xl bg-card">
                <Smartphone className="mx-auto h-10 w-10 mb-4 text-primary" />
                <h3 className="font-semibold">मोबाइल रिव्यूज</h3>
             </div>
             <div className="p-6 border rounded-xl bg-card">
                <Laptop className="mx-auto h-10 w-10 mb-4 text-primary" />
                <h3 className="font-semibold">लैपटॉप गाइड्स</h3>
             </div>
             <div className="p-6 border rounded-xl bg-card">
                <Cpu className="mx-auto h-10 w-10 mb-4 text-primary" />
                <h3 className="font-semibold">प्रोसेसर & हार्डवेयर</h3>
             </div>
             <div className="p-6 border rounded-xl bg-card">
                <Zap className="mx-auto h-10 w-10 mb-4 text-primary" />
                <h3 className="font-semibold">लेटेस्ट टेक न्यूज़</h3>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4 text-white">टेक की दुनिया में अपडेट रहें</h2>
          <p className="text-lg mb-8 text-white/90">
            HindiTechGuide के साथ अपनी तकनीकी यात्रा शुरू करें। हम वादा करते हैं कि आपकी टेक नॉलेज को अगले स्तर पर ले जाएंगे।
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/blog">
                लेटेस्ट आर्टिकल्स पढ़ें
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link href="/contact">संपर्क करें</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}