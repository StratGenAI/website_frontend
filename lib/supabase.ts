import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://sofqnssapadlsiuojwcl.supabase.co'
// IMPORTANT: Use the ANON/PUBLIC key here, NOT the secret key
// Get it from: Supabase Dashboard > Settings > API > Project API keys > anon/public key
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseAnonKey || supabaseAnonKey === '') {
  console.error('Supabase anon key is missing! Please add NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

