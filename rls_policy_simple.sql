-- Simple RLS Policy for Contact Form
-- Copy this and paste in Supabase SQL Editor

CREATE POLICY "Allow public inserts" 
ON "public"."contact_submissions"
AS PERMISSIVE
FOR INSERT
TO public
WITH CHECK (true);

