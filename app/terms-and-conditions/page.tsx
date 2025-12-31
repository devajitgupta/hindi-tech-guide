import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Scale, AlertTriangle, FileText, Info, ShieldCheck, Eye } from "lucide-react"
import Link from "next/link"
import { ReachUs } from "@/components/socialLinks"

export const metadata: Metadata = {
  title: "नियम और शर्तें - HindiTechGuide | Terms of Service",
  description:
    "HindiTechGuide की सेवा की शर्तें। हमारी वेबसाइट के तकनीकी लेखों और गाइड्स का उपयोग करने के नियम।",
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
            HindiTechGuide का उपयोग करने से पहले कृपया इन नियमों को ध्यान से पढ़ें। हमारी वेबसाइट पर उपलब्ध सभी लेख, टिप्स और गाइड्स का पालन इन नियमों के अनुसार करें। इस पेज में हम आपको विस्तार से समझाते हैं कि हमारी साइट का उपयोग करते समय आपकी जिम्मेदारियाँ और अधिकार क्या हैं।
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
                स्वीकृति की शर्तें (Acceptance)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                HindiTechGuide ("हम", "हमारी वेबसाइट") को एक्सेस करके, आप इन नियमों और शर्तों का पालन करने के लिए सहमत होते हैं। यदि आप किसी भी शर्त से असहमत हैं, तो कृपया हमारी साइट का उपयोग न करें। हमारा उद्देश्य केवल **Mobile Tips, How-to Guides, और Tech Tutorials** प्रदान करना है।
              </p>
              <p>
                By accessing or using our site, you agree that all content is provided for educational and informational purposes only. Any misuse, illegal use, or unethical behavior while using our content is strictly the user's responsibility.
              </p>
              <p>
                हमारे उपयोग की शर्तें Privacy Policy, Cookies Policy और AdSense Policy के साथ मिलकर काम करती हैं। Using this website means you also consent to these policies.
              </p>
            </CardContent>
          </Card>

          {/* Section 2: Technical Disclaimer */}
          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-amber-900">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                तकनीकी अस्वीकरण (Tech Disclaimer)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-800 leading-relaxed space-y-4">
              <p>
                हमारी वेबसाइट पर उपलब्ध सभी **Mobile Tips, Tricks, Software Guides, How-to Tutorials** केवल शैक्षिक उद्देश्यों के लिए हैं। We cannot guarantee that instructions will work on all devices, operating systems, or software versions.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>किसी भी निर्देश को लागू करने से पहले अपने डेटा और महत्वपूर्ण फाइलों का बैकअप लें।</li>
                <li>Technical changes, like software updates or phone settings modifications, may affect your device performance.</li>
                <li>HindiTechGuide किसी भी प्रकार के hardware या software damage के लिए जिम्मेदार नहीं होगा।</li>
                <li>Follow all instructions carefully, and any result or damage is at your own risk.</li>
              </ul>
              <p className="italic text-sm">
                ध्यान दें: यह गाइड केवल मार्गदर्शन के लिए हैं, कोई कानूनी गारंटी नहीं प्रदान करते।
              </p>
            </CardContent>
          </Card>

          {/* Section 3: Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">बौद्धिक संपदा (Intellectual Property)</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                हमारी वेबसाइट पर मौजूद सभी लेख, इमेज, वीडियो और ट्यूटोरियल HindiTechGuide की बौद्धिक संपदा हैं। You may use content only for personal, non-commercial purposes. किसी भी रूप में content को कॉपी-पेस्ट करना, रिपब्लिश करना या किसी अन्य प्लेटफ़ॉर्म पर साझा करना प्रतिबंधित है।
              </p>
              <p>
                Unauthorized use of content may result in legal action. Users are expected to respect copyright, trademark, and all intellectual property rights.
              </p>
            </CardContent>
          </Card>

          {/* Section 4: Advertising & External Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Info className="h-6 w-6 text-primary" />
                विज्ञापन और बाहरी लिंक (Ads & External Links)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                हमारी वेबसाइट Google AdSense का उपयोग करती है। Some ads may use cookies or other tracking technologies according to Google policies. Clicking on external links takes you to third-party sites, and their terms govern your use there.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                AdSense Privacy Policy:{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  https://policies.google.com/privacy
                </Link>
              </p>
              <p>
                Affiliate Disclosure: कुछ सामग्री में affiliate links हो सकते हैं। इसका मतलब है कि अगर आप उनके माध्यम से खरीदारी करते हैं, तो हमें एक छोटा कमीशन मिलेगा, बिना आपकी लागत पर असर डाले। यह हमारी वेबसाइट को मुफ़्त और उच्च गुणवत्ता वाला कंटेंट प्रदान करने में मदद करता है।
              </p>
            </CardContent>
          </Card>

          {/* Section 5: Cookies & Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Cookies और Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                हमारी साइट cookies का उपयोग करती है ताकि user experience को बेहतर बनाया जा सके। These cookies may track visits, clicks, and user behavior for analytics, personalized content, and advertising.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cookies को आप अपने ब्राउज़र सेटिंग्स से disable कर सकते हैं, लेकिन कुछ functionalities प्रभावित हो सकती हैं।</li>
                <li>Google Analytics, AdSense, और अन्य तीसरे पक्ष की सेवाएँ cookies और tracking का उपयोग कर सकती हैं।</li>
                <li>Users can opt-out of personalized ads by visiting Google Ad Settings.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 6: Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">लागू कानून (Governing Law)</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                ये नियम और शर्तें भारत के कानूनों के अनुसार नियंत्रित और व्याख्यायित होंगी। Any disputes arising from use of this website shall be subject to Indian courts’ jurisdiction.
              </p>
              <p>
                उपयोगकर्ता की जिम्मेदारी है कि वह स्थानीय कानूनों और नियमों का पालन करे। Any violation may result in legal consequences.
              </p>
            </CardContent>
          </Card>

          {/* Section 7: User Responsibility */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Eye className="h-6 w-6 text-primary" />
                Users Responsibilities / उपयोगकर्ता की जिम्मेदारी
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Site content should be used only for educational and personal purposes.</li>
                <li>Do not reproduce or redistribute content without written permission.</li>
                <li>Report any broken links, abusive content, or copyright violations to our team.</li>
                <li>Users are expected to maintain ethical usage and avoid misuse or misrepresentation of our content.</li>
              </ul>
            </CardContent>
          </Card>
          <p className="mt-4 text-sm text-muted-foreground">
            More Info:{" "}
            <Link
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              https://policies.google.com/terms
            </Link>
            </p>
            {/* Reach Us Section */}
            <ReachUs />
        </div>
      </div>
    </>
  )
}
