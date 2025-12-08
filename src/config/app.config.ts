import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.PORT || '3000', 10) || 3000,
  environment: process.env.NODE_ENV || 'development',
  apiPrefix: process.env.API_PREFIX || 'api',
  geofenceRadius: parseInt(process.env.GEOFENCE_RADIUS || '500', 10) || 500, // meters
}));