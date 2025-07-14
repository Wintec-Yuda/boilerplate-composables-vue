// composables/useInfiniteScroll.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useInfiniteScroll(callback: () => void) {
  const isFetching = ref(false)
  const sentinel = ref<HTMLElement | null>(null)

  let observer: IntersectionObserver

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isFetching.value) {
        isFetching.value = true
        callback()
      }
    })

    if (sentinel.value) observer.observe(sentinel.value)
  })

  onUnmounted(() => {
    if (sentinel.value && observer) {
      observer.disconnect()
    }
  })

  return { isFetching, sentinel }
}
