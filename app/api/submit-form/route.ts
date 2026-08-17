import { NextRequest, NextResponse } from 'next/server'
import { submitToWeb3Forms, type FormPayload, type FormType } from '@/lib/web3forms'

export const runtime = 'nodejs'

const VALID_TYPES: FormType[] = ['contact', 'session_request', 'product_inquiry']

export async function GET() {
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return NextResponse.json({ error: 'Forms are not configured' }, { status: 503 })
  }

  return NextResponse.json({ accessKey })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const formType = body.formType as FormType
    const data = body.data as FormPayload

    if (!formType || !VALID_TYPES.includes(formType)) {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
    }

    if (!data?.name || !data?.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const result = await submitToWeb3Forms(formType, data)

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We received your submission and will get back to you soon.',
    })
  } catch (error: unknown) {
    console.error('[submit-form]', error)
    const message = error instanceof Error ? error.message : 'Something went wrong'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
