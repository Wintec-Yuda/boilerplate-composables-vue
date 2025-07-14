<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: File | null
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])

const previewUrl = ref<string | null>(null)

watch(
  () => props.modelValue,
  (file) => {
    if (!file || !file.type.startsWith('image/')) {
      previewUrl.value = null
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      previewUrl.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  },
  { immediate: true }
)

function handleChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0] || null
  emit('update:modelValue', file)
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <input
      type="file"
      accept="image/*"
      @change="handleChange"
      class="file:mr-4 file:px-4 file:py-2 file:rounded file:border-0 file:bg-blue-500 file:text-white file:cursor-pointer"
    />

    <div v-if="previewUrl" class="w-24 h-24">
      <img
        :src="previewUrl"
        alt="Preview"
        class="w-full h-full object-cover rounded border"
      />
    </div>

    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>
