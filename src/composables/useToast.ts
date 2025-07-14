// composables/useToast.ts
import { ref } from 'vue'

type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: number
  message: string
  type: ToastType
  duration: number
}

const toasts = ref<Toast[]>([])
let id = 0

export function useToast() {
  function show(message: string, type: ToastType = 'info', duration = 3000) {
    const toast: Toast = { id: ++id, message, type, duration }
    toasts.value.push(toast)

    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== toast.id)
    }, duration)
  }

  return {
    toasts,
    showSuccess: (msg: string) => show(msg, 'success'),
    showError: (msg: string) => show(msg, 'error'),
    showInfo: (msg: string) => show(msg, 'info'),
  }
}
