-- CreateTable
CREATE TABLE "BusinessIntelligence" (
    "id" SERIAL NOT NULL,
    "biTools" TEXT[],
    "integrationLevel" TEXT NOT NULL,
    "dataSources" TEXT[],
    "historicalDataAvailability" TEXT NOT NULL,
    "forecastModelsUsed" TEXT[],
    "forecastAccuracy" TEXT NOT NULL,
    "forecastFrequency" TEXT NOT NULL,
    "dashboardUsage" TEXT NOT NULL,
    "reportsGenerated" TEXT[],
    "reportFrequency" TEXT NOT NULL,
    "dataVisualization" TEXT NOT NULL,
    "insightQuality" TEXT NOT NULL,
    "decisionBasedOnBI" TEXT NOT NULL,
    "departmentsUsingBI" TEXT[],
    "decisionSpeed" TEXT NOT NULL,
    "biAutomationLevel" TEXT NOT NULL,
    "dataGovernanceLevel" TEXT NOT NULL,
    "biSkills" TEXT[],
    "staffBITraining" BOOLEAN NOT NULL,
    "biChallenges" TEXT[],
    "digitalOpsId" TEXT NOT NULL,

    CONSTRAINT "BusinessIntelligence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BusinessIntelligence_digitalOpsId_key" ON "BusinessIntelligence"("digitalOpsId");

-- AddForeignKey
ALTER TABLE "BusinessIntelligence" ADD CONSTRAINT "BusinessIntelligence_digitalOpsId_fkey" FOREIGN KEY ("digitalOpsId") REFERENCES "DigitalOperationsAssessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
