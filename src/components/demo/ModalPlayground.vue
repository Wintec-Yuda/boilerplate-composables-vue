<template>
	<div>
		<button @click="open" class="bg-blue-500 text-white px-4 py-2 rounded">
			Buka Modal
		</button>
    
    <div class="bg-white dark:bg-gray-900 text-black dark:text-white w-20 h-20 flex items-center justify-center m-10">
      <button @click="toggleTheme">
        {{ theme === "dark" ? "🌙" : "☀️" }} Toggle Theme
      </button>
    </div>

		<BaseModal v-model="isOpen">
			<h2 class="text-xl font-bold mb-4">Ini modal</h2>
			<p>Isi konten di sini.</p>
			<button @click="close" class="mt-4 bg-gray-200 px-3 py-1 rounded">
				Tutup
			</button>
		</BaseModal>
	</div>
</template>

<script setup lang="ts">
import { useModal } from "@/composables/useModal";
import BaseModal from "@/components/modal/BaseModal.vue";
import { useToast } from "@/composables/useToast";
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();

const { showSuccess, showError } = useToast();

// showSuccess('Berhasil disimpan!')
showError("Terjadi kesalahan");

const { isOpen, open, close } = useModal();
</script>
