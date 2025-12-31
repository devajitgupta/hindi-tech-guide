import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Devanagari, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/json-ld"
import "./globals.css"
import Script from "next/script"
import ConsentBanner from "@/components/ConsentBanner"
import MotionProvider from "@/components/MotionProvider"

export const metadata: Metadata = {
  metadataBase: new URL("https://hinditechguide.com"),
  title: {
    default: "HindiTechGuide - हिंदी में तकनीकी गाइड और ट्यूटोरियल",
    template: "%s | HindiTechGuide",
  },
  description: "भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में तकनीकी गाइड, ट्यूटोरियल और नवीनतम टेक समाचार। अजीत गुप्ता द्वारा।",
  keywords: [
    "Hindi Tech Guide",
    "Technology in Hindi",
    "Tech Tutorials Hindi",
    "भारतीय Technology",
    "हिंदी टेक गाइड",
    "Ajit Gupta",
  ],
  authors: [{ name: "Ajit Gupta", url: "https://hinditechguide.com/author" }],
  creator: "Ajit Gupta",
  publisher: "HindiTechGuide",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    alternateLocale: "en_US",
    url: "https://hinditechguide.com",
    siteName: "HindiTechGuide",
    title: "HindiTechGuide - हिंदी में तकनीकी गाइड",
    description: "भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में तकनीकी गाइड और ट्यूटोरियल",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HindiTechGuide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HindiTechGuide - हिंदी में तकनीकी गाइड",
    description: "भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में तकनीकी गाइड",
    images: ["/twitter-image.png"],
    creator: "@hinditechguide",
  },
  alternates: {
    canonical: "https://hinditechguide.com",
    languages: {
      "hi-IN": "https://hinditechguide.com",
      "en-US": "https://hinditechguide.com/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi">
      <head>
        <OrganizationSchema
          name="HindiTechGuide"
          description="Hindi technology blog and tutorials"
          url="https://hinditechguide.com"
          author={{ name: "Ajit Gupta", jobTitle: "Founder & Author" }}
          sameAs={[
            "https://x.com/Hinditechguides",
            "https://www.linkedin.com/in/hindi-tech-guide-727497386/",
            "https://github.com/devajitgupta",
            "https://instagram.com/hinditechguide",
          ]}
        />
        <WebSiteSchema />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LZ7YYVR7LD"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LZ7YYVR7LD');
          `}
        </Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5121018245734592"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <meta name="google-adsense-account" content="ca-pub-5121018245734592" />
      </head>
      <body>
        <Header />
        <MotionProvider>
          <main className="flex-1">{children}</main>
        </MotionProvider>
        <Footer />
        <ConsentBanner />
        <Analytics />
      </body>
    </html>
  )
}
