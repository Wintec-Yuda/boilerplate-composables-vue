// composables/useKanbanDragDrop.ts
import { ref } from 'vue'
import type { Task } from '@/services/kanban.service'

type ColumnKey = 'todo' | 'inprogress' | 'done'

export function useKanbanDragDrop(initial: Task[]) {
  const columns = ref<Record<ColumnKey, Task[]>>({
    todo: [],
    inprogress: [],
    done: [],
  })

  // Init
  initial.forEach(task => {
    columns.value[task.status].push(task)
  })

  const draggedTask = ref<Task | null>(null)

  function onDragStart(task: Task) {
    draggedTask.value = task
  }

  function onDrop(toColumn: ColumnKey) {
    if (!draggedTask.value) return

    const fromColumn = draggedTask.value.status
    if (fromColumn === toColumn) return

    // Remove from current column
    columns.value[fromColumn] = columns.value[fromColumn].filter(
      (t) => t.id !== draggedTask.value?.id
    )

    // Add to target column
    draggedTask.value.status = toColumn
    columns.value[toColumn].push(draggedTask.value)

    draggedTask.value = null
  }

  function onDragOver(e: DragEvent) {
    e.preventDefault()
  }

  return {
    columns,
    onDragStart,
    onDrop,
    onDragOver,
  }
}
