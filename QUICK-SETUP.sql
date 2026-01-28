-- ============================================
-- QUICK SETUP: Copy and paste ALL of this into Supabase SQL Editor
-- ============================================

-- Step 1: Create the table
CREATE TABLE necker_cup_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  package_interest TEXT,
  message TEXT,
  source TEXT DEFAULT 'website_reservation_form',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Step 2: Enable Row Level Security
ALTER TABLE necker_cup_inquiries ENABLE ROW LEVEL SECURITY;

-- Step 3: Create policy to allow anonymous inserts (for the website form)
CREATE POLICY "Allow anonymous inserts" ON necker_cup_inquiries
  FOR INSERT TO anon
  WITH CHECK (true);

-- Step 4: Grant permissions
GRANT INSERT ON TABLE necker_cup_inquiries TO anon;
GRANT SELECT ON TABLE necker_cup_inquiries TO authenticated;

-- Step 5: Create indexes for better performance
CREATE INDEX idx_necker_cup_inquiries_email ON necker_cup_inquiries(email);
CREATE INDEX idx_necker_cup_inquiries_created_at ON necker_cup_inquiries(created_at DESC);

-- Step 6: Create function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Step 7: Create trigger to update updated_at automatically
CREATE TRIGGER update_necker_cup_inquiries_updated_at
    BEFORE UPDATE ON necker_cup_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- DONE! You should see "Success" message
-- ============================================
