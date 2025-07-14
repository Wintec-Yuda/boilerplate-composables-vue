// src/composables/useTheme.ts
import { ref, watchEffect } from 'vue'

const theme = ref<'light' | 'dark'>(localStorage.getItem('theme') as 'light' | 'dark' || 'light')

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}

watchEffect(() => {
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
})

export function useTheme() {
  return { theme, toggleTheme }
}
