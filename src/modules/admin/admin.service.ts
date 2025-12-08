import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  async getDashboardData() {
    // Implement dashboard logic here
    return {
      totalUsers: 0,
      totalWorksites: 0,
      todayCheckins: 0,
      activeUsers: 0,
    };
  }
}