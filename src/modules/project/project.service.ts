import { Injectable, ConflictException, NotFoundException, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    // Check if key already exists
    const existingProject = await this.prisma.project.findUnique({
      where: { key: createProjectDto.key },
    });

    if (existingProject) {
      throw new ConflictException(`Project key '${createProjectDto.key}' already exists`);
    }

    // Set defaults if not provided
    const trelloTag = createProjectDto.trelloTag || createProjectDto.key;
    const trelloBoardId = createProjectDto.trelloBoardId || this.configService.get('trello.boardId') || '';

    // Validate dates if provided
    if (createProjectDto.startDate && createProjectDto.dueDate) {
      const startDate = new Date(createProjectDto.startDate);
      const dueDate = new Date(createProjectDto.dueDate);
      
      if (startDate >= dueDate) {
        throw new BadRequestException('Start date must be before due date');
      }
    }

    return this.prisma.project.create({
      data: {
        name: createProjectDto.name,
        description: createProjectDto.description,
        key: createProjectDto.key,
        trelloBoardId,
        trelloTag,
        startDate: createProjectDto.startDate ? new Date(createProjectDto.startDate) : null,
        dueDate: createProjectDto.dueDate ? new Date(createProjectDto.dueDate) : null,
        status: createProjectDto.status || 'PLANNING',
      },
    });
  }

  async findAll() {
    return this.prisma.project.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    return this.prisma.project.findUnique({
      where: { id },
    });
  }

  async findByKey(key: string) {
    return this.prisma.project.findUnique({
      where: { key },
    });
  }

  async update(id: string, updateData: UpdateProjectDto) {
    const project = await this.prisma.project.findUnique({
      where: { id }
    });

    if (!project) {
      throw new NotFoundException(`Project with id '${id}' not found`);
    }

    // Validate dates
    if (updateData.startDate && updateData.dueDate) {
      const startDate = new Date(updateData.startDate);
      const dueDate = new Date(updateData.dueDate);
      
      if (startDate >= dueDate) {
        throw new BadRequestException('Start date must be before due date');
      }
    }

    return this.prisma.project.update({
      where: { id },
      data: {
        ...updateData,
        startDate: updateData.startDate ? new Date(updateData.startDate) : undefined,
        dueDate: updateData.dueDate ? new Date(updateData.dueDate) : undefined,
      },
      include: {
        _count: {
          select: {
            tasks: true,
            members: { where: { isActive: true } }
          }
        }
      }
    });
  }
}