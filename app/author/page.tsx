import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Mail, Github, Linkedin, Twitter, Award, BookOpen, Code2, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "लेखक - अजीत गुप्ता | Engineer & Tech Writer",
  description:
    "अजीत गुप्ता के बारे में जानें - HindiTechGuide के संस्थापक और तकनीकी लेखक। Engineer और टेक उत्साही जो हिंदी में तकनीकी ज्ञान साझा करते हैं।",
}

const expertise = [
  "Web Development (Next.js, React)",
  "Mobile App Development",
  "Cloud Computing",
  "Artificial Intelligence",
  "Software Engineering",
  "Database Management",
]

const achievements = [
  {
    icon: Award,
    title: "Engineer",
    description: "तकनीकी क्षेत्र में व्यापक अनुभव और विशेषज्ञता",
  },
  {
    icon: BookOpen,
    title: "Tech Writer",
    description: "100+ तकनीकी लेख और गाइड हिंदी में प्रकाशित",
  },
  {
    icon: Code2,
    title: "Developer",
    description: "विभिन्न प्रोजेक्ट्स और ओपन-सोर्स योगदान",
  },
  {
    icon: GraduationCap,
    title: "Educator",
    description: "हजारों छात्रों को तकनीकी कौशल सिखाया",
  },
]

export default function AuthorPage() {
  return (
    <>
      <WebPageSchema
        name="लेखक - अजीत गुप्ता"
        description="HindiTechGuide के संस्थापक और तकनीकी लेखक अजीत गुप्ता के बारे में"
        url="https://hinditechguide.com/author"
      />
      <BreadcrumbSchema
        items={[
          { name: "होम", url: "https://hinditechguide.com" },
          { name: "लेखक", url: "https://hinditechguide.com/author" },
        ]}
      />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border bg-muted/50">
                <img
                  src="/professional-indian-engineer-portrait.jpg"
                  alt="Ajit Gupta - Engineer and Tech Writer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <Badge className="w-fit">Engineer & Tech Writer</Badge>
              <h1 className="font-bold text-4xl text-balance md:text-5xl lg:text-6xl">अजीत गुप्ता</h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                HindiTechGuide के संस्थापक और मुख्य तकनीकी लेखक। Engineer, Developer और टेक उत्साही जो हिंदी में तकनीकी ज्ञान को सुलभ
                बनाने के लिए समर्पित हैं।
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:ajit@hinditechguide.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://twitter.com" target="_blank">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
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
          <h2 className="font-bold text-3xl mb-8">परिचय</h2>
          <div className="prose prose-lg max-w-none">
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                नमस्कार! मैं अजीत गुप्ता हूं, एक Engineer और passionate Tech Writer। मेरा मानना है कि तकनीकी शिक्षा भाषा की बाधा से
                परे होनी चाहिए, और यही कारण है कि मैंने HindiTechGuide की स्थापना की।
              </p>
              <p>
                इंजीनियरिंग की पृष्ठभूमि के साथ, मुझे विभिन्न तकनीकी क्षेत्रों में काम करने का अवसर मिला है। Web Development से लेकर
                Artificial Intelligence तक, मैंने अपने करियर में कई तकनीकों के साथ काम किया है। इस यात्रा में मैंने जो सीखा है, उसे हिंदी
                भाषी दर्शकों के साथ साझा करना मेरा उद्देश्य है।
              </p>
              <p>
                HindiTechGuide के माध्यम से, मैं जटिल तकनीकी अवधारणाओं को सरल हिंदी में समझाने का प्रयास करता हूं। मेरा लक्ष्य है कि
                प्रत्येक भारतीय जो टेक्नोलॉजी में रुचि रखता है, वह बिना किसी भाषा की बाधा के नवीनतम तकनीकों को सीख और समझ सके।
              </p>
              <p>
                जब मैं लिखने में व्यस्त नहीं होता, तो मुझे नई तकनीकों के साथ प्रयोग करना, ओपन-सोर्स प्रोजेक्ट्स में योगदान देना, और भारतीय टेक
                समुदाय के साथ जुड़ना पसंद है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-3xl text-center mb-12">उपलब्धियां</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{achievement.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{achievement.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="border-t py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-3xl text-center mb-8">विशेषज्ञता के क्षेत्र</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4">संपर्क में रहें</h2>
          <p className="text-lg text-muted-foreground text-pretty mb-8">
            क्या आपके कोई प्रश्न हैं या आप सहयोग करना चाहते हैं? मुझसे संपर्क करें।
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              संपर्क करें
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
