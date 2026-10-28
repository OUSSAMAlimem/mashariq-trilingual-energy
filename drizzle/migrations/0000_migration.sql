CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 120),
  email text NOT NULL CHECK (char_length(email) <= 200),
  phone text CHECK (char_length(phone) <= 40),
  client_type text CHECK (char_length(client_type) <= 40),
  location text CHECK (char_length(location) <= 160),
  message text NOT NULL CHECK (char_length(message) BETWEEN 5 AND 3000),
  language text CHECK (char_length(language) <= 5),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.quote_requests TO anon, authenticated;
GRANT ALL ON public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a quote request" ON public.quote_requests FOR INSERT TO anon, authenticated WITH CHECK (true);