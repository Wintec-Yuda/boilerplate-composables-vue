import { useForm } from './useForm'

export function useLoginForm() {
  return useForm({
    initial: {
      email: '',
      password: ''
    },
    validate(form) {
      const errors: Record<string, string> = {}
      if (!form.email) errors.email = 'Email wajib'
      else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = 'Format email salah'
      if (!form.password) errors.password = 'Password wajib'
      return errors
    },
    async onSubmit(form) {
      await new Promise(r => setTimeout(r, 1000))
      console.log('Login berhasil', form)
    }
  })
}
