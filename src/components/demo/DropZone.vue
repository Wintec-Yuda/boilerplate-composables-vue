<template>
  <div
    class="border-2 border-dashed p-6 text-center rounded transition-all"
    :class="isDragging ? 'bg-blue-100 border-blue-500' : 'bg-white dark:bg-zinc-800'"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
  >
    <p>Drop files here or drag them in</p>
  </div>

  <div v-if="files.length" class="mt-4">
    <h3 class="font-bold mb-2">Uploaded Files:</h3>
    <ul class="space-y-1">
      <li v-for="(file, index) in files" :key="index">
        <span>{{ file.name }} ({{ file.size }} bytes)</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useDropZone } from '@/composables/useDropZone'
const { isDragging, files, handleDrop, handleDragOver, handleDragLeave } = useDropZone()
</script>
