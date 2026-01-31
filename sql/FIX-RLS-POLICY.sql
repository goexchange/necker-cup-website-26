-- Fix RLS Policy for necker_cup_inquiries
-- Run this in Supabase SQL Editor

-- Step 1: Drop existing policy if it has issues
DROP POLICY IF EXISTS "Allow anonymous inserts" ON necker_cup_inquiries;

-- Step 2: Create a fresh policy
CREATE POLICY "Allow anonymous inserts" 
ON necker_cup_inquiries 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Step 3: Ensure permissions are granted
GRANT INSERT ON TABLE necker_cup_inquiries TO anon;
GRANT SELECT ON TABLE necker_cup_inquiries TO authenticated;

-- Step 4: Verify RLS is enabled
ALTER TABLE necker_cup_inquiries ENABLE ROW LEVEL SECURITY;

-- Step 5: Test the policy (this should return the policy details)
SELECT 
  policyname,
  cmd,
  roles,
  with_check
FROM pg_policies 
WHERE tablename = 'necker_cup_inquiries' 
AND cmd = 'INSERT';
