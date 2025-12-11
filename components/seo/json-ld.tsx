"use client"

import Script from "next/script"

/* ---------------------------------------------------------
 ✅ 1. ORGANIZATION SCHEMA
---------------------------------------------------------- */
interface OrganizationSchemaProps {
  name: string
  description: string
  url: string
  logo?: string
  author: {
    name: string
    jobTitle: string
  }
  sameAs?: string[]
}

export function OrganizationSchema({
  name,
  description,
  url,
  logo,
  author,
  sameAs = [],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    url,
    logo: logo || `${url}/logo.png`,
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.jobTitle,
    },
    sameAs,
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ---------------------------------------------------------
 ✅ 2. WEBSITE SCHEMA + SEARCH ACTION (Sitelinks Search Box)
---------------------------------------------------------- */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HindiTechGuide",
    url: "https://hinditechguide.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://hinditechguide.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ---------------------------------------------------------
 ✅ 3. WEBPAGE SCHEMA (Homepage / Single page)
---------------------------------------------------------- */
interface WebPageSchemaProps {
  name: string
  description: string
  url: string
  image?: string
}

export function WebPageSchema({
  name,
  description,
  url,
  image,
}: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: "hi-IN",
    image: image || `${url}/cover.png`,
    isPartOf: {
      "@type": "WebSite",
      name: "HindiTechGuide",
      url: "https://hinditechguide.com",
    },
  }

  return (
    <Script
      id="webpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ---------------------------------------------------------
 ✅ 4. ARTICLE SCHEMA (Blog post Schema)
---------------------------------------------------------- */
interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  author: {
    name: string
    jobTitle: string
  }
  url: string
  keywords?: string[]
  category?: string
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
  keywords = [],
  category = "Technology",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: [image || `${url}/hinditechguide.png`],
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.jobTitle,
    },
    publisher: {
      "@type": "Organization",
      name: "HindiTechGuide",
      logo: {
        "@type": "ImageObject",
        url: `${url}/logo.png`,
      },
    },
    keywords: keywords.join(", "),
    articleSection: category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ---------------------------------------------------------
 ✅ 5. BREADCRUMB SCHEMA
---------------------------------------------------------- */
interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
