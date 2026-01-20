import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addAdminToWhitelist() {
  try {
    const admin = await prisma.emailWhitelist.upsert({
      where: { email: 'jatuporn.smk@gmail.com' },
      update: {
        status: 'APPROVED',
        role: 'ADMIN',
        updatedAt: new Date(),
      },
      create: {
        email: 'jatuporn.smk@gmail.com',
        status: 'APPROVED',
        role: 'ADMIN',
      },
    });
    
    console.log('Admin added to whitelist:', admin);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addAdminToWhitelist();