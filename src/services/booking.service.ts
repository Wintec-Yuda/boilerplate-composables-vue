// services/booking.service.ts
import { faker } from '@faker-js/faker'

export type Booking = {
  id: number
  name: string
  date: string
  time: string
  people: number
  status: 'pending' | 'confirmed' | 'cancelled'
}

const bookings: Booking[] = Array.from({ length: 57 }, (_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  date: faker.date.future().toISOString().split('T')[0],
  time: `${faker.number.int({ min: 10, max: 21 })}:00`,
  people: faker.number.int({ min: 1, max: 10 }),
  status: faker.helpers.arrayElement(['pending', 'confirmed', 'cancelled']),
}))

export function fetchBookings({
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
  sortBy?: keyof Booking
  sortDir?: 'asc' | 'desc'
  filters?: Partial<Pick<Booking, 'status'>>
}) {
  let result = [...bookings]

  // 🔍 Search
  if (search) {
    const q = search.toLowerCase()
    result = result.filter(b =>
      b.name.toLowerCase().includes(q)
    )
  }

  // 🧹 Filter
  if (filters.status) {
    result = result.filter(b => b.status === filters.status)
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
