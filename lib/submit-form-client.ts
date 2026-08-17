import { submitToWeb3Forms, type FormPayload, type FormType } from '@/lib/web3forms'

export async function submitForm(
  formType: FormType,
  data: FormPayload
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const result = await submitToWeb3Forms(formType, data)

    if (!result.ok) {
      return {
        success: false,
        error: result.error || 'Something went wrong. Please try again.',
      }
    }

    return {
      success: true,
      message: 'Thank you! We received your submission and will get back to you soon.',
    }
  } catch {
    return {
      success: false,
      error: 'Could not send the form. Please check your connection and try again.',
    }
  }
}
