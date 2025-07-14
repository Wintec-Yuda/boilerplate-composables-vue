<!-- components/modal/BaseModal.vue -->
<template>
  <teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="bg-white rounded p-6 w-full max-w-md shadow-lg relative">
        <button @click="$emit('update:modelValue', false)" class="absolute top-2 right-2 text-gray-500 hover:text-black">
          &times;
        </button>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

defineEmits(['update:modelValue'])
</script>
