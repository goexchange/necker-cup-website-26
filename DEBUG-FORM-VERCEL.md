# Debugging Form Submission on Vercel

## Step 1: Check Browser Console

1. Open your deployed Vercel site
2. Press **F12** (or Cmd+Option+I on Mac) to open Developer Tools
3. Click the **Console** tab
4. Try submitting the form
5. **Copy and share the error messages** you see

## Step 2: Common Issues & Solutions

### Issue 1: 401 Unauthorized (RLS Policy)
**Error:** `"new row violates row-level security policy"`

**Solution:**
1. Go to your Supabase project: https://supabase.com/dashboard/project/emfbrenmnqainsqkvzoq
2. Go to **SQL Editor**
3. Run this SQL:

```sql
-- Check if policy exists
SELECT policyname, cmd, roles, with_check 
FROM pg_policies 
WHERE tablename = 'necker_cup_inquiries' AND cmd = 'INSERT';

-- If no policy exists, create it:
CREATE POLICY "Allow anonymous inserts" 
ON necker_cup_inquiries 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Grant permission
GRANT INSERT ON TABLE necker_cup_inquiries TO anon;
```

### Issue 2: 404 Not Found
**Error:** Table doesn't exist

**Solution:**
1. Go to Supabase → **Table Editor**
2. Verify `necker_cup_inquiries` table exists
3. If not, run the SQL from `create-table.sql` or `QUICK-SETUP.sql`

### Issue 3: Wrong API Key
**Error:** 401 or authentication errors

**Solution:**
1. Go to Supabase → **Settings** → **API**
2. Copy the **anon** `public` key (JWT token starting with `eyJ...`)
3. Update line 58 in `index-standalone.html` with the correct key
4. Commit and push to trigger Vercel redeploy

### Issue 4: CORS Error
**Error:** CORS policy blocking request

**Solution:**
- This should be fixed on Vercel (HTTPS)
- Check that `vercel.json` has the CORS headers configured

## Step 3: Test the Connection

In the browser console on your Vercel site, type:
```javascript
testSupabaseConnection()
```

This will test if Supabase is reachable and show detailed error messages.

## Step 4: Verify Table Structure

Run this in Supabase SQL Editor:

```sql
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'necker_cup_inquiries' 
ORDER BY ordinal_position;
```

Should show:
- id (uuid)
- first_name (text) - NOT NULL
- last_name (text) - NOT NULL
- email (text) - NOT NULL
- phone (text) - NOT NULL
- package_interest (text)
- message (text)
- source (text)
- status (text)
- created_at (timestamptz)
- updated_at (timestamptz)

## What to Share

Please share:
1. **The exact error message** from browser console
2. **HTTP status code** (401, 403, 404, 500, etc.)
3. **Output from `testSupabaseConnection()`**
4. **Any red error messages** in the console

This will help identify the exact issue!
