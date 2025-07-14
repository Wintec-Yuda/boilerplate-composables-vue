<script setup lang="ts">
defineProps<{
  modelValue: string
  options: { label: string; value: string }[]
  placeholder?: string
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-1">
    <select
      :value="modelValue"
      @change="e => emit('update:modelValue', (e.target as HTMLSelectElement).value)"
      class="border rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      :class="{ 'border-red-500': error }"
    >
      <option disabled value="">{{ placeholder || 'Pilih salah satu' }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>