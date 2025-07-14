<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <button
    type="button"
    @click="emit('update:modelValue', !modelValue)"
    :class="[
      'w-12 h-6 flex items-center rounded-full p-1 transition-colors',
      modelValue ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
    ]"
  >
    <div class="bg-white w-4 h-4 rounded-full shadow"></div>
  </button>
</template>