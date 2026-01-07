import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://sofqnssapadlsiuojwcl.supabase.co'
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  try {
    const body = await request.json()
    const { name, email, phone, company, sessionType, preferredDate, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Store in Supabase session_requests table
    const { error: dbError } = await supabase
      .from('session_requests')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          company: company || null,
          session_type: sessionType || 'general',
          preferred_date: preferredDate || null,
          message: message || null,
          source: 'chatbot',
          created_at: new Date().toISOString(),
        },
      ])

    if (dbError) {
      console.error('Error storing in Supabase:', dbError)
      return NextResponse.json(
        { error: 'Failed to save session request' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Session request received! We will contact you soon.',
    })
  } catch (error: any) {
    console.error('Error processing session request:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to process session request' },
      { status: 500 }
    )
  }
}

