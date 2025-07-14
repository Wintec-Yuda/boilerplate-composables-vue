import { ref, computed } from 'vue'

export function usePagination(perPageDefault = 10) {
  const page = ref(1)
  const perPage = ref(perPageDefault)
  const total = ref(0)

  const totalPages = computed(() =>
    Math.ceil(total.value / perPage.value)
  )

  function setPage(newPage: number) {
    page.value = newPage
  }

  return { page, perPage, total, totalPages, setPage }
}
