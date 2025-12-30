import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Mail, MapPin, MessageSquare, Laptop, Lightbulb, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "संपर्क करें - HindiTechGuide | Tech Support & Queries",
  description: "HindiTechGuide से जुड़ें। अपने तकनीकी सवाल, गैजेट रिव्यूज के सुझाव या टेक न्यूज़ अपडेट्स के लिए हमसे संपर्क करें।",
}

const contactInfo = [
  { 
    icon: Mail, 
    title: "सामान्य पूछताछ", 
    details: "hinditechguide@gmail.com", 
    link: "mailto:hinditechguide@gmail.com" 
  },
  { 
    icon: MessageSquare, 
    title: "टेक सपोर्ट (Tech Help)", 
    details: "hinditechguide@gmail.com", 
    link: "mailto:hinditechguide@gmail.com" 
  },
  { 
    icon: MapPin, 
    title: "मुख्य कार्यालय", 
    details: "नई दिल्ली, भारत", 
    link: null 
  },
]

export default function ContactPage() {
  return (
    <>
      <WebPageSchema
        name="संपर्क करें - HindiTechGuide"
        description="HindiTechGuide तकनीकी सहायता और संपर्क केंद्र"
        url="https://hinditechguide.com/contact"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "संपर्क करें", url: "https://hinditechguide.com/contact" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 text-balance">Contact Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            क्या आपके पास कोई तकनीकी सवाल है? या आप चाहते हैं कि हम किसी खास गैजेट का रिव्यू करें? हमसे संपर्क करने में संकोच न करें।
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {contactInfo.map((info, idx) => (
              <Card key={idx} className="border-none shadow-sm bg-muted/30 hover:bg-muted/50 transition-colors">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-primary font-medium hover:underline break-all">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.details}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-dashed border-primary/30 max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">प्रतिक्रिया का समय (Response Time)</CardTitle>
              <CardDescription className="text-lg leading-relaxed text-foreground/80">
                हमारी टेक टीम आपके हर ईमेल को पढ़ती है। हम आमतौर पर <strong>24 से 48 घंटों</strong> के भीतर तकनीकी समस्याओं और पूछताछ का जवाब देने का प्रयास करते हैं।
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Tech-Specific FAQ Section */}
      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">जरूरी जानकारी</h2>
            <p className="text-lg text-muted-foreground">पाठकों और पार्टनर्स के लिए सामान्य गाइडलाइन्स</p>
          </div>

          <div className="grid gap-6">
            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                   <Lightbulb className="text-primary h-6 w-6" />
                   <CardTitle className="text-xl">क्या मैं टेक न्यूज़ या टिप्स शेयर कर सकता हूँ?</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  बिल्कुल! अगर आपके पास कोई <strong>Exclusive Tech News</strong> या कोई अनोखी <strong>Tips & Tricks</strong> है, तो आप हमें 'News Tip' सब्जेक्ट के साथ ईमेल कर सकते हैं। हम आपकी टिप को क्रेडिट के साथ पब्लिश करेंगे।
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                   <Share2 className="text-primary h-6 w-6" />
                   <CardTitle className="text-xl">विज्ञापन और स्पॉन्सरशिप (Partnerships)</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  गैजेट रिव्यूज, सॉफ्टवेयर प्रमोशन या अन्य विज्ञापन संबंधी पूछताछ के लिए कृपया <strong>ads@hinditechguide.com</strong> पर संपर्क करें। हम केवल उन्हीं प्रोडक्ट्स को प्रमोट करते हैं जो हमारे पाठकों के लिए उपयोगी हों।
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                   <Laptop className="text-primary h-6 w-6" />
                   <CardTitle className="text-xl">गैजेट सहायता (Gadget Help)</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  अगर आपको नया फोन या लैपटॉप खरीदने में उलझन है, तो अपनी रिक्वायरमेंट्स और बजट के साथ हमें मेल करें। हमारी टीम आपको सही चुनाव करने में मदद करेगी।
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}