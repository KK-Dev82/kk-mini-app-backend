import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { WhitelistStatus, UserRole } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async checkWhitelist(email: string) {
    const whitelist = await this.prisma.emailWhitelist.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!whitelist || whitelist.status !== WhitelistStatus.APPROVED) {
      return {
        allowed: false,
        message: 'Your email is not approved for using this system.',
      };
    }

    return {
      allowed: true,
      role: whitelist.role,
      message: 'Access granted',
    };
  }

  async addToWhitelist(email: string, role: UserRole = UserRole.USER) {
    return this.prisma.emailWhitelist.upsert({
      where: { email: email.toLowerCase() },
      update: {
        status: WhitelistStatus.APPROVED,
        role,
        updatedAt: new Date(),
      },
      create: {
        email: email.toLowerCase(),
        status: WhitelistStatus.APPROVED,
        role,
      },
    });
  }

  async getWhitelist() {
    return this.prisma.emailWhitelist.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async createOrUpdateUser(userData: {
    auth0Id: string;
    email: string;
    name: string;
    picture?: string;
    role: UserRole;
  }) {
    return this.prisma.user.upsert({
      where: { auth0Id: userData.auth0Id },
      update: {
        email: userData.email.toLowerCase(),
        name: userData.name,
        picture: userData.picture,
        role: userData.role,
      },
      create: {
        auth0Id: userData.auth0Id,
        email: userData.email.toLowerCase(),
        name: userData.name,
        picture: userData.picture,
        role: userData.role,
      },
    });
  }

  async updateWhitelistStatus(email: string, status: WhitelistStatus, reason?: string) {
    return this.prisma.emailWhitelist.update({
      where: { email: email.toLowerCase() },
      data: {
        status,
        reason,
        updatedAt: new Date(),
      },
    });
  }
}