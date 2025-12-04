import Link from "next/link"
import { Facebook, Twitter, Youtube, Mail } from "lucide-react"

interface FooterProps {
  locale: "hi" | "en"
  dict: any 
}

export function Footer({ locale, dict }: FooterProps) {
  const t = dict.footer
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-bold text-primary-foreground text-lg">H</span>
              </div>
              <span className="font-bold text-lg">{t.siteName}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t.description}</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/`} className="...">{t.home}</Link></li>
              <li><Link href={`/${locale}/blog`} className="...">{t.blog}</Link></li>
              <li><Link href={`/${locale}/about`} className="...">{t.about}</Link></li>
              <li><Link href={`/${locale}/author`} className="...">{t.author}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/privacy`} className="...">{t.privacy}</Link></li>
              <li><Link href={`/${locale}/terms`} className="...">{t.terms}</Link></li>
              <li><Link href={`/${locale}/contact`} className="...">{t.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t.connectWithUs}</h3>
            <div className="flex gap-4">
              <Link href="#" className="..."><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="..."><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="..."><Youtube className="h-5 w-5" /></Link>
              <Link href="#" className="..."><Mail className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{t.copyright.replace("{year}", String(year))}</p>
        </div>
      </div>
    </footer>
  )
}
