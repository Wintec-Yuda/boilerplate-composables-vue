<!-- components/table/TablePagination.vue -->
<template>
  <div class="flex items-center justify-between mt-4">
    <div>Halaman {{ page }} dari {{ totalPages }}</div>
    <div class="flex gap-2">
      <button
        class="px-3 py-1 border rounded disabled:opacity-50"
        :disabled="page <= 1"
        @click="$emit('prev')"
      >
        Sebelumnya
      </button>
      <button
        class="px-3 py-1 border rounded disabled:opacity-50"
        :disabled="page >= totalPages"
        @click="$emit('next')"
      >
        Selanjutnya
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  page: number
  totalPages: number
}>()
defineEmits(['prev', 'next'])
</script>
