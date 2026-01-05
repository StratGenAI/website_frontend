# Supabase Setup Instructions

## Problem: "Invalid API key" Error

You're getting this error because you're using the **secret key** instead of the **anon/public key**.

## Solution: Get Your Anon Key

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project: `sofqnssapadlsiuojwcl`
3. Go to **Settings** (gear icon in left sidebar)
4. Click on **API** in the settings menu
5. Under **Project API keys**, you'll see:
   - **anon** `public` - Use this one! ✅
   - **service_role** `secret` - Don't use this in client-side code ❌

6. Copy the **anon** `public` key (it's a long string starting with `eyJ...`)

## Update Your Code

### Option 1: Use Environment Variable (Recommended)

1. Create/update `.env.local` file in your project root:
```env
NEXT_PUBLIC_SUPABASE_URL=https://sofqnssapadlsiuojwcl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

2. Replace `your_anon_key_here` with the anon key you copied

3. Restart your dev server:
```bash
npm run dev
```

### Option 2: Direct in Code (Not Recommended for Production)

If you want to test quickly, you can temporarily put the anon key directly in `lib/supabase.ts`:

```typescript
const supabaseAnonKey = 'your_anon_key_here'
```

But remember to use environment variables for production!

## Important Notes

- ✅ **Anon/Public Key**: Safe to use in client-side code (browser)
- ❌ **Secret Key**: NEVER use in client-side code, only server-side
- The anon key starts with `eyJ` (JWT token)
- The secret key starts with `sb_secret_` or similar

## After Setup

1. Make sure you've run the SQL from `supabase_setup.sql` in your Supabase SQL Editor
2. Test the contact form
3. Check your Supabase table to see if submissions are being saved

