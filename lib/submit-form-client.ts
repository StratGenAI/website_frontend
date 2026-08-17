import type { FormPayload, FormType } from '@/lib/web3forms'

export async function submitForm(
  formType: FormType,
  data: FormPayload
): Promise<{ success: boolean; message?: string; error?: string }> {
  const response = await fetch('/api/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formType, data }),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    return {
      success: false,
      error: result.error || 'Something went wrong. Please try again.',
    }
  }

  return {
    success: true,
    message: result.message,
  }
}
