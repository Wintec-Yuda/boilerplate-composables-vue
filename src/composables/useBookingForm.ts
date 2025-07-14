// composables/useBookingForm.ts
import { useForm } from './useForm'

export function useBookingForm() {
  return useForm({
    initial: {
      name: '',
      date: '',
      time: '',
      people: 1,
    },
    validate(form) {
      const errors: Record<string, string> = {}

      if (!form.name) errors.name = 'Nama wajib diisi'
      if (!form.date) errors.date = 'Tanggal wajib diisi'
      if (!form.time) errors.time = 'Jam wajib diisi'
      if (form.people < 1) errors.people = 'Minimal 1 orang'

      return errors
    },
    async onSubmit(form) {
      await new Promise((r) => setTimeout(r, 1000))
      console.log('Booking:', { ...form })
    }
  })
}
