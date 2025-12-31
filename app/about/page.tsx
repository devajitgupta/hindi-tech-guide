import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Target, ShieldCheck, Zap, Heart, ArrowRight, Laptop, Smartphone, Cpu } from "lucide-react"
import { ReachUs } from "@/components/socialLinks"

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
      {/* SEO Schemas */}
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
          <h1 className="font-bold text-4xl text-balance md:text-5xl lg:text-6xl mb-6">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
            HindiTechGuide भारतीय टेक्नोलॉजी प्रेमियों के लिए एक समर्पित मंच है। हमारा लक्ष्य हिंदी भाषी लोगों के लिए टेक्नोलॉजी की दुनिया को सरल, सुलभ और उपयोगी बनाना है। यहाँ आपको लेटेस्ट स्मार्टफोन, लैपटॉप, सॉफ्टवेयर और AI गाइड्स मिलेंगे, जो पूरी तरह रिसर्च-आधारित और भरोसेमंद हैं।
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="font-bold text-3xl mb-6">हमारी कहानी</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              HindiTechGuide की शुरुआत कुछ साल पहले हुई, जब हमें महसूस हुआ कि हिंदी में गुणवत्तापूर्ण टेक कंटेंट की कमी है। इंटरनेट पर टेक कंटेंट की भरमार है, लेकिन अधिकांश लेख अंग्रेज़ी में हैं, जो हर हिंदी भाषी व्यक्ति के लिए पढ़ना और समझना मुश्किल बनाते हैं। हमने सोचा, क्यों न एक ऐसा मंच बनाया जाए, जो पूरी तरह हिंदी में हो और हर टेक विषय को सरल भाषा में कवर करे।
            </p>
            <p>
              हमारी टीम ने स्मार्टफोन रिव्यू, लैपटॉप गाइड्स, सॉफ्टवेयर ट्यूटोरियल, AI और भविष्य की टेक्नोलॉजी के विषयों पर ध्यान केंद्रित किया। आज HindiTechGuide केवल एक ब्लॉग नहीं है, बल्कि टेक प्रेमियों का समुदाय है, जो नवीनतम तकनीक सीखना और अपनाना चाहता है। हमारा फोकस हमेशा 'User-First' दृष्टिकोण पर रहता है, ताकि पाठक अपने समय और पैसे का सही चुनाव कर सकें।
            </p>
            <p>
              हम चाहते हैं कि कोई भी तकनीक सीखने में बाधा महसूस न करे। इसलिए हर लेख, टिप और गाइड को सरल, स्पष्ट और भरोसेमंद बनाने का प्रयास किया जाता है। हम टेक्नोलॉजी को जटिल से आसान बनाने पर विश्वास करते हैं।
            </p>
            <p>
              इसके अलावा, हम पाठकों के फीडबैक को बहुत महत्व देते हैं। उनकी राय हमारे लिए प्रेरणा और सुधार का माध्यम है। यही कारण है कि हम लगातार अपने कंटेंट की गुणवत्ता बढ़ाते रहते हैं और नई टेक्नोलॉजी से जुड़ी जानकारी तुरंत साझा करते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4">हमारे मूल्य</h2>
            <p className="text-lg text-muted-foreground text-pretty mx-auto max-w-2xl">
              यही वो स्तंभ हैं जिन पर HindiTechGuide की विश्वसनीयता और सफलता टिकी है।
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
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {value.description}
                  </CardDescription>
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
          <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4 text-white">
            टेक की दुनिया में अपडेट रहें
          </h2>
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
        <ReachUs />
      </section>
    </>
  )
}
