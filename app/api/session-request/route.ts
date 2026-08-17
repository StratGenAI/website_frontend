import { NextRequest, NextResponse } from 'next/server'
import { submitToWeb3Forms } from '@/lib/web3forms'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, sessionType, preferredDate, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const result = await submitToWeb3Forms('session_request', {
      name,
      email,
      phone: phone || null,
      company: company || null,
      sessionType: sessionType || 'general',
      preferredDate: preferredDate || null,
      message: message || null,
      source: body.source || 'chatbot',
    })

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Session request received! We will contact you soon.',
    })
  } catch (error: unknown) {
    console.error('Error processing session request:', error)
    const message = error instanceof Error ? error.message : 'Failed to process session request'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
