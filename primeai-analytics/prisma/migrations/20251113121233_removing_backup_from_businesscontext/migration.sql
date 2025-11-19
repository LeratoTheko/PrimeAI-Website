/*
  Warnings:

  - You are about to drop the column `backupFrequency` on the `BusinessContext` table. All the data in the column will be lost.
  - You are about to drop the column `backupLocation` on the `BusinessContext` table. All the data in the column will be lost.
  - You are about to drop the column `backupStrategy` on the `BusinessContext` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BusinessContext" DROP COLUMN "backupFrequency",
DROP COLUMN "backupLocation",
DROP COLUMN "backupStrategy";
