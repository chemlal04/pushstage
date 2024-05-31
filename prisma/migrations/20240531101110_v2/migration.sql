/*
  Warnings:

  - Added the required column `bann_cause_staff` to the `Bann` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_report_cause1` to the `Bann` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_report_cause2` to the `Bann` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_report_cause3` to the `Bann` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bann" ADD COLUMN     "bann_cause_staff" TEXT NOT NULL,
ADD COLUMN     "id_report_cause1" INTEGER NOT NULL,
ADD COLUMN     "id_report_cause2" INTEGER NOT NULL,
ADD COLUMN     "id_report_cause3" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Bann" ADD CONSTRAINT "Bann_id_report_cause1_fkey" FOREIGN KEY ("id_report_cause1") REFERENCES "Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bann" ADD CONSTRAINT "Bann_id_report_cause2_fkey" FOREIGN KEY ("id_report_cause2") REFERENCES "Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bann" ADD CONSTRAINT "Bann_id_report_cause3_fkey" FOREIGN KEY ("id_report_cause3") REFERENCES "Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
