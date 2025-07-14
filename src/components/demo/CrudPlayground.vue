<script setup lang="ts">
import { useCrudForm } from "@/composables/useCrudForm";

import BaseInput from "@/components/common/BaseInput.vue";
import BaseTextarea from "@/components/common/BaseTextarea.vue";
import BaseSelect from "@/components/common/BaseSelect.vue";
import BaseSwitch from "@/components/common/BaseSwitch.vue";
import BaseFileUpload from "@/components/common/BaseFileUpload.vue";
import BaseDatePicker from "@/components/common/BaseDatePicker.vue";
import BaseFormField from "@/components/common/BaseFormField.vue";

const { form, errors, isSubmitting, submit, resetForm } = useCrudForm();

const categoryOptions = [
	{ label: "Teknologi", value: "tech" },
	{ label: "Kesehatan", value: "health" },
	{ label: "Olahraga", value: "sport" },
];
</script>

<template>
	<div class="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow space-y-4">
		<h2 class="text-xl font-bold">Form Produk / Konten</h2>

		<BaseFormField label="Judul" :error="errors.title">
			<BaseInput v-model="form.title" placeholder="Judul produk atau artikel" />
		</BaseFormField>

		<BaseFormField label="Deskripsi" :error="errors.description">
			<BaseTextarea
				v-model="form.description"
				placeholder="Isi deskripsi lengkap..."
			/>
		</BaseFormField>

		<BaseFormField label="Kategori" :error="errors.category">
			<BaseSelect
				v-model="form.category"
				:options="categoryOptions"
				placeholder="Pilih kategori"
			/>
		</BaseFormField>

		<BaseFormField label="Status">
			<BaseSwitch v-model="form.status" />
		</BaseFormField>

		<BaseFormField label="Tanggal Publikasi">
			<BaseDatePicker v-model="form.publishedAt" />
		</BaseFormField>

		<BaseFormField label="Gambar Utama">
			<BaseFileUpload v-model="form.image" accept="image/*" />
		</BaseFormField>

		<div class="flex gap-2">
			<button
				@click="submit"
				class="bg-blue-600 text-white px-4 py-2 rounded"
				:disabled="isSubmitting"
			>
				{{ isSubmitting ? "Mendaftar..." : "Daftar" }}
			</button>

			<button
				@click="resetForm"
				class="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
				type="button"
			>
				Kosongkan
			</button>
		</div>
	</div>
</template>
