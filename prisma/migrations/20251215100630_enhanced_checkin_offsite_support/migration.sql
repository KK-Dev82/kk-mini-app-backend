-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('ONSITE', 'OFFSITE');

-- DropForeignKey
ALTER TABLE "checkins" DROP CONSTRAINT "checkins_worksiteId_fkey";

-- AlterTable
ALTER TABLE "checkins" ADD COLUMN     "location" "LocationType" NOT NULL DEFAULT 'ONSITE',
ADD COLUMN     "photo" TEXT,
ADD COLUMN     "reason" TEXT,
ALTER COLUMN "worksiteId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "checkins" ADD CONSTRAINT "checkins_worksiteId_fkey" FOREIGN KEY ("worksiteId") REFERENCES "worksites"("id") ON DELETE SET NULL ON UPDATE CASCADE;
