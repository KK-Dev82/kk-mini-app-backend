import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CheckinType, LocationType } from '@prisma/client';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  /**
   * สร้าง ABSENT record สำหรับพนักงานที่ไม่มาทำงาน
   * เรียกใช้ทุกวันหลังเวลาเช็คอินสิ้นสุด
   */
  async markAbsentEmployees() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // หา users ที่ไม่มี checkin วันนี้
    const usersWithoutCheckin = await this.prisma.user.findMany({
      where: {
        checkins: {
          none: {
            createdAt: {
              gte: today,
              lt: tomorrow,
            },
          },
        },
      },
    });

    // สร้าง ABSENT record
    for (const user of usersWithoutCheckin) {
      await this.prisma.checkin.create({
        data: {
          type: CheckinType.ABSENT,
          location: LocationType.OFFSITE,
          latitude: 0,
          longitude: 0,
          distance: 0,
          reason: 'ไม่มาทำงานโดยไม่แจ้ง',
          isSystemGenerated: true,
          userId: user.id,
        },
      });
    }

    return usersWithoutCheckin.length;
  }

  /**
   * Auto checkout สำหรับพนักงานที่ลืมเช็คเอาท์
   * เรียกใช้ทุกวันหลังเวลาทำงาน
   */
  async autoCheckoutEmployees() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // หา users ที่เช็คอินแล้วแต่ยังไม่เช็คเอาท์
    const usersNeedCheckout = await this.prisma.user.findMany({
      where: {
        checkins: {
          some: {
            AND: [
              {
                type: CheckinType.CHECK_IN,
                createdAt: {
                  gte: today,
                  lt: tomorrow,
                },
              },
              {
                userId: {
                  not: {
                    in: await this.prisma.checkin
                      .findMany({
                        where: {
                          type: CheckinType.CHECK_OUT,
                          createdAt: {
                            gte: today,
                            lt: tomorrow,
                          },
                        },
                        select: { userId: true },
                      })
                      .then(results => results.map(r => r.userId)),
                  },
                },
              },
            ],
          },
        },
      },
    });

    // สร้าง AUTO_CHECKOUT record
    for (const user of usersNeedCheckout) {
      await this.prisma.checkin.create({
        data: {
          type: CheckinType.AUTO_CHECKOUT,
          location: LocationType.OFFSITE,
          latitude: 0,
          longitude: 0,
          distance: 0,
          reason: 'เช็คเอาท์อัตโนมัติ (ลืมเช็คเอาท์)',
          isSystemGenerated: true,
          userId: user.id,
        },
      });
    }

    return usersNeedCheckout.length;
  }

  /**
   * รัน daily attendance processing
   */
  async processDailyAttendance() {
    const absentCount = await this.markAbsentEmployees();
    const autoCheckoutCount = await this.autoCheckoutEmployees();
    
    return {
      absentEmployees: absentCount,
      autoCheckoutEmployees: autoCheckoutCount,
      processedAt: new Date(),
    };
  }
}