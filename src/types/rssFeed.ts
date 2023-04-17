export interface RssFeed {
  items: Item[]
  title: string
  description: string
  generator: string
  link: string
  language: string
  copyright: string
  lastBuildDate: string
  itunes: Itunes2
}

export interface Item {
  creator: string
  title: string
  link: string
  pubDate: string
  enclosure: Enclosure
  "dc:creator": string
  content: string
  contentSnippet: string
  guid: string
  isoDate: string
  itunes: Itunes
}

export interface Enclosure {
  url: string
  length: string
  type: string
}

export interface Itunes {
  explicit: string
  duration: string
  image: any
}

export interface Itunes2 {
  owner: Owner
  image: string
  categories: string[]
  categoriesWithSubs: CategoriesWithSub[]
  author: string
  subtitle: string
  explicit: string
}

export interface Owner {
  name: string
  email: string
}

export interface CategoriesWithSub {
  name: string
  subs: any
}
