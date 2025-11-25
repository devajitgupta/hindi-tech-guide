import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "संपर्क करें - HindiTechGuide से जुड़ें",
  description: "HindiTechGuide से संपर्क करें। हमें अपने सवाल, सुझाव या फीडबैक भेजें। हम आपसे सुनना पसंद करेंगे।",
}

const contactInfo = [
  {
    icon: Mail,
    title: "ईमेल",
    details: "contact@hinditechguide.com",
    link: "mailto:contact@hinditechguide.com",
  },
  {
    icon: Phone,
    title: "फोन",
    details: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "स्थान",
    details: "नई दिल्ली, भारत",
    link: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <WebPageSchema
        name="संपर्क करें - HindiTechGuide"
        description="HindiTechGuide से संपर्क करने के लिए पेज"
        url="https://hinditechguide.com/contact"
      />
      <BreadcrumbSchema
        items={[
          { name: "होम", url: "https://hinditechguide.com" },
          { name: "संपर्क करें", url: "https://hinditechguide.com/contact" },
        ]}
      />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-4xl text-balance md:text-5xl lg:text-6xl mb-6">संपर्क करें</h1>
          <p className="text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
            हमसे जुड़ें और अपने सवाल, सुझाव या फीडबैक साझा करें। हम आपकी मदद के लिए हमेशा तैयार हैं।
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">संदेश भेजें</CardTitle>
                  <CardDescription className="text-base">
                    नीचे दिया गया फॉर्म भरें और हम जल्द से जल्द आपसे संपर्क करेंगे।
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">नाम *</Label>
                      <Input id="name" name="name" placeholder="आपका नाम" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ईमेल *</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">विषय *</Label>
                      <Input id="subject" name="subject" placeholder="संदेश का विषय" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">संदेश *</Label>
                      <Textarea id="message" name="message" placeholder="अपना संदेश यहां लिखें..." rows={6} required />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      संदेश भेजें
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-bold text-3xl mb-4">संपर्क जानकारी</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  नीचे दी गई जानकारी का उपयोग करके आप सीधे हमसे संपर्क कर सकते हैं। हम आपके प्रश्नों और सुझावों का स्वागत करते हैं।
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-1">{info.title}</CardTitle>
                          {info.link ? (
                            <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.details}</p>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Additional Info Card */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">प्रतिक्रिया समय</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    हम आमतौर पर 24-48 घंटों के भीतर सभी पूछताछों का जवाब देते हैं। अगर आपका प्रश्न तत्काल है, तो कृपया फोन या ईमेल के
                    माध्यम से सीधे संपर्क करें।
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4">अक्सर पूछे जाने वाले प्रश्न</h2>
            <p className="text-lg text-muted-foreground">आपके कुछ सामान्य प्रश्नों के उत्तर</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>क्या मैं HindiTechGuide के लिए लेख लिख सकता हूं?</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  हां! हम अतिथि लेखकों का स्वागत करते हैं। कृपया अपने विचार और लेखन के नमूने के साथ contact@hinditechguide.com पर ईमेल
                  करें।
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>मैं HindiTechGuide पर विज्ञापन कैसे दे सकता हूं?</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  विज्ञापन और प्रायोजन के अवसरों के लिए, कृपया ads@hinditechguide.com पर संपर्क करें। हम आपके व्यवसाय लक्ष्यों के अनुरूप
                  विभिन्न विज्ञापन पैकेज प्रदान करते हैं।
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>क्या आप तकनीकी परामर्श सेवाएं प्रदान करते हैं?</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  हां, हम व्यक्तिगत और व्यावसायिक परियोजनाओं के लिए तकनीकी परामर्श प्रदान करते हैं। अधिक जानकारी के लिए
                  consult@hinditechguide.com पर संपर्क करें।
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
