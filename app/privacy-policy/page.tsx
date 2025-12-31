import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { ShieldCheck, Lock, Eye, Bell, Cpu, Smartphone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "गोपनीयता नीति - HindiTechGuide | डेटा सुरक्षा और AdSense",
  description:
    "HindiTechGuide की गोपनीयता नीति। जानें कि हम आपके टेक न्यूज़, मोबाइल गाइड्स और वेबसाइट अनुभव के दौरान आपकी जानकारी को कैसे सुरक्षित रखते हैं।",
}

export default function PrivacyPage() {
  return (
    <>
      <WebPageSchema
        name="गोपनीयता नीति - HindiTechGuide"
        description="HindiTechGuide की गोपनीयता नीति, डेटा सुरक्षा और AdSense जानकारी"
        url="https://hinditechguide.com/privacy-policy"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "गोपनीयता नीति", url: "https://hinditechguide.com/privacy-policy" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        <div className="mb-12 text-center">
          <ShieldCheck className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="font-bold text-4xl text-balance md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg italic">
            HindiTechGuide: आपकी गोपनीयता हमारी सर्वोच्च प्राथमिकता है।
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
                परिचय (Introduction)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong>HindiTechGuide</strong> पर आपका स्वागत है। हमारी वेबसाइट (https://hinditechguide.com) पर हम टेक्नोलॉजी, Mobile Tips, How-to Guides, AI Tools, Laptop Reviews और Latest Tech News प्रदान करते हैं। इस Privacy Policy का उद्देश्य यह स्पष्ट करना है कि हम किस प्रकार डेटा एकत्र करते हैं, उसका उपयोग कैसे करते हैं, और आपके व्यक्तिगत डेटा की सुरक्षा कैसे सुनिश्चित करते हैं।
              </p>
              <p>
                इस पेज पर उपयोग किए गए अंग्रेज़ी शब्द जैसे "Cookies", "AdSense", "Analytics" और "Affiliate Links" अंतरराष्ट्रीय मानकों के अनुरूप उपयोग किए गए हैं ताकि टेक्नोलॉजी और ऑनलाइन विज्ञापन प्रक्रिया स्पष्ट रूप से समझ में आए।
              </p>
            </CardContent>
          </Card>

          {/* Section 2: Log Files & Technical Data */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Log Files और तकनीकी डेटा (Technical Data)</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                हमारी वेबसाइट पर विज़िटर्स की गतिविधियों को सुरक्षित रखने और साइट के बेहतर अनुभव के लिए हम Log Files का उपयोग करते हैं। यह एक industry standard practice है। Log Files में निम्न जानकारी शामिल हो सकती है:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP Address (इंटरनेट प्रोटोकॉल पता)</li>
                <li>Browser Type (Chrome, Safari, Firefox, आदि)</li>
                <li>Device Type (Mobile, Tablet, Desktop)</li>
                <li>Visit Date & Time (आगंतुक के आने और जाने का समय)</li>
                <li>Referring / Exit Pages</li>
                <li>Clicks & Interaction Data (कौन से लिंक क्लिक किए गए)</li>
              </ul>
              <p className="text-sm italic">नोट: यह डेटा व्यक्तिगत रूप से पहचान योग्य नहीं है और केवल वेबसाइट अनुभव सुधारने के लिए उपयोग किया जाता है।</p>
            </CardContent>
          </Card>

          {/* Section 3: Cookies & Tracking */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Cookies और ट्रैकिंग तकनीकें</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                हमारी वेबसाइट Cookies और Local Storage का उपयोग करती है ताकि user experience को personalize किया जा सके। Cookies का उपयोग logins, preferences और analytics के लिए किया जाता है।
                यदि आप Cookies का उपयोग रोकना चाहते हैं, तो अपने browser settings से disable कर सकते हैं। ध्यान दें कि कुछ features बिना cookies के ठीक से काम नहीं करेंगे।
              </p>
            </CardContent>
          </Card>

          {/* Section 4: Google AdSense & DoubleClick DART Cookie */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Google AdSense और DoubleClick DART Cookie</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                HindiTechGuide पर विज्ञापन प्रदर्शित करने के लिए हम <strong>Google AdSense</strong> का उपयोग करते हैं। Google तीसरे पक्ष के vendors में से एक है जो हमारे visitors को उनके interest के आधार पर विज्ञापन प्रदान करता है। यह <strong>DART Cookie</strong> का उपयोग करता है।
              </p>
              <p>
                यदि आप DART Cookie को अस्वीकार करना चाहते हैं, तो आप Google की <Link href="https://policies.google.com/technologies/ads" target="_blank" className="text-primary underline">Advertising and Content Network Privacy Policy</Link> देख सकते हैं और निर्देशों का पालन कर सकते हैं।
              </p>
            </CardContent>
          </Card>

          {/* Section 5: Advertising Partners & Affiliate Links */}
          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">Advertising Partners और Affiliate Links</CardTitle>
            </CardHeader>
            <CardContent className="text-amber-800/80 leading-relaxed space-y-4">
              <p>
                हमारी वेबसाइट पर कुछ विज्ञापनदाता Cookies और web beacons का उपयोग कर सकते हैं। मुख्य partners में <strong>Google AdSense</strong> शामिल हैं।
              </p>
              <p>
                हमारे Mobile और Laptop Guides में कुछ links <strong>Affiliate Links</strong> हो सकते हैं। इसका मतलब है कि यदि आप उन लिंक पर क्लिक कर कुछ खरीदते हैं, तो हमें एक छोटा commission मिल सकता है, आपकी लागत पर कोई फर्क नहीं पड़ता। यह हमें high-quality tech content free में प्रदान करने में मदद करता है।
              </p>
            </CardContent>
          </Card>

          {/* Section 6: User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Eye className="h-6 w-6 text-primary" />
                User Rights / आपके अधिकार
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                हम GDPR और CCPA के अनुरूप आपके डेटा अधिकारों का सम्मान करते हैं। आप हमसे अनुरोध कर सकते हैं कि आपका personal data delete या update किया जाए।
              </p>
              <p>
                संपर्क करें: <a href="mailto:hinditechguide@gmail.com" className="text-primary underline">hinditechguide@gmail.com</a>
              </p>
            </CardContent>
          </Card>

          {/* Section 7: Data Security Measures */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Cpu className="h-6 w-6 text-primary" /> Data Security Measures
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                HindiTechGuide अपने visitors की जानकारी की सुरक्षा के लिए industry-standard security measures लागू करता है। हमारी वेबसाइट HTTPS प्रोटोकॉल का उपयोग करती है और sensitive data को encrypt किया जाता है।
              </p>
              <p>
                इसके अलावा, internal auditing और access control policies लागू हैं ताकि unauthorized access या data breach से बचा जा सके।
              </p>
            </CardContent>
          </Card>
          <div className="text-center p-8 bg-muted rounded-2xl space-y-4">
            <Bell className="mx-auto h-8 w-8 text-primary mb-2" />
            <h3 className="text-xl font-bold">संपर्क और सहमति</h3>
            <p className="text-muted-foreground mb-2">
              हमारी वेबसाइट का उपयोग करके, आप इस Privacy Policy, Cookies Policy और Terms & Conditions से सहमत होते हैं।
            </p>
            <p className="font-semibold">ईमेल: hinditechguide@gmail.com</p>
         <p className="mt-4 text-sm text-muted-foreground">
  Read More about Google's Privacy Policy at{" "}
  <Link
    href="https://policies.google.com/privacy?hl=en&gl=GB"
    target="_blank"
    rel="noopener noreferrer" 
    className="text-primary underline hover:text-primary/80 transition-colors"
  >
    Google Privacy & Terms
  </Link>
</p>

          </div>
        </div>
      </div>
    </>
  )
}
