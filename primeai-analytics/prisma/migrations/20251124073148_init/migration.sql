-- CreateTable
CREATE TABLE "DigitalCustomerAssessment" (
    "id" TEXT NOT NULL,
    "assessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "overallNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DigitalCustomerAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcquisitionChannelProfile" (
    "id" TEXT NOT NULL,
    "assessmentId" TEXT NOT NULL,
    "channelTypes" TEXT[],
    "channelCount" INTEGER,
    "diversityNotes" TEXT,
    "digitalToTraditionalRatio" DOUBLE PRECISION,
    "effectivenessMeasure" TEXT,
    "averageConversionRate" DOUBLE PRECISION,
    "journeyIntegrationLevel" TEXT,
    "trackingTools" TEXT[],
    "hasTrackingSystem" BOOLEAN NOT NULL DEFAULT false,
    "trackingNotes" TEXT,
    "knowsTopPerformingChannel" BOOLEAN NOT NULL DEFAULT false,
    "contentMarketFitQuality" TEXT,
    "paidPercentage" DOUBLE PRECISION,
    "organicPercentage" DOUBLE PRECISION,
    "experimentsRunRecently" BOOLEAN NOT NULL DEFAULT false,
    "hasReferralProgram" BOOLEAN NOT NULL DEFAULT false,
    "partnershipExamples" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcquisitionChannelProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerRetentionAssessment" (
    "id" TEXT NOT NULL,
    "assessmentId" TEXT NOT NULL,
    "strategyPlanningScore" INTEGER NOT NULL,
    "strategyPlanningNotes" TEXT,
    "retentionTrackingScore" INTEGER NOT NULL,
    "retentionTrackingNotes" TEXT,
    "relationshipSystemsScore" INTEGER NOT NULL,
    "relationshipSystemsNotes" TEXT,
    "loyaltyRecognitionScore" INTEGER NOT NULL,
    "loyaltyRecognitionNotes" TEXT,
    "experienceMonitoringScore" INTEGER NOT NULL,
    "experienceMonitoringNotes" TEXT,
    "trustRecoveryScore" INTEGER NOT NULL,
    "trustRecoveryNotes" TEXT,
    "customerDataUsageScore" INTEGER NOT NULL,
    "customerDataUsageNotes" TEXT,
    "valueTrackingScore" INTEGER NOT NULL,
    "valueTrackingNotes" TEXT,
    "postSaleEngagementScore" INTEGER NOT NULL,
    "postSaleEngagementNotes" TEXT,
    "outreachFrequencyScore" INTEGER NOT NULL,
    "outreachFrequencyNotes" TEXT,
    "retentionAdaptationScore" INTEGER NOT NULL,
    "retentionAdaptationNotes" TEXT,
    "brandCommunityScore" INTEGER NOT NULL,
    "brandCommunityNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerRetentionAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sme" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "agreed_terms" BOOLEAN NOT NULL,
    "otp_code" TEXT,
    "otp_expires_at" TIMESTAMP(3),
    "is_verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Sme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SmeProfile" (
    "id" SERIAL NOT NULL,
    "smes_id" INTEGER NOT NULL,
    "business_name" TEXT NOT NULL,
    "registration_number" TEXT,
    "owner_name" TEXT NOT NULL,
    "owner_gender" TEXT,
    "owner_age_group" TEXT,
    "contact_number" TEXT NOT NULL,
    "email" TEXT,
    "location" TEXT,
    "industry" TEXT,
    "sub_industry" TEXT,
    "nature_of_business" TEXT,
    "customer_types" TEXT,
    "business_size" TEXT,
    "number_of_employees" INTEGER,
    "estimated_monthly_revenue" INTEGER,
    "estimated_monthly_expenses" INTEGER,
    "premises_type" TEXT,
    "digital_customer_eligible" BOOLEAN DEFAULT false,
    "digital_operations_eligible" BOOLEAN DEFAULT false,
    "digital_workspace_eligible" BOOLEAN DEFAULT false,

    CONSTRAINT "SmeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectEstimate" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "heardFrom" TEXT,
    "projectDescription" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectEstimate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscribers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "subscribedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscribers_pkey" PRIMARY KEY ("id")
);

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
    "integratedSystems" TEXT[],
    "productAnalysisMethods" TEXT[],
    "dashboardsAvailable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessContext_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "Sme_email_key" ON "Sme"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SmeProfile_registration_number_key" ON "SmeProfile"("registration_number");

-- CreateIndex
CREATE UNIQUE INDEX "subscribers_email_key" ON "subscribers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessContext_assessmentId_key" ON "BusinessContext"("assessmentId");

-- CreateIndex
CREATE UNIQUE INDEX "DataRecording_assessmentId_key" ON "DataRecording"("assessmentId");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessIntelligence_digitalOpsId_key" ON "BusinessIntelligence"("digitalOpsId");

-- AddForeignKey
ALTER TABLE "AcquisitionChannelProfile" ADD CONSTRAINT "AcquisitionChannelProfile_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "DigitalCustomerAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerRetentionAssessment" ADD CONSTRAINT "CustomerRetentionAssessment_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "DigitalCustomerAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SmeProfile" ADD CONSTRAINT "SmeProfile_smes_id_fkey" FOREIGN KEY ("smes_id") REFERENCES "Sme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessContext" ADD CONSTRAINT "BusinessContext_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "DigitalOperationsAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataRecording" ADD CONSTRAINT "DataRecording_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "DigitalOperationsAssessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessIntelligence" ADD CONSTRAINT "BusinessIntelligence_digitalOpsId_fkey" FOREIGN KEY ("digitalOpsId") REFERENCES "DigitalOperationsAssessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
