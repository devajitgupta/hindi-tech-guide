import { ReachUs } from "@/components/socialLinks"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Info, AlertTriangle, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-balance">FAQ - अक्सर पूछे जाने वाले प्रश्न</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                HindiTechGuide का उपयोग करना सुरक्षित है क्या?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                हाँ, हमारी वेबसाइट पूरी तरह सुरक्षित है। HindiTechGuide केवल Educational Purpose के लिए Mobile Tips, How-to Guides, और Tech Tutorials प्रदान करता है। हम किसी भी personal डेटा को बिना user consent के साझा नहीं करते।
              </p>
              <p>
                All interactions on the website are secure. For detailed data handling policies, check our{" "}
                <Link href="/privacy-policy" className="text-primary underline">
                  Privacy Policy
                </Link>.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Info className="h-6 w-6 text-primary" />
                क्या मैं हमारी सामग्री को कॉपी कर सकता हूँ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                HindiTechGuide की सभी सामग्री Intellectual Property के तहत सुरक्षित है। आप इसे केवल personal या educational use के लिए पढ़ सकते हैं। Copy-pasting, redistribution, या किसी अन्य प्लेटफ़ॉर्म पर publish करना बिना written permission के वर्जित है।
              </p>
              <p>
                Unauthorized reproduction may lead to legal consequences. Always give credit when referencing our content.
              </p>
            </CardContent>
          </Card>

          {/* HelpCircle 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <ShieldCheck className="h-6 w-6 text-primary" />
                हमारी वेबसाइट पर Ads सुरक्षित हैं क्या?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                हमारी साइट Google AdSense का उपयोग करती है। यह third-party advertising है और सभी ads Google policies के अधीन हैं। Ads personalized हो सकते हैं, और cookies या tracking का उपयोग कर सकते हैं।
              </p>
              <p>
                AdSense Privacy Policy पढ़ने के लिए <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">यहाँ क्लिक करें</Link>.
              </p>
            </CardContent>
          </Card>

          {/* HelpCircle 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertTriangle className="h-6 w-6 text-primary" />
                Affiliate Links क्या हैं और इसका मुझे क्या असर होगा?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                हमारी कुछ Mobile और Laptop Guides में affiliate links हो सकते हैं। इसका मतलब है कि अगर आप इन links से कुछ खरीदते हैं, तो हमें एक छोटा commission मिलेगा, लेकिन आपकी कीमत पर कोई असर नहीं पड़ेगा।
              </p>
              <p>
                Affiliate links हमारी वेबसाइट को free और high-quality content प्रदान करने में मदद करते हैं। यह आपकी सुविधा के लिए है और किसी भी प्रकार का दबाव या अनावश्यक purchase करने का आग्रह नहीं किया जाता।
              </p>
            </CardContent>
          </Card>

          {/* HelpCircle 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                मेरी privacy कैसे सुरक्षित है?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                HindiTechGuide आपकी privacy को बहुत गंभीरता से लेता है। हम personal identifiable information बिना user consent के share नहीं करते। Site visit, clicks, या analytics data केवल anonymous रूप में एकत्रित किया जाता है।
              </p>
              <p>
                Our Privacy Policy covers everything regarding cookies, data collection, and how we protect your personal information. Check it <Link href="/privacy-policy" className="text-primary underline">here</Link>.
              </p>
            </CardContent>
          </Card>

          {/* HelpCircle 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Info className="h-6 w-6 text-primary" />
                क्या मैं हमारी tutorials पर भरोसा कर सकता हूँ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                हमारी सभी Mobile Tips, How-to Guides और Tech Tutorials educational purposes के लिए हैं। हम step-by-step guidelines देते हैं, लेकिन device variations या software updates के कारण परिणाम अलग हो सकते हैं।
              </p>
              <p>
                Users are encouraged to take precautions like backing up data and testing changes in a controlled manner. We cannot be held responsible for any device damage or data loss.
              </p>
            </CardContent>
          </Card>

          {/* HelpCircle 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <ShieldCheck className="h-6 w-6 text-primary" />
                साइट का उपयोग करते समय मेरी जिम्मेदारी क्या है?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                Users are responsible for following local laws, ethical use, and not misusing our content. सभी users को यह सुनिश्चित करना चाहिए कि वह content misuse न करें या किसी अन्य platform पर गलत तरीके से share न करें।
              </p>
              <p>
                Violations of these terms may result in legal action. Responsible use ensures that everyone benefits from accurate and safe information.
              </p>
            </CardContent>
          </Card>

          {/* HelpCircle 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Third-party links से क्या खतरा हो सकता है?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                हमारी वेबसाइट पर कुछ external links हो सकते हैं। Clicking these links takes you to third-party sites. We do not control content, privacy policies, or security measures of these sites.
              </p>
              <p>
                Users should exercise caution while sharing personal information or making transactions on third-party sites.
              </p>
            </CardContent>
          </Card>

          {/* HelpCircle 9 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Info className="h-6 w-6 text-primary" />
                Content update कब किया जाता है?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                हमारी टीम नियमित रूप से Mobile Tips, How-to Guides, और Tech Tutorials को update करती है ताकि सभी जानकारी सही और relevant रहे। Users are encouraged to revisit pages periodically for latest updates.
              </p>
            </CardContent>
          </Card>

          {/* HelpCircle 10 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <ShieldCheck className="h-6 w-6 text-primary" />
                मुझे किसी problem या सवाल के लिए कैसे संपर्क करना चाहिए?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                सभी queries, suggestions या complaints के लिए आप हमें ईमेल कर सकते हैं। Reach Us section में email और social media links दिए गए हैं। हम जल्दी से जल्दी आपकी सहायता करेंगे।
              </p>
              <p>
                Email: <Link href="mailto:hinditechguide@gmail.com" className="text-primary underline">hinditechguide@gmail.com</Link>
              </p>
            </CardContent>
          </Card>
          <ReachUs/>
        </div>
      </div>
    </section>
  )
}
