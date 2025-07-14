<script setup lang="ts">
import { useBookingForm } from "@/composables/useBookingForm";
import BaseInput from "@/components/common/BaseInput.vue";
import BaseDatePicker from "@/components/common/BaseDatePicker.vue";
import BaseFormField from "@/components/common/BaseFormField.vue";

const { form, errors, isSubmitting, submit, resetForm } = useBookingForm();
</script>

<template>
	<div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-4">
		<h2 class="text-xl font-bold">Form Booking</h2>

		<BaseFormField label="Nama Pemesan" :error="errors.name">
			<BaseInput v-model="form.name" placeholder="Nama kamu" />
		</BaseFormField>

		<BaseFormField label="Tanggal" :error="errors.date">
			<BaseDatePicker v-model="form.date" />
		</BaseFormField>

		<BaseFormField label="Jam" :error="errors.time">
			<BaseInput v-model="form.time" type="time" />
		</BaseFormField>

		<BaseFormField label="Jumlah Orang" :error="errors.people">
			<BaseInput v-model="form.people" type="number" min="1" />
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
