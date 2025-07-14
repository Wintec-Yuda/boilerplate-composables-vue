import { ref } from 'vue'

export function useSorting() {
  const sortBy = ref()
  const sortDir = ref<'asc' | 'desc'>('asc')

  function setSort(key: string) {
    if (sortBy.value === key) {
      sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortBy.value = key
      sortDir.value = 'asc'
    }
  }

  return { sortBy, sortDir, setSort }
}
