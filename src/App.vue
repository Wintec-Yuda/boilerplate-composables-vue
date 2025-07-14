<script setup lang="ts">
import DropZone from '@/components/demo/DropZone.vue'
import DraggableList from '@/components/demo/DraggableList.vue'
import KanbanBoard from '@/components/demo/KanbanBoard.vue'

</script>

<template>
  <div class="bg-blue-100 min-h-screen p-4 space-y-8">
    <DropZone />
    <DraggableList />
    <KanbanBoard />
  </div>
</template>
