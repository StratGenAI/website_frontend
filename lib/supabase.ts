import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://sofqnssapadlsiuojwcl.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create client - if key is missing, use a valid JWT format placeholder
// This prevents build errors while still allowing the app to build
// Note: You MUST add NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel environment variables for production
const key = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJidWlsZC10aW1lIn0.build'

export const supabase: SupabaseClient = createClient(supabaseUrl, key)
