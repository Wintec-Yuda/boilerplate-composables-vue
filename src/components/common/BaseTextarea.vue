<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-1">
    <textarea
      :value="modelValue"
      @input="e => emit('update:modelValue', (e.target as HTMLTextAreaElement).value)"
      :placeholder="placeholder"
      class="border rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      :class="{ 'border-red-500': error }"
    />
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>