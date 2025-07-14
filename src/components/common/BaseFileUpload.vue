<script setup lang="ts">
defineProps<{
  modelValue: File | null
  accept?: string
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-1">
    <input
      type="file"
      :accept="accept"
      @change="e => emit('update:modelValue', (e.target as HTMLInputElement).files?.[0] || null)"
      class="file:mr-4 file:px-4 file:py-2 file:rounded file:border-0 file:bg-blue-500 file:text-white file:cursor-pointer"
    />
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>