# How to Set Up RLS Policy in Supabase

## Quick Steps:

1. **Go to your Supabase project:**
   - https://supabase.com/dashboard/project/emfbrenmnqainsqkvzoq

2. **Click on "SQL Editor"** in the left sidebar

3. **Click "New Query"** (or use an existing query tab)

4. **Copy the entire contents of `RLS-POLICY.sql`** and paste it into the SQL Editor

5. **Click "Run"** (or press Cmd+Enter / Ctrl+Enter)

6. **Verify it worked:**
   - You should see "Success" messages
   - The last query will show the policy details in a table

## What This Does:

- ✅ Enables Row Level Security on the table
- ✅ Creates a policy that allows anonymous users (anon role) to INSERT
- ✅ Grants INSERT permission to the anon role
- ✅ Shows you the policy details to confirm it was created

## After Running:

1. Try submitting your form again
2. Check the browser console for any errors
3. Check your Supabase Table Editor to see if the data was saved

## Troubleshooting:

If you get an error saying the policy already exists:
- The `DROP POLICY IF EXISTS` line will handle this automatically
- If you still get errors, you can manually delete the policy first in:
  - Authentication → Policies → Find `necker_cup_inquiries` → Delete the policy
  - Then run the SQL again

## Verify the Policy:

To check if the policy exists:
1. Go to **Authentication** → **Policies**
2. Find `necker_cup_inquiries` table
3. You should see "Allow anonymous inserts" policy
4. It should show:
   - Command: INSERT
   - Roles: anon
   - With check: true
