// composables/useForm.ts
import { reactive, ref } from 'vue'

type ValidateFn<T> = (form: T) => Partial<Record<keyof T, string>>
type SubmitFn<T> = (form: T) => Promise<void>

export function useForm<T extends Record<string, any>>(opts: {
  initial: T
  validate?: ValidateFn<T>
  onSubmit: SubmitFn<T>
}) {
  const form = reactive({ ...opts.initial }) as T
  const errors = reactive<Partial<Record<keyof T, string>>>({})
  const isSubmitting = ref(false)

  function validate(): boolean {
    if (!opts.validate) return true
    const result = opts.validate(form)
    Object.keys(form).forEach(k => (errors[k as keyof T] = '')) // clear
    Object.assign(errors, result)
    return Object.values(result).every(e => !e)
  }

  async function submit() {
    if (!validate()) return
    isSubmitting.value = true
    try {
      await opts.onSubmit(form)
    } finally {
      isSubmitting.value = false
    }
  }

  function resetForm() {
    Object.assign(form, opts.initial)
    Object.keys(errors).forEach(k => (errors[k as keyof T] = ''))
  }

  function setErrors(newErrors: Partial<Record<keyof T, string>>) {
    Object.assign(errors, newErrors)
  }

  return {
    form,
    errors,
    isSubmitting,
    submit,
    validate,
    resetForm,
    setErrors,
  }
}
