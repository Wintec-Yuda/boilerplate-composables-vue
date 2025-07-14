<script setup lang="ts">
defineProps<{
  label?: string
  error?: string
}>()
</script>

<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" class="text-sm font-medium text-gray-700">{{ label }}</label>
    <slot />
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>