<script setup lang="ts">
import { useOtpForm } from "@/composables/useOtpForm";
import BaseOtpInput from "@/components/common/BaseOtpInput.vue";

const { form, error, isSubmitting, submit, resetForm } = useOtpForm();
</script>

<template>
	<div
		class="max-w-sm mx-auto p-6 bg-white rounded-xl shadow space-y-4 text-center"
	>
		<h2 class="text-xl font-bold">Masukkan Kode OTP</h2>
		<BaseOtpInput v-model="form.otp" />
		<p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
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
