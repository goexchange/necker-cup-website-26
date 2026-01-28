# Setup Instructions for New Supabase Project

## Step 1: Create the Table

1. Go to your Supabase project: https://supabase.com/dashboard/project/emfbrenmnqainsqkvzoq
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the entire contents of `create-table.sql`
5. Click **Run** (or press Cmd/Ctrl + Enter)

You should see "Success. No rows returned" - this means the table was created successfully!

## Step 2: Get Your API Key

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Find the **Project API keys** section
3. Copy the **`anon` `public`** key (NOT the `service_role` key)
4. It will look something like: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## Step 3: Update the Code

1. Open `index-standalone.html`
2. Find line 56 where it says: `const SUPABASE_KEY = 'YOUR_ANON_KEY_HERE';`
3. Replace `YOUR_ANON_KEY_HERE` with your actual anon key from Step 2
4. Save the file

## Step 4: Test the Form

1. Make sure your local server is running: `python3 -m http.server 8000`
2. Open: http://localhost:8000/index-standalone.html
3. Click "Reserve Your Spot" and fill out the form
4. Submit the form
5. Check your Supabase dashboard → Table Editor → `necker_cup_inquiries` to see the submission

## Verification

To verify everything is set up correctly:

1. In Supabase dashboard, go to **Table Editor**
2. You should see the `necker_cup_inquiries` table
3. It should have these columns:
   - id (uuid)
   - first_name (text)
   - last_name (text)
   - email (text)
   - phone (text)
   - package_interest (text)
   - message (text)
   - source (text)
   - status (text)
   - created_at (timestamptz)
   - updated_at (timestamptz)

## Troubleshooting

If you get a 401 error:
- Make sure you copied the **anon** key, not the service_role key
- Verify the table was created successfully
- Check that the RLS policy was created (Settings → Authentication → Policies)

If you get a 404 error:
- Verify the table name is exactly `necker_cup_inquiries`
- Check that the SQL ran without errors
