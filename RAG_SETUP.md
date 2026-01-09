# RAG (Retrieval Augmented Generation) Setup for Chatbot

The chatbot now uses RAG (Retrieval Augmented Generation) for intelligent, context-aware responses.

## How It Works

1. **Knowledge Base**: Comprehensive company information stored in `lib/knowledge-base.ts`
2. **RAG API**: Server-side API route at `/app/api/chatbot-rag/route.ts` that:
   - Searches the knowledge base for relevant information
   - Uses OpenAI to generate intelligent responses with context
   - Falls back to knowledge base if OpenAI is not configured

## Setup Instructions

### Option 1: With OpenAI (Recommended for Best Results)

1. Get your OpenAI API key from https://platform.openai.com/api-keys

2. Add to your `.env.local` file:
```env
OPENAI_API_KEY=sk-your-api-key-here
```

3. **Important**: For Vercel deployment, add `OPENAI_API_KEY` in:
   - Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add `OPENAI_API_KEY` with your key value
   - Redeploy

### Option 2: Without OpenAI (Still Works!)

The RAG system will work without OpenAI API key:
- Uses semantic search on knowledge base
- Returns relevant information from stored knowledge
- Less intelligent but still functional

## Features

✅ **Handles Multiple Languages**: English, Hindi, Hinglish
✅ **Context-Aware**: Understands different ways of asking questions
✅ **Comprehensive Knowledge**: Company info, services, products, founders, etc.
✅ **Intelligent Fallback**: Uses RAG when intent detection is uncertain
✅ **No External Dependencies**: Works with or without OpenAI

## Knowledge Base Categories

- Company Overview
- Founders Information
- Services Offered
- Products (Keirō, Stratflow)
- Contact Information
- Industries Served
- Areas of Expertise
- Technologies Used

## Testing

Test queries that should work:
- "kisne banayi ye company"
- "company ki kya services hai"
- "stratgenai kya service deta hai"
- "mujhe stratgenai ke bare me info chahiye"
- "who founded stratgenai"
- "what services does stratgenai provide"

The chatbot will use RAG to provide accurate, context-aware responses!


