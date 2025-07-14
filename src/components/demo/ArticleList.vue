<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div
      v-for="article in articles"
      :key="article.id"
      class="bg-white rounded shadow p-4"
    >
      <img :src="article.image" class="w-full h-40 object-cover rounded mb-2" />
      <h2 class="font-bold text-lg">{{ article.title }}</h2>
      <p class="text-sm text-gray-600 mb-1">{{ article.author }} - {{ article.publishedAt }}</p>
      <p class="text-sm text-gray-700">{{ article.excerpt }}</p>
    </div>

    <!-- ⬇️ Observer Trigger -->
    <div ref="sentinel" class="h-10" />
  </div>
</template>

<script setup lang="ts">
import { useArticleList } from '@/composables/useArticleList'

const { articles, sentinel } = useArticleList()
</script>
