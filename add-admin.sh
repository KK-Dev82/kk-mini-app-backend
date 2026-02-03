#!/bin/bash
# Run this on server: ssh mini-app
# Then: cd /root/mini-app && bash add-admin.sh

echo "🔧 Adding admin user..."

docker-compose exec app npx prisma studio --browser none &
STUDIO_PID=$!

echo ""
echo "📝 Prisma Studio started!"
echo "🌐 Access via SSH tunnel:"
echo "   ssh -L 5555:localhost:5555 mini-app"
echo ""
echo "Then open: http://localhost:5555"
echo ""
echo "Add user with:"
echo "  - auth0Id: google-oauth2|YOUR_GOOGLE_ID"
echo "  - email: your@email.com"
echo "  - name: Your Name"
echo "  - role: ADMIN"
echo ""
echo "Press Ctrl+C to stop Prisma Studio"

wait $STUDIO_PID
