-- Supabase Tables for StratgenAI Website
-- Run this SQL in your Supabase SQL Editor

-- ============================================
-- 1. PRODUCT INQUIRIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS product_inquiries (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT,
  product_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for product_inquiries
CREATE INDEX IF NOT EXISTS idx_product_inquiries_email ON product_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_product_inquiries_product_name ON product_inquiries(product_name);
CREATE INDEX IF NOT EXISTS idx_product_inquiries_created_at ON product_inquiries(created_at DESC);

-- Enable RLS
ALTER TABLE product_inquiries ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts for product inquiries" ON product_inquiries;
DROP POLICY IF EXISTS "Allow authenticated reads for product inquiries" ON product_inquiries;

-- Create policy to allow inserts from anyone
CREATE POLICY "Allow public inserts for product inquiries" ON product_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to read
CREATE POLICY "Allow authenticated reads for product inquiries" ON product_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- ============================================
-- 2. SESSION REQUESTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS session_requests (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  session_type TEXT,
  preferred_date TEXT,
  message TEXT,
  source TEXT DEFAULT 'chatbot',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for session_requests
CREATE INDEX IF NOT EXISTS idx_session_requests_email ON session_requests(email);
CREATE INDEX IF NOT EXISTS idx_session_requests_created_at ON session_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_session_requests_source ON session_requests(source);

-- Enable RLS
ALTER TABLE session_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts for session requests" ON session_requests;
DROP POLICY IF EXISTS "Allow authenticated reads for session requests" ON session_requests;

-- Create policy to allow inserts from anyone
CREATE POLICY "Allow public inserts for session requests" ON session_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to read
CREATE POLICY "Allow authenticated reads for session requests" ON session_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- ============================================
-- 3. UPDATE TRIGGERS
-- ============================================
-- Function to update updated_at (if not exists)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for product_inquiries
DROP TRIGGER IF EXISTS update_product_inquiries_updated_at ON product_inquiries;
CREATE TRIGGER update_product_inquiries_updated_at
  BEFORE UPDATE ON product_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for session_requests
DROP TRIGGER IF EXISTS update_session_requests_updated_at ON session_requests;
CREATE TRIGGER update_session_requests_updated_at
  BEFORE UPDATE ON session_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 4. VIEWS FOR ANALYTICS (Optional)
-- ============================================
-- View for product inquiry stats
CREATE OR REPLACE VIEW product_inquiry_stats AS
SELECT 
  product_name,
  COUNT(*) as total_inquiries,
  COUNT(DISTINCT email) as unique_emails,
  MIN(created_at) as first_inquiry,
  MAX(created_at) as latest_inquiry
FROM product_inquiries
GROUP BY product_name;

-- View for session request stats
CREATE OR REPLACE VIEW session_request_stats AS
SELECT 
  source,
  session_type,
  COUNT(*) as total_requests,
  COUNT(DISTINCT email) as unique_emails,
  MIN(created_at) as first_request,
  MAX(created_at) as latest_request
FROM session_requests
GROUP BY source, session_type;

