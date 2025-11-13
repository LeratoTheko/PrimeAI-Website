/*
  Warnings:

  - Made the column `email` on table `SmeProfile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "SmeProfile" ALTER COLUMN "email" SET NOT NULL;
