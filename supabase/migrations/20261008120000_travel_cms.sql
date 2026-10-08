begin;
create table public.travel_categories (
 id uuid primary key default gen_random_uuid(), slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
 name text not null check (length(trim(name)) between 1 and 120), description text not null default '',
 image_url text not null default '', image_alt text not null default '', sort_order integer not null default 0,
 published boolean not null default false, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create function public.valid_travel_options(options jsonb) returns boolean language plpgsql immutable set search_path = public as $$
declare item jsonb; d text; parsed date;
begin
 if jsonb_typeof(options) <> 'array' or jsonb_array_length(options) = 0 then return false; end if;
 for item in select value from jsonb_array_elements(options) loop
  if jsonb_typeof(item) <> 'object' or coalesce(length(trim(item->>'id')),0)=0 or coalesce(length(trim(item->>'airline')),0)=0 or jsonb_typeof(item->'rate') <> 'number' or (item->>'rate')::numeric <= 0 then return false; end if;
  if jsonb_typeof(item->'dates') <> 'array' or jsonb_array_length(item->'dates') = 0 then return false; end if;
  for d in select jsonb_array_elements_text(item->'dates') loop
   if d !~ '^\d{4}-\d{2}-\d{2}$' then return false; end if;
   parsed := d::date;
   if to_char(parsed,'YYYY-MM-DD') <> d then return false; end if;
  end loop;
 end loop;
 return (select count(*) = count(distinct value->>'id') from jsonb_array_elements(options));
exception when others then return false;
end $$;
create table public.travel_packages (
 id uuid primary key default gen_random_uuid(), category_id uuid not null references public.travel_categories(id) on delete restrict,
 slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'), name text not null check(length(trim(name)) between 1 and 120),
 description text not null default '', image_url text not null default '', image_alt text not null default '',
 destinations text not null default 'Makkah & Madinah', departure_city text not null default 'Bangalore',
 duration_days integer check(duration_days between 1 and 365), sharing text not null default 'Quad / quint sharing',
 hotel_details text not null default '', inclusions text[] not null default '{}', exclusions text[] not null default '{}',
 itinerary text[] not null default '{}', terms text not null default '', options jsonb not null check(public.valid_travel_options(options)),
 featured boolean not null default false, published boolean not null default false, sort_order integer not null default 0,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 check(not published or (length(trim(image_url))>0 and cardinality(inclusions)>0))
);
create index travel_packages_category_idx on public.travel_packages(category_id);
create function public.touch_travel_updated_at() returns trigger language plpgsql set search_path = public as $$ begin new.updated_at=now(); return new; end $$;
create trigger travel_categories_updated before update on public.travel_categories for each row execute function public.touch_travel_updated_at();
create trigger travel_packages_updated before update on public.travel_packages for each row execute function public.touch_travel_updated_at();
alter table public.travel_categories enable row level security;
alter table public.travel_packages enable row level security;
grant select on public.travel_categories, public.travel_packages to anon, authenticated;
grant insert, update, delete on public.travel_categories, public.travel_packages to authenticated;
create policy "Public published categories" on public.travel_categories for select to anon, authenticated using(published);
create policy "Admins manage categories" on public.travel_categories for all to authenticated using(auth.jwt()->'app_metadata'->>'role'='admin') with check(auth.jwt()->'app_metadata'->>'role'='admin');
create policy "Public published packages" on public.travel_packages for select to anon, authenticated using(published and exists(select 1 from public.travel_categories c where c.id=category_id and c.published));
create policy "Admins manage packages" on public.travel_packages for all to authenticated using(auth.jwt()->'app_metadata'->>'role'='admin') with check(auth.jwt()->'app_metadata'->>'role'='admin');
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('travel-images','travel-images',true,5242880,array['image/jpeg','image/png','image/webp']);
create policy "Public travel images" on storage.objects for select to anon,authenticated using(bucket_id='travel-images');
create policy "Admins upload travel images" on storage.objects for insert to authenticated with check(bucket_id='travel-images' and auth.jwt()->'app_metadata'->>'role'='admin');
create policy "Admins update travel images" on storage.objects for update to authenticated using(bucket_id='travel-images' and auth.jwt()->'app_metadata'->>'role'='admin') with check(bucket_id='travel-images' and auth.jwt()->'app_metadata'->>'role'='admin');
create policy "Admins delete travel images" on storage.objects for delete to authenticated using(bucket_id='travel-images' and auth.jwt()->'app_metadata'->>'role'='admin');
insert into public.travel_categories(slug,name,image_url,image_alt,published,sort_order) values
('classic','Umrah Packages','/travel/makkah.jpg','The Kaaba in Makkah',true,0),('hajj','Hajj enquiries','/travel/makkah.jpg','Makkah',true,1),('ramadan','Ramadan Umrah','/travel/madinah.jpg','Madinah',true,2),('family','Family & group','/travel/madinah.jpg','Madinah',true,3),('private','Private Umrah','/travel/makkah.jpg','Makkah',true,4);
insert into public.travel_packages(category_id,slug,name,description,image_url,image_alt,destinations,sharing,hotel_details,inclusions,terms,options,featured,published)
select id,'november-umrah','November Umrah','Flights, stays, meals & ziyarat','/travel/makkah.jpg','The Kaaba in Makkah','Makkah & Madinah','Quad / quint sharing',
'Makkah: 500–550 m from Haram. Madinah: 100–150 m from Masjid an-Nabawi. Hotel names and walking routes to be confirmed.',
array['Return air tickets & Umrah visa','Makkah & Madinah accommodation','Full-board buffet meals (Bangalore food)','Professional guide & AC ziyarat transport','Travel kit & laundry service','5 litres of Zamzam water'],
'Duration, flights, hotels, visa terms and additional charges confirmed in your quotation. Child and infant fares quoted separately.',
'[{"id":"express","airline":"Air India Express","rate":99999,"dates":["2026-11-02","2026-11-08","2026-11-15","2026-11-22","2026-11-29"]},{"id":"saudia","airline":"Saudia","rate":110000,"dates":["2026-11-14","2026-11-22"]}]'::jsonb,true,true from public.travel_categories where slug='classic';
commit;
