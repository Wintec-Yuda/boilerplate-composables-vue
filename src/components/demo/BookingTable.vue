<template>
  <TableContainer>
    <!-- Header: Search + Filter -->
    <template #header>
      <TableHeader
        v-model:search="search"
        :filters="[
          {
            key: 'status',
            label: 'Status',
            options: [
              { value: 'pending', label: 'Pending' },
              { value: 'confirmed', label: 'Confirmed' },
              { value: 'cancelled', label: 'Cancelled' },
            ]
          }
        ]"
        :modelValue="filters"
        @update:search="setSearch"
        @update:filter="setFilter"
      />
    </template>

    <!-- Table Data -->
    <template #table>
      <table class="w-full table-auto text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <TableColumnSort
              label="Nama"
              sort-key="name"
              :active="sortBy === 'name'"
              :dir="sortDir"
              @click="setSort"
            />
            <TableColumnSort
              label="Tanggal"
              sort-key="date"
              :active="sortBy === 'date'"
              :dir="sortDir"
              @click="setSort"
            />
            <TableColumnSort
              label="Jam"
              sort-key="time"
              :active="sortBy === 'time'"
              :dir="sortDir"
              @click="setSort"
            />
            <TableColumnSort
              label="Orang"
              sort-key="people"
              :active="sortBy === 'people'"
              :dir="sortDir"
              @click="setSort"
            />
            <th class="px-3 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="booking in data"
            :key="booking.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="px-3 py-2">{{ booking.name }}</td>
            <td class="px-3 py-2">{{ booking.date }}</td>
            <td class="px-3 py-2">{{ booking.time }}</td>
            <td class="px-3 py-2">{{ booking.people }}</td>
            <td class="px-3 py-2 capitalize">
              <span
                :class="[
                  'px-2 py-0.5 text-xs rounded-full',
                  booking.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : booking.status === 'confirmed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                ]"
              >
                {{ booking.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <TableEmpty v-if="!isLoading && data.length === 0" />
      <TableLoading v-if="isLoading" />
    </template>

    <!-- Footer -->
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
import { fetchBookings } from '@/services/booking.service'

// Components
import TableContainer from '@/components/table/TableContainer.vue'
import TableHeader from '@/components/table/TableHeader.vue'
import TablePagination from '@/components/table/TablePagination.vue'
import TableColumnSort from '@/components/table/TableColumnSort.vue'
import TableEmpty from '@/components/table/TableEmpty.vue'
import TableLoading from '@/components/table/TableLoading.vue'
import { watch } from 'vue'

// Composable
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
} = useTable(fetchBookings)
</script>
