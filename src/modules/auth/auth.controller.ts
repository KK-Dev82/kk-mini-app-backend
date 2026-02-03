import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { AddWhitelistDto } from './dto/add-whitelist.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('whitelist-check')
  @ApiOperation({ summary: 'Check if email is whitelisted (for Auth0 Action)' })
  @ApiQuery({ name: 'email', description: 'Email to check' })
  @ApiResponse({ status: 200, description: 'Whitelist status' })
  async checkWhitelist(@Query('email') email: string) {
    return this.authService.checkWhitelist(email);
  }

  @Post('whitelist/add')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add email to whitelist (Admin only)' })
  @ApiResponse({ status: 201, description: 'Email added to whitelist' })
  async addToWhitelist(@Body() body: AddWhitelistDto) {
    return this.authService.addToWhitelist(body.email, body.role || 'USER');
  }

  @Post('callback')
  @ApiOperation({ summary: 'OAuth callback handler' })
  @ApiResponse({ status: 200, description: 'User authenticated successfully' })
  async handleCallback(@Body() body: any) {
    const { user } = body;
    
    if (!user || !user.email) {
      return { success: false, message: 'Invalid user data' };
    }

    // เช็ค whitelist
    const whitelistCheck = await this.authService.checkWhitelist(user.email);
    
    if (!whitelistCheck.allowed) {
      return { 
        success: false, 
        message: whitelistCheck.message 
      };
    }

    // สร้าง/อัปเดต user ในฐานข้อมูล
    const dbUser = await this.authService.createOrUpdateUser({
      auth0Id: user.sub,
      email: user.email,
      name: user.name,
      picture: user.picture,
      role: whitelistCheck.role || 'USER',
    });

    // สร้าง JWT token
    const payload = { 
      sub: dbUser.id, 
      email: dbUser.email, 
      role: dbUser.role 
    };
    const accessToken = this.jwtService.sign(payload);

    return {
      success: true,
      message: 'Authentication successful',
      access_token: accessToken,
      user: {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.name,
        picture: dbUser.picture,
        role: dbUser.role,
        trelloMemberId: dbUser.trelloMemberId,
        needsTrelloLink: !dbUser.trelloMemberId,
      },
    };
  }

  @Get('whitelist')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all whitelist entries (Admin only)' })
  @ApiResponse({ status: 200, description: 'Whitelist entries retrieved' })
  async getWhitelist() {
    return this.authService.getWhitelist();
  }
}