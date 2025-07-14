<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const values = ref<string[]>(Array(6).fill(''))

const inputs = ref<(HTMLInputElement | null)[]>([])

watch(() => props.modelValue, (val) => {
  values.value = val.split('').concat(Array(6).fill('')).slice(0, 6)
})

function updateValue() {
  emit('update:modelValue', values.value.join(''))
}

function handleInput(e: Event, i: number) {
  const target = e.target as HTMLInputElement
  const val = target.value.replace(/\D/g, '')
  if (!val) return

  values.value[i] = val
  updateValue()
  if (val && i < 5) {
    nextTick(() => inputs.value[i + 1]?.focus())
  }
}
</script>

<template>
  <div class="flex gap-2 justify-center">
    <input
      v-for="(_, i) in values"
      :key="i"
      ref="inputs"
      v-model="values[i]"
      maxlength="1"
      class="w-10 h-12 border text-center rounded text-lg"
      @input="e => handleInput(e, i)"
    />
  </div>
</template>
