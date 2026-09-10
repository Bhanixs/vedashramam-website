-- =====================================================
-- Vedashramam CMS & Admin — Complete Database Setup
-- Run this in: Supabase Dashboard > SQL Editor
-- =====================================================

-- 1. Contacts Table (Enquiries from /contact)
create table if not exists vedashramam_contacts (
  id text primary key,
  name text not null,
  contact text not null,
  interest text default 'General Enquiry',
  message text not null,
  status text not null default 'new' check (status in ('new', 'in_progress', 'resolved')),
  created_at timestamptz not null default now()
);

-- 2. Donations Table (Submissions from /donate and /donate-for-sevas)
create table if not exists vedashramam_donations (
  id text primary key,
  donor_name text not null,
  donor_phone text not null,
  donor_pan text default '',
  amount numeric not null default 0,
  purpose text not null,
  payment_method text default 'Bank Transfer / UPI',
  status text not null default 'pending_verification' check (status in ('pending_verification', 'verified', 'receipt_sent')),
  notes text default '',
  created_at timestamptz not null default now()
);

-- 3. Activities & Events Table
create table if not exists vedashramam_activities (
  id text primary key,
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
create table if not exists vedashramam_gallery (
  id text primary key,
  title text default '',
  image_url text not null,
  category text default 'General',
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

-- 5. Site Settings Table
create table if not exists vedashramam_settings (
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
insert into vedashramam_settings (id) values ('general')
on conflict (id) do nothing;

-- Enable Row Level Security (RLS)
alter table vedashramam_contacts enable row level security;
alter table vedashramam_donations enable row level security;
alter table vedashramam_activities enable row level security;
alter table vedashramam_gallery enable row level security;
alter table vedashramam_settings enable row level security;

-- Public read access
drop policy if exists "public_read_activities" on vedashramam_activities;
create policy "public_read_activities" on vedashramam_activities for select using (is_published = true);

drop policy if exists "public_read_gallery" on vedashramam_gallery;
create policy "public_read_gallery" on vedashramam_gallery for select using (is_published = true);

drop policy if exists "public_read_settings" on vedashramam_settings;
create policy "public_read_settings" on vedashramam_settings for select using (true);

-- Public insert access for contact enquiries and donation intents
drop policy if exists "public_insert_contacts" on vedashramam_contacts;
create policy "public_insert_contacts" on vedashramam_contacts for insert with check (true);

drop policy if exists "public_insert_donations" on vedashramam_donations;
create policy "public_insert_donations" on vedashramam_donations for insert with check (true);

-- Service role full administrative access
drop policy if exists "service_all_contacts" on vedashramam_contacts;
create policy "service_all_contacts" on vedashramam_contacts for all using (true) with check (true);

drop policy if exists "service_all_donations" on vedashramam_donations;
create policy "service_all_donations" on vedashramam_donations for all using (true) with check (true);

drop policy if exists "service_all_activities" on vedashramam_activities;
create policy "service_all_activities" on vedashramam_activities for all using (true) with check (true);

drop policy if exists "service_all_gallery" on vedashramam_gallery;
create policy "service_all_gallery" on vedashramam_gallery for all using (true) with check (true);

drop policy if exists "service_all_settings" on vedashramam_settings;
create policy "service_all_settings" on vedashramam_settings for all using (true) with check (true);

-- 6. Storage Bucket for Media Uploads (vedashramam-media)
insert into storage.buckets (id, name, public)
values ('vedashramam-media', 'vedashramam-media', true)
on conflict (id) do update set public = true;

drop policy if exists "public_media_read" on storage.objects;
create policy "public_media_read" on storage.objects
  for select using (bucket_id = 'vedashramam-media');

drop policy if exists "service_media_upload" on storage.objects;
create policy "service_media_upload" on storage.objects
  for all using (bucket_id = 'vedashramam-media') with check (bucket_id = 'vedashramam-media');

-- 7. Seed Initial Core Activities
insert into vedashramam_activities (id, title, category, description, event_date, photos, videos, is_published, sort_order)
values
  ('act-sankara-jayanthi', 'Sankara Jayanthi', 'Veda Parayanam & Sadas', 'Grand celebrations dedicated to Jagadguru Sri Adi Shankaracharya with multi-day Veda Parayanam, Shankara Bhashya Pathanam, Mahanyasa Purvaka Rudrabhishekam, and Deeparadhana by resident vidyarthis and learned acharyas.', 'Annual Vaisakha Masam', '["/src/assets/Sankara Jayanthi/sankara_jayanthi01.jpeg", "/src/assets/Sankara Jayanthi/sankara_jayanthi02.jpeg", "/src/assets/Sankara Jayanthi/sankara_jayanthi03.jpeg", "/src/assets/Sankara Jayanthi/sankara_jayanthi04.jpeg", "/src/assets/Sankara Jayanthi/sankara_jayanthi05.jpeg", "/src/assets/Sankara Jayanthi/sankara_jayanthi06.jpeg", "/src/assets/Sankara Jayanthi/sankara_jayanthi07.jpeg", "/src/assets/Sankara Jayanthi/sankara_jayanthi08.jpeg"]'::jsonb, '["/src/assets/Sankara Jayanthi/sankara_jayanthi_video.mp4"]'::jsonb, true, 1),
  ('act-sankaranti', 'Sankaranti', 'Festival & Go Pooja', 'Auspicious Makara Sankranti and Pongal festival celebrated with Surya Namaskara mantram recitation, traditional Pongal naivedyam, special Veda Parayanam, and Go Pooja at the Gurukulam Goshala.', 'Makara Sankranti / Thai Pongal', '["/src/assets/Sankaranti/sankaranti01.jpg", "/src/assets/Sankaranti/sankaranti02.jpg", "/src/assets/Sankaranti/sankaranti03.jpg", "/src/assets/Sankaranti/sankaranti04.jpg", "/src/assets/Sankaranti/sankaranti05.jpg", "/src/assets/Sankaranti/sankaranti06.jpg", "/src/assets/Sankaranti/sankaranti07.jpg", "/src/assets/Sankaranti/sankaranti08.jpg", "/src/assets/Sankaranti/sankaranti09.jpg"]'::jsonb, '[]'::jsonb, true, 2),
  ('act-krishna-jayanthi', 'Krishna Jayanthi', 'Utsavam & Parayanam', 'Sri Krishna Jayanthi (Gokulashtami) celebrations featuring Srimad Bhagavatam recital, floral alankaram, midnight Sri Krishna Janma Pooja, special aradhana, and devotional chanting by our Vidyarthis.', 'Gokulashtami / Rohini', '["/src/assets/Krishna_Jayanthi/krishna_jayanthi01.jpeg", "/src/assets/Krishna_Jayanthi/krishna_jayanthi02.jpeg", "/src/assets/Krishna_Jayanthi/krishna_jayanthi03.jpeg"]'::jsonb, '[]'::jsonb, true, 3),
  ('act-annadanam', 'Annadanam', 'Daily Seva', 'The sacred practice of Nithya Annadanam, offering wholesome satvik meals daily to resident Vidyarthis, adhyapakas, visiting sadhus, and devotees across all festivals, ceremonies, and Samaradhana occasions.', 'Nithya Annadanam / Daily', '["/src/assets/Annadanam/annadanam01.jpeg", "/src/assets/Annadanam/annadanam02.jpeg", "/src/assets/Annadanam/annadanam03.jpeg"]'::jsonb, '[]'::jsonb, true, 4),
  ('act-ammavasai-tharpanam', 'Ammavasai Tharpanam', 'Monthly Anushtanam', 'Monthly Amavasya sacred rituals, Pitru Tharpanam guidance, and Tila Homam conducted by Patasala Sastrigals for pitru preethi and ancestral blessings for devotees and their families.', 'Every Amavasya (New Moon Day)', '["/src/assets/Ammavasai Tharpanam/ammavasai_tharpanam01.jpeg"]'::jsonb, '[]'::jsonb, true, 5),
  ('act-singeri-madam-swamigal', 'Singeri Madam Swamigal', 'Guru Krupa & Anugraha Bhashanam', 'Reverent observances, Paduka Poojas, and benedictions associated with the Jagadgurus of Dakshinamnaya Sri Sringeri Sharada Peetham, inspiring the students through sacred Anugraha Bhashanam and spiritual guidance.', 'Sacred Guru Darshanam & Vijaya Yatra', '["/src/assets/Singeri Madam Swamigal/singeri_swamigal01.jpeg"]'::jsonb, '["/src/assets/Singeri Madam Swamigal/Singeri Swamigal video01.mp4"]'::jsonb, true, 6)
on conflict (id) do nothing;

-- 8. Seed Initial Gallery Images
insert into vedashramam_gallery (id, title, image_url, category, sort_order, is_published)
values
  ('gal-01', 'Patasala & Sabha Photo 1', '/src/assets/Gallery/image01.jpg', 'Gurukulam Life', 1, true),
  ('gal-02', 'Patasala & Sabha Photo 2', '/src/assets/Gallery/image02.jpg', 'Gurukulam Life', 2, true),
  ('gal-03', 'Patasala & Sabha Photo 3', '/src/assets/Gallery/image03.jpg', 'Gurukulam Life', 3, true),
  ('gal-04', 'Patasala & Sabha Photo 4', '/src/assets/Gallery/image04.jpg', 'Gurukulam Life', 4, true),
  ('gal-05', 'Patasala & Sabha Photo 5', '/src/assets/Gallery/image05.jpg', 'Gurukulam Life', 5, true),
  ('gal-06', 'Patasala & Sabha Photo 6', '/src/assets/Gallery/image06.jpg', 'Gurukulam Life', 6, true),
  ('gal-07', 'Patasala & Sabha Photo 7', '/src/assets/Gallery/image07.jpg', 'Gurukulam Life', 7, true),
  ('gal-08', 'Patasala & Sabha Photo 8', '/src/assets/Gallery/image08.jpg', 'Gurukulam Life', 8, true),
  ('gal-09', 'Patasala & Sabha Photo 9', '/src/assets/Gallery/image09.jpg', 'Gurukulam Life', 9, true),
  ('gal-10', 'Patasala & Sabha Photo 10', '/src/assets/Gallery/image10.jpg', 'Gurukulam Life', 10, true),
  ('gal-11', 'Patasala & Sabha Photo 11', '/src/assets/Gallery/image11.jpg', 'Gurukulam Life', 11, true),
  ('gal-12', 'Patasala & Sabha Photo 12', '/src/assets/Gallery/image12.jpg', 'Gurukulam Life', 12, true),
  ('gal-13', 'Patasala & Sabha Photo 13', '/src/assets/Gallery/image13.jpg', 'Gurukulam Life', 13, true),
  ('gal-14', 'Patasala & Sabha Photo 14', '/src/assets/Gallery/image14.jpg', 'Gurukulam Life', 14, true),
  ('gal-15', 'Patasala & Sabha Photo 15', '/src/assets/Gallery/image15.jpg', 'Gurukulam Life', 15, true),
  ('gal-16', 'Patasala & Sabha Photo 16', '/src/assets/Gallery/image16.jpg', 'Gurukulam Life', 16, true),
  ('gal-17', 'Patasala & Sabha Photo 17', '/src/assets/Gallery/image17.jpg', 'Gurukulam Life', 17, true),
  ('gal-18', 'Patasala & Sabha Photo 18', '/src/assets/Gallery/image18.jpg', 'Gurukulam Life', 18, true),
  ('gal-19', 'Patasala & Sabha Photo 19', '/src/assets/Gallery/image19.jpg', 'Gurukulam Life', 19, true),
  ('gal-20', 'Patasala & Sabha Photo 20', '/src/assets/Gallery/image20.jpg', 'Gurukulam Life', 20, true),
  ('gal-21', 'Patasala & Sabha Photo 21', '/src/assets/Gallery/image21.jpg', 'Gurukulam Life', 21, true),
  ('gal-22', 'Patasala & Sabha Photo 22', '/src/assets/Gallery/image22.jpg', 'Gurukulam Life', 22, true),
  ('gal-23', 'Patasala & Sabha Photo 23', '/src/assets/Gallery/image23.jpg', 'Gurukulam Life', 23, true)
on conflict (id) do nothing;

-- 9. Setup Supabase Storage Bucket for Media Uploads
insert into storage.buckets (id, name, public)
values ('vedashramam-media', 'vedashramam-media', true)
on conflict (id) do update set public = true;

-- Ensure storage policies exist for public reading and admin uploads
drop policy if exists "Public Access vedashramam-media" on storage.objects;
drop policy if exists "Public Upload vedashramam-media" on storage.objects;
drop policy if exists "Public Manage vedashramam-media" on storage.objects;
drop policy if exists "Public Delete vedashramam-media" on storage.objects;

create policy "Public Access vedashramam-media"
on storage.objects for select
using ( bucket_id = 'vedashramam-media' );

create policy "Public Upload vedashramam-media"
on storage.objects for insert
with check ( bucket_id = 'vedashramam-media' );

create policy "Public Manage vedashramam-media"
on storage.objects for update
using ( bucket_id = 'vedashramam-media' );

create policy "Public Delete vedashramam-media"
on storage.objects for delete
using ( bucket_id = 'vedashramam-media' );

-- 10. Clean up any invalid temporary blob URLs (e.g. from WhatsApp Web pastes)
delete from vedashramam_gallery where image_url like 'blob:%';

