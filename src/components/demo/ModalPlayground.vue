<template>
  <div>
    <button @click="open" class="bg-blue-500 text-white px-4 py-2 rounded">
      Buka Modal
    </button>

    <BaseModal v-model="isOpen">
      <h2 class="text-xl font-bold mb-4">Ini modal</h2>
      <p>Isi konten di sini.</p>
      <button @click="close" class="mt-4 bg-gray-200 px-3 py-1 rounded">Tutup</button>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '@/composables/useModal'
import BaseModal from '@/components/modal/BaseModal.vue'
import { useToast } from '@/composables/useToast'

const { showSuccess, showError } = useToast()

// showSuccess('Berhasil disimpan!')
showError('Terjadi kesalahan')

const { isOpen, open, close } = useModal()
</script>
