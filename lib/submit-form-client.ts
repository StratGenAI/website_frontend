import { submitToWeb3Forms, type FormPayload, type FormType } from '@/lib/web3forms'

async function resolveAccessKey(): Promise<string | undefined> {
  const fromBuild = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  if (fromBuild) return fromBuild

  const response = await fetch('/api/submit-form', { method: 'GET' })
  const result = await response.json().catch(() => ({}))
  return typeof result.accessKey === 'string' ? result.accessKey : undefined
}

export async function submitForm(
  formType: FormType,
  data: FormPayload
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const accessKey = await resolveAccessKey()
    const result = await submitToWeb3Forms(formType, data, accessKey)

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
