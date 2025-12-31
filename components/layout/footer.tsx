import Link from "next/link";
import { Facebook, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-100 dark:from-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-4 flex flex-col">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-lg font-bold animate-bounce">
                H
              </div>
              <span className="text-xl font-bold">HindiTechGuide</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Technology guides, tutorials, and latest tech updates in simple English for tech enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-lg text-gray-800 dark:text-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/author" className="hover:text-blue-600 transition-colors duration-300">
                  Authors
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 font-semibold text-lg text-gray-800 dark:text-gray-200">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
                  <li>
                <Link href="/faq" className="hover:text-blue-600 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-blue-600 transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 font-semibold text-lg text-gray-800 dark:text-gray-200">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="p-2 rounded-full bg-sky-400 text-white hover:bg-sky-500 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-300">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-2">
          <p>© {new Date().getFullYear()} HindiTechGuide. All rights reserved.</p>
          <p>
            Created by{" "}
            <Link href="https://hinditechguide.com" className="text-blue-600 hover:underline">
              Ajit Gupta
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
