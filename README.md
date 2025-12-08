# 🏢 Location-based Check-in System

Modern location-based check-in system built with NestJS, featuring GPS validation, Trello integration, and real-time task management.

## 🎯 Features

### 📍 **Geolocation Check-in**
- GPS-based check-in/check-out validation
- 500m radius geofencing
- Real-time location verification
- Distance calculation with Haversine formula

### 🔐 **Authentication**
- OAuth integration (Auth0/Google)
- JWT token-based authentication
- Role-based access control (USER/ADMIN)

### 📋 **Trello Integration**
- Real-time task synchronization
- Card creation with checklists
- Member assignment
- Kanban workflow (Todo → Doing → Done)
- Webhook support for live updates

### 🖼️ **File Upload**
- Supabase Storage integration
- Auto WebP conversion (80% quality)
- Image resizing (max 800x800px)
- Public URL generation

### 🗄️ **Database**
- Prisma ORM with PostgreSQL
- Type-safe database operations
- Auto-generated migrations
- Prisma Studio for data management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL
- Docker (optional)

### Installation

```bash
# Clone repository
git clone git@github.com:KK-Dev82/kk-mini-app-backend.git
cd kk-mini-app-backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration

# Database setup
npx prisma generate
npx prisma migrate dev

# Start development server
npm run start:dev
```

### Docker Setup

```bash
# Start with Docker Compose
docker-compose up -d

# Run migrations
npm run prisma:migrate
```

## 📚 API Documentation

### Base URL
```
http://localhost:8000
```

### Swagger Documentation
```
http://localhost:8000/api
```

### Key Endpoints

#### 🔐 Authentication
```http
POST /auth/register    # Register new user
POST /auth/login       # User login
GET  /users/profile    # Get user profile
```

#### 📍 Check-in System
```http
GET  /worksites        # Get available worksites
POST /checkin          # Create check-in/out
GET  /checkin/history  # Get check-in history
```

#### 📋 Trello Integration
```http
GET  /trello/boards           # Get Trello boards
GET  /trello/cards            # Get cards from default board
GET  /trello/members          # Get board members
POST /trello/cards            # Create new card with checklist
POST /trello/cards/:id/move   # Move card between lists
GET  /trello/checklist/:id    # Get checklist details
```

#### 🖼️ File Upload
```http
POST /upload/avatar           # Upload user avatar
GET  /upload/url/:filePath    # Get file public URL
```

## 🏗️ Project Structure

```
src/
├── config/              # Configuration files
├── common/              # Shared utilities
│   ├── filters/         # Exception filters
│   ├── guards/          # Auth guards
│   └── interceptors/    # Request interceptors
├── database/            # Database related (deprecated - using Prisma)
├── lib/                 # Utility libraries
│   └── geo/            # Geolocation utilities
├── modules/            # Feature modules
│   ├── auth/           # Authentication
│   ├── user/           # User management
│   ├── worksite/       # Worksite management
│   ├── checkin/        # Check-in system
│   ├── task/           # Task & Trello integration
│   ├── upload/         # File upload
│   └── admin/          # Admin panel
├── prisma/             # Prisma client & service
└── shared/             # Shared DTOs & types
```

## 🔧 Environment Variables

```env
# Application
NODE_ENV=development
PORT=8000
API_PREFIX=api

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/wlb_db"

# Authentication
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h

# Trello Integration
TRELLO_API_KEY=your-trello-api-key
TRELLO_TOKEN=your-trello-token
TRELLO_BOARD_ID=your-board-id

# Supabase Storage
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key
SUPABASE_STORAGE_BUCKET=avatars

# Geofencing
GEOFENCE_RADIUS=500
```

## 🗄️ Database Schema

### User Model
```prisma
model User {
  id        String   @id @default(cuid())
  auth0Id   String   @unique
  email     String   @unique
  name      String?
  picture   String?  // Supabase storage path
  role      UserRole @default(USER)
  
  tasks     Task[]
  checkins  Checkin[]
}
```

### Worksite Model
```prisma
model Worksite {
  id          String  @id @default(cuid())
  name        String
  latitude    Decimal @db.Decimal(10, 8)
  longitude   Decimal @db.Decimal(11, 8)
  radius      Int     @default(500)
  
  checkins    Checkin[]
}
```

### Check-in Model
```prisma
model Checkin {
  id         String      @id @default(cuid())
  type       CheckinType // CHECK_IN | CHECK_OUT
  latitude   Decimal
  longitude  Decimal
  distance   Decimal     // Distance from worksite
  
  user       User
  worksite   Worksite
}
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📦 Available Scripts

```bash
npm run start          # Start production server
npm run start:dev      # Start development server
npm run start:debug    # Start debug mode
npm run build          # Build for production

npm run prisma:generate # Generate Prisma client
npm run prisma:migrate  # Run database migrations
npm run prisma:studio   # Open Prisma Studio
npm run prisma:deploy   # Deploy migrations to production

npm run lint           # Run ESLint
npm run format         # Format code with Prettier
```

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start:prod
```

### Docker Deployment
```bash
docker build -t wlb-backend .
docker run -p 3000:3000 wlb-backend
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Related Links

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Trello API Documentation](https://developer.atlassian.com/cloud/trello/rest/)
- [Supabase Documentation](https://supabase.com/docs)

---

Built with ❤️ using NestJS, Prisma, and modern web technologies.