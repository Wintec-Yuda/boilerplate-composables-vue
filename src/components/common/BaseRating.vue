<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: number
}>()
const emit = defineEmits(['update:modelValue'])

const hover = ref(0)

function setRating(rating: number) {
  emit('update:modelValue', rating)
}

function setHover(value: number) {
  hover.value = value
}
</script>

<template>
  <div class="flex gap-1">
    <svg
      v-for="i in 5"
      :key="i"
      @click="setRating(i)"
      @mouseover="setHover(i)"
      @mouseleave="setHover(0)"
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 cursor-pointer transition"
      :class="[
        (hover >= i || (!hover && props.modelValue >= i))
          ? 'text-yellow-400'
          : 'text-gray-300'
      ]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.13 3.462a1 1 0 00.95.69h3.633c.969 0 1.371 1.24.588 1.81l-2.94 2.138a1 1 0 00-.364 1.118l1.13 3.462c.3.922-.755 1.688-1.538 1.118L10 13.348l-2.94 2.138c-.783.57-1.838-.196-1.538-1.118l1.13-3.462a1 1 0 00-.364-1.118L3.348 8.89c-.783-.57-.38-1.81.588-1.81h3.633a1 1 0 00.95-.69l1.13-3.462z" />
    </svg>
  </div>
</template>
