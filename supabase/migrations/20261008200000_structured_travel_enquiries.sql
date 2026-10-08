begin;

alter table public.leads
  add column if not exists package_id uuid references public.travel_packages(id) on delete set null,
  add column if not exists package_name text,
  add column if not exists flight_option_id text,
  add column if not exists airline text,
  add column if not exists sharing text,
  add column if not exists price_per_adult numeric(12,2),
  add column if not exists preferred_departure date,
  add column if not exists travellers integer;

alter table public.leads drop constraint if exists leads_travellers_range;
alter table public.leads add constraint leads_travellers_range check (travellers is null or travellers between 1 and 200);
alter table public.leads drop constraint if exists leads_price_positive;
alter table public.leads add constraint leads_price_positive check (price_per_adult is null or price_per_adult > 0);
alter table public.leads drop constraint if exists leads_package_details_length;
alter table public.leads add constraint leads_package_details_length check (
  (package_name is null or char_length(package_name) between 1 and 120) and
  (flight_option_id is null or char_length(flight_option_id) between 1 and 120) and
  (airline is null or char_length(airline) between 1 and 120) and
  (sharing is null or char_length(sharing) between 1 and 120)
);

-- Populate structured fields on existing leads without overwriting their original message.
do $$
declare lead record; date_text text; count_text text;
begin
  for lead in select id, message from public.leads loop
    date_text := substring(lead.message from 'Preferred departure: ([0-9]{4}-[0-9]{2}-[0-9]{2})');
    count_text := substring(lead.message from 'Number of travellers: ([0-9]{1,3})');
    if date_text is not null then
      begin
        update public.leads set preferred_departure = date_text::date where id = lead.id and preferred_departure is null;
      exception when datetime_field_overflow or invalid_datetime_format then null;
      end;
    end if;
    if count_text is not null and count_text::integer between 1 and 200 then
      update public.leads set travellers = count_text::integer where id = lead.id and travellers is null;
    end if;
  end loop;
end $$;

update public.leads l set package_id = p.id, package_name = p.name, sharing = coalesce(l.sharing, p.sharing)
from public.travel_packages p
where l.package_id is null and (l.project_type = p.name or starts_with(l.project_type, p.name || ' · '));

update public.leads l set airline = option->>'airline', flight_option_id = option->>'id', price_per_adult = (option->>'rate')::numeric
from public.travel_packages p, lateral jsonb_array_elements(p.options) option
where l.package_id = p.id and l.airline is null and l.project_type = p.name || ' · ' || (option->>'airline');

create index if not exists leads_package_id_idx on public.leads(package_id);
create index if not exists leads_preferred_departure_idx on public.leads(preferred_departure) where preferred_departure is not null;
comment on column public.leads.package_name is 'Package name snapshot retained if the CMS package changes or is removed';
comment on column public.leads.price_per_adult is 'Indicative per-adult price at enquiry time, not a confirmed booking price';
comment on column public.leads.travellers is 'Total travellers including children and infants; seniors are already included in adults';

-- Existing admin-only read/update/delete policies remain in force.
notify pgrst, 'reload schema';
commit;
