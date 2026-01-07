import Link from "next/link"
import { Facebook, Twitter, Youtube, Mail, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-100 dark:from-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
                H
              </div>
              <span className="text-xl font-bold">HindiTechGuide</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Technology guides, tutorials and latest tech updates in simple
              Hindi & English for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Quick Links">
            <h3 className="mb-4 font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="/author" className="hover:text-blue-600">Authors</Link></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Footer Legal Links">
            <h3 className="mb-4 font-semibold text-lg">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-blue-600">Terms & Conditions</Link></li>
              <li><Link href="/faq" className="hover:text-blue-600">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://t.me/+e6weorQQ4Js3ZjM1" target="_blank">Telegram</Link></li>
              <li><Link href="https://instagram.com/hinditechguide" target="_blank">Instagram</Link></li>
              <li><Link href="https://www.linkedin.com/in/hindi-tech-guide-727497386/" target="_blank">LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HindiTechGuide. All rights reserved.</p>
          <p>
            Created by{" "}
            <Link href="/author" className="text-blue-600 hover:underline">
              Ajit Gupta
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
