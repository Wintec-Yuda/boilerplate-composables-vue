<script setup lang="ts">
import { useProfileForm } from "@/composables/useProfileForm";

import BaseInput from "@/components/common/BaseInput.vue";
import BaseFormField from "@/components/common/BaseFormField.vue";
import BaseRadio from "@/components/common/BaseRadio.vue";
import BaseTextarea from "@/components/common/BaseTextarea.vue";
import BaseDatePicker from "@/components/common/BaseDatePicker.vue";
import BaseFileUpload from "@/components/common/BaseFileUpload.vue";
import BaseImageInput from "@/components/common/BaseImageInput.vue";

const { form, errors, isSubmitting, submit, resetForm } = useProfileForm();

const genderOptions = [
	{ label: "Laki-laki", value: "male" },
	{ label: "Perempuan", value: "female" },
];
</script>

<template>
	<div class="max-w-lg mx-auto p-6 bg-white rounded-xl shadow space-y-4">
		<h2 class="text-xl font-bold">Edit Profil</h2>

		<BaseFormField label="Nama" :error="errors.name">
			<BaseInput v-model="form.name" placeholder="Nama lengkap" />
		</BaseFormField>

		<BaseFormField label="Email" :error="errors.email">
			<BaseInput
				v-model="form.email"
				type="email"
				placeholder="you@example.com"
			/>
		</BaseFormField>

		<BaseFormField label="Jenis Kelamin" :error="errors.gender">
			<BaseRadio v-model="form.gender" name="gender" :options="genderOptions" />
		</BaseFormField>

		<BaseFormField label="Tanggal Lahir" :error="errors.birthdate">
			<BaseDatePicker v-model="form.birthdate" />
		</BaseFormField>

		<BaseFormField label="Bio">
			<BaseTextarea
				v-model="form.bio"
				placeholder="Tulis sesuatu tentang dirimu..."
			/>
		</BaseFormField>

		<BaseFormField label="Foto Profil">
			<BaseFileUpload v-model="form.avatar" accept="image/*" />
		</BaseFormField>

		<BaseFormField label="Foto Profil">
			<BaseImageInput v-model="form.avatar" :error="errors.avatar" />
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
