<!-- components/table/TableColumnSort.vue -->
<template>
  <th @click="$emit('click', sortKey)" class="cursor-pointer select-none px-3 py-2">
    <div class="flex items-center gap-1">
      {{ label }}
      <template v-if="active">
        <svg v-if="dir === 'asc'" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 10l5-5 5 5H5z" />
        </svg>
        <svg v-else class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M15 10l-5 5-5-5h10z" />
        </svg>
      </template>
    </div>
  </th>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  sortKey: string
  active: boolean
  dir: 'asc' | 'desc'
}>()
defineEmits(['click'])
</script>
