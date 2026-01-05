import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message, productName } = body

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required' },
        { status: 400 }
      )
    }

    // Store in Supabase
    try {
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name,
            email,
            company,
            message: `Product Inquiry: ${productName}\n\n${message || 'No additional message'}`,
            created_at: new Date().toISOString(),
          },
        ])

      if (dbError) {
        console.error('Error storing in Supabase:', dbError)
        // Continue even if Supabase fails
      }
    } catch (dbError) {
      console.error('Error storing in Supabase:', dbError)
      // Continue even if Supabase fails
    }

    // Send email using Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      // If Resend is not configured, return success but log the data
      // You can set up Resend later
      console.log('Product Inquiry:', {
        name,
        email,
        company,
        message,
        productName,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: 'Inquiry received. We will contact you soon!',
      })
    }

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'StratgenAI <onboarding@resend.dev>',
        to: ['hello@stratgenai.in'],
        subject: `New Product Inquiry: ${productName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af;">New Product Inquiry</h2>
            <p><strong>Product:</strong> ${productName}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              This inquiry was submitted from the StratgenAI website.
            </p>
          </div>
        `,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json()
      throw new Error(errorData.message || 'Failed to send email')
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you soon.',
    })
  } catch (error: any) {
    console.error('Error sending product inquiry:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send inquiry' },
      { status: 500 }
    )
  }
}

