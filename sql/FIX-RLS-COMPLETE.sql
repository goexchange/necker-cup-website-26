-- ============================================
-- COMPLETE FIX for RLS Policy Issue
-- Run this ENTIRE script in Supabase SQL Editor
-- ============================================

-- Step 1: Drop ALL existing INSERT policies (to start fresh)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON necker_cup_inquiries;
DROP POLICY IF EXISTS "Admin and employees can insert inquiries" ON necker_cup_inquiries;
-- Drop any other INSERT policies that might exist
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'necker_cup_inquiries' AND cmd = 'INSERT')
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON necker_cup_inquiries';
    END LOOP;
END $$;

-- Step 2: Ensure RLS is enabled
ALTER TABLE necker_cup_inquiries ENABLE ROW LEVEL SECURITY;

-- Step 3: Create a simple, permissive INSERT policy for anon
CREATE POLICY "Allow anonymous inserts" 
ON necker_cup_inquiries 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Step 4: Grant INSERT permission to anon role
GRANT INSERT ON TABLE necker_cup_inquiries TO anon;

-- Step 5: Verify the policy was created correctly
SELECT 
  policyname,
  cmd,
  roles,
  with_check
FROM pg_policies 
WHERE tablename = 'necker_cup_inquiries' 
AND cmd = 'INSERT';

-- Step 6: Verify permissions
SELECT 
  grantee,
  privilege_type
FROM information_schema.role_table_grants 
WHERE table_name = 'necker_cup_inquiries' 
AND privilege_type = 'INSERT'
AND grantee = 'anon';

-- ============================================
-- DONE! The policy should now work.
-- ============================================
