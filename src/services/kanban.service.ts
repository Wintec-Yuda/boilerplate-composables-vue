// services/kanban.service.ts
import { faker } from '@faker-js/faker'

export type Task = {
  id: string
  title: string
  description: string
  status: 'todo' | 'inprogress' | 'done'
}

export function fetchKanbanTasks(): Task[] {
  return Array.from({ length: 12 }).map(() => ({
    id: faker.string.uuid(),
    title: faker.hacker.phrase(),
    description: faker.lorem.sentence(),
    status: faker.helpers.arrayElement(['todo', 'inprogress', 'done']) as Task['status']
  }))
}
