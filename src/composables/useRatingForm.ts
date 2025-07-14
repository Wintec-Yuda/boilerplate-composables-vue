// composables/useRatingForm.ts
import { useForm } from './useForm'

export function useRatingForm() {
  return useForm({
    initial: {
      rating: 0,
      comment: '',
    },
    validate(form) {
      const errors: Record<string, string> = {}

      if (form.rating === 0) {
        errors.rating = 'Pilih rating dulu'
      }

      return errors
    },
    async onSubmit(form) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Rating dikirim:', { ...form })
    }
  })
}
