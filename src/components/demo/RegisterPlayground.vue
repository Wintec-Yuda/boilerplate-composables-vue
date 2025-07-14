<script setup lang="ts">
import { useRegisterForm } from "@/composables/useRegisterForm";

import BaseInput from "@/components/common/BaseInput.vue";
import BasePasswordInput from "@/components/common/BasePasswordInput.vue";
import BaseFormField from "@/components/common/BaseFormField.vue";

const { form, errors, isSubmitting, submit, resetForm } = useRegisterForm();
</script>

<template>
	<div class="max-w-sm mx-auto p-6 bg-white rounded-xl shadow space-y-4">
		<h2 class="text-xl font-bold">Register</h2>

		<BaseFormField label="Nama Lengkap" :error="errors.name">
			<BaseInput v-model="form.name" placeholder="Nama kamu" />
		</BaseFormField>

		<BaseFormField label="Email" :error="errors.email">
			<BaseInput
				v-model="form.email"
				type="email"
				placeholder="you@example.com"
			/>
		</BaseFormField>

		<BaseFormField label="Password" :error="errors.password">
			<BasePasswordInput v-model="form.password" placeholder="Password" />
		</BaseFormField>

		<BaseFormField label="Konfirmasi Password" :error="errors.confirmPassword">
			<BasePasswordInput
				v-model="form.confirmPassword"
				placeholder="Ulangi password"
			/>
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
