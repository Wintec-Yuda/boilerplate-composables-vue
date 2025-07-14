<template>
  <h2 class="text-xl font-bold mb-4">📦 Kanban Board</h2>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div
      v-for="(tasks, status) in columns"
      :key="status"
      class="bg-gray-100 dark:bg-zinc-900 p-4 rounded shadow min-h-[300px]"
      @drop="onDrop(status)"
      @dragover="onDragOver"
    >
      <h3 class="font-semibold capitalize mb-2">
        {{ statusLabels[status] }}
      </h3>

      <div
        v-for="task in tasks"
        :key="task.id"
        draggable="true"
        @dragstart="onDragStart(task)"
        class="bg-white dark:bg-zinc-800 p-3 mb-2 rounded shadow text-sm cursor-move"
      >
        <div class="font-medium">{{ task.title }}</div>
        <div class="text-gray-500">{{ task.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchKanbanTasks } from '@/services/kanban.service'
import { useKanbanDragDrop } from '@/composables/useKanbanDragDrop'

const { columns, onDragStart, onDrop, onDragOver } = useKanbanDragDrop(fetchKanbanTasks())

const statusLabels = {
  todo: 'To Do',
  inprogress: 'In Progress',
  done: 'Done'
}
</script>
