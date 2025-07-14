// composables/useRegisterForm.ts
import { useForm } from './useForm'

export function useRegisterForm() {
  return useForm({
    initial: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate(form) {
      const errors: Record<string, string> = {}

      if (!form.name) {
        errors.name = 'Nama wajib diisi'
      }

      if (!form.email) {
        errors.email = 'Email wajib diisi'
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Format email tidak valid'
      }

      if (!form.password) {
        errors.password = 'Password wajib diisi'
      } else if (form.password.length < 6) {
        errors.password = 'Minimal 6 karakter'
      }

      if (!form.confirmPassword) {
        errors.confirmPassword = 'Konfirmasi password wajib diisi'
      } else if (form.confirmPassword !== form.password) {
        errors.confirmPassword = 'Konfirmasi tidak cocok'
      }

      return errors
    },
    async onSubmit(form) {
      await new Promise(resolve => setTimeout(resolve, 1000)) // simulasi API call
      console.log('Register sukses:', { ...form })
    }
  })
}
