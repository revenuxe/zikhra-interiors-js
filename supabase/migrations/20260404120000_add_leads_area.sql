-- Run in Supabase SQL editor if migrations are not applied via CLI.
-- Adds locality / neighbourhood for lead routing and CRM.

alter table public.leads
  add column if not exists area text;

comment on column public.leads.area is 'Locality or area (e.g. Jubilee Hills, Hyderabad) from lead form';
