-- Check all RLS policies on the table
SELECT 
  policyname,
  cmd,
  roles,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'necker_cup_inquiries'
ORDER BY cmd, policyname;

-- Check table permissions
SELECT 
  grantee,
  privilege_type
FROM information_schema.role_table_grants 
WHERE table_name = 'necker_cup_inquiries' 
AND privilege_type IN ('INSERT', 'SELECT')
ORDER BY grantee, privilege_type;

-- Check if RLS is enabled
SELECT 
  tablename,
  rowsecurity
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'necker_cup_inquiries';
