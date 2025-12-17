import { Injectable, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ProjectRole } from '@prisma/client';

@Injectable()
export class ProjectMemberService {
  constructor(private prisma: PrismaService) {}

  async addMember(projectId: string, userId: string, role: ProjectRole = 'MEMBER') {
    const existingMember = await this.prisma.projectMember.findUnique({
      where: {
        userId_projectId: {
          userId,
          projectId
        }
      }
    });

    if (existingMember) {
      if (existingMember.isActive) {
        throw new BadRequestException('User is already a member of this project');
      }
      
      // Reactivate if previously left
      return this.prisma.projectMember.update({
        where: { id: existingMember.id },
        data: {
          isActive: true,
          role,
          leftAt: null,
          joinedAt: new Date()
        }
      });
    }

    return this.prisma.projectMember.create({
      data: {
        userId,
        projectId,
        role
      }
    });
  }

  async removeMember(projectId: string, userId: string) {
    return this.prisma.projectMember.update({
      where: {
        userId_projectId: {
          userId,
          projectId
        }
      },
      data: {
        isActive: false,
        leftAt: new Date()
      }
    });
  }

  async updateRole(projectId: string, userId: string, role: ProjectRole) {
    return this.prisma.projectMember.update({
      where: {
        userId_projectId: {
          userId,
          projectId
        }
      },
      data: { role }
    });
  }

  async getProjectMembers(projectId: string) {
    return this.prisma.projectMember.findMany({
      where: {
        projectId,
        isActive: true
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            picture: true
          }
        }
      },
      orderBy: [
        { role: 'asc' },
        { joinedAt: 'asc' }
      ]
    });
  }

  async getUserProjects(userId: string) {
    console.log('Getting projects for user:', userId);
    
    const projects = await this.prisma.project.findMany({
      where: {
        members: {
          some: {
            userId,
            isActive: true
          }
        }
      },
      include: {
        members: {
          where: { userId },
          select: { role: true, joinedAt: true }
        },
        _count: {
          select: {
            tasks: true,
            members: { where: { isActive: true } }
          }
        }
      }
    });
    
    console.log('Found projects:', projects.length);
    return projects;
  }
}