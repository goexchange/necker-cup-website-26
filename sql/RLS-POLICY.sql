-- ============================================
-- RLS Policy for necker_cup_inquiries Table
-- Copy and paste this into Supabase SQL Editor
-- ============================================

-- Step 1: Make sure RLS is enabled (if not already)
ALTER TABLE necker_cup_inquiries ENABLE ROW LEVEL SECURITY;

-- Step 2: Drop existing policy if it exists (to avoid conflicts)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON necker_cup_inquiries;

-- Step 3: Create the policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" 
ON necker_cup_inquiries 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Step 4: Grant INSERT permission to anon role (if not already granted)
GRANT INSERT ON TABLE necker_cup_inquiries TO anon;

-- Step 5: Verify the policy was created
-- (This will show you the policy details)
SELECT 
  policyname,
  cmd,
  roles,
  with_check
FROM pg_policies 
WHERE tablename = 'necker_cup_inquiries' 
AND cmd = 'INSERT';

-- ============================================
-- DONE! The policy should now allow anonymous inserts
-- ============================================
