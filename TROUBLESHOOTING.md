# Troubleshooting Form Submission

## Step 1: Check Browser Console

1. Open your browser to: http://localhost:8000/index-standalone.html
2. Press **F12** to open Developer Tools
3. Click the **Console** tab
4. Try submitting the form
5. **Copy and share the error messages** you see

## Step 2: Run Test Function

In the browser console, type:
```javascript
testSupabaseConnection()
```

This will:
- Test the API connection
- Try to insert a test record
- Show detailed error messages

**Share the output** from this test.

## Step 3: Common Issues & Fixes

### Issue: 401 Unauthorized
**Meaning:** API key is wrong or not accepted

**Fix:**
- Verify you're using the **publishable key** (starts with `sb_publishable_`)
- Check the key is exactly as shown in Supabase Settings → API Keys
- Make sure there are no extra spaces or characters

### Issue: 403 Forbidden
**Meaning:** RLS policy is blocking the insert

**Fix:**
- Verify the RLS policy exists: Authentication → Policies
- Check the policy allows INSERT for `anon` role
- Re-run the RLS-POLICY.sql if needed

### Issue: 404 Not Found
**Meaning:** Table doesn't exist or URL is wrong

**Fix:**
- Verify table exists: Table Editor → `necker_cup_inquiries`
- Check the SUPABASE_URL is correct: `https://emfbrenmnqainsqkvzoq.supabase.co`

### Issue: 500 Server Error
**Meaning:** Database error

**Fix:**
- Check Supabase logs: Logs → Postgres Logs
- Verify table structure matches what we're sending

## Step 4: Verify Table Structure

Run this in Supabase SQL Editor to check table structure:

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
- package_interest (text) - nullable
- message (text) - nullable
- source (text) - nullable
- status (text) - nullable
- created_at (timestamptz) - NOT NULL
- updated_at (timestamptz) - NOT NULL

## Step 5: Check What Data is Being Sent

In browser console, when you submit the form, you should see:
```
📋 Data being submitted: { ... }
```

Verify it includes:
- first_name
- last_name
- email
- phone
- (other fields are optional)

## What to Share

Please share:
1. **The exact error message** from browser console
2. **The HTTP status code** (401, 403, 404, 500, etc.)
3. **Output from `testSupabaseConnection()`**
4. **Any red error messages** in the console

This will help me identify the exact issue!
