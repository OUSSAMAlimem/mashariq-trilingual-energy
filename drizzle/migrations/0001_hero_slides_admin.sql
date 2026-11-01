create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role public.app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users read own roles" on public.user_roles for select to authenticated using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

-- The very first account created becomes the site admin; later sign-ups get no rights.
create or replace function public.assign_first_admin()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.user_roles where role = 'admin') then
    insert into public.user_roles (user_id, role) values (new.id, 'admin');
  end if;
  return new;
end $$;
create trigger on_auth_user_created_assign_admin after insert on auth.users
for each row execute function public.assign_first_admin();

create table public.hero_slides (
  id uuid primary key default gen_random_uuid(),
  image_path text not null,
  position integer not null default 0,
  created_at timestamptz not null default now()
);
grant select on public.hero_slides to anon, authenticated;
grant insert, update, delete on public.hero_slides to authenticated;
grant all on public.hero_slides to service_role;
alter table public.hero_slides enable row level security;
create policy "Anyone can view hero slides" on public.hero_slides for select to anon, authenticated using (true);
create policy "Admins insert hero slides" on public.hero_slides for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins update hero slides" on public.hero_slides for update to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins delete hero slides" on public.hero_slides for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

create policy "Admins upload hero photos" on storage.objects for insert to authenticated with check (bucket_id = 'hero-photos' and public.has_role(auth.uid(), 'admin'));
create policy "Admins delete hero photos" on storage.objects for delete to authenticated using (bucket_id = 'hero-photos' and public.has_role(auth.uid(), 'admin'));