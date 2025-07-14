<script setup lang="ts">
defineProps<{
  modelValue: string
  options: { label: string; value: string }[]
  name: string
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-2">
    <label v-for="opt in options" :key="opt.value" class="flex items-center gap-2">
      <input
        type="radio"
        :name="name"
        :value="opt.value"
        :checked="modelValue === opt.value"
        @change="emit('update:modelValue', opt.value)"
        class="accent-blue-500"
      />
      {{ opt.label }}
    </label>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>