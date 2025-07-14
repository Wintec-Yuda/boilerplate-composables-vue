// services/article.service.ts
import { faker } from '@faker-js/faker'

export type Article = {
  id: number
  title: string
  excerpt: string
  image: string
  author: string
  publishedAt: string
}

const articles: Article[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: faker.lorem.sentence(),
  excerpt: faker.lorem.paragraph(),
  image: '',
  // image: faker.image.urlLoremFlickr({ category: 'people' }),
  author: faker.person.fullName(),
  publishedAt: faker.date.past().toISOString().split('T')[0],
}))

export function fetchArticles({
  page = 1,
  perPage = 10,
}: {
  page?: number
  perPage?: number
}) {
  const total = articles.length
  const start = (page - 1) * perPage
  const data = articles.slice(start, start + perPage)

  return Promise.resolve({ data, total, page, perPage })
}
