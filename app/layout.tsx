import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_Devanagari } from "next/font/google";

export const metadata: Metadata = {
   title: "Hinditechguide - हिंदी में तकनीकी गाइड और ट्यूटोरियल",
   description: "भारतीय टेक्नोलॉजी उत्साही लोगों के लिए हिंदी में तकनीकी गाइड, ट्यूटोरियल और नवीनतम टेक समाचार। अजीत गुप्ता द्वारा।",
};


export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
   
}) {
   return (
      <html lang="hi">
         <body className="font-sans">{children}</body>
      </html>
   );
}
