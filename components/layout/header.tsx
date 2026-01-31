import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Home" },
    { href: "/tech", label: "Tech" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/faq", label: "FAQ" },
  { href: "/author", label: "Writer" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="HindiTechGuide Home"
          >
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
              <span className="font-bold text-xl sm:text-2xl text-white">H</span>
            </div>

            <span className="font-extrabold text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
              HindiTechGuide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm p-0 flex flex-col"
            >
              <SheetTitle className="sr-only">
                Mobile Navigation Menu
              </SheetTitle>

              {/* Mobile Header */}
              <div className="border-b px-6 py-5">
                <Link
                  href="/"
                  className="text-lg font-bold"
                >
                  HindiTechGuide
                </Link>
              </div>

              {/* Mobile Nav */}
              <nav
                aria-label="Mobile Navigation"
                className="flex-1 overflow-y-auto px-6 py-6"
              >
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground active:scale-[0.98]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Footer */}
              <div className="border-t px-6 py-4 text-xs text-muted-foreground">
                © {new Date().getFullYear()} HindiTechGuide
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
