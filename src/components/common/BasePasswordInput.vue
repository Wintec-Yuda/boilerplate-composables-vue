<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
  placeholder?: string
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])
const show = ref(false)
</script>

<template>
  <div class="relative flex flex-col gap-1">
    <input
      :type="show ? 'text' : 'password'"
      :value="modelValue"
      @input="e => emit('update:modelValue', (e.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      class="border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :class="{ 'border-red-500': error }"
    />
    <button
      type="button"
      @click="show = !show"
      class="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
    >
      <span v-if="show">🙈</span>
      <span v-else>👁️</span>
    </button>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>