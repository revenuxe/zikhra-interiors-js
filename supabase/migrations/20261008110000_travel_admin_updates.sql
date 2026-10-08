grant update on public.leads to authenticated;
drop policy if exists "Travel admins can update leads" on public.leads;
create policy "Travel admins can update leads" on public.leads
for update to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
