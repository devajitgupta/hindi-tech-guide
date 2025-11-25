export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  image: string
  date: string
  author: {
    name: string
    jobTitle: string
  }
  category: string
  tags: string[]
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-complete-guide-hindi",
    title: "Next.js का सम्पूर्ण गाइड - 2024 में वेब डेवलपमेंट",
    description:
      "Next.js के साथ आधुनिक वेब एप्लिकेशन बनाने का संपूर्ण गाइड। Server Components, App Router और नवीनतम फीचर्स के बारे में विस्तार से जानें।",
    image: "/nextjs-development.jpg",
    date: "2024-01-15",
    author: {
      name: "Ajit Gupta",
      jobTitle: "Engineer & Tech Writer",
    },
    category: "वेब डेवलपमेंट",
    tags: ["Next.js", "React", "JavaScript", "Web Development"],
    readTime: "10 मिनट",
    content: `
# Next.js का सम्पूर्ण गाइड - 2024 में वेब डेवलपमेंट

Next.js आज के समय में सबसे लोकप्रिय React फ्रेमवर्क है जो आधुनिक वेब एप्लिकेशन बनाने के लिए उपयोग किया जाता है।

## Next.js क्या है?

Next.js एक React-आधारित फ्रेमवर्क है जो Server-Side Rendering (SSR), Static Site Generation (SSG), और बहुत कुछ प्रदान करता है। यह Vercel द्वारा विकसित किया गया है।

## मुख्य विशेषताएं

### 1. App Router
नया App Router आपको अधिक लचीलापन देता है और Server Components का उपयोग करने की अनुमति देता है।

### 2. Server Components
React Server Components के साथ, आप सर्वर पर कंपोनेंट्स रेंडर कर सकते हैं, जिससे बेहतर परफॉर्मेंस मिलती है।

### 3. File-based Routing
Next.js में, आप फ़ाइल सिस्टम के आधार पर रूटिंग कर सकते हैं। यह बहुत सरल और सहज है।

## Next.js क्यों चुनें?

- **बेहतर SEO**: Server-Side Rendering के कारण बेहतर SEO
- **तेज़ परफॉर्मेंस**: Automatic code splitting और optimization
- **Developer Experience**: Hot reloading, TypeScript support
- **Production Ready**: Built-in optimizations और best practices

## निष्कर्ष

Next.js 2024 में वेब डेवलपमेंट के लिए सबसे अच्छा विकल्प है। इसकी शक्तिशाली विशेषताएं और आसान उपयोग इसे पसंदीदा बनाते हैं।
    `,
  },
  {
    slug: "artificial-intelligence-future-hindi",
    title: "आर्टिफिशियल इंटेलिजेंस का भविष्य - क्या है संभावनाएं?",
    description: "AI तकनीक का भविष्य और इसके विभिन्न क्षेत्रों में प्रभाव। जानें कैसे AI हमारे जीवन को बदल रहा है।",
    image: "/artificial-intelligence-future.jpg",
    date: "2024-01-10",
    author: {
      name: "Ajit Gupta",
      jobTitle: "Engineer & Tech Writer",
    },
    category: "आर्टिफिशियल इंटेलिजेंस",
    tags: ["AI", "Machine Learning", "Technology", "Future"],
    readTime: "8 मिनट",
    content: `
# आर्टिफिशियल इंटेलिजेंस का भविष्य

आर्टिफिशियल इंटेलिजेंस (AI) तेजी से विकसित हो रहा है और हमारे जीवन के हर पहलू को प्रभावित कर रहा है।

## AI क्या है?

AI एक तकनीक है जो मशीनों को मानव बुद्धिमत्ता की नकल करने की क्षमता देती है।

## मुख्य क्षेत्र

### 1. स्वास्थ्य सेवा
AI रोग निदान, उपचार योजना और दवा विकास में क्रांति ला रहा है।

### 2. शिक्षा
व्यक्तिगत शिक्षण अनुभव और स्वचालित मूल्यांकन।

### 3. व्यवसाय
ग्राहक सेवा, डेटा विश्लेषण और स्वचालन में सुधार।

## चुनौतियां

- **नैतिक चिंताएं**: गोपनीयता और पूर्वाग्रह
- **रोजगार पर प्रभाव**: स्वचालन से नौकरियों का खतरा
- **सुरक्षा**: AI सिस्टम की सुरक्षा सुनिश्चित करना

## निष्कर्ष

AI का भविष्य उज्ज्वल है, लेकिन हमें जिम्मेदारी से इसका विकास करना होगा।
    `,
  },
  {
    slug: "mobile-app-development-frameworks-2024",
    title: "मोबाइल ऐप डेवलपमेंट फ्रेमवर्क - 2024 की सर्वश्रेष्ठ तकनीकें",
    description: "React Native, Flutter, और अन्य मोबाइल ऐप डेवलपमेंट फ्रेमवर्क की तुलना और गहन विश्लेषण।",
    image: "/mobile-app-frameworks.jpg",
    date: "2024-01-05",
    author: {
      name: "Ajit Gupta",
      jobTitle: "Engineer & Tech Writer",
    },
    category: "मोबाइल डेवलपमेंट",
    tags: ["Mobile Development", "React Native", "Flutter", "Cross-platform"],
    readTime: "12 मिनट",
    content: `
# मोबाइल ऐप डेवलपमेंट फ्रेमवर्क - 2024

मोबाइल ऐप डेवलपमेंट के लिए सही फ्रेमवर्क चुनना महत्वपूर्ण है।

## लोकप्रिय फ्रेमवर्क

### 1. React Native
Facebook द्वारा विकसित, JavaScript का उपयोग करता है।

**फायदे:**
- बड़ा community support
- Code reusability
- Hot reloading

**नुकसान:**
- Native modules की आवश्यकता
- Performance limitations

### 2. Flutter
Google द्वारा विकसित, Dart भाषा का उपयोग करता है।

**फायदे:**
- बेहतर performance
- Rich widget library
- Single codebase

**नुकसान:**
- बड़ा app size
- नया ecosystem

### 3. Native Development
Swift (iOS) और Kotlin (Android) का उपयोग।

**फायदे:**
- सर्वश्रेष्ठ performance
- Full platform access

**नुकसान:**
- अलग-अलग codebase
- अधिक समय और लागत

## कौन सा चुनें?

आपकी आवश्यकताओं और टीम के कौशल पर निर्भर करता है।

## निष्कर्ष

हर फ्रेमवर्क के अपने फायदे हैं। सही चुनाव आपकी परियोजना की सफलता सुनिश्चित करता है।
    `,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
