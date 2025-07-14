// composables/useDragAndDropList.ts
import { ref } from 'vue'
import type { Article } from '@/services/news.service'

export function useDragAndDropList(initial: Article[]) {
  const list = ref<Article[]>([...initial])
  const draggingIndex = ref<number | null>(null)

  function onDragStart(index: number) {
    draggingIndex.value = index
  }

  function onDrop(index: number) {
    if (
      draggingIndex.value === null ||
      draggingIndex.value === index
    ) return

    const moved = list.value.splice(draggingIndex.value, 1)[0]
    list.value.splice(index, 0, moved)
    draggingIndex.value = null
  }

  function onDragOver(e: DragEvent) {
    e.preventDefault()
  }

  return {
    list,
    onDragStart,
    onDrop,
    onDragOver,
  }
}
