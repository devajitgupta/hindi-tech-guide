import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Mail, Github, Linkedin, Twitter, Award, BookOpen, Code2, GraduationCap, Laptop, Cpu, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "लेखक - अजीत गुप्ता | Tech Expert & Engineering Writer",
  description:
    "अजीत गुप्ता (Ajit Gupta) - HindiTechGuide के संस्थापक और तकनीकी लेखक। एक इंजीनियर का नज़रिया, जो जटिल टेक्नोलॉजी को हिंदी में आसान बनाता है।",
}

const expertise = [
  "Smartphone Technology",
  "Consumer Electronics",
  "Software Development",
  "AI & Future Tech",
  "Web Architecture",
  "Technical Reviews",
  "Next.js & React",
  "Cyber Security Awareness"
]

const achievements = [
  {
    icon: Cpu,
    title: "Tech Specialist",
    description: "गैजेट्स और हार्डवेयर की गहरी तकनीकी समझ",
  },
  {
    icon: BookOpen,
    title: "Chief Editor",
    description: "100+ रिसर्च-आधारित टेक गाइड्स के लेखक",
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    description: "आधुनिक वेब और टेक प्रोजेक्ट्स का अनुभव",
  },
  {
    icon: Globe,
    title: "Tech Evangelist",
    description: "हिंदी भाषी समुदाय को डिजिटल साक्षर बनाने का मिशन",
  },
]

export default function AuthorPage() {
  return (
    <>
      <WebPageSchema
        name="लेखक - अजीत गुप्ता (Ajit Gupta)"
        description="HindiTechGuide के संस्थापक और मुख्य लेखक अजीत गुप्ता का प्रोफाइल"
        url="https://hinditechguide.com/author"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://hinditechguide.com" },
          { name: "लेखक", url: "https://hinditechguide.com/author" },
        ]}
      />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border-4 border-primary/10 shadow-xl bg-muted/50">
                <img
                  src="/professional-indian-engineer-portrait.jpg" 
                  alt="Ajit Gupta - HindiTechGuide Founder"
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <Badge variant="default" className="bg-primary text-white">Tech Writer & Engineer</Badge>
              <h1 className="font-bold text-4xl text-balance md:text-5xl lg:text-6xl text-foreground">अजीत गुप्ता</h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                HindiTechGuide के संस्थापक। एक इंजीनियर जो टेक्नोलॉजी की जटिल दुनिया और आम यूज़र के बीच की दूरी को हिंदी भाषा के माध्यम से कम कर रहा है।
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary" asChild>
                  <Link href="mailto:ajit@hinditechguide.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                {/* LinkedIn link ko prioritize karein SEO ke liye */}
                <Button variant="outline" size="icon" className="hover:text-[#0077b5] hover:border-[#0077b5]" asChild>
                  <Link href="https://linkedin.com/in/your-profile" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="hover:text-[#1da1f2] hover:border-[#1da1f2]" asChild>
                  <Link href="https://twitter.com/your-profile" target="_blank">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="hover:text-foreground hover:border-foreground" asChild>
                  <Link href="https://github.com/your-profile" target="_blank">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
             <Laptop className="text-primary h-8 w-8" />
             <h2 className="font-bold text-3xl">तकनीकी परिचय</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                नमस्कार! मैं <strong>अजीत गुप्ता</strong> हूँ। एक इंजीनियर और टेक राइटर होने के नाते, मेरा हमेशा से यह मानना रहा है कि टेक्नोलॉजी को समझना हर किसी का हक है, चाहे उसे अंग्रेजी आती हो या नहीं। इसी सोच ने <strong>HindiTechGuide</strong> को जन्म दिया।
              </p>
              <p>
                इंजीनियरिंग की पढ़ाई और टेक इंडस्ट्री के अनुभव ने मुझे यह सिखाया कि कैसे एक छोटे से प्रोसेसर से लेकर क्लाउड कंप्यूटिंग तक की चीजें काम करती हैं। मैं इसी 'इंजीनियरिंग माइंडसेट' का इस्तेमाल करके स्मार्टफोन रिव्यूज, सॉफ्टवेयर गाइड्स और लेटेस्ट टेक न्यूज़ को डिकोड करता हूँ ताकि आप बेहतर फैसले ले सकें।
              </p>
              <p>
                मेरा उद्देश्य केवल खबर देना नहीं, बल्कि आपको टेक्नोलॉजी के प्रति शिक्षित करना है। चाहे वो सही लैपटॉप चुनना हो या अपने डेटा को सुरक्षित रखना, HindiTechGuide पर आपको वही मिलता है जो वास्तव में आपके काम का है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-3xl text-center mb-12">मुख्य भूमिकाएँ</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/70">{achievement.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-3xl text-center mb-8">विशेषज्ञता (Expertise)</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-base px-6 py-2 border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4 text-white">चर्चा शुरू करें</h2>
          <p className="text-lg mb-8 text-white/80">
            क्या आप किसी टेक प्रोजेक्ट पर सहयोग करना चाहते हैं या आपके मन में कोई तकनीकी सवाल है? मुझे आपकी मदद करके खुशी होगी।
          </p>
          <Button size="lg" variant="secondary" className="font-semibold" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              मुझसे संपर्क करें
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}