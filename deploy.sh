#!/bin/bash
set -e

# Configuration
IMAGE_NAME="wlb-backend"
IMAGE_TAG="latest"
SERVER_USER="root"
SERVER_HOST="mini-app"
SERVER_PATH="/root/mini-app"

echo "🏗️  Building multi-platform image..."
docker buildx build --platform linux/amd64 -t ${IMAGE_NAME}:${IMAGE_TAG} --load .

echo "💾 Saving image..."
docker save ${IMAGE_NAME}:${IMAGE_TAG} | gzip > ${IMAGE_NAME}.tar.gz

echo "📤 Uploading to server..."
scp ${IMAGE_NAME}.tar.gz ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/
scp docker-compose.yml ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/
scp .env ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/

echo "🚀 Deploying on server..."
ssh ${SERVER_USER}@${SERVER_HOST} << EOF
cd ${SERVER_PATH}
docker load < ${IMAGE_NAME}.tar.gz
docker-compose down
docker-compose up -d
rm ${IMAGE_NAME}.tar.gz
EOF

echo "🧹 Cleaning up..."
rm ${IMAGE_NAME}.tar.gz

echo "✅ Deployment complete!"
