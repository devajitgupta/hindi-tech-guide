import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CaseStudyQuiz from "@/components/DigitalCoachingCentre/caseStudy"

export const metadata: Metadata = {
  title: "डिजिटल कोचिंग सेंटर - HindiTechGuide",
  description: "HindiTechGuide का डिजिटल कोचिंग सेंटर। यहाँ आप नवीनतम तकनीक, ट्यूटोरियल और ऑनलाइन कोर्स सीख सकते हैं।",
  keywords: [
    "डिजिटल कोचिंग",
    "ऑनलाइन ट्यूटोरियल",
    "टेक्नोलॉजी सीखें",
    "HindiTechGuide",
    "ऑनलाइन कोर्स",
    "टेक ब्लॉग हिंदी",
  ],
  robots: "index, follow",
  authors: [{ name: "HindiTechGuide" }],
  creator: "HindiTechGuide",
  applicationName: "HindiTechGuide",
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "https://hinditechguide.com/digital-coaching-centre" },
  openGraph: {
    title: "डिजिटल कोचिंग सेंटर - HindiTechGuide",
    description: "HindiTechGuide का डिजिटल कोचिंग सेंटर। यहाँ आप नवीनतम तकनीक और ऑनलाइन ट्यूटोरियल सीख सकते हैं।",
    url: "https://hinditechguide.com/digital-coaching-centre",
    siteName: "HindiTechGuide",
    type: "website",
    images: [
      { url: "/og-image-digital-coaching.jpg", width: 1200, height: 630, alt: "Digital Coaching Centre - HindiTechGuide" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "डिजिटल कोचिंग सेंटर - HindiTechGuide",
    description: "HindiTechGuide का डिजिटल कोचिंग सेंटर। यहाँ आप नवीनतम तकनीक और ऑनलाइन ट्यूटोरियल सीख सकते हैं।",
    images: ["/og-image-digital-coaching.jpg"],
    creator: "@HindiTechGuide",
  },
}

export default function DigitalCoachingCentrePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center">डिजिटल कोचिंग सेंटर</h1>
      
      {/* Description Card */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>स्वागत है!</CardTitle>
        </CardHeader>
        <CardContent>
          HindiTechGuide का डिजिटल कोचिंग सेंटर। यहाँ आप नवीनतम तकनीक, ऑनलाइन ट्यूटोरियल और डिजिटल कौशल सीख सकते हैं। 
          इस केंद्र में आप अपने ज्ञान को बढ़ाने के लिए इंटरैक्टिव क्विज़ और अभ्यास कर सकते हैं।
        </CardContent>
      </Card>

      {/* Case Study Quiz */}
      <CaseStudyQuiz />
    </div>
  )
}
