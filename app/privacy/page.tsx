import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { ShieldCheck, Lock, Eye, Bell } from "lucide-react"

export const metadata: Metadata = {
  title: "गोपनीयता नीति - HindiTechGuide | डेटा सुरक्षा",
  description: "HindiTechGuide की गोपनीयता नीति। जानें कि हम आपके टेक न्यूज़ और मोबाइल गाइड्स अनुभव के दौरान आपकी जानकारी को कैसे सुरक्षित रखते हैं।",
}

export default function PrivacyPage() {
  return (
    <>
      <WebPageSchema
        name="गोपनीयता नीति - HindiTechGuide"
        description="HindiTechGuide की गोपनीयता नीति और डेटा सुरक्षा जानकारी"
        url="https://hinditechguide.com/privacy"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "गोपनीयता नीति", url: "https://hinditechguide.com/privacy" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        <div className="mb-12 text-center">
          <ShieldCheck className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="font-bold text-4xl text-balance md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg italic">
            HindiTechGuide: आपकी गोपनीयता हमारी प्राथमिकता है।
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Last Updated: December 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Section 1: Introduction */}
          <Card className="border-none shadow-sm bg-muted/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lock className="h-6 w-6 text-primary" />
                परिचय
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong>HindiTechGuide</strong> पर, जो https://hinditechguide.com से सुलभ है, हमारे पाठकों की गोपनीयता हमारी सर्वोच्च प्राथमिकता है। यह नीति दस्तावेज उन सूचनाओं के प्रकारों को रेखांकित करता है जिन्हें हम **Mobile Tips, How-to Guides, और Tech News** प्रदान करने के दौरान एकत्र और रिकॉर्ड करते हैं।
              </p>
            </CardContent>
          </Card>

          {/* Section 2: Log Files & Tech Data */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Log Files और तकनीकी डेटा</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                HindiTechGuide लॉग फाइलों का उपयोग करने की एक मानक प्रक्रिया का पालन करता है। ये फाइलें तब विजिटर्स को लॉग करती हैं जब वे हमारी **How-to Guides** पढ़ते हैं। इसमें एकत्र की गई जानकारी में शामिल हैं:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>इंटरनेट प्रोटोकॉल (IP) पते</li>
                <li>ब्राउज़र का प्रकार (जैसे Chrome, Safari)</li>
                <li>डिवाइस का प्रकार (Android, iOS, या Desktop)</li>
                <li>दिनांक और समय टिकट</li>
                <li>रेफरिंग/एग्जिट पेज</li>
              </ul>
              <p className="text-sm italic">नोट: यह जानकारी किसी भी ऐसी सूचना से जुड़ी नहीं है जो व्यक्तिगत रूप से पहचान योग्य हो।</p>
            </CardContent>
          </Card>

          {/* Section 3: Google DoubleClick DART Cookie */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Google DoubleClick DART Cookie</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                Google हमारी साइट पर तीसरे पक्ष के विक्रेताओं में से एक है। यह हमारी साइट के विजिटर्स को उनके **Mobile Tips aur Tech News** में रुचि के आधार पर विज्ञापन देने के लिए कुकीज़ (DART कुकीज़) का उपयोग करता है। विजिटर्स Google की विज्ञापन और सामग्री नेटवर्क गोपनीयता नीति पर जाकर DART कुकी के उपयोग को अस्वीकार कर सकते हैं।
              </p>
            </CardContent>
          </Card>

          {/* Section 4: Advertising Partners */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">विज्ञापन भागीदार (Advertising Partners)</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                हमारी साइट पर कुछ विज्ञापनदाता कुकीज़ और वेब बीकन का उपयोग कर सकते हैं। हमारे मुख्य विज्ञापन भागीदार <strong>Google AdSense</strong> हैं। प्रत्येक विज्ञापन भागीदार की अपनी गोपनीयता नीति होती है, जिसे आप उनकी आधिकारिक साइट पर देख सकते हैं।
              </p>
            </CardContent>
          </Card>

          {/* Section 5: Affiliate Disclosure (Critical for Tech Blogs) */}
          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">Affiliate प्रकटीकरण</CardTitle>
            </CardHeader>
            <CardContent className="text-amber-800/80 leading-relaxed">
              <p>
                हमारी **Mobile aur Laptop Guides** में कुछ लिंक 'Affiliate Links' हो सकते हैं। इसका मतलब है कि यदि आप उन लिंक्स पर क्लिक करके कुछ खरीदते हैं, तो हमें एक छोटा कमीशन मिल सकता है, जिससे आपकी लागत पर कोई फर्क नहीं पड़ता। यह हमें मुफ़्त और उच्च गुणवत्ता वाला टेक कंटेंट बनाने में मदद करता है।
              </p>
            </CardContent>
          </Card>

          {/* Section 6: User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Eye className="h-6 w-6 text-primary" />
                आपके अधिकार (CCPA/GDPR)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                हम चाहते हैं कि आप अपने डेटा अधिकारों से पूरी तरह अवगत रहें। आप हमसे अनुरोध कर सकते हैं कि हम आपका व्यक्तिगत डेटा हटा दें या उसे सुधारें। किसी भी प्रश्न के लिए हमें <strong>hinditechguide@gmail.com</strong> पर मेल करें।
              </p>
            </CardContent>
          </Card>

          {/* Section 7: Contact Info */}
          <div className="text-center p-8 bg-muted rounded-2xl">
            <Bell className="mx-auto h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">सहमति</h3>
            <p className="text-muted-foreground mb-4">
              हमारी वेबसाइट का उपयोग करके, आप हमारी गोपनीयता नीति और इसके नियमों और शर्तों से सहमत होते हैं।
            </p>
            <p className="font-semibold">संपर्क ईमेल: hinditechguide@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}