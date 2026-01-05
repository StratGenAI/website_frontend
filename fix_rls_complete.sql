-- Complete RLS Fix - Run this in Supabase SQL Editor
-- This will fix the RLS policy issue

-- First, drop all existing policies
DROP POLICY IF EXISTS "Allow public inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_submissions;
DROP POLICY IF EXISTS "stratgenai" ON contact_submissions;

-- Disable RLS temporarily (optional - for testing)
-- ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for anon role (anonymous users)
CREATE POLICY "Allow anon inserts" 
ON contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy for authenticated role
CREATE POLICY "Allow authenticated inserts" 
ON contact_submissions
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Also allow public role (covers all)
CREATE POLICY "Allow public inserts" 
ON contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Verify the policies
SELECT * FROM pg_policies WHERE tablename = 'contact_submissions';

