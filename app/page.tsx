import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { ArrowRight, BookOpen, Lightbulb, TrendingUp, Code2, Smartphone, Globe } from "lucide-react"
import MobileTipsLabels from "@/components/Mobile-tips"
export const metadata: Metadata = {
  title: "Home - हिंदी में तकनीकी गाइड और ट्यूटोरियल",
  description:
    "HindiTechGuide पर आपका स्वागत है। भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में व्यापक तकनीकी गाइड, ट्यूटोरियल और नवीनतम टेक समाचार।",
}
export default function HomePage() {
  return (
    <>
      <WebPageSchema
        name="HindiTechGuide - Home पेज"
        description="भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में तकनीकी गाइड और ट्यूटोरियल"
        url="https://hinditechguide.com"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://hinditechguide.com" }]} />
     <section className="py-5 md:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <MobileTipsLabels/>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-balance md:text-4xl mb-4">हम क्या प्रदान करते हैं</h2>
            <p className="text-lg text-muted-foreground text-pretty mx-auto max-w-2xl">
              HindiTechGuide पर आपको मिलेंगे विभिन्न तकनीकी विषयों पर गुणवत्ता पूर्ण लेख और गाइड
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
