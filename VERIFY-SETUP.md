# Verify Your Supabase Setup

## ✅ Step 1: Verify the Table Exists

1. Go to Supabase Dashboard → **Table Editor**
2. You should see `necker_cup_inquiries` table
3. Click on it to see the columns

## ✅ Step 2: Verify RLS Policy

1. Go to Supabase Dashboard → **Authentication** → **Policies**
2. Find `necker_cup_inquiries` table
3. You should see a policy called **"Allow anonymous inserts"**
4. It should:
   - Command: INSERT
   - Roles: anon
   - With check: true

If you don't see this policy, run this SQL in SQL Editor:

```sql
CREATE POLICY "Allow anonymous inserts" ON necker_cup_inquiries
  FOR INSERT TO anon
  WITH CHECK (true);
```

## ✅ Step 3: Verify Permissions

Run this SQL to check permissions:

```sql
SELECT grantee, privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name = 'necker_cup_inquiries' 
AND privilege_type = 'INSERT';
```

You should see `anon` in the results.

If not, run:

```sql
GRANT INSERT ON TABLE necker_cup_inquiries TO anon;
```

## ✅ Step 4: Test the Connection

1. Open browser console (F12)
2. Type: `testSupabaseConnection()`
3. Check the console output

## 🔍 What to Check in Browser Console

When you submit the form, look for:

1. **Status code**: Should be 200 or 201 (success)
2. **Error messages**: Any red errors?
3. **Response**: Does it show the created record?

Common errors:
- **401**: API key wrong or RLS blocking
- **403**: RLS policy issue
- **404**: Table doesn't exist or wrong URL
- **500**: Server error

## 🚨 Important: Never Use Secret Key in Browser!

- ✅ **Publishable key** (`sb_publishable_...`) = Safe for browser
- ❌ **Secret key** (`sb_secret_...`) = Server-side only, NEVER in browser!
