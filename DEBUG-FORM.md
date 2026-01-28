# Debugging the Reservation Form

## Step 1: Check Browser Console

1. Open your browser to: http://localhost:8000/index-standalone.html
2. Press **F12** (or Cmd+Option+I on Mac) to open Developer Tools
3. Click on the **Console** tab
4. Try submitting the form
5. Look for error messages - they will have ❌ or show red text

## Step 2: Common Issues

### Issue 1: API Key Format
The API key `sb_publishable_...` might not be the correct format. Supabase anon keys are usually JWT tokens starting with `eyJ...`

**To fix:**
1. Go to Supabase Dashboard → Settings → API
2. Look for **"Project API keys"** section
3. Find the key labeled **"anon"** and **"public"**
4. It should be a long JWT token like: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
5. Copy that entire token
6. Update line 58 in `index-standalone.html`

### Issue 2: 401 Unauthorized Error
This means the API key is wrong or the RLS policy isn't set up correctly.

**To fix:**
- Verify you're using the **anon** key (not service_role)
- Check that the RLS policy exists in Supabase

### Issue 3: 404 Not Found Error
This means the table doesn't exist or the URL is wrong.

**To fix:**
- Verify the table `necker_cup_inquiries` exists in Supabase Table Editor
- Check the SUPABASE_URL is correct

### Issue 4: Network Error
This means the browser can't reach Supabase.

**To fix:**
- Check your internet connection
- Verify the Supabase URL is correct

## Step 3: Test the Connection

In the browser console, type:
```javascript
testSupabaseConnection()
```

This will test if the Supabase connection works.

## Step 4: Verify Table Setup

1. Go to Supabase Dashboard
2. Click **Table Editor**
3. Verify you see `necker_cup_inquiries` table
4. Check it has these columns:
   - id
   - first_name
   - last_name
   - email
   - phone
   - package_interest
   - message
   - source
   - status
   - created_at
   - updated_at

## Step 5: Check RLS Policies

1. Go to Supabase Dashboard
2. Click **Authentication** → **Policies**
3. Find the `necker_cup_inquiries` table
4. Verify there's a policy called **"Allow anonymous inserts"**
5. It should allow INSERT for `anon` role

## What to Share

If it's still not working, please share:
1. The exact error message from the browser console
2. The HTTP status code (e.g., 401, 403, 404, 500)
3. Any red error messages you see
