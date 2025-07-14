<template>
  <div class="fixed top-5 right-5 z-50 flex flex-col gap-2">
    <transition-group name="fade" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="px-4 py-2 rounded shadow text-white"
        :class="{
          'bg-green-500': toast.type === 'success',
          'bg-red-500': toast.type === 'error',
          'bg-blue-500': toast.type === 'info',
        }"
      >
        {{ toast.message }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '@/composables/useToast'
const { toasts } = useToast()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
