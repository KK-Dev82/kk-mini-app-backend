#!/bin/sh
set -e

echo "Generating Prisma Client..."
npx prisma generate

echo "Waiting for database..."
until npx prisma db push --skip-generate --accept-data-loss 2>/dev/null || npx prisma migrate deploy 2>/dev/null; do
  echo "Database not ready, retrying in 2 seconds..."
  sleep 2
done

echo "Starting application..."
exec node dist/main
