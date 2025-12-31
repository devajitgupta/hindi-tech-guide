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
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms And Conditions" },
    { href: "/faq", label: "FAQ" },
    { href: "/author", label: "Writer" },
    { href: "/contact", label: "Contact" },
  ]

  export function Header() {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
      
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                <span className="font-bold text-2xl text-white">H</span>
              </div>
              <span className="font-extrabold text-2xl sm:text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
                HindiTechGuide
              </span>
            </Link>

            <nav className="hidden md:flex flex-1 justify-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

           <SheetContent
  side="right"
  className="w-[80vw] max-w-sm p-0 h-auto max-h-[90vh] overflow-y-auto"
>
  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

  <div className="flex flex-col">

    <div className="border-b px-6 py-5">
      <Link href="/" className="text-xl font-bold text-foreground">
        HindiTechGuide
      </Link>
    </div>

    <nav className="px-6 py-6">
      <ul className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-[0.98]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    <div className="border-t px-6 py-4 text-sm text-muted-foreground">
      © {new Date().getFullYear()} HindiTechGuide
    </div>
  </div>
</SheetContent>

            </Sheet>
          </div>
        </div>
      </header>
    )
  }
