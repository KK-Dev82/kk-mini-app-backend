-- Run on server:
-- ssh mini-app
-- docker-compose exec postgres psql -U postgres -d wlb_db -f /path/to/this/file.sql

-- Or run directly:
-- docker-compose exec postgres psql -U postgres -d wlb_db

-- Replace these values:
-- YOUR_AUTH0_ID: Get from Google OAuth (google-oauth2|123456789)
-- YOUR_EMAIL: Your email address
-- YOUR_NAME: Your display name

INSERT INTO users (
  id,
  "auth0Id",
  email,
  name,
  role,
  "createdAt",
  "updatedAt"
) VALUES (
  'admin_' || substr(md5(random()::text), 1, 20),
  'google-oauth2|YOUR_GOOGLE_ID',  -- Change this
  'admin@example.com',              -- Change this
  'Admin User',                     -- Change this
  'ADMIN',
  NOW(),
  NOW()
)
ON CONFLICT (email) DO UPDATE SET
  role = 'ADMIN',
  "updatedAt" = NOW();

-- Verify
SELECT id, email, name, role FROM users WHERE role = 'ADMIN';
