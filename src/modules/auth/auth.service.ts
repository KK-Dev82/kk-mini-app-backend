import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        auth0Id: `manual-${Date.now()}`, // Temporary for manual registration
        email: registerDto.email,
        name: `${registerDto.firstName} ${registerDto.lastName}`,
      },
    });

    return user;
  }

  async login(loginDto: LoginDto) {
    // For OAuth-based system, this should be replaced with OAuth flow
    throw new UnauthorizedException('Please use OAuth login (Google/Auth0)');
  }

  async createOrUpdateOAuthUser(oauthData: { auth0Id: string; email: string; name?: string; picture?: string }) {
    const existingUser = await this.prisma.user.findUnique({
      where: { auth0Id: oauthData.auth0Id },
    });

    if (existingUser) {
      // Update existing user
      return this.prisma.user.update({
        where: { id: existingUser.id },
        data: {
          email: oauthData.email,
          name: oauthData.name,
          picture: oauthData.picture,
        },
      });
    }

    // Create new user
    return this.prisma.user.create({
      data: {
        auth0Id: oauthData.auth0Id,
        email: oauthData.email,
        name: oauthData.name,
        picture: oauthData.picture,
      },
    });
  }
}