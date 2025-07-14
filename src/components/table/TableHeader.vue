<template>
  <div class="flex flex-wrap gap-4 items-center">
    <!-- Search input -->
    <input
      type="text"
      :value="search"
      @input="$emit('update:search', $event.target.value)"
      placeholder="Cari..."
      class="border px-3 py-2 rounded w-full md:w-64"
    />

    <!-- Filters -->
    <template v-for="f in filters" :key="f.key">
      <select
        :value="modelValue[f.key] ?? ''"
        @change="$emit('update:filter', f.key, parseValue($event.target.value))"
        class="border px-3 py-2 rounded"
      >
        <option :value="''">Semua {{ f.label }}</option>
        <option
          v-for="opt in f.options"
          :key="typeof opt === 'object' ? opt.value : opt"
          :value="formatValue(opt)"
        >
          {{ typeof opt === 'object' ? opt.label : opt }}
        </option>
      </select>
    </template>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  search: string
  filters: {
    key: string
    label: string
    options: (string | { value: any; label: string })[]
  }[]
  modelValue: Record<string, any>
}>()
defineEmits(['update:search', 'update:filter'])

function formatValue(opt: string | { value: any; label: string }) {
  return typeof opt === 'object' ? opt.value : opt
}

function parseValue(raw: string) {
  try {
    return JSON.parse(raw)
  } catch {
    return raw
  }
}
</script>
