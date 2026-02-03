#!/bin/bash
# Usage: ./quick-add-admin.sh "google-oauth2|123456" "admin@email.com" "Admin Name"

AUTH0_ID=$1
EMAIL=$2
NAME=$3

if [ -z "$AUTH0_ID" ] || [ -z "$EMAIL" ] || [ -z "$NAME" ]; then
  echo "Usage: $0 <auth0_id> <email> <name>"
  echo "Example: $0 'google-oauth2|123456' 'admin@email.com' 'Admin User'"
  exit 1
fi

echo "Adding admin user..."
ssh mini-app << EOF
docker-compose -f /root/mini-app/docker-compose.yml exec -T postgres psql -U postgres -d wlb_db << SQL
INSERT INTO users (id, "auth0Id", email, name, role, "createdAt", "updatedAt")
VALUES (
  'admin_' || substr(md5(random()::text), 1, 20),
  '${AUTH0_ID}',
  '${EMAIL}',
  '${NAME}',
  'ADMIN',
  NOW(),
  NOW()
)
ON CONFLICT (email) DO UPDATE SET role = 'ADMIN', "updatedAt" = NOW();

SELECT id, email, name, role FROM users WHERE email = '${EMAIL}';
SQL
EOF

echo "✅ Admin user added!"
