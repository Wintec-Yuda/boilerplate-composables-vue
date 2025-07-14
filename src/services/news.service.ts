// services/article.service.ts
import { faker } from '@faker-js/faker'

export type Article = {
  id: string
  title: string
  summary: string
}

export function fetchArticles(count = 5): Article[] {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    summary: faker.lorem.paragraph(),
  }))
}
