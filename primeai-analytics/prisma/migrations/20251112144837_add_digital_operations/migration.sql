-- CreateTable
CREATE TABLE "DigitalOperationsAssessment" (
    "id" TEXT NOT NULL,
    "assessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DigitalOperationsAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessContext" (
    "id" TEXT NOT NULL,
    "assessmentId" TEXT NOT NULL,
    "devices" TEXT[],
    "deviceCount" INTEGER,
    "internetType" TEXT NOT NULL,
    "internetSpeedMbps" DOUBLE PRECISION,
    "internetReliability" TEXT,
    "automationTools" TEXT[],
    "automatedProcesses" INTEGER,
    "integrationLevel" TEXT NOT NULL,
    "integratedSystems" TEXT[],
    "backupStrategy" TEXT NOT NULL,
    "backupFrequency" TEXT NOT NULL,
    "backupLocation" TEXT NOT NULL,
    "productAnalysisMethods" TEXT[],
    "dashboardsAvailable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessContext_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BusinessContext_assessmentId_key" ON "BusinessContext"("assessmentId");

-- AddForeignKey
ALTER TABLE "BusinessContext" ADD CONSTRAINT "BusinessContext_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "DigitalOperationsAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
