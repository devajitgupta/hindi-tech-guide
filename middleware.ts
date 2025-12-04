// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";

const defaultLocale = i18n.defaultLocale;
const locales = i18n.locales;

export function middleware(request: NextRequest) {
   const { pathname } = request.nextUrl;

   // Skip middleware for static files and API routes
   if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/static') ||
      pathname.includes('.') // Skip files with extensions
   ) {
      return NextResponse.next();
   }

   // Check if pathname has a locale
   const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
   );

   if (!pathnameHasLocale) {
      // If no locale in pathname, rewrite to default locale
      const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
      return NextResponse.rewrite(newUrl);
   }

   // If pathname starts with default locale, redirect to remove it
   if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
      const newPath = pathname.replace(`/${defaultLocale}`, '') || '/';
      const redirectUrl = new URL(newPath, request.url);
      return NextResponse.redirect(redirectUrl);
   }

   return NextResponse.next();
}

export const config = {
   matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * - assets, images (your static assets)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|assets|images).*)',
   ],
};