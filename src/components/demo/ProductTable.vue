<template>
  <TableContainer>
    <!-- Header: Search + Filter -->
    <template #header>
      <TableHeader
        v-model:search="search"
        :filters="[
          {
            key: 'category',
            label: 'Kategori',
            options: [
              { value: 'tech', label: 'Teknologi' },
              { value: 'fashion', label: 'Fashion' },
              { value: 'food', label: 'Makanan' },
            ]
          },
          {
            key: 'published',
            label: 'Status',
            options: [
              { value: true, label: 'Published' },
              { value: false, label: 'Draft' },
            ]
          }
        ]"
        :modelValue="filters"
        @update:search="setSearch"
        @update:filter="setFilter"
      />
    </template>

    <!-- Table -->
    <template #table>
      <table class="w-full table-auto text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="px-3 py-2">
              <TableColumnSort
                label="Nama"
                sort-key="name"
                :active="sortBy === 'name'"
                :dir="sortDir"
                @click="setSort"
              />
            </th>
            <th class="px-3 py-2">
              <TableColumnSort
                label="Kategori"
                sort-key="category"
                :active="sortBy === 'category'"
                :dir="sortDir"
                @click="setSort"
              />
            </th>
            <th class="px-3 py-2">
              <TableColumnSort
                label="Harga"
                sort-key="price"
                :active="sortBy === 'price'"
                :dir="sortDir"
                @click="setSort"
              />
            </th>
            <th class="px-3 py-2">
              <TableColumnSort
                label="Stok"
                sort-key="stock"
                :active="sortBy === 'stock'"
                :dir="sortDir"
                @click="setSort"
              />
            </th>
            <th class="px-3 py-2">Status</th>
            <th class="px-3 py-2">Gambar</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in data"
            :key="product.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="px-3 py-2">{{ product.name }}</td>
            <td class="px-3 py-2 capitalize">{{ product.category }}</td>
            <td class="px-3 py-2">Rp{{ product.price.toLocaleString() }}</td>
            <td class="px-3 py-2">{{ product.stock }}</td>
            <td class="px-3 py-2">
              <span
                :class="[
                  'px-2 py-0.5 text-xs rounded-full font-medium',
                  product.published
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-200 text-gray-600',
                ]"
              >
                {{ product.published ? 'Published' : 'Draft' }}
              </span>
            </td>
            <td class="px-3 py-2">
              <img
                :src="product.image"
                class="w-10 h-10 object-cover rounded"
                :alt="product.name"
              />
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
import { fetchProducts } from '@/services/product.service'

// UI components
import TableContainer from '@/components/table/TableContainer.vue'
import TableHeader from '@/components/table/TableHeader.vue'
import TablePagination from '@/components/table/TablePagination.vue'
import TableColumnSort from '@/components/table/TableColumnSort.vue'
import TableEmpty from '@/components/table/TableEmpty.vue'
import TableLoading from '@/components/table/TableLoading.vue'

// Logic
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
} = useTable(fetchProducts)
</script>
