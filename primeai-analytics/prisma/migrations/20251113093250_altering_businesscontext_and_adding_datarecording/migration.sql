/*
  Warnings:

  - You are about to drop the column `integrationLevel` on the `BusinessContext` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BusinessContext" DROP COLUMN "integrationLevel";

-- CreateTable
CREATE TABLE "DataRecording" (
    "id" SERIAL NOT NULL,
    "salesRecording" TEXT NOT NULL,
    "expensesRecording" TEXT NOT NULL,
    "inventoryRecording" TEXT NOT NULL,
    "recordBackup" TEXT NOT NULL,
    "updateFrequency" TEXT NOT NULL,
    "profitReview" TEXT NOT NULL,
    "dataAccuracy" TEXT NOT NULL,
    "dataCompleteness" TEXT NOT NULL,
    "dataConsistency" TEXT NOT NULL,
    "recordingTools" TEXT[],
    "automationLevel" TEXT NOT NULL,
    "centralizedStorage" BOOLEAN NOT NULL,
    "accessibility" TEXT NOT NULL,
    "sharedAcrossTeams" BOOLEAN NOT NULL,
    "reportsGenerated" TEXT[],
    "decisionSupport" TEXT NOT NULL,
    "complianceStandards" TEXT[],
    "dataRetentionPolicy" TEXT NOT NULL,
    "assessmentId" TEXT NOT NULL,

    CONSTRAINT "DataRecording_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DataRecording_assessmentId_key" ON "DataRecording"("assessmentId");

-- AddForeignKey
ALTER TABLE "DataRecording" ADD CONSTRAINT "DataRecording_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "DigitalOperationsAssessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
