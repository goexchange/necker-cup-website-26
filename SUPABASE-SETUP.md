# Supabase Setup Options

## Current Issue
The form is getting a 401 error due to Row Level Security (RLS) policies blocking anonymous inserts.

## Option 1: Use Service Role Key (Recommended for Production)
The service role key bypasses RLS entirely. **WARNING**: This key has full access - never expose it in client-side code in production!

### For Development/Testing:
1. Go to your Supabase project dashboard
2. Settings → API
3. Copy the `service_role` key (NOT the `anon` key)
4. Replace `SUPABASE_KEY` in `index-standalone.html` with the service role key
5. **IMPORTANT**: Only use this for testing. For production, fix the RLS policies instead.

## Option 2: Fix RLS Policies (Recommended for Production)
We've already created a policy "Allow anonymous inserts for website form" but it may need adjustment.

### Current Policies:
- "Admin and employees can insert inquiries" - for authenticated users only
- "Allow anonymous inserts for website form" - for anon users when source = 'website_reservation_form'

### To Verify:
1. Go to Supabase Dashboard → Authentication → Policies
2. Check that the "Allow anonymous inserts for website form" policy exists
3. Ensure it allows INSERT for `anon` role with `source = 'website_reservation_form'`

## Option 3: Create New Supabase Project
If you want complete separation from your other app:

1. Create a new Supabase project
2. Create the `necker_cup_inquiries` table with the same schema
3. Update `SUPABASE_URL` and `SUPABASE_KEY` in `index-standalone.html`
4. Set up RLS policies to allow anonymous inserts

### Table Schema:
```sql
CREATE TABLE necker_cup_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  package_interest TEXT,
  message TEXT,
  source TEXT,
  status TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE necker_cup_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON necker_cup_inquiries
  FOR INSERT TO anon
  WITH CHECK (true);

-- Grant permissions
GRANT INSERT ON TABLE necker_cup_inquiries TO anon;
```

## Recommendation
For a production website, I recommend **Option 2** (fix RLS policies) as it's more secure. The service role key should only be used server-side, never in client-side code.
