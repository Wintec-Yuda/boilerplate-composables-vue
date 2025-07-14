<template>
  <div>
    <h2 class="text-xl font-bold mb-4">🧩 Sortable Article List</h2>

    <div v-for="(article, i) in list" :key="article.id"
      draggable="true"
      @dragstart="onDragStart(i)"
      @dragover="onDragOver"
      @drop="onDrop(i)"
      class="p-4 mb-2 rounded border cursor-move bg-white dark:bg-zinc-800"
    >
      <h3 class="font-semibold">{{ article.title }}</h3>
      <p class="text-sm text-gray-500">{{ article.summary }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchArticles } from '@/services/news.service'
import { useDragAndDropList } from '@/composables/useDragAndDropList'

const { list, onDragStart, onDrop, onDragOver } = useDragAndDropList(fetchArticles(6))
</script>
