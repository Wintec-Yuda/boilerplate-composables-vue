<template>
  <TableContainer>
    <!-- Header: Search + Filter -->
    <template #header>
      <TableHeader
        v-model:search="search"
        :filters="[
          { 
            key: 'role',
            label: 'Role',
            options: [
              { value: 'admin', label: 'Admin' },
              { value: 'user', label: 'User' },
              { value: 'guest', label: 'Guest' },
            ] 
          }
        ]"
        :modelValue="filters"
        @update:search="setSearch"
        @update:filter="setFilter"
      />
    </template>

    <!-- Table: Data -->
    <template #table>
      <table class="w-full table-auto text-sm">
        <thead>
          <tr class="bg-gray-100">
            <TableColumnSort
              label="Nama"
              sort-key="name"
              :active="sortBy === 'name'"
              :dir="sortDir"
              @click="setSort"
            />
            <TableColumnSort
              label="Email"
              sort-key="email"
              :active="sortBy === 'email'"
              :dir="sortDir"
              @click="setSort"
            />
            <th class="text-left">Role</th>
            <th class="text-left">Created</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in data"
            :key="user.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="px-3 py-2">{{ user.name }}</td>
            <td class="px-3 py-2">{{ user.email }}</td>
            <td class="capitalize">{{ user.role }}</td>
            <td>{{ user.createdAt }}</td>
          </tr>
        </tbody>
      </table>

      <TableEmpty v-if="!isLoading && data.length === 0" />
      <TableLoading v-if="isLoading" />
    </template>

    <!-- Footer: Pagination -->
    <template #footer>
      <TablePagination
        :page="page"
        :totalPages="totalPages"
        @prev="setPage(page - 1)"
        @next="setPage(page + 1)"
      />
    </template>
  </TableContainer>
</template>

<script setup lang="ts">
import { useTable } from '@/composables/useTable'
import { fetchUsers } from '@/services/user.service'

// UI components
import TableContainer from '@/components/table/TableContainer.vue'
import TableHeader from '@/components/table/TableHeader.vue'
import TablePagination from '@/components/table/TablePagination.vue'
import TableColumnSort from '@/components/table/TableColumnSort.vue'
import TableEmpty from '@/components/table/TableEmpty.vue'
import TableLoading from '@/components/table/TableLoading.vue'

// Logic: useTable
const {
  data,
  isLoading,
  page,
  totalPages,
  search,
  sortBy,
  sortDir,
  filters,

  setPage,
  setSearch,
  setSort,
  setFilter,
} = useTable(fetchUsers)
</script>
