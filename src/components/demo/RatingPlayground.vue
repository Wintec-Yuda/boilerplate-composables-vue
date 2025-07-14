<script setup lang="ts">
import { useRatingForm } from "@/composables/useRatingForm";
import BaseRating from "@/components/common/BaseRating.vue";
import BaseTextarea from "@/components/common/BaseTextarea.vue";
import BaseFormField from "@/components/common/BaseFormField.vue";

const { form, errors, isSubmitting, submit, resetForm } = useRatingForm();
</script>

<template>
	<div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-4">
		<h2 class="text-xl font-bold">Beri Penilaian</h2>

		<BaseFormField label="Rating" :error="errors.rating">
			<BaseRating v-model="form.rating" />
		</BaseFormField>

		<BaseFormField label="Komentar (opsional)">
			<BaseTextarea v-model="form.comment" placeholder="Tulis pendapatmu..." />
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
