export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  readTime: string
  publishedDate: string
  updatedDate: string
  isRecentlyUpdated: boolean
  image: string
}
