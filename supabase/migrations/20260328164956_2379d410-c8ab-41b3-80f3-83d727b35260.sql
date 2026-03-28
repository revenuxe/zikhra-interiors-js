
-- Create leads table for contact form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT,
  source TEXT DEFAULT 'website',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- RLS: Only authenticated admins can read/delete leads
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from contact form)
CREATE POLICY "Anyone can submit leads" ON public.leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read leads
CREATE POLICY "Authenticated users can read leads" ON public.leads
  FOR SELECT TO authenticated
  USING (true);

-- Allow authenticated users to delete leads
CREATE POLICY "Authenticated users can delete leads" ON public.leads
  FOR DELETE TO authenticated
  USING (true);
