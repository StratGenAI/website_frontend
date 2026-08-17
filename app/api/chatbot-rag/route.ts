import { NextRequest, NextResponse } from 'next/server'
import { searchKnowledgeBase } from '@/lib/knowledge-base'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { query, context } = body

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      )
    }

    // Search knowledge base
    const relevantDocs = searchKnowledgeBase(query, 3)
    
    // If we have relevant documents, use them
    if (relevantDocs.length > 0) {
      // Build context from retrieved documents
      const contextText = relevantDocs
        .map(doc => `**${doc.title}**\n${doc.content}`)
        .join('\n\n')
      
      // Use OpenAI to generate response with RAG context
      const openaiApiKey = process.env.OPENAI_API_KEY
      
      if (openaiApiKey) {
        try {
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${openaiApiKey}`
            },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: [
                {
                  role: 'system',
                  content: `You are Keirō, an AI assistant for StratgenAI. Use the following context to answer questions accurately and professionally. If the context doesn't contain the answer, politely say you don't have that information and redirect to available topics.

Context about StratgenAI:
${contextText}

Guidelines:
- Be professional, friendly, and concise
- Answer in the same language as the user (English, Hindi, or Hinglish)
- Only provide information from the context
- If asked about something not in context, politely redirect
- Keep responses under 200 words`
                },
                {
                  role: 'user',
                  content: query
                }
              ],
              max_tokens: 300,
              temperature: 0.7
            })
          })

          if (response.ok) {
            const data = await response.json()
            const aiResponse = data.choices[0]?.message?.content || ''
            
            return NextResponse.json({
              success: true,
              response: aiResponse,
              sources: relevantDocs.map(doc => doc.title)
            })
          }
        } catch (error) {
          console.error('OpenAI API error:', error)
          // Fall through to fallback response
        }
      }
      
      // Fallback without OpenAI: return top KB answer clearly
      const primaryDoc = relevantDocs[0]
      const extras = relevantDocs.slice(1).map(d => d.title).filter(Boolean)
      const follow =
        extras.length > 0
          ? `\n\nRelated: ${extras.join(', ')}. You can also ask about products, services, founders, pricing, or contact.`
          : `\n\nYou can also ask about products, services, founders, pricing, demo, or contact.`

      return NextResponse.json({
        success: true,
        response: `**${primaryDoc.title}**\n\n${primaryDoc.content}${follow}`,
        sources: relevantDocs.map(doc => doc.title)
      })
    }

    // No relevant documents found
    return NextResponse.json({
      success: true,
      response: "I couldn't find that in my knowledge base. Try asking about: products (Keirō / BioCopilot), services, founders, pricing, demo, industries, or contact (hello@stratgenai.in).",
      sources: []
    })
  } catch (error: any) {
    console.error('RAG API error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to process query' },
      { status: 500 }
    )
  }
}



