-- GrowHub waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id                  UUID        DEFAULT gen_random_uuid()            PRIMARY KEY,
  created_at          TIMESTAMPTZ DEFAULT timezone('utc', now())       NOT NULL,
  full_name           TEXT        NOT NULL,
  email               TEXT        NOT NULL UNIQUE,
  phone               TEXT,
  city                TEXT,
  child_age           TEXT,
  usage_expectation   TEXT,
  most_important      TEXT[]
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Service role can do everything (used from API route with service key)
CREATE POLICY "service_role_all"
  ON waitlist
  USING (true)
  WITH CHECK (true);

-- Index for faster lookups
CREATE INDEX waitlist_city_idx      ON waitlist (city);
CREATE INDEX waitlist_created_idx   ON waitlist (created_at DESC);
