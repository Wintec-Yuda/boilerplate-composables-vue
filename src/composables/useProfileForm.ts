// composables/useProfileForm.ts
import { useForm } from './useForm'

export function useProfileForm() {
  return useForm({
    initial: {
      name: '',
      email: '',
      gender: '',
      birthdate: '',
      bio: '',
      avatar: null as File | null,
    },
    validate(form) {
      const errors: Record<string, string> = {}

      if (!form.name) errors.name = 'Nama wajib diisi'

      if (!form.email) {
        errors.email = 'Email wajib diisi'
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Email tidak valid'
      }

      if (!form.gender) errors.gender = 'Jenis kelamin wajib diisi'

      if (!form.birthdate) errors.birthdate = 'Tanggal lahir wajib diisi'

      return errors
    },
    async onSubmit(form) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Profile submitted:', { ...form })
    }
  })
}
