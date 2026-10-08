begin;
create or replace function public.valid_travel_options(options jsonb) returns boolean language plpgsql immutable set search_path = public as $$
declare item jsonb; d jsonb; parsed date;
begin
 if options is null or jsonb_typeof(options) is distinct from 'array' then return false; end if;
 if jsonb_array_length(options)=0 then return false; end if;
 for item in select value from jsonb_array_elements(options) loop
  if jsonb_typeof(item) is distinct from 'object' or coalesce(length(trim(item->>'id')),0)=0 or coalesce(length(trim(item->>'airline')),0)=0 then return false; end if;
  if jsonb_typeof(item->'rate') is distinct from 'number' or (item->>'rate')::numeric <= 0 then return false; end if;
  if jsonb_typeof(item->'dates') is distinct from 'array' then return false; end if;
  if jsonb_array_length(item->'dates')=0 then return false; end if;
  for d in select value from jsonb_array_elements(item->'dates') loop
   if jsonb_typeof(d) is distinct from 'string' or (d #>> '{}') !~ '^\d{4}-\d{2}-\d{2}$' then return false; end if;
   parsed := (d #>> '{}')::date;
   if to_char(parsed,'YYYY-MM-DD') <> (d #>> '{}') then return false; end if;
  end loop;
  if (select count(*) <> count(distinct value) from jsonb_array_elements(item->'dates')) then return false; end if;
 end loop;
 return (select count(*) = count(distinct value->>'id') from jsonb_array_elements(options));
exception when others then return false;
end $$;
alter table public.travel_categories add constraint category_published_image check(not published or (length(trim(image_url))>0 and length(trim(image_alt))>0));
alter table public.travel_packages add constraint package_published_image_alt check(not published or length(trim(image_alt))>0);
commit;
