import { reactive } from 'vue'

export function useFilter() {
  const filters = reactive<Record<string, any>>({})

  function setFilter(key: string, value: any) {
    filters[key] = value
  }

  return { filters, setFilter }
}
