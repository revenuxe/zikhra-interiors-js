-- Run once in the Zikhra Tours project's Supabase SQL Editor.
-- Enables website enquiries without exposing submitted leads publicly.
begin;
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  area text,
  project_type text,
  message text,
  source text default 'website',
  status text default 'new',
  created_at timestamptz not null default now()
);
alter table public.leads add column if not exists area text;
alter table public.leads add column if not exists project_type text;
alter table public.leads enable row level security;
grant insert on public.leads to anon, authenticated;
drop policy if exists "Anyone can submit leads" on public.leads;
create policy "Anyone can submit leads" on public.leads
  for insert to anon, authenticated with check (true);
grant select, delete on public.leads to authenticated;
drop policy if exists "Travel admins can read leads" on public.leads;
create policy "Travel admins can read leads" on public.leads
  for select to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
drop policy if exists "Travel admins can delete leads" on public.leads;
create policy "Travel admins can delete leads" on public.leads
  for delete to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
comment on column public.leads.area is 'Departure city for the travel enquiry';
comment on column public.leads.project_type is 'Requested journey or travel package';
comment on column public.leads.message is 'Departure preferences, traveller count and travel requirements';
commit;
