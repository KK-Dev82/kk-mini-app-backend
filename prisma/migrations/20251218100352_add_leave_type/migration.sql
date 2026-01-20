-- CreateEnum
CREATE TYPE "LeaveType" AS ENUM ('SICK_LEAVE', 'PERSONAL_LEAVE', 'ANNUAL_LEAVE', 'NONE');

-- AlterTable
ALTER TABLE "checkins" ADD COLUMN     "leaveType" "LeaveType" NOT NULL DEFAULT 'NONE';
