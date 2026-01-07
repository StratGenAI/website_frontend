# Supabase Setup Guide for StratgenAI

## ✅ Step 1: Environment Variables

`.env.local` file has been created with your Supabase credentials:
- **Project URL**: `https://sofqnssapadlsiuojwcl.supabase.co`
- **Anon Key**: Already configured

## ✅ Step 2: Create Tables in Supabase

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project: `sofqnssapadlsiuojwcl`
3. Go to **SQL Editor** (left sidebar)
4. Click **New Query**
5. Copy the entire content from `supabase_tables.sql`
6. Paste and click **Run**

This will create:
- ✅ `product_inquiries` table (for Explore More forms)
- ✅ `session_requests` table (for Get Session forms)
- ✅ Indexes for performance
- ✅ RLS policies for security
- ✅ Triggers for auto-updating timestamps
- ✅ Analytics views

## ✅ Step 3: Verify Tables

After running SQL, verify tables exist:
1. Go to **Table Editor** in Supabase Dashboard
2. You should see:
   - `product_inquiries`
   - `session_requests`
   - `contact_submissions` (if already exists)

## ✅ Step 4: Test Forms

### Test Product Inquiry Form:
1. Go to Products section
2. Click "Explore More" on any product
3. Fill the form and submit
4. Check `product_inquiries` table in Supabase

### Test Session Request Form:
1. Open chatbot
2. Ask for demo/trial
3. Fill the lead form
4. Check `session_requests` table in Supabase

## 📊 View Data

### In Supabase Dashboard:
- **Table Editor** → View all submissions
- **SQL Editor** → Run queries:
  ```sql
  -- View all product inquiries
  SELECT * FROM product_inquiries ORDER BY created_at DESC;
  
  -- View all session requests
  SELECT * FROM session_requests ORDER BY created_at DESC;
  
  -- View stats
  SELECT * FROM product_inquiry_stats;
  SELECT * FROM session_request_stats;
  ```

## 🔒 Security

- RLS (Row Level Security) is enabled
- Public can INSERT (submit forms)
- Only authenticated users can SELECT (view data)
- To view data, authenticate in Supabase Dashboard

## 🚀 Next Steps

1. ✅ Run SQL in Supabase (Step 2)
2. ✅ Restart dev server: `npm run dev`
3. ✅ Test forms
4. ✅ Check data in Supabase Dashboard

---

**Note**: If you see any errors, check:
- Supabase project is active
- Tables are created
- RLS policies are set correctly
- Environment variables are loaded (restart server)

