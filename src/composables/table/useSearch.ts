import { ref } from 'vue'
import { debounce } from '@/utils/debounce'

export function useSearch(onSearch: () => void) {
  const search = ref('')

  const setSearch = debounce((val: string) => {
    search.value = val
    onSearch()
  }, 400)

  return { search, setSearch }
}
