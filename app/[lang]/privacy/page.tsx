import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "गोपनीयता नीति - HindiTechGuide",
  description: "HindiTechGuide की गोपनीयता नीति। जानें कि हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करते हैं।",
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
          <h1 className="font-bold text-4xl text-balance md:text-5xl mb-4">गोपनीयता नीति</h1>
          <p className="text-muted-foreground text-lg">
            अंतिम अपडेट: {new Date().toLocaleDateString("hi-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">परिचय</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                HindiTechGuide ("हम", "हमारा", या "हमें") आपकी गोपनीयता का सम्मान करते हैं और आपकी व्यक्तिगत जानकारी की सुरक्षा के
                लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि हम आपकी जानकारी को कैसे एकत्र, उपयोग, प्रकट और सुरक्षित करते हैं।
              </p>
              <p>
                हमारी वेबसाइट https://hinditechguide.com का उपयोग करके, आप इस गोपनीयता नीति में वर्णित प्रथाओं से सहमत होते हैं।
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">जानकारी जो हम एकत्र करते हैं</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">व्यक्तिगत जानकारी</h3>
                <p>जब आप हमारे संपर्क फॉर्म के माध्यम से हमसे संपर्क करते हैं, तो हम निम्नलिखित जानकारी एकत्र कर सकते हैं:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>नाम</li>
                  <li>ईमेल पता</li>
                  <li>संदेश की सामग्री</li>
                  <li>कोई अन्य जानकारी जो आप स्वेच्छा से प्रदान करते हैं</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">स्वचालित रूप से एकत्रित जानकारी</h3>
                <p>जब आप हमारी वेबसाइट पर जाते हैं, तो हम स्वचालित रूप से कुछ जानकारी एकत्र करते हैं:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>IP पता</li>
                  <li>ब्राउज़र प्रकार और संस्करण</li>
                  <li>देखे गए पृष्ठ और साइट पर बिताया गया समय</li>
                  <li>रेफरिंग वेबसाइट की जानकारी</li>
                  <li>डिवाइस की जानकारी (मोबाइल, डेस्कटॉप, आदि)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">कुकीज़ और ट्रैकिंग तकनीकें</h3>
                <p>
                  हम आपके ब्राउज़िंग अनुभव को बेहतर बनाने और साइट ट्रैफिक का विश्लेषण करने के लिए कुकीज़ और समान ट्रैकिंग तकनीकों का उपयोग
                  करते हैं। आप अपने ब्राउज़र सेटिंग्स में कुकीज़ को अस्वीकार कर सकते हैं, हालांकि इससे साइट की कुछ सुविधाएं प्रभावित हो सकती हैं।
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">हम आपकी जानकारी का उपयोग कैसे करते हैं</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-3">हम एकत्रित जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>आपके संदेशों और पूछताछों का जवाब देने के लिए</li>
                <li>हमारी वेबसाइट और सामग्री को बेहतर बनाने के लिए</li>
                <li>उपयोगकर्ता व्यवहार और रुझानों का विश्लेषण करने के लिए</li>
                <li>तकनीकी समस्याओं का निदान और हल करने के लिए</li>
                <li>कानूनी आवश्यकताओं का अनुपालन करने के लिए</li>
                <li>धोखाधड़ी और दुरुपयोग से बचाव के लिए</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Google Analytics और विज्ञापन</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-4">
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">Google Analytics</h3>
                <p>
                  हम Google Analytics का उपयोग करते हैं जो हमें साइट ट्रैफिक और उपयोगकर्ता व्यवहार को समझने में मदद करता है। Google
                  Analytics कुकीज़ का उपयोग करता है और गुमनाम जानकारी एकत्र करता है।
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">Google AdSense</h3>
                <p>
                  हम Google AdSense का उपयोग करके विज्ञापन प्रदर्शित करते हैं। Google और उसके भागीदार प्रासंगिक विज्ञापन दिखाने के
                  लिए कुकीज़ का उपयोग कर सकते हैं। आप Google के विज्ञापन सेटिंग्स पृष्ठ पर जाकर व्यक्तिगत विज्ञापनों को ऑप्ट-आउट कर सकते
                  हैं।
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">तृतीय-पक्ष लिंक</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                हमारी वेबसाइट में तृतीय-पक्ष वेबसाइटों के लिंक हो सकते हैं। हम इन बाहरी साइटों की सामग्री या गोपनीयता प्रथाओं के लिए
                जिम्मेदार नहीं हैं। हम अनुशंसा करते हैं कि आप किसी भी बाहरी साइट की गोपनीयता नीति की समीक्षा करें।
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">डेटा सुरक्षा</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उचित तकनीकी और संगठनात्मक उपाय करते हैं। हालांकि, इंटरनेट पर कोई भी डेटा
                ट्रांसमिशन 100% सुरक्षित नहीं है। हम आपकी जानकारी की सुरक्षा के लिए प्रयासरत हैं, लेकिन पूर्ण सुरक्षा की गारंटी नहीं दे सकते।
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">आपके अधिकार</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-3">आपके पास निम्नलिखित अधिकार हैं:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>हमारे पास आपकी किस जानकारी को देखने का अधिकार</li>
                <li>अपनी व्यक्तिगत जानकारी को सुधारने का अधिकार</li>
                <li>अपनी जानकारी को हटाने का अनुरोध करने का अधिकार</li>
                <li>डेटा प्रोसेसिंग पर आपत्ति करने का अधिकार</li>
                <li>डेटा पोर्टेबिलिटी का अधिकार</li>
              </ul>
              <p className="mt-3">इन अधिकारों का प्रयोग करने के लिए, कृपया privacy@hinditechguide.com पर संपर्क करें।</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">बच्चों की गोपनीयता</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                हमारी सेवा 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है। हम जानबूझकर 13 वर्ष से कम उम्र के बच्चों से व्यक्तिगत जानकारी एकत्र
                नहीं करते हैं। यदि आप माता-पिता या अभिभावक हैं और जानते हैं कि आपके बच्चे ने हमें व्यक्तिगत जानकारी प्रदान की है, तो कृपया
                हमसे संपर्क करें।
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">गोपनीयता नीति में परिवर्तन</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। सभी परिवर्तनों को इस पृष्ठ पर पोस्ट किया जाएगा, और "अंतिम
                अपडेट" की तारीख शीर्ष पर अपडेट की जाएगी। हम आपको सलाह देते हैं कि आप नियमित रूप से इस नीति की समीक्षा करें।
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">संपर्क करें</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-3">यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न या चिंताएं हैं, तो कृपया हमसे संपर्क करें:</p>
              <div className="space-y-2">
                <p>
                  <strong className="text-foreground">ईमेल:</strong> privacy@hinditechguide.com
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
