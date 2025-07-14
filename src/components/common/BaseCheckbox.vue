<script setup lang="ts">
defineProps<{
  modelValue: boolean
  label?: string
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex items-center gap-2">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="e => emit('update:modelValue', (e.target as HTMLInputElement).checked)"
      class="accent-blue-500"
    />
    <label class="text-sm">{{ label }}</label>
  </div>
  <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
</template>