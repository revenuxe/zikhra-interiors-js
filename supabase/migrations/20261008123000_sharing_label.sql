begin;
alter table public.travel_packages alter column sharing set default '4/5 Sharing';
update public.travel_packages set sharing='4/5 Sharing' where lower(trim(sharing))='quad / quint sharing';
commit;
select name,sharing from public.travel_packages where slug='november-umrah';
