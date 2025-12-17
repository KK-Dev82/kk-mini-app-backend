import { Controller, Get, Post, Put, UseGuards, Request, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { UserService } from './user.service';
import { UserResponseDto } from '../auth/dto/auth-response.dto';
import { LinkTrelloDto } from './dto/link-trello.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ErrorResponseDto } from '../../shared/dto/response.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users (for admin)' })
  @ApiResponse({ status: 200, description: 'All users retrieved', type: [UserResponseDto] })
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({ status: 200, description: 'User profile retrieved', type: UserResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: ErrorResponseDto })
  @ApiResponse({ status: 404, description: 'User not found', type: ErrorResponseDto })
  async getProfile(@Request() req) {
    return this.userService.findById(req.user.id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('link-trello')
  @ApiOperation({ summary: 'Link user profile with Trello member' })
  @ApiResponse({ status: 200, description: 'Trello member linked successfully', type: UserResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: ErrorResponseDto })
  @ApiResponse({ status: 404, description: 'User not found', type: ErrorResponseDto })
  async linkTrelloMember(@Request() req, @Body() linkTrelloDto: LinkTrelloDto) {
    return this.userService.linkTrelloMember(req.user.id, linkTrelloDto.trelloMemberId);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('profile')
  @ApiOperation({ summary: 'Update user profile (name, picture)' })
  @ApiResponse({ status: 200, description: 'Profile updated successfully', type: UserResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: ErrorResponseDto })
  @ApiResponse({ status: 404, description: 'User not found', type: ErrorResponseDto })
  async updateProfile(@Request() req, @Body() updateProfileDto: UpdateProfileDto) {
    return this.userService.updateProfile(req.user.id, updateProfileDto);
  }

}
