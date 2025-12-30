import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Scale, AlertTriangle, FileText, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "नियम और शर्तें - HindiTechGuide | Terms of Service",
  description: "HindiTechGuide की सेवा की शर्तें। हमारी वेबसाइट के तकनीकी लेखों और गाइड्स का उपयोग करने के नियम।",
}

export default function TermsPage() {
  return (
    <>
      <WebPageSchema
        name="नियम और शर्तें - HindiTechGuide"
        description="HindiTechGuide की सेवा की शर्तें और उपयोग नियम"
        url="https://hinditechguide.com/terms"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "नियम और शर्तें", url: "https://hinditechguide.com/terms" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="font-bold text-4xl text-balance md:text-5xl mb-4">नियम और शर्तें</h1>
          <p className="text-muted-foreground text-lg">
            HindiTechGuide का उपयोग करने से पहले कृपया इन शर्तों को ध्यान से पढ़ें।
          </p>
          <p className="text-sm text-muted-foreground mt-2 font-mono">
            अंतिम अपडेट: {new Date().toLocaleDateString("hi-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Section 1: Acceptance */}
          <Card className="border-none shadow-sm bg-muted/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Scale className="h-6 w-6 text-primary" />
                स्वीकृति की शर्तें
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                HindiTechGuide ("हम", "हमारी वेबसाइट") को एक्सेस करके, आप इन नियमों और शर्तों का पालन करने के लिए बाध्य हैं। यदि आप किसी भी शर्त से असहमत हैं, तो आपको इस साइट पर दी गई **Mobile Tips** या **How-to Guides** का उपयोग करने की अनुमति नहीं है।
              </p>
            </CardContent>
          </Card>

          {/* Section 2: Tech Content Disclaimer - Crucial for How-to Blogs */}
          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-amber-900">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                तकनीकी अस्वीकरण (Tech Disclaimer)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-800 leading-relaxed space-y-4">
              <p>
                हमारी वेबसाइट पर दी गई सभी **Mobile Tips, Tricks, और How-to Guides** केवल शैक्षिक उद्देश्यों (Educational Purposes) के लिए हैं। 
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>तकनीकी बदलाव (जैसे फोन की सेटिंग्स बदलना या सॉफ्टवेयर अपडेट) आपके डिवाइस के वारंटी या डेटा को प्रभावित कर सकते हैं।</li>
                <li>किसी भी गाइड को फॉलो करने से पहले अपने डेटा का बैकअप जरूर लें।</li>
                <li>HindiTechGuide किसी भी तरह के हार्डवेयर डैमेज या डेटा लॉस के लिए जिम्मेदार नहीं होगा।</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 3: Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">बौद्धिक संपदा (Intellectual Property)</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                इस वेबसाइट पर मौजूद लेख, ट्यूटोरियल और इमेजेस HindiTechGuide की बौद्धिक संपदा हैं। आप इसे व्यक्तिगत उपयोग के लिए पढ़ सकते हैं, लेकिन बिना लिखित अनुमति के इसे किसी अन्य वेबसाइट या ऐप पर कॉपी-पेस्ट करना कानूनी रूप से वर्जित है।
              </p>
            </CardContent>
          </Card>

          {/* Section 4: External Links & Ads */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Info className="h-6 w-6 text-primary" />
                विज्ञापन और बाहरी लिंक
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                हम विज्ञापन दिखाने के लिए Google AdSense का उपयोग करते हैं। विज्ञापनों या लेखों में दिए गए बाहरी लिंक (Third-party links) पर क्लिक करने के बाद आप उस साइट की शर्तों के अधीन होंगे। हम बाहरी साइटों की सामग्री के लिए उत्तरदायी नहीं हैं।
              </p>
            </CardContent>
          </Card>

          {/* Section 5: Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">लागू कानून</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                ये शर्तें भारत के कानूनों के अनुसार नियंत्रित होंगी। किसी भी प्रकार के विवाद का निपटारा भारतीय न्याय क्षेत्र के अंतर्गत ही किया जाएगा।
              </p>
            </CardContent>
          </Card>

          {/* Contact Footer */}
          <div className="text-center p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-bold mb-2">कोई सवाल है?</h3>
            <p className="text-muted-foreground mb-4">
              यदि आपके पास इन शर्तों के बारे में कोई प्रश्न है, तो कृपया हमें ईमेल करें।
            </p>
            <p className="font-semibold text-primary">hinditechguide@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}