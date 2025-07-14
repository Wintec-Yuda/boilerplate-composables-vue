// composables/useOtpForm.ts
import { useForm } from './useForm'

export function useOtpForm() {
  return useForm({
    initial: {
      otp: '',
    },
    validate(form) {
      const errors: Record<string, string> = {}

      if (form.otp.length !== 6 || !/^\d{6}$/.test(form.otp)) {
        errors.otp = 'Kode OTP harus 6 digit angka'
      }

      return errors
    },
    async onSubmit(form) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('OTP verified:', form.otp)
    }
  })
}
