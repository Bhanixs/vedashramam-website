-- =====================================================
-- Vedabhavan CMS & Admin — Database Setup
-- Run this once in: Supabase Dashboard > SQL Editor
-- =====================================================

-- 1. Contacts Table (Enquiries from /contact)
create table if not exists vedabhavan_contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text not null,
  interest text default 'General Enquiry',
  message text not null,
  status text not null default 'new' check (status in ('new', 'in_progress', 'resolved')),
  created_at timestamptz not null default now()
);

-- 2. Donations Table (Submissions from /donate and /donate-for-sevas)
create table if not exists vedabhavan_donations (
  id uuid primary key default gen_random_uuid(),
  donor_name text not null,
  donor_phone text not null,
  donor_pan text default '',
  amount numeric not null default 0,
  purpose text not null,
  status text not null default 'pending_verification' check (status in ('pending_verification', 'verified', 'receipt_sent')),
  notes text default '',
  created_at timestamptz not null default now()
);

-- 3. Activities & Events Table
create table if not exists vedabhavan_activities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text default 'Event',
  description text default '',
  event_date text default '',
  photos jsonb not null default '[]'::jsonb,
  videos jsonb not null default '[]'::jsonb,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 4. Gallery Images Table
create table if not exists vedabhavan_gallery (
  id uuid primary key default gen_random_uuid(),
  title text default '',
  image_url text not null,
  category text default 'General',
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

-- 5. Site Settings Table
create table if not exists vedabhavan_settings (
  id text primary key default 'general',
  trust_name text default 'Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust',
  phone text default '+91 98423 27791',
  email text default 'info@vedashramam.org',
  address text default '151, Edayanchavadi Road, OM Sakthi Nagar, Lawspet S.O, Puducherry, India - 605008',
  upi_id text default '9842327791@IOB',
  bank_name text default 'Indian Overseas Bank',
  bank_branch text default 'Lawspet Branch, Puducherry - 605 008',
  bank_account text default '212101000031000',
  bank_ifsc text default 'IOBA0002121',
  pan text default 'AAMTS6931L',
  reg_80g text default 'AAMTS6931LF20221',
  updated_at timestamptz not null default now()
);

-- Initial settings row
insert into vedabhavan_settings (id) values ('general')
on conflict (id) do nothing;

-- Enable Row Level Security (RLS)
alter table vedabhavan_contacts enable row level security;
alter table vedabhavan_donations enable row level security;
alter table vedabhavan_activities enable row level security;
alter table vedabhavan_gallery enable row level security;
alter table vedabhavan_settings enable row level security;

-- Public read access for published activities, gallery, and settings
create policy "public_read_activities" on vedabhavan_activities
  for select to anon using (is_published = true);

create policy "public_read_gallery" on vedabhavan_gallery
  for select to anon using (is_published = true);

create policy "public_read_settings" on vedabhavan_settings
  for select to anon using (true);

-- Service role full access for all operations via backend API
create policy "service_all_contacts" on vedabhavan_contacts
  for all to service_role using (true) with check (true);

create policy "service_all_donations" on vedabhavan_donations
  for all to service_role using (true) with check (true);

create policy "service_all_activities" on vedabhavan_activities
  for all to service_role using (true) with check (true);

create policy "service_all_gallery" on vedabhavan_gallery
  for all to service_role using (true) with check (true);

create policy "service_all_settings" on vedabhavan_settings
  for all to service_role using (true) with check (true);
