# How to Get Your Supabase API Key

## Quick Steps:

1. **Go to your Supabase project dashboard:**
   - https://supabase.com/dashboard/project/emfbrenmnqainsqkvzoq

2. **Click on "Settings" in the left sidebar** (gear icon at the bottom)

3. **Click on "API" in the settings menu**

4. **Find the "Project API keys" section**

5. **Copy the `anon` `public` key** (NOT the `service_role` key!)
   - It will be a long string that starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - It's labeled as "anon" and "public"
   - It's safe to use in client-side code

6. **Update `index-standalone.html`:**
   - Open the file
   - Find line 58: `const SUPABASE_KEY = 'YOUR_ANON_KEY_HERE';`
   - Replace `YOUR_ANON_KEY_HERE` with your actual key
   - Make sure to keep the quotes: `const SUPABASE_KEY = 'your-actual-key-here';`

7. **Save the file and refresh your browser**

## Visual Guide:

```
Supabase Dashboard
  └── Settings (gear icon)
      └── API
          └── Project API keys
              └── anon public ← Copy this one!
```

## Important Notes:

- ✅ Use the **anon** key (safe for client-side)
- ❌ Do NOT use the **service_role** key (only for server-side)
- The key should be a long JWT token (starts with `eyJ...`)
- Keep the quotes around the key in the code

## After Updating:

1. Refresh your browser (hard refresh: Cmd+Shift+R or Ctrl+Shift+R)
2. Try submitting the form again
3. Check the browser console (F12) for any errors
4. Check your Supabase Table Editor to see if the data was saved
