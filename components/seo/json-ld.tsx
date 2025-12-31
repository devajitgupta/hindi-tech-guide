"use client"

import Script from "next/script"

/* ---------------------------------------------------------
   ORGANIZATION SCHEMA
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
    "@id": `${url}#organization`,
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
      id="schema-org-organization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ---------------------------------------------------------
   WEBSITE SCHEMA + SEARCH ACTION
---------------------------------------------------------- */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hinditechguide.com/#website",
    name: "HindiTechGuide",
    url: "https://hinditechguide.com",
    inLanguage: "hi-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://hinditechguide.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <Script
      id="schema-org-website"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ---------------------------------------------------------
   WEBPAGE SCHEMA
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
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    inLanguage: "hi-IN",
    image: image || `${url}/cover.png`,
    isPartOf: {
      "@id": "https://hinditechguide.com/#website",
    },
  }

  return (
    <Script
      id={`schema-org-webpage-${url}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ---------------------------------------------------------
   BLOG POSTING SCHEMA
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
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline,
    description,
    image: [image || "https://hinditechguide.com/default-og.webp"],
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: "hi-IN",
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.jobTitle,
      url: "https://hinditechguide.com/author/ajit-gupta",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://hinditechguide.com/#organization",
    },
    keywords,
    articleSection: category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: {
      "@id": "https://hinditechguide.com/#website",
    },
  }

  return (
    <Script
      id={`schema-org-article-${url}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ---------------------------------------------------------
   BREADCRUMB SCHEMA
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
      id={`schema-org-breadcrumb-${items.length}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
