// composables/useCrudForm.ts
import { useForm } from './useForm'

export function useCrudForm() {
  return useForm({
    initial: {
      title: '',
      description: '',
      category: '',
      status: true,
      image: null as File | null,
      publishedAt: '',
    },
    validate(form) {
      const errors: Record<string, string> = {}

      if (!form.title) errors.title = 'Judul wajib diisi'
      if (!form.description) errors.description = 'Deskripsi wajib diisi'
      if (!form.category) errors.category = 'Kategori wajib dipilih'

      return errors
    },
    async onSubmit(form) {
      await new Promise(resolve => setTimeout(resolve, 1000)) // simulasi API
      console.log('Data tersimpan:', { ...form })
    }
  })
}
