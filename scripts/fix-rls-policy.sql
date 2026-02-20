-- Allow anonymous inserts into necker_cup_inquiries from the website form
-- This enables the public "Reserve Your Spot" form to submit data

-- Drop existing insert policy if any (to avoid conflicts)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON necker_cup_inquiries;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts"
  ON necker_cup_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Verify RLS is enabled (it should already be)
ALTER TABLE necker_cup_inquiries ENABLE ROW LEVEL SECURITY;
