<script setup lang="ts">
import { ref } from 'vue'

// Import reusable components
import BaseInput from '../common/BaseInput.vue'
import BasePasswordInput from '../common/BasePasswordInput.vue'
import BaseTextarea from '../common/BaseTextarea.vue'
import BaseSelect from '../common/BaseSelect.vue'
import BaseCheckbox from '../common/BaseCheckbox.vue'
import BaseRadio from '../common/BaseRadio.vue'
import BaseSwitch from '../common/BaseSwitch.vue'
import BaseDatePicker from '../common/BaseDatePicker.vue'
import BaseFileUpload from '../common/BaseFileUpload.vue'
import BaseFormField from '../common/BaseFormField.vue'

// Dummy data
const form = ref({
  name: '',
  password: '',
  description: '',
  gender: '',
  agree: false,
  toggle: false,
  birthday: '',
  file: null as File | null,
  role: '',
})

const genderOptions = [
  { label: 'Laki-laki', value: 'male' },
  { label: 'Perempuan', value: 'female' }
]

const roleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
]
</script>

<template>
  <div class="p-6 max-w-2xl mx-auto space-y-6">
    <h2 class="text-2xl font-bold">Form Components Playground</h2>

    <BaseFormField label="Nama">
      <BaseInput v-model="form.name" placeholder="Masukkan nama" />
    </BaseFormField>

    <BaseFormField label="Password">
      <BasePasswordInput v-model="form.password" placeholder="Masukkan password" />
    </BaseFormField>

    <BaseFormField label="Deskripsi">
      <BaseTextarea v-model="form.description" placeholder="Tulis deskripsi di sini..." />
    </BaseFormField>

    <BaseFormField label="Role">
      <BaseSelect v-model="form.role" :options="roleOptions" placeholder="Pilih role" />
    </BaseFormField>

    <BaseFormField label="Jenis Kelamin">
      <BaseRadio v-model="form.gender" name="gender" :options="genderOptions" />
    </BaseFormField>

    <BaseFormField label="Setuju Syarat & Ketentuan">
      <BaseCheckbox v-model="form.agree" label="Saya setuju" />
    </BaseFormField>

    <BaseFormField label="Aktifkan Notifikasi">
      <BaseSwitch v-model="form.toggle" />
    </BaseFormField>

    <BaseFormField label="Tanggal Lahir">
      <BaseDatePicker v-model="form.birthday" />
    </BaseFormField>

    <BaseFormField label="Upload Foto">
      <BaseFileUpload v-model="form.file" accept="image*" />
    </BaseFormField>
  </div>
</template>
