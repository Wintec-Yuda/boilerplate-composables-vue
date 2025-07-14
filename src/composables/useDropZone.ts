// composables/useDropZone.ts
import { ref } from 'vue'
import { uploadFiles } from '@/services/file.service'

export function useDropZone() {
  const isDragging = ref(false)
  const files = ref<any[]>([])

  async function handleDrop(e: DragEvent) {
    e.preventDefault()
    isDragging.value = false

    const droppedFiles = Array.from(e.dataTransfer?.files || [])
    const uploaded = await uploadFiles(droppedFiles)
    files.value.push(...uploaded)
  }

  function handleDragOver(e: DragEvent) {
    e.preventDefault()
    isDragging.value = true
  }

  function handleDragLeave() {
    isDragging.value = false
  }

  return {
    isDragging,
    files,
    handleDrop,
    handleDragOver,
    handleDragLeave,
  }
}
