// services/product.service.ts
import { faker } from '@faker-js/faker'

export type Product = {
  id: number
  name: string
  category: 'tech' | 'fashion' | 'food'
  stock: number
  price: number
  image: string
  published: boolean
}

const products: Product[] = Array.from({ length: 63 }, (_, i) => ({
  id: i + 1,
  name: faker.commerce.productName(),
  category: faker.helpers.arrayElement(['tech', 'fashion', 'food']),
  stock: faker.number.int({ min: 0, max: 100 }),
  price: parseFloat(faker.commerce.price({ min: 10, max: 999 })),
  // image: faker.image.urlLoremFlickr({ category: 'product' }),
  image: '',
  published: faker.datatype.boolean(),
}))

export function fetchProducts({
  page = 1,
  perPage = 10,
  search = '',
  sortBy = 'name',
  sortDir = 'asc',
  filters = {},
}: {
  page?: number
  perPage?: number
  search?: string
  sortBy?: keyof Product
  sortDir?: 'asc' | 'desc'
  filters?: Partial<Pick<Product, 'category' | 'published'>>
}) {
  let result = [...products]

  // 🔍 Search
  if (search) {
    const q = search.toLowerCase()
    result = result.filter(p => p.name.toLowerCase().includes(q))
  }

  // 🧹 Filter
  if (filters.category) {
    result = result.filter(p => p.category === filters.category)
  }
  if (filters.published !== undefined) {
    result = result.filter(p => p.published === filters.published)
  }

  // 🔃 Sort
  result.sort((a, b) => {
    const aVal = a[sortBy]
    const bVal = b[sortBy]
    const dir = sortDir === 'asc' ? 1 : -1
    return String(aVal).localeCompare(String(bVal)) * dir
  })

  // 📄 Pagination
  const total = result.length
  const start = (page - 1) * perPage
  const paged = result.slice(start, start + perPage)

  return Promise.resolve({
    data: paged,
    total,
    page,
    perPage,
  })
}
