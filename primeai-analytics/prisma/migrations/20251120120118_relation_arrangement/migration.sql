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
    "sme_id" INTEGER NOT NULL,
    "business_name" TEXT NOT NULL,
    "registration_number" TEXT,
    "owner_name" TEXT NOT NULL,
    "owner_gender" TEXT,
    "owner_age_group" TEXT,
    "contact_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
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

    CONSTRAINT "SmeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DigitalCustomerAssessment" (
    "id" TEXT NOT NULL,
    "smeProfileId" INTEGER NOT NULL,
    "assessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "overallNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DigitalCustomerAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcquisitionChannelProfile" (
    "id" TEXT NOT NULL,
    "smeProfileId" INTEGER,
    "assessmentId" TEXT,
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
    "smeProfileId" INTEGER,
    "assessmentId" TEXT,
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

-- CreateIndex
CREATE UNIQUE INDEX "Sme_email_key" ON "Sme"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SmeProfile_sme_id_key" ON "SmeProfile"("sme_id");

-- CreateIndex
CREATE UNIQUE INDEX "SmeProfile_registration_number_key" ON "SmeProfile"("registration_number");

-- CreateIndex
CREATE UNIQUE INDEX "SmeProfile_email_key" ON "SmeProfile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DigitalCustomerAssessment_smeProfileId_key" ON "DigitalCustomerAssessment"("smeProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "AcquisitionChannelProfile_smeProfileId_key" ON "AcquisitionChannelProfile"("smeProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "AcquisitionChannelProfile_assessmentId_key" ON "AcquisitionChannelProfile"("assessmentId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerRetentionAssessment_smeProfileId_key" ON "CustomerRetentionAssessment"("smeProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerRetentionAssessment_assessmentId_key" ON "CustomerRetentionAssessment"("assessmentId");

-- CreateIndex
CREATE UNIQUE INDEX "subscribers_email_key" ON "subscribers"("email");

-- AddForeignKey
ALTER TABLE "SmeProfile" ADD CONSTRAINT "SmeProfile_sme_id_fkey" FOREIGN KEY ("sme_id") REFERENCES "Sme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DigitalCustomerAssessment" ADD CONSTRAINT "DigitalCustomerAssessment_smeProfileId_fkey" FOREIGN KEY ("smeProfileId") REFERENCES "SmeProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcquisitionChannelProfile" ADD CONSTRAINT "AcquisitionChannelProfile_smeProfileId_fkey" FOREIGN KEY ("smeProfileId") REFERENCES "SmeProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcquisitionChannelProfile" ADD CONSTRAINT "AcquisitionChannelProfile_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "DigitalCustomerAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerRetentionAssessment" ADD CONSTRAINT "CustomerRetentionAssessment_smeProfileId_fkey" FOREIGN KEY ("smeProfileId") REFERENCES "SmeProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerRetentionAssessment" ADD CONSTRAINT "CustomerRetentionAssessment_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "DigitalCustomerAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
