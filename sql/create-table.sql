-- Create the necker_cup_inquiries table
CREATE TABLE IF NOT EXISTS necker_cup_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  package_interest TEXT,
  message TEXT,
  source TEXT DEFAULT 'website_reservation_form',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE necker_cup_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for the website form)
CREATE POLICY "Allow anonymous inserts" ON necker_cup_inquiries
  FOR INSERT TO anon
  WITH CHECK (true);

-- Grant INSERT permission to anon role
GRANT INSERT ON TABLE necker_cup_inquiries TO anon;

-- Grant SELECT permission to authenticated users (for viewing inquiries)
GRANT SELECT ON TABLE necker_cup_inquiries TO authenticated;

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_necker_cup_inquiries_email ON necker_cup_inquiries(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_necker_cup_inquiries_created_at ON necker_cup_inquiries(created_at DESC);

-- Create a function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to update updated_at on row updates
CREATE TRIGGER update_necker_cup_inquiries_updated_at
    BEFORE UPDATE ON necker_cup_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
