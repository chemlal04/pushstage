/*
  Warnings:

  - You are about to drop the column `report_Status` on the `Report` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "report_Status";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "report_number" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Bann" (
    "id_bann" SERIAL NOT NULL,
    "id_Banned_User" TEXT NOT NULL,
    "bann_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bann_pkey" PRIMARY KEY ("id_bann")
);

-- AddForeignKey
ALTER TABLE "Bann" ADD CONSTRAINT "Bann_id_Banned_User_fkey" FOREIGN KEY ("id_Banned_User") REFERENCES "User"("id_User") ON DELETE RESTRICT ON UPDATE CASCADE;
