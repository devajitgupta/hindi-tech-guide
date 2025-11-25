import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "नियम और शर्तें - HindiTechGuide",
  description: "HindiTechGuide की नियम और शर्तें। हमारी वेबसाइट का उपयोग करने के नियम और शर्तों को पढ़ें और समझें।",
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
          { name: "होम", url: "https://hinditechguide.com" },
          { name: "नियम और शर्तें", url: "https://hinditechguide.com/terms" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-bold text-4xl text-balance md:text-5xl mb-4">नियम और शर्तें</h1>
          <p className="text-muted-foreground text-lg">
            अंतिम अपडेट: {new Date().toLocaleDateString("hi-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">स्वीकृति की शर्तें</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                HindiTechGuide ("वेबसाइट", "हम", "हमारा") में आपका स्वागत है। इस वेबसाइट को एक्सेस करके या उपयोग करके, आप इन नियमों
                और शर्तों से सहमत होते हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया इस वेबसाइट का उपयोग न करें।
              </p>
              <p>
                हम बिना पूर्व सूचना के किसी भी समय इन नियमों और शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। परिवर्तनों के बाद
                वेबसाइट का निरंतर उपयोग संशोधित शर्तों की आपकी स्वीकृति माना जाएगा।
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">बौद्धिक संपदा अधिकार</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                इस वेबसाइट पर सभी सामग्री, जिसमें लेख, ग्राफिक्स, लोगो, छवियां, और सॉफ्टवेयर शामिल हैं, HindiTechGuide की संपत्ति हैं और
                कॉपीराइट कानूनों द्वारा संरक्षित हैं।
              </p>
              <p>आप निम्नलिखित के लिए सामग्री का उपयोग कर सकते हैं:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>व्यक्तिगत, गैर-वाणिज्यिक उपयोग</li>
                <li>शैक्षिक उद्देश्य (उचित श्रेय के साथ)</li>
                <li>सोशल मीडिया पर साझा करना (मूल स्रोत का लिंक देते हुए)</li>
              </ul>
              <p className="mt-4">आप हमारी स्पष्ट लिखित अनुमति के बिना निम्नलिखित नहीं कर सकते:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>सामग्री को वाणिज्यिक उद्देश्यों के लिए पुनर्प्रकाशित करना</li>
                <li>सामग्री को बेचना या लाइसेंस देना</li>
                <li>सामग्री को संशोधित करना या व्युत्पन्न कार्य बनाना</li>
                <li>सामग्री को अपने नाम से प्रस्तुत करना</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">उपयोगकर्ता आचरण</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-3">इस वेबसाइट का उपयोग करते समय, आप सहमत हैं कि आप निम्नलिखित नहीं करेंगे:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>किसी भी कानून या विनियमन का उल्लंघन करना</li>
                <li>दूसरों के अधिकारों का उल्लंघन करना</li>
                <li>अभद्र, अपमानजनक, या हानिकारक सामग्री पोस्ट करना</li>
                <li>स्पैम या अवांछित सामग्री भेजना</li>
                <li>वेबसाइट की सुरक्षा या कार्यक्षमता को बाधित करने का प्रयास करना</li>
                <li>वायरस या दुर्भावनापूर्ण कोड वितरित करना</li>
                <li>डेटा स्क्रैपिंग या स्वचालित बॉट का उपयोग करना</li>
                <li>झूठी या भ्रामक जानकारी प्रदान करना</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">सामग्री अस्वीकरण</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">सूचना की सटीकता</h3>
                <p>
                  हम अपनी वेबसाइट पर सटीक और अद्यतन जानकारी प्रदान करने का प्रयास करते हैं। हालांकि, हम जानकारी की पूर्णता, सटीकता
                  या विश्वसनीयता की गारंटी नहीं देते हैं। सामग्री केवल सूचनात्मक उद्देश्यों के लिए प्रदान की जाती है।
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">पेशेवर सलाह नहीं</h3>
                <p>
                  हमारी वेबसाइट पर दी गई जानकारी पेशेवर सलाह का विकल्प नहीं है। तकनीकी निर्णय लेने से पहले योग्य पेशेवरों से परामर्श करें।
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">बाहरी लिंक</h3>
                <p>
                  हमारी वेबसाइट में तृतीय-पक्ष वेबसाइटों के लिंक हो सकते हैं। हम इन बाहरी साइटों की सामग्री या प्रथाओं के लिए जिम्मेदार नहीं
                  हैं। बाहरी साइटों का उपयोग आपके अपने जोखिम पर है।
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">उत्तरदायित्व की सीमा</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                कानून द्वारा अनुमत अधिकतम सीमा तक, HindiTechGuide और इसके संस्थापक, कर्मचारी, या सहयोगी किसी भी प्रत्यक्ष,
                अप्रत्यक्ष, आकस्मिक, परिणामी, या दंडात्मक क्षति के लिए उत्तरदायी नहीं होंगे, जिनमें शामिल हैं:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>वेबसाइट के उपयोग या उपयोग में असमर्थता से उत्पन्न होने वाली क्षति</li>
                <li>वेबसाइट पर त्रुटियों या चूक से होने वाली हानि</li>
                <li>डेटा या लाभ की हानि</li>
                <li>व्यवसाय में रुकावट</li>
                <li>तृतीय-पक्ष सामग्री या सेवाओं से उत्पन्न मुद्दे</li>
              </ul>
              <p className="mt-4">आप स्वीकार करते हैं कि आप अपने जोखिम पर वेबसाइट का उपयोग करते हैं।</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">क्षतिपूर्ति</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                आप HindiTechGuide और इसके संस्थापक, कर्मचारियों, और सहयोगियों को किसी भी दावे, हानि, क्षति, देयता, और खर्चों से
                क्षतिपूर्ति और सुरक्षित रखने के लिए सहमत हैं, जो निम्नलिखित से उत्पन्न होते हैं:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>आपका वेबसाइट का उपयोग</li>
                <li>इन नियमों और शर्तों का उल्लंघन</li>
                <li>दूसरों के अधिकारों का उल्लंघन</li>
                <li>किसी भी कानून या विनियमन का उल्लंघन</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Google AdSense और विज्ञापन</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                हम Google AdSense का उपयोग करके वेबसाइट पर विज्ञापन प्रदर्शित करते हैं। तृतीय-पक्ष विक्रेता, जिसमें Google शामिल है,
                आपको विज्ञापन दिखाने के लिए कुकीज़ का उपयोग करते हैं।
              </p>
              <p>
                विज्ञापनों में तृतीय-पक्ष वेबसाइटों के लिंक हो सकते हैं। हम इन विज्ञापनों या लिंक की गई साइटों की सामग्री के लिए जिम्मेदार
                नहीं हैं। आप इन लिंक का उपयोग अपने जोखिम पर करते हैं।
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">सेवा में परिवर्तन और समाप्ति</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-3">हम निम्नलिखित अधिकार सुरक्षित रखते हैं:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>बिना सूचना के किसी भी समय वेबसाइट को संशोधित या बंद करना</li>
                <li>बिना कारण बताए किसी भी उपयोगकर्ता की पहुंच को निलंबित या समाप्त करना</li>
                <li>सामग्री को जोड़ना, हटाना या संशोधित करना</li>
                <li>सुविधाओं या सेवाओं को बदलना</li>
              </ul>
              <p className="mt-3">हम इन परिवर्तनों के लिए किसी भी उपयोगकर्ता या तृतीय पक्ष के प्रति उत्तरदायी नहीं होंगे।</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">लागू कानून</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                ये नियम और शर्तें भारत के कानूनों द्वारा शासित होती हैं। इन शर्तों से उत्पन्न होने वाले किसी भी विवाद को भारतीय अदालतों के
                अनन्य अधिकार क्षेत्र में प्रस्तुत किया जाएगा।
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">पृथक्करणीयता</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>यदि इन शर्तों का कोई प्रावधान अमान्य या अप्रवर्तनीय माना जाता है, तो शेष प्रावधान पूर्ण प्रभाव में बने रहेंगे।</p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">संपर्क जानकारी</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-3">यदि इन नियमों और शर्तों के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:</p>
              <div className="space-y-2">
                <p>
                  <strong className="text-foreground">ईमेल:</strong> legal@hinditechguide.com
                </p>
                <p>
                  <strong className="text-foreground">वेबसाइट:</strong> https://hinditechguide.com
                </p>
                <p>
                  <strong className="text-foreground">संपर्क पृष्ठ:</strong> https://hinditechguide.com/contact
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
