export type FormType = 'contact' | 'session_request' | 'product_inquiry'

export interface FormPayload {
  name: string
  email: string
  company?: string | null
  phone?: string | null
  message?: string | null
  productName?: string | null
  sessionType?: string | null
  preferredDate?: string | null
  source?: string | null
}

const FORM_SUBJECTS: Record<FormType, string> = {
  contact: 'New Contact Form — StratgenAI',
  session_request: 'New Session Request — StratgenAI',
  product_inquiry: 'New Product Inquiry — StratgenAI',
}

function buildMessage(formType: FormType, data: FormPayload): string {
  const lines = [
    `Form: ${formType}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
  ]

  if (data.phone) lines.push(`Phone: ${data.phone}`)
  if (data.company) lines.push(`Company: ${data.company}`)
  if (data.productName) lines.push(`Product: ${data.productName}`)
  if (data.sessionType) lines.push(`Session type: ${data.sessionType}`)
  if (data.preferredDate) lines.push(`Preferred date: ${data.preferredDate}`)
  if (data.source) lines.push(`Source: ${data.source}`)
  if (data.message) lines.push('', 'Message:', data.message)

  lines.push('', `Submitted at: ${new Date().toISOString()}`)
  return lines.join('\n')
}

export async function submitToWeb3Forms(
  formType: FormType,
  data: FormPayload
): Promise<{ ok: boolean; error?: string }> {
  // Web3Forms free plan blocks server-side proxies. Key is designed to be public.
  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    console.error(
      '[forms] NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is missing. Add it to .env.local and Vercel — get a free key at https://web3forms.com'
    )
    return {
      ok: false,
      error:
        'Forms are not set up yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel Environment Variables, then redeploy. Or email hello@stratgenai.in directly.',
    }
  }

  if (!data.name?.trim() || !data.email?.trim()) {
    return { ok: false, error: 'Name and email are required.' }
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: FORM_SUBJECTS[formType],
      name: data.name,
      from_name: data.name,
      email: data.email,
      replyto: data.email,
      message: buildMessage(formType, data),
    }),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok || result.success === false) {
    console.error('[forms] Web3Forms error:', result)
    return {
      ok: false,
      error: result.message || 'Failed to send form. Please try again.',
    }
  }

  return { ok: true }
}
