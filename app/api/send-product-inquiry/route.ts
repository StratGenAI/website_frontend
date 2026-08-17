import { NextRequest, NextResponse } from 'next/server'
import { submitToWeb3Forms } from '@/lib/web3forms'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message, productName } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const result = await submitToWeb3Forms('product_inquiry', {
      name,
      email,
      company: company || null,
      message: message || null,
      productName: productName || 'Unknown product',
      source: 'api',
    })

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you soon.',
    })
  } catch (error: unknown) {
    console.error('Error sending product inquiry:', error)
    const message = error instanceof Error ? error.message : 'Failed to send inquiry'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
